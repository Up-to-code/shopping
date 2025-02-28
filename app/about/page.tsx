import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">من نحن</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="صورة عن الشركة"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">قصتنا</h2>
          <p className="text-gray-600 mb-4">
            نحن شركة رائدة في مجال التجارة الإلكترونية، تأسست في عام 2020 بهدف توفير تجربة تسوق فريدة ومميزة لعملائنا في
            المملكة العربية السعودية والشرق الأوسط.
          </p>
          <p className="text-gray-600 mb-4">
            نسعى جاهدين لتقديم أفضل المنتجات بأسعار تنافسية، مع التركيز على جودة الخدمة وسرعة التوصيل. نحن نؤمن بأن رضا
            العملاء هو مفتاح نجاحنا، ولذلك نعمل باستمرار على تحسين خدماتنا وتوسيع نطاق منتجاتنا.
          </p>
          <h2 className="text-2xl font-semibold mb-4 mt-8">قيمنا</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>الجودة: نقدم فقط المنتجات عالية الجودة لعملائنا.</li>
            <li>الشفافية: نؤمن بالصدق والوضوح في جميع تعاملاتنا.</li>
            <li>الابتكار: نسعى دائمًا لتطوير خدماتنا وتقديم حلول مبتكرة.</li>
            <li>خدمة العملاء: نضع رضا العملاء في صميم كل ما نقوم به.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

