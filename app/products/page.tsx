"use client"

import { useEffect, useState } from "react"
import axios from "axios"

interface Product {
  id: string
  name: string
  nameAr: string
  description: string
  descriptionAr: string
  price: number
  category: {
    id: string
    name: string
    nameAr: string
  }
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/api/products?page=${page}&limit=10`)
        setProducts(response.data.products)
        setTotalPages(response.data.pages)
      } catch (error) {
        console.error("Failed to fetch products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [page])

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <h3 className="text-lg">{product.nameAr}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-600">{product.descriptionAr}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        <button 
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button 
          onClick={() => setPage(p => p + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
} 