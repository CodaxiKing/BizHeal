// Utility functions for BizHeal UI components
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
/**
 * Merges Tailwind CSS classes with clsx and tailwind-merge
 * This is the standard utility function used by Shadcn/UI components
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
