import { NextResponse } from "next/server"
 import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"

export async function GET(req: Request) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const favorites = await db.favorite.findMany({
      where: { userId },
      include: {
        product: {
          include: {
            category: true,
          },
        },
      },
    })

    return NextResponse.json(favorites)
  } catch (error) {
    console.error("[FAVORITES_GET]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await req.json()
    const { productId } = body

    const existingFavorite = await db.favorite.findFirst({
      where: {
        userId,
        productId,
      },
    })

    if (existingFavorite) {
      await db.favorite.delete({
        where: { id: existingFavorite.id },
      })
      return NextResponse.json({ message: "Removed from favorites" })
    }

    const favorite = await db.favorite.create({
      data: {
        userId,
        productId,
      },
    })

    return NextResponse.json(favorite)
  } catch (error) {
    console.error("[FAVORITES_POST]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 