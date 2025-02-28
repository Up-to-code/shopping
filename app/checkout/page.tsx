import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">إتمام الطلب</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">معلومات الشحن</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="الاسم الأول" />
              <Input placeholder="اسم العائلة" />
              <Input placeholder="رقم الهاتف" />
              <Input placeholder="البريد الإلكتروني" />
              <Input placeholder="العنوان" className="md:col-span-2" />
              <Input placeholder="المدينة" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="المنطقة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="riyadh">الرياض</SelectItem>
                  <SelectItem value="jeddah">جدة</SelectItem>
                  <SelectItem value="dammam">الدمام</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="الرمز البريدي" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">طريقة الدفع</h2>
            <RadioGroup defaultValue="card">
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">بطاقة ائتمان</Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal">PayPal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod">الدفع عند الاستلام</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">ملخص الطلب</h2>
            <div className="flex justify-between mb-2">
              <span>المجموع الفرعي:</span>
              <span>2198 ر.س</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>الشحن:</span>
              <span>20 ر.س</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4">
              <span>الإجمالي:</span>
              <span>2218 ر.س</span>
            </div>
            <Button className="w-full mt-6 bg-[#213555] hover:bg-[#3E5879]">تأكيد الطلب</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

