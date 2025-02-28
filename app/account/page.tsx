import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">حسابي</h1>
      <Tabs defaultValue="profile">
        <TabsList className="mb-8">
          <TabsTrigger value="profile">الملف الشخصي</TabsTrigger>
          <TabsTrigger value="orders">طلباتي</TabsTrigger>
          <TabsTrigger value="addresses">العناوين</TabsTrigger>
          <TabsTrigger value="password">تغيير كلمة المرور</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">الملف الشخصي</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="الاسم الأول" defaultValue="محمد" />
              <Input placeholder="اسم العائلة" defaultValue="أحمد" />
              <Input placeholder="البريد الإلكتروني" defaultValue="mohammed@example.com" />
              <Input placeholder="رقم الهاتف" defaultValue="0501234567" />
            </div>
            <Button className="mt-6 bg-[#213555] hover:bg-[#3E5879]">حفظ التغييرات</Button>
          </div>
        </TabsContent>

        <TabsContent value="orders">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">طلباتي</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-right py-2">رقم الطلب</th>
                  <th className="text-right py-2">التاريخ</th>
                  <th className="text-right py-2">الحالة</th>
                  <th className="text-right py-2">الإجمالي</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">#12345</td>
                  <td className="py-2">2025/02/28</td>
                  <td className="py-2">تم التسليم</td>
                  <td className="py-2">299 ر.س</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">#12346</td>
                  <td className="py-2">2025/03/05</td>
                  <td className="py-2">قيد التنفيذ</td>
                  <td className="py-2">599 ر.س</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="addresses">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">العناوين</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">العنوان الرئيسي</h3>
                <p>شارع الملك فهد، حي الملز</p>
                <p>الرياض، 12345</p>
                <p>المملكة العربية السعودية</p>
                <Button variant="outline" className="mt-2">
                  تعديل
                </Button>
              </div>
              <div className="border p-4 rounded-lg flex items-center justify-center">
                <Button variant="outline">إضافة عنوان جديد</Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="password">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">تغيير كلمة المرور</h2>
            <div className="space-y-4">
              <Input type="password" placeholder="كلمة المرور الحالية" />
              <Input type="password" placeholder="كلمة المرور الجديدة" />
              <Input type="password" placeholder="تأكيد كلمة المرور الجديدة" />
            </div>
            <Button className="mt-6 bg-[#213555] hover:bg-[#3E5879]">تغيير كلمة المرور</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

