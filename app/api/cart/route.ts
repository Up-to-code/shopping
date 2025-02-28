import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"

export async function GET(req: Request) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const cart = await db.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    })

    return NextResponse.json(cart)
  } catch (error) {
    console.error("[CART_GET]", error)
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
    const { productId, quantity } = body

    let cart = await db.cart.findUnique({
      where: { userId },
      include: { items: true },
    })

    if (!cart) {
      cart = await db.cart.create({
        data: {
          userId,
          items: {
            create: {
              productId,
              quantity,
            },
          },
        },
        include: { items: true },
      })
    } else {
      const existingItem = cart.items.find(item => item.productId === productId)

      if (existingItem) {
        await db.cartItem.update({
          where: { id: existingItem.id },
          data: { quantity: existingItem.quantity + quantity },
        })
      } else {
        await db.cartItem.create({
          data: {
            cartId: cart.id,
            productId,
            quantity,
          },
        })
      }

      cart = await db.cart.findUnique({
        where: { userId },
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      })
    }

    return NextResponse.json(cart)
  } catch (error) {
    console.error("[CART_POST]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const itemId = searchParams.get("itemId")

    if (!itemId) {
      return new NextResponse("Item ID is required", { status: 400 })
    }

    await db.cartItem.delete({
      where: { id: itemId },
    })

    const cart = await db.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    })

    return NextResponse.json(cart)
  } catch (error) {
    console.error("[CART_DELETE]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 