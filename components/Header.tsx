"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, User, Heart, Bell, Menu } from "lucide-react"
import { useUser, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { isSignedIn } = useUser()

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 lg:gap-8">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="space-y-4">
                  <Link href="/category/electronics" className="block py-2 text-gray-600 hover:text-primary">
                    الإلكترونيات
                  </Link>
                  <Link href="/category/fashion" className="block py-2 text-gray-600 hover:text-primary">
                    الأزياء
                  </Link>
                  <Link href="/category/home" className="block py-2 text-gray-600 hover:text-primary">
                    المنزل
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            
            <Link href="/" className="font-bold text-2xl text-primary">
              متجر
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/category/electronics" className="text-gray-600 hover:text-primary transition-colors">
                الإلكترونيات
              </Link>
              <Link href="/category/fashion" className="text-gray-600 hover:text-primary transition-colors">
                الأزياء
              </Link>
              <Link href="/category/home" className="text-gray-600 hover:text-primary transition-colors">
                المنزل
              </Link>
            </nav>
          </div>

          <div className="flex-1 max-w-xl mx-4 hidden md:block">
            <div className="relative">
              <Input
                className="w-full pl-12 bg-gray-50 border-gray-200 focus:bg-white"
                placeholder="ابحث عن منتجات..."
              />
              <Search className="absolute right-4 top-3 text-gray-400" size={18} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart size={20} className="text-gray-600" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-primary">
                  3
                </Badge>
              </Button>
            </Link>

            <SignedIn>
              <Link href="/favorites">
                <Button variant="ghost" size="icon">
                  <Heart size={20} className="text-gray-600" />
                </Button>
              </Link>
              
              <Link href="/notifications">
                <Button variant="ghost" size="icon">
                  <Bell size={20} className="text-gray-600" />
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="cursor-pointer">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/account" className="flex items-center gap-2">
                      <User size={16} />
                      <span>حسابي</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/orders" className="flex items-center gap-2">
                      <ShoppingCart size={16} />
                      <span>طلباتي</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/logout" className="flex items-center gap-2 text-red-600 hover:text-red-700">
                      تسجيل الخروج
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SignedIn>

            <SignedOut>
              <Link href="/login">
                <Button variant="default" size="sm">
                  تسجيل الدخول
                </Button>
              </Link>
            </SignedOut>
          </div>
        </div>
        
        <div className="mt-3 md:hidden">
          <Input
            className="w-full pl-12 bg-gray-50 border-gray-200 focus:bg-white"
            placeholder="ابحث عن منتجات..."
          />
          <Search className="absolute right-8 top-[4.2rem] text-gray-400" size={18} />
        </div>
      </div>
    </header>
  )
}

