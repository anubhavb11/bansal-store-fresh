'use client'


import { X, Trash2, Minus, Plus, ArrowLeft } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { Product } from '@/types'

interface CartItem {
  product: Product
  quantity: number
}

interface CartProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (productId: string, quantity: number) => void
  onRemoveItem: (productId: string) => void
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  const deliveryFee = subtotal > 199 ? 0 : 40
  const total = subtotal + deliveryFee
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Cart Panel - Slide up from bottom on mobile, slide in from right on desktop */}
      <div className={`fixed inset-0 z-50 md:top-0 md:bottom-0 md:right-0 md:left-auto md:w-96 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-y-0 md:translate-x-0' : 'translate-y-full md:translate-y-0 md:translate-x-full'
      }`}>
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-white">
            <div className="flex items-center space-x-3">
              <button onClick={onClose} className="p-1 md:hidden">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button onClick={onClose} className="p-1 hidden md:block">
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              {cartCount > 0 && (
                <span className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full">
                  {cartCount} items
                </span>
              )}
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="text-center py-12 px-4">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">Add some products to get started!</p>
                <button 
                  onClick={onClose}
                  className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="p-4 space-y-3">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-400 text-xs">Image</span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 text-sm truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.product.weight}{item.product.unit}
                      </p>
                      <p className="font-semibold text-gray-900 text-sm">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-1 text-red-500 hover:bg-red-50 rounded-full"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t bg-white p-4 space-y-4">
              {/* Price Breakdown */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Fee</span>
                  <span className={deliveryFee === 0 ? 'text-green-600' : ''}>
                    {deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee)}
                  </span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-teal-600 text-white py-4 rounded-lg font-medium hover:bg-teal-700 transition-colors text-lg">
                Proceed to Checkout
              </button>

              {/* Delivery Info */}
              <div className="text-xs text-gray-500 text-center">
                {deliveryFee === 0 ? (
                  <p className="text-green-600">Free delivery on orders above ₹199</p>
                ) : (
                  <p>Add ₹{199 - subtotal} more for free delivery</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
} 