import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white border-t py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-bold text-xl mb-6">خدمة العملاء</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#213555] transition-colors">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-[#213555] transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-[#213555] transition-colors">
                  سياسة الإرجاع
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-[#213555] transition-colors">
                  سياسة الشحن
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-6">عن المتجر</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#213555] transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-[#213555] transition-colors">
                  وظائف
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-[#213555] transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-[#213555] transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-6">حسابي</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/login" className="text-gray-600 hover:text-[#213555] transition-colors">
                  تسجيل الدخول
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-600 hover:text-[#213555] transition-colors">
                  إنشاء حساب
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-gray-600 hover:text-[#213555] transition-colors">
                  طلباتي
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-gray-600 hover:text-[#213555] transition-colors">
                  قائمة الرغبات
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-6">تواصل معنا</h3>
            <p className="text-gray-600 mb-6">اشترك في نشرتنا الإخبارية للحصول على أحدث العروض والخصومات</p>
            <div className="flex">
              <Input placeholder="البريد الإلكتروني" className="rounded-l-none py-6" />
              <Button className="rounded-r-none bg-[#213555] hover:bg-[#3E5879] px-6">اشترك</Button>
            </div>
            <div className="flex gap-4 mt-6">
              {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                <Link
                  key={social}
                  href={`/${social}`}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                >
                  <Image src={`/placeholder.svg?height=20&width=20`} alt={social} width={20} height={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-gray-500">
          <p className="text-lg">© 2025 متجر. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

