import { Clock, Truck, Shield, Star } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-emerald-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Fresh Groceries
                <span className="text-teal-600 block">Delivered in Minutes</span>
              </h1>
              <p className="text-lg text-gray-600">
                Get fresh fruits, vegetables, dairy, and household essentials delivered to your doorstep in just 10 minutes.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">10 Min Delivery</p>
                  <p className="text-sm text-gray-500">Super fast delivery</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Free Delivery</p>
                  <p className="text-sm text-gray-500">On orders above ₹99</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Quality Assured</p>
                  <p className="text-sm text-gray-500">Fresh & hygienic</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Best Prices</p>
                  <p className="text-sm text-gray-500">Competitive rates</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors">
                Start Shopping
              </button>
              <button className="border border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">
                Download App
              </button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-teal-100 to-emerald-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-600 font-medium">Fresh Groceries</p>
                  <p className="text-sm text-gray-500">Delivered to your door</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Live</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg">
              <div className="text-center">
                <p className="text-xs text-gray-500">Delivery in</p>
                <p className="font-bold text-teal-600">10 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 