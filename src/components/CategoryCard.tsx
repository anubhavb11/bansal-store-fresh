import { Category } from '@/types'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
  category: Category
  onClick?: () => void
  isSelected?: boolean
}

export default function CategoryCard({ category, onClick, isSelected }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center p-4 rounded-xl transition-all duration-200 hover:shadow-md",
        isSelected 
          ? "bg-teal-50 border-2 border-teal-500" 
          : "bg-white border border-gray-200 hover:border-teal-300"
      )}
    >
      <div className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-3",
        category.color
      )}>
        {category.icon}
      </div>
      <h3 className="font-medium text-gray-900 text-sm text-center mb-1">
        {category.name}
      </h3>
      <p className="text-xs text-gray-500">
        {category.productCount} items
      </p>
    </button>
  )
} 