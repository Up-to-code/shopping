import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import ProductCard from "@/components/ProductCard"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function CategoryPage({ params }: { params: { id: string } }) {
  // This is mock data. In a real application, you would fetch this based on the category ID
  const category = {
    id: params.id,
    name: "الإلكترونيات",
    description: "استكشف أحدث المنتجات الإلكترونية وأكثرها تطوراً",
  }

  const products = [
    {
      id: 101,
      name: "سماعات لاسلكية فاخرة مع إلغاء الضوضاء",
      price: 199,
      oldPrice: 299,
      discount: 33,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 102,
      name: "هاتف ذكي بشاشة AMOLED وكاميرا احترافية",
      price: 1999,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 103,
      name: "ساعة ذكية مقاومة للماء مع قياس النبض والأكسجين",
      price: 499,
      oldPrice: 699,
      discount: 28,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 104,
      name: "مكبر صوت بلوتوث مع إضاءة LED وصوت محيطي",
      price: 299,
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
      <p className="text-gray-600 mb-8">{category.description}</p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">تصفية النتائج</h2>
            <div className="mb-4">
              <h3 className="font-medium mb-2">السعر</h3>
              <div className="flex gap-2">
                <Input type="number" placeholder="من" className="w-1/2" />
                <Input type="number" placeholder="إلى" className="w-1/2" />
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-medium mb-2">العلامة التجارية</h3>
              <div className="space-y-2">
                {["سامسونج", "آبل", "سوني", "هواوي"].map((brand) => (
                  <div key={brand} className="flex items-center">
                    <Checkbox id={brand} />
                    <label
                      htmlFor={brand}
                      className="mr-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <Button className="w-full">تطبيق الفلتر</Button>
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mx-1">
              <ArrowRight className="ml-2 h-4 w-4" /> السابق
            </Button>
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button variant="outline" className="mx-1">
              2
            </Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="mx-1">
              التالي <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

