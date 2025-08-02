'use client'

import { useState, useEffect } from 'react'
import { Search, Filter, X, ArrowLeft } from 'lucide-react'
import ProductCard from './ProductCard'
import { products } from '@/data/products'
import { Product } from '@/types'

interface SearchResultsProps {
  query: string
  onClose: () => void
  onAddToCart: (product: Product, quantity: number) => void
}

export default function SearchResults({ query, onClose, onAddToCart }: SearchResultsProps) {
  const [searchQuery, setSearchQuery] = useState(query)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setSearchQuery(query)
    if (query.trim()) {
      setIsLoading(true)
      // Simulate search delay
      setTimeout(() => {
        const results = products.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.brand.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredProducts(results)
        setIsLoading(false)
      }, 300)
    } else {
      setFilteredProducts([])
    }
  }, [query])

  return (
    <div className="fixed inset-0 bg-white z-50">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b px-4 py-3">
        <div className="flex items-center space-x-3">
          <button onClick={onClose} className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              autoFocus
            />
          </div>
          <button className="p-2">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="p-4">
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Found {filteredProducts.length} results for "{query}"
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        ) : searchQuery.trim() ? (
          <div className="flex flex-col items-center justify-center py-12 px-4">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500 text-center mb-6">
              Try searching with different keywords or browse our categories
            </p>
            <button 
              onClick={onClose}
              className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
            >
              Browse Categories
            </button>
          </div>
        ) : (
          <div className="p-4">
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {['Milk', 'Bread', 'Eggs', 'Tomatoes', 'Onions', 'Apples', 'Bananas', 'Potatoes'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Quick Categories</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Fruits & Vegetables', 'Dairy & Bread', 'Meat & Fish', 'Beverages'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSearchQuery(category)}
                    className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors text-left"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 