import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">اتصل بنا</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <form>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  الاسم
                </label>
                <Input id="name" placeholder="أدخل اسمك" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  البريد الإلكتروني
                </label>
                <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  الموضوع
                </label>
                <Input id="subject" placeholder="أدخل موضوع الرسالة" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  الرسالة
                </label>
                <Textarea id="message" placeholder="اكتب رسالتك هنا" rows={5} />
              </div>
              <Button type="submit" className="w-full bg-[#213555] hover:bg-[#3E5879]">
                إرسال الرسالة
              </Button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">معلومات الاتصال</h2>
          <div className="space-y-4">\

