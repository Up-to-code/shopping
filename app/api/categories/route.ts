import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"

export async function GET() {
  try {
    const categories = await db.category.findMany({
      include: {
        _count: {
          select: {
            products: true,
          },
        },
      },
    })

    return NextResponse.json(categories)
  } catch (error) {
    console.error("[CATEGORIES_GET]", error)
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
    const category = await db.category.create({
      data: {
        ...body,
      },
    })

    return NextResponse.json(category)
  } catch (error) {
    console.error("[CATEGORIES_POST]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 