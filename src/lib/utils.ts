import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes without conflicts.
 * Uses clsx for conditional logic + tailwind-merge to resolve class conflicts.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format date range for experience timeline.
 */
export function formatDateRange(start: string, end: string | 'Present'): string {
  return `${start} — ${end}`;
}

/**
 * Calculate years of experience from a start date.
 */
export function calcYearsExp(startYear: number): string {
  const years = new Date().getFullYear() - startYear;
  return `${years}+ years`;
}

/**
 * Truncate text to a given length.
 */
export function truncate(text: string, length: number): string {
  return text.length > length ? `${text.slice(0, length)}...` : text;
}

/**
 * Generate a unique ID.
 */
export function uid(): string {
  return Math.random().toString(36).slice(2, 9);
}

/**
 * Smooth scroll to an element by ID.
 */
export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
