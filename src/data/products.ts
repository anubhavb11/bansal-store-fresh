import { Product, Category } from '@/types'

export const categories: Category[] = [
    {
        id: 'fruits-vegetables',
        name: 'Fruits & Vegetables',
        icon: '🍎',
        color: 'bg-green-500',
        productCount: 45
    },
    {
        id: 'dairy-bread',
        name: 'Dairy & Bread',
        icon: '🥛',
        color: 'bg-blue-500',
        productCount: 32
    },
    {
        id: 'meat-fish',
        name: 'Meat & Fish',
        icon: '🐟',
        color: 'bg-red-500',
        productCount: 28
    },
    {
        id: 'beverages',
        name: 'Beverages',
        icon: '🥤',
        color: 'bg-purple-500',
        productCount: 25
    },
    {
        id: 'snacks',
        name: 'Snacks',
        icon: '🍿',
        color: 'bg-yellow-500',
        productCount: 38
    },
    {
        id: 'household',
        name: 'Household',
        icon: '🧽',
        color: 'bg-gray-500',
        productCount: 42
    },
    {
        id: 'personal-care',
        name: 'Personal Care',
        icon: '🧴',
        color: 'bg-pink-500',
        productCount: 35
    },
    {
        id: 'baby-care',
        name: 'Baby Care',
        icon: '👶',
        color: 'bg-indigo-500',
        productCount: 20
    }
]

export const products: Product[] = [
    // Fruits & Vegetables
    {
        id: 'apple-1kg',
        name: 'Fresh Red Apples',
        description: 'Sweet and juicy red apples, perfect for snacking',
        price: 120,
        originalPrice: 150,
        weight: 1000,
        unit: 'kg',
        category: 'fruits-vegetables',
        subcategory: 'fruits',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.5,
        reviewCount: 128,
        brand: 'Fresh Harvest',
        isOrganic: true,
        discount: 20
    },
    {
        id: 'banana-1kg',
        name: 'Yellow Bananas',
        description: 'Ripe and sweet yellow bananas',
        price: 60,
        weight: 1000,
        unit: 'kg',
        category: 'fruits-vegetables',
        subcategory: 'fruits',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.2,
        reviewCount: 95,
        brand: 'Fresh Harvest',
        isOrganic: true
    },
    {
        id: 'tomato-500g',
        name: 'Fresh Tomatoes',
        description: 'Red ripe tomatoes for cooking',
        price: 40,
        weight: 500,
        unit: 'g',
        category: 'fruits-vegetables',
        subcategory: 'vegetables',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.0,
        reviewCount: 67,
        brand: 'Fresh Harvest',
        isOrganic: true
    },
    {
        id: 'onion-1kg',
        name: 'White Onions',
        description: 'Fresh white onions',
        price: 30,
        weight: 1000,
        unit: 'kg',
        category: 'fruits-vegetables',
        subcategory: 'vegetables',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.1,
        reviewCount: 89,
        brand: 'Fresh Harvest'
    },

    // Dairy & Bread
    {
        id: 'milk-1l',
        name: 'Full Cream Milk',
        description: 'Pure and fresh full cream milk',
        price: 65,
        weight: 1000,
        unit: 'ml',
        category: 'dairy-bread',
        subcategory: 'dairy',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.6,
        reviewCount: 234,
        brand: 'Dairy Pure',
        isOrganic: true
    },
    {
        id: 'bread-400g',
        name: 'Whole Wheat Bread',
        description: 'Fresh whole wheat bread',
        price: 35,
        weight: 400,
        unit: 'g',
        category: 'dairy-bread',
        subcategory: 'bread',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.3,
        reviewCount: 156,
        brand: 'Fresh Bakery'
    },
    {
        id: 'eggs-12',
        name: 'Farm Fresh Eggs',
        description: '12 fresh farm eggs',
        price: 80,
        weight: 600,
        unit: 'g',
        category: 'dairy-bread',
        subcategory: 'dairy',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.4,
        reviewCount: 189,
        brand: 'Farm Fresh'
    },

    // Meat & Fish
    {
        id: 'chicken-1kg',
        name: 'Fresh Chicken Breast',
        description: 'Boneless chicken breast',
        price: 280,
        weight: 1000,
        unit: 'g',
        category: 'meat-fish',
        subcategory: 'meat',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.5,
        reviewCount: 145,
        brand: 'Fresh Meat'
    },
    {
        id: 'fish-500g',
        name: 'Fresh Rohu Fish',
        description: 'Fresh rohu fish fillets',
        price: 200,
        weight: 500,
        unit: 'g',
        category: 'meat-fish',
        subcategory: 'fish',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.2,
        reviewCount: 98,
        brand: 'Ocean Fresh'
    },

    // Beverages
    {
        id: 'cola-2l',
        name: 'Fresh Cola',
        description: 'Refreshing cola drink',
        price: 85,
        weight: 2000,
        unit: 'ml',
        category: 'beverages',
        subcategory: 'soft-drinks',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.1,
        reviewCount: 267,
        brand: 'Fresh Beverages'
    },
    {
        id: 'juice-1l',
        name: 'Orange Juice',
        description: 'Fresh orange juice without pulp',
        price: 120,
        weight: 1000,
        unit: 'ml',
        category: 'beverages',
        subcategory: 'juices',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.3,
        reviewCount: 134,
        brand: 'Fresh Harvest'
    },

    // Snacks
    {
        id: 'chips-100g',
        name: 'Fresh Potato Chips',
        description: 'Crunchy potato chips',
        price: 25,
        weight: 100,
        unit: 'g',
        category: 'snacks',
        subcategory: 'chips',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.0,
        reviewCount: 312,
        brand: 'Fresh Snacks'
    },
    {
        id: 'biscuits-200g',
        name: 'Fresh Cream Biscuits',
        description: 'Delicious cream biscuits',
        price: 30,
        weight: 200,
        unit: 'g',
        category: 'snacks',
        subcategory: 'biscuits',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.2,
        reviewCount: 198,
        brand: 'Fresh Bakery'
    },

    // Household
    {
        id: 'detergent-1kg',
        name: 'Fresh Laundry Detergent',
        description: 'Powerful laundry detergent',
        price: 180,
        weight: 1000,
        unit: 'g',
        category: 'household',
        subcategory: 'cleaning',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.4,
        reviewCount: 167,
        brand: 'Fresh Home'
    },
    {
        id: 'toilet-paper-12',
        name: 'Fresh Toilet Paper',
        description: 'Soft and strong toilet paper',
        price: 150,
        weight: 1200,
        unit: 'g',
        category: 'household',
        subcategory: 'bathroom',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.1,
        reviewCount: 89,
        brand: 'Fresh Home'
    },

    // Personal Care
    {
        id: 'shampoo-500ml',
        name: 'Fresh Hair Shampoo',
        description: 'Gentle hair shampoo',
        price: 220,
        weight: 500,
        unit: 'ml',
        category: 'personal-care',
        subcategory: 'hair-care',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.3,
        reviewCount: 145,
        brand: 'Fresh Care'
    },
    {
        id: 'toothpaste-100g',
        name: 'Fresh Toothpaste',
        description: 'Fresh mint toothpaste',
        price: 85,
        weight: 100,
        unit: 'g',
        category: 'personal-care',
        subcategory: 'oral-care',
        image: '/api/placeholder/300/300',
        inStock: true,
        rating: 4.2,
        reviewCount: 234,
        brand: 'Fresh Care'
    }
] 