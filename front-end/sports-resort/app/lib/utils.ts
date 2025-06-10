import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utiliser le type de paramètre de clsx
export const cn = (...inputs: Parameters<typeof clsx>) => {
    return twMerge(clsx(...inputs))
}
