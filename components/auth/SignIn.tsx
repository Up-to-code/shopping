"use client"

import { SignIn } from "@clerk/nextjs"

export default function SignInForm() {
  return (
    <div className="flex justify-center py-8">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: 
              "bg-primary hover:bg-primary/90 text-white",
            card: 
              "bg-white shadow-xl rounded-xl border border-gray-100",
            headerTitle: 
              "text-2xl font-bold text-gray-900",
            headerSubtitle: 
              "text-gray-600",
            formFieldLabel: 
              "text-gray-700 font-medium",
            formFieldInput: 
              "border-gray-300 focus:border-primary focus:ring-primary rounded-lg",
            footerActionLink: 
              "text-primary hover:text-primary/80",
            dividerLine: 
              "bg-gray-200",
            dividerText: 
              "text-gray-500",
            socialButtonsBlockButton: 
              "border border-gray-300 hover:bg-gray-50 text-gray-600 hover:text-gray-700",
            socialButtonsBlockButtonText: 
              "font-medium",
            formFieldWarningText: 
              "text-yellow-600",
            formFieldErrorText: 
              "text-red-600",
            alert: 
              "bg-red-50 text-red-600 border border-red-100",
          },
        }}
        path="/login"
        routing="path"
        signUpUrl="/register"
        redirectUrl="/"
      />
    </div>
  )
}

