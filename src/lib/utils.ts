import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatPrice(price: number) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format(price)
}

export function formatWeight(weight: number) {
    if (weight >= 1000) {
        return `${(weight / 1000).toFixed(1)}kg`
    }
    return `${weight}g`
} 