export interface Product {
    id: string
    name: string
    description: string
    price: number
    originalPrice?: number
    weight: number
    unit: string
    category: string
    subcategory?: string
    image: string
    inStock: boolean
    rating: number
    reviewCount: number
    brand: string
    isOrganic?: boolean
    isVeg?: boolean
    discount?: number
}

export interface Category {
    id: string
    name: string
    icon: string
    color: string
    productCount: number
}

export interface CartItem {
    product: Product
    quantity: number
}

export interface User {
    id: string
    name: string
    email: string
    phone: string
    address: Address[]
}

export interface Address {
    id: string
    type: 'home' | 'office' | 'other'
    address: string
    city: string
    state: string
    pincode: string
    isDefault: boolean
}

export interface Order {
    id: string
    items: CartItem[]
    total: number
    deliveryFee: number
    tax: number
    grandTotal: number
    status: 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled'
    deliveryAddress: Address
    paymentMethod: 'cod' | 'online'
    orderDate: Date
    estimatedDelivery: Date
} 