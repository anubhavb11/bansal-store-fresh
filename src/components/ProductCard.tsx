'use client'

import { Product } from '@/types'
import { formatPrice, formatWeight } from '@/lib/utils'
import { Star, Plus, Minus, Heart } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product, quantity: number) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {
    if (quantity === 0) {
      setQuantity(1)
      onAddToCart?.(product, 1)
    }
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 0) {
      setQuantity(newQuantity)
      if (newQuantity === 0) {
        // Remove from cart logic here
      } else {
        onAddToCart?.(product, newQuantity)
      }
    }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-3 md:p-4 hover:shadow-lg transition-shadow duration-200">
      {/* Product Image */}
      <div className="relative mb-3 md:mb-4">
        <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-gray-400 text-xs md:text-sm">Product Image</span>
        </div>
        
        {/* Wishlist button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-1 right-1 md:top-2 md:right-2 p-1.5 md:p-1 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <Heart 
            className={cn(
              "w-3 h-3 md:w-4 md:h-4",
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
            )} 
          />
        </button>

        {/* Discount badge */}
        {product.discount && (
          <div className="absolute top-1 left-1 md:top-2 md:left-2 bg-red-500 text-white text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded-full">
            {product.discount}% OFF
          </div>
        )}

        {/* Organic badge */}
        {product.isOrganic && (
          <div className="absolute bottom-1 left-1 md:bottom-2 md:left-2 bg-green-500 text-white text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded-full">
            Organic
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1.5 md:space-y-2">
        {/* Brand */}
        <p className="text-xs text-teal-600 font-medium">{product.brand}</p>
        
        {/* Product Name */}
        <h3 className="font-medium text-gray-900 text-xs md:text-sm line-clamp-2 leading-tight">
          {product.name}
        </h3>

        {/* Weight */}
        <p className="text-xs text-gray-500">
          {formatWeight(product.weight)} {product.unit}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-400">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-gray-900 text-sm md:text-base">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs md:text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <div className="mt-2 md:mt-3">
          {quantity === 0 ? (
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={cn(
                "w-full py-2.5 md:py-2 px-3 md:px-4 rounded-lg font-medium transition-colors text-xs md:text-sm",
                product.inStock
                  ? "bg-teal-600 text-white hover:bg-teal-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              )}
            >
              {product.inStock ? (
                <div className="flex items-center justify-center space-x-1 md:space-x-2">
                  <Plus className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Add to Cart</span>
                </div>
              ) : (
                "Out of Stock"
              )}
            </button>
          ) : (
            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="p-1.5 md:p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Minus className="w-3 h-3 md:w-4 md:h-4" />
              </button>
              <span className="font-medium text-sm">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="p-1.5 md:p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Plus className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 