'use client'

import { Search, ShoppingCart, User, MapPin, Menu } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import Cart from './Cart'
import { Product } from '@/types'

interface CartItem {
  product: Product
  quantity: number
}

interface HeaderProps {
  cartItems?: CartItem[]
  onUpdateCartQuantity?: (productId: string, quantity: number) => void
  onRemoveFromCart?: (productId: string) => void
}

export default function Header({ cartItems = [], onUpdateCartQuantity, onRemoveFromCart }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>Deliver to: Home</span>
              </div>
              <span>•</span>
              <span>10 minutes delivery</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="hover:text-teal-600">Track Order</button>
              <button className="hover:text-teal-600">Help</button>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <button className="md:hidden">
                <Menu className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BS</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">BansalStore</h1>
                  <p className="text-xs text-gray-500">Fresh Groceries Delivered</p>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-teal-600">
                <User className="w-5 h-5" />
                <span>Account</span>
              </button>
              <button 
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-teal-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Cart Component */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={onUpdateCartQuantity || (() => {})}
        onRemoveItem={onRemoveFromCart || (() => {})}
      />
    </>
  )
} 