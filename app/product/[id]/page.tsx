import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Minus, Plus, Heart, Share2 } from "lucide-react"

export default function ProductPage({ params }: { params: { id: string } }) {
  // This is mock data. In a real application, you would fetch this based on the product ID
  const product = {
    id: params.id,
    name: "سماعات لاسلكية فاخرة مع إلغاء الضوضاء",
    price: 199,
    oldPrice: 299,
    discount: 33,
    rating: 4.5,
    reviews: 120,
    description:
      "استمتع بتجربة صوتية استثنائية مع هذه السماعات اللاسلكية الفاخرة المزودة بتقنية إلغاء الضوضاء المتطورة.",
    features: [
      "تقنية إلغاء الضوضاء النشطة",
      "بطارية تدوم حتى 30 ساعة",
      "جودة صوت فائقة الوضوح",
      "تصميم مريح للاستخدام لفترات طويلة",
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div className="flex justify-center mt-4 gap-4">
            {product.images.map((image, index) => (
              <Image
                key={index}
                src={image || "/placeholder.svg"}
                alt={`${product.name} - صورة ${index + 1}`}
                width={100}
                height={100}
                className="w-24 h-24 rounded-md shadow cursor-pointer"
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="mr-2 text-sm text-gray-600">({product.reviews} تقييم)</span>
          </div>
          <div className="mb-4">
            <span className="text-3xl font-bold text-[#213555]">{product.price} ر.س</span>
            {product.oldPrice && (
              <span className="mr-2 text-lg text-gray-500 line-through">{product.oldPrice} ر.س</span>
            )}
            {product.discount && <span className="mr-2 text-sm text-green-600">خصم {product.discount}%</span>}
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">المميزات:</h3>
            <ul className="list-disc list-inside space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center mb-6">
            <Button variant="outline" size="icon">
              <Minus className="h-4 w-4" />
            </Button>
            <Input type="number" defaultValue="1" className="w-20 mx-2 text-center" />
            <Button variant="outline" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-4 mb-6">
            <Button className="flex-1 bg-[#213555] hover:bg-[#3E5879]">أضف إلى السلة</Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="mt-12">
        <TabsList>
          <TabsTrigger value="description">الوصف</TabsTrigger>
          <TabsTrigger value="specifications">المواصفات</TabsTrigger>
          <TabsTrigger value="reviews">التقييمات</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-4">
          <p className="text-gray-600">
            {product.description}
            {/* Add more detailed description here */}
          </p>
        </TabsContent>
        <TabsContent value="specifications" className="mt-4">
          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-semibold">العلامة التجارية</td>
                <td className="py-2">Brand X</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">نوع التوصيل</td>
                <td className="py-2">لاسلكي (بلوتوث)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">عمر البطارية</td>
                <td className="py-2">حتى 30 ساعة</td>
              </tr>
              {/* Add more specifications here */}
            </tbody>
          </table>
        </TabsContent>
        <TabsContent value="reviews" className="mt-4">
          {/* Add review component here */}
          <p className="text-gray-600">لا توجد تقييمات بعد. كن أول من يقيم هذا المنتج!</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

