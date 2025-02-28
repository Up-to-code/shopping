import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"
import { Prisma } from "@prisma/client"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const categoryId = searchParams.get("categoryId")
    const query = searchParams.get("query")
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "10")
    const skip = (page - 1) * limit

    const where = {
      ...(categoryId && { categoryId }),
      ...(query && {
        OR: [
          { name: { contains: query, mode: Prisma.QueryMode.insensitive } },
          { nameAr: { contains: query, mode: Prisma.QueryMode.insensitive } },
          { description: { contains: query, mode: Prisma.QueryMode.insensitive } },
          { descriptionAr: { contains: query, mode: Prisma.QueryMode.insensitive } },
        ],
      }),
    }

    const [products, total] = await Promise.all([
      db.product.findMany({
        where,
        skip,
        take: limit,
        include: {
          category: true,
        },
      }),
      db.product.count({ where }),
    ])

    return NextResponse.json({
      products,
      total,
      pages: Math.ceil(total / limit),
    })
  } catch (error) {
    console.error("[PRODUCTS_GET]", error)
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
    const product = await db.product.create({
      data: {
        ...body,
      },
    })

    return NextResponse.json(product)
  } catch (error) {
    console.error("[PRODUCTS_POST]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 