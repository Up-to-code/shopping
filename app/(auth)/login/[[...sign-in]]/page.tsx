import SignInForm from "@/components/auth/SignIn"

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-center pt-8">تسجيل الدخول</h1>
      <SignInForm />
    </div>
  )
} 