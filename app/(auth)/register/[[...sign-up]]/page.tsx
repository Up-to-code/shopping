import SignUpForm from "@/components/auth/SignUp"

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-center pt-8">إنشاء حساب جديد</h1>
      <SignUpForm />
    </div>
  )
} 