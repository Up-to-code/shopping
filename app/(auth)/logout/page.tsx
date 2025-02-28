"use client"

import { SignOutButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

export default function LogoutPage() {
  const router = useRouter()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">تسجيل الخروج</h1>
        <p className="text-gray-600 mb-6 text-center">هل أنت متأكد أنك تريد تسجيل الخروج؟</p>
        <div className="flex gap-4 justify-center">
          <SignOutButton redirectUrl="/">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors">
              تسجيل الخروج
            </button>
          </SignOutButton>
          <button 
            onClick={() => router.back()}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-md transition-colors"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  )
} 