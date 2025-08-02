'use client'

import { useState } from 'react'
import { ArrowLeft, Filter, SortAsc } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { categories, products } from '@/data/products'
import { Product } from '@/types'
import ProductCard from '@/components/ProductCard'
import Header from '@/components/Header'

interface CartItem {
  product: Product
  quantity: number
}

export default function CategoryPage() {
  const params = useParams()
  const router = useRouter()
  const categoryId = (params.id as string) || ''
  
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)
  const [showSidebar, setShowSidebar] = useState(false)
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name')

  const category = categories.find(c => c.id === categoryId)
  const categoryProducts = products.filter(p => p.category === categoryId)
  
  // Get unique subcategories
  const subcategories = Array.from(new Set(categoryProducts.map(p => p.subcategory).filter(Boolean))) as string[]

  const filteredProducts = selectedSubcategory 
    ? categoryProducts.filter(p => p.subcategory === selectedSubcategory)
    : categoryProducts

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price
      case 'rating':
        return b.rating - a.rating
      default:
        return a.name.localeCompare(b.name)
    }
  })

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id)
      if (existingItem) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        return [...prev, { product, quantity }]
      }
    })
  }

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.product.id !== productId))
    } else {
      setCartItems(prev => prev.map(item => 
        item.product.id === productId 
          ? { ...item, quantity }
          : item
      ))
    }
  }

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId))
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header 
          cartItems={cartItems}
          onUpdateCartQuantity={handleUpdateCartQuantity}
          onRemoveFromCart={handleRemoveFromCart}
        />
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Category not found</h2>
            <button 
              onClick={() => router.push('/')}
              className="bg-teal-600 text-white px-4 py-2 rounded-lg"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItems={cartItems}
        onUpdateCartQuantity={handleUpdateCartQuantity}
        onRemoveFromCart={handleRemoveFromCart}
      />
      
      {/* Mobile backdrop */}
      {showSidebar && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      <div className="flex">
        {/* Sidebar - Hidden on mobile, shown on desktop */}
        <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 lg:shadow-none lg:block lg:z-0`}>
          <div className="h-full flex flex-col">
            {/* Sidebar Header */}
            <div className="p-4 border-b lg:hidden">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Categories</h3>
                <button 
                  onClick={() => setShowSidebar(false)}
                  className="p-1"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Category List */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4">
                <h4 className="font-medium text-gray-900 mb-3">All Categories</h4>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        router.push(`/category/${cat.id}`)
                        setShowSidebar(false)
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        cat.id === categoryId
                          ? 'bg-teal-50 text-teal-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{cat.icon}</span>
                        <span>{cat.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Subcategories */}
              {subcategories.length > 0 && (
                <div className="p-4 border-t">
                  <h4 className="font-medium text-gray-900 mb-3">Subcategories</h4>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedSubcategory(null)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedSubcategory === null
                          ? 'bg-teal-50 text-teal-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      All {category.name}
                    </button>
                    {subcategories.map((subcat) => (
                      <button
                        key={subcat}
                        onClick={() => setSelectedSubcategory(subcat)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedSubcategory === subcat
                            ? 'bg-teal-50 text-teal-700 font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {subcat}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Mobile Header */}
          <div className="lg:hidden bg-white border-b px-4 py-3">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setShowSidebar(true)}
                className="p-2"
              >
                <Filter className="w-5 h-5" />
              </button>
              <h1 className="text-lg font-semibold text-gray-900">{category.name}</h1>
              <button className="p-2">
                <SortAsc className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:block bg-white border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{category.name}</h1>
                <p className="text-gray-600">{categoryProducts.length} products available</p>
              </div>
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'rating')}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="p-4">
            {selectedSubcategory && (
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">{selectedSubcategory}</h2>
                  <button
                    onClick={() => setSelectedSubcategory(null)}
                    className="text-teal-600 text-sm hover:text-teal-700"
                  >
                    View All
                  </button>
                </div>
              </div>
            )}

            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">Try selecting a different subcategory</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 