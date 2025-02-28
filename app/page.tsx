import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, User, Heart, Bell, ChevronDown, Menu, Star, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" dir="rtl">


      <main className="flex-1">
        {/* Ramadan Hero Banner */}
        <div className="container mx-auto px-4 py-6">
          <div className="bg-gradient-to-r from-[#213555] to-[#3E5879] rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=1400"
                alt="رمضان جانا وفرحتنا بقدومه"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#213555]/70 to-transparent flex flex-col justify-center px-8 md:px-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">رمضان جانا</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">وفرحتنا بقدومه</p>
                <Button size="lg" className="w-fit text-lg bg-[#3E5879] hover:bg-[#213555] border-none">
                  تسوق الآن
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">تسوق حسب الفئة</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:bg-blue-200 transition-colors">
                  <Image
                    src={`/placeholder.svg?height=64&width=64`}
                    alt={category.name}
                    width={64}
                    height={64}
                    className="w-10 h-10"
                  />
                </div>
                <span className="text-base font-medium text-center block">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Flash Deals */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-[#3E5879] to-[#5A7A9F] rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-[250px]">
              <Image
                src="/placeholder.svg?height=250&width=1400"
                alt="عروض خصم حتى 70% على الإلكترونيات"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#3E5879]/80 to-transparent flex flex-col justify-center px-8 md:px-16">
                <Badge className="mb-4 bg-white text-[#213555] hover:bg-gray-100 text-base py-1 px-4">
                  عروض محدودة
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">خصم حتى 70%</h2>
                <p className="text-xl text-white/90 mb-6">على الإلكترونيات والأجهزة المنزلية</p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-white text-[#213555] hover:bg-gray-100">
                    تسوق الآن
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    عرض المزيد
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-8">منتجات مميزة</h2>

          <Tabs defaultValue="electronics">
            <TabsList className="bg-gray-100 p-1 rounded-full mb-8">
              <TabsTrigger
                value="electronics"
                className="rounded-full px-6 py-2 data-[state=active]:bg-[#213555] data-[state=active]:text-white"
              >
                إلكترونيات
              </TabsTrigger>
              <TabsTrigger
                value="fashion"
                className="rounded-full px-6 py-2 data-[state=active]:bg-[#213555] data-[state=active]:text-white"
              >
                أزياء
              </TabsTrigger>
              <TabsTrigger
                value="home"
                className="rounded-full px-6 py-2 data-[state=active]:bg-[#213555] data-[state=active]:text-white"
              >
                المنزل
              </TabsTrigger>
              <TabsTrigger
                value="beauty"
                className="rounded-full px-6 py-2 data-[state=active]:bg-[#213555] data-[state=active]:text-white"
              >
                الجمال
              </TabsTrigger>
            </TabsList>

            <TabsContent value="electronics" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {electronicsProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <Button variant="outline" size="lg" className="gap-2">
                  عرض المزيد
                  <ArrowRight size={18} />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="fashion" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {fashionProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <Button variant="outline" size="lg" className="gap-2">
                  عرض المزيد
                  <ArrowRight size={18} />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="home" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {homeProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <Button variant="outline" size="lg" className="gap-2">
                  عرض المزيد
                  <ArrowRight size={18} />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="beauty" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {beautyProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <Button variant="outline" size="lg" className="gap-2">
                  عرض المزيد
                  <ArrowRight size={18} />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Promotional Banners */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-[#213555] to-[#3E5879] rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-[250px]">
                <Image src="/placeholder.svg?height=250&width=600" alt="منتجات رمضانية" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#213555]/70 to-transparent flex flex-col justify-center px-8">
                  <h3 className="text-2xl font-bold text-white mb-2">منتجات رمضانية</h3>
                  <p className="text-white/90 mb-4">تسوق مستلزمات الشهر الكريم</p>
                  <Button className="w-fit">تسوق الآن</Button>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#3E5879] to-[#5A7A9F] rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-[250px]">
                <Image src="/placeholder.svg?height=250&width=600" alt="أزياء العيد" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#3E5879]/70 to-transparent flex flex-col justify-center px-8">
                  <h3 className="text-2xl font-bold text-white mb-2">أزياء العيد</h3>
                  <p className="text-white/90 mb-4">تشكيلة جديدة من الملابس والأحذية</p>
                  <Button className="w-fit bg-white text-[#213555] hover:bg-gray-100">تسوق الآن</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Food Products */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">المنتجات الغذائية</h2>
            <Link
              href="/category/food"
              className="text-[#213555] text-lg font-medium hover:text-[#3E5879] transition-colors flex items-center gap-2"
            >
              عرض الكل
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {foodProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Clothing Products */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">الملابس</h2>
            <Link
              href="/category/clothing"
              className="text-[#213555] text-lg font-medium hover:text-[#3E5879] transition-colors flex items-center gap-2"
            >
              عرض الكل
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {clothingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* App Download */}
        <div className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-[#3E5879] to-[#5A7A9F] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-xl">
            <div className="text-white text-center md:text-right mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">حمل تطبيق متجر الآن</h2>
              <p className="text-xl mb-8 text-white/90">تسوق بسهولة من هاتفك واحصل على عروض حصرية وخصومات إضافية</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-black text-white border-white hover:bg-gray-900 gap-2 px-6">
                  <Image src="/placeholder.svg?height=24&width=24" alt="App Store" width={24} height={24} />
                  App Store
                </Button>
                <Button size="lg" className="bg-black text-white border-white hover:bg-gray-900 gap-2 px-6">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Google Play" width={24} height={24} />
                  Google Play
                </Button>
              </div>
            </div>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="تطبيق متجر"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
    </div>
  )
}
// Product Card Component
function ProductCard({ product }: { product: any }) {
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

// Sample Data
const categories = [
  { id: 1, name: "إلكترونيات" },
  { id: 2, name: "أزياء" },
  { id: 3, name: "المنزل" },
  { id: 4, name: "الجمال" },
  { id: 5, name: "الأطفال" },
  { id: 6, name: "الرياضة" },
  { id: 7, name: "البقالة" },
  { id: 8, name: "الصحة" },
]

const electronicsProducts = [
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

const fashionProducts = [
  { id: 201, name: "قميص رجالي كاجوال بأكمام طويلة", price: 129, image: "/placeholder.svg?height=400&width=400" },
  {
    id: 202,
    name: "فستان نسائي أنيق مناسب للحفلات والمناسبات",
    price: 199,
    oldPrice: 249,
    discount: 20,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 203,
    name: "حذاء رياضي مريح للجري والتمارين اليومية",
    price: 249,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 204,
    name: "حقيبة يد نسائية فاخرة من الجلد الطبيعي",
    price: 179,
    oldPrice: 229,
    discount: 22,
    image: "/placeholder.svg?height=400&width=400",
  },
]

const homeProducts = [
  {
    id: 301,
    name: "طقم أواني من الستانلس ستيل مقاوم للحرارة",
    price: 349,
    oldPrice: 499,
    discount: 30,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 302,
    name: "مكنسة كهربائية روبوتية ذكية مع تطبيق للتحكم",
    price: 599,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 303,
    name: "خلاط كهربائي متعدد السرعات مع وعاء زجاجي",
    price: 199,
    oldPrice: 249,
    discount: 20,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 304,
    name: "مصباح طاولة LED قابل للتعديل مع شاحن لاسلكي",
    price: 129,
    image: "/placeholder.svg?height=400&width=400",
  },
]

const beautyProducts = [
  { id: 401, name: "عطر نسائي فاخر بتركيبة فرنسية أصلية", price: 299, image: "/placeholder.svg?height=400&width=400" },
  {
    id: 402,
    name: "كريم مرطب للبشرة مع فيتامين C وحماية من الشمس",
    price: 79,
    oldPrice: 99,
    discount: 20,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 403,
    name: "مجموعة مكياج احترافية متكاملة مع حقيبة أنيقة",
    price: 199,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 404,
    name: "مستحضر العناية بالشعر لإصلاح التلف وتغذية عميقة",
    price: 129,
    oldPrice: 159,
    discount: 19,
    image: "/placeholder.svg?height=400&width=400",
  },
]

const foodProducts = [
  { id: 501, name: "تمر سكري فاخر من القصيم", price: 59, image: "/placeholder.svg?height=400&width=400" },
  { id: 502, name: "قهوة عربية فاخرة مع الهيل والزعفران", price: 45, image: "/placeholder.svg?height=400&width=400" },
  {
    id: 503,
    name: "عسل طبيعي 100% من جبال السراة",
    price: 89,
    oldPrice: 119,
    discount: 25,
    image: "/placeholder.svg?height=400&width=400",
  },
  { id: 504, name: "مكسرات مشكلة محمصة طازجة", price: 79, image: "/placeholder.svg?height=400&width=400" },
  { id: 505, name: "شاي أخضر عضوي مع النعناع", price: 29, image: "/placeholder.svg?height=400&width=400" },
  {
    id: 506,
    name: "زيت زيتون بكر ممتاز عصرة أولى",
    price: 69,
    oldPrice: 89,
    discount: 22,
    image: "/placeholder.svg?height=400&width=400",
  },
]

const clothingProducts = [
  { id: 601, name: "عباية نسائية عصرية بتصميم أنيق", price: 299, image: "/placeholder.svg?height=400&width=400" },
  {
    id: 602,
    name: "ثوب رجالي فاخر مع تطريز يدوي",
    price: 199,
    oldPrice: 249,
    discount: 20,
    image: "/placeholder.svg?height=400&width=400",
  },
  { id: 603, name: "حجاب حرير ناعم بألوان متعددة", price: 79, image: "/placeholder.svg?height=400&width=400" },
  { id: 604, name: "بنطلون جينز عالي الجودة", price: 149, image: "/placeholder.svg?height=400&width=400" },
  {
    id: 605,
    name: "قميص رسمي أنيق للمناسبات",
    price: 129,
    oldPrice: 169,
    discount: 24,
    image: "/placeholder.svg?height=400&width=400",
  },
  { id: 606, name: "طقم رياضي مريح للتمارين اليومية", price: 219, image: "/placeholder.svg?height=400&width=400" },
]

