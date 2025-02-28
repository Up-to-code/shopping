import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, X } from "lucide-react"

export default function CartPage() {
  // This is mock data. In a real application, you would fetch this from your cart state or API
  const cartItems = [
    {
      id: 101,
      name: "سماعات لاسلكية فاخرة مع إلغاء الضوضاء",
      price: 199,
      quantity: 1,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 102,
      name: "هاتف ذكي بشاشة AMOLED وكاميرا احترافية",
      price: 1999,
      quantity: 1,
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 20
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">سلة التسوق</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md"
              />
              <div className="flex-1 mr-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.price} ر.س</p>
              </div>
              <div className="flex items-center">
                <Button variant="outline" size="icon">
                  <Minus className="h-4 w-4" />
                </Button>
                <Input type="number" value={item.quantity} className="w-16 mx-2 text-center" readOnly />
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="ghost" size="icon" className="mr-4">
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">ملخص الطلب</h2>
            <div className="flex justify-between mb-2">
              <span>المجموع الفرعي:</span>
              <span>{subtotal} ر.س</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>الشحن:</span>
              <span>{shipping} ر.س</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4">
              <span>الإجمالي:</span>
              <span>{total} ر.س</span>
            </div>
            <Button className="w-full mt-6 bg-[#213555] hover:bg-[#3E5879]">
              <Link href="/checkout">متابعة الشراء</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

