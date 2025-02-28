import Link from "next/link"
import Image from "next/image"
import { Star, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
    >
      <div className="relative">
        <div className="h-64 overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {product.discount && (
          <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 px-2 py-1">خصم {product.discount}%</Badge>
        )}
        <button className="absolute top-3 right-3 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-white transition-colors">
          <Heart size={18} />
        </button>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={16} className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
          ))}
          <span className="text-gray-500 text-sm mr-1">(4.0)</span>
        </div>
        <h3 className="text-lg font-medium line-clamp-2 mb-2 group-hover:text-[#213555] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-3">
          <span className="font-bold text-xl text-[#213555]">{product.price} ر.س</span>
          {product.oldPrice && <span className="text-gray-500 text-sm line-through">{product.oldPrice} ر.س</span>}
        </div>
        <Button className="w-full mt-4 bg-[#213555] hover:bg-[#3E5879]">أضف للسلة</Button>
      </div>
    </Link>
  )
}

