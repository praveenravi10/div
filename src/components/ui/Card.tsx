import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className, hover = false, glow = false }: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-xl border bg-dark-card border-dark-border',
        'dark:bg-dark-card dark:border-dark-border',
        'light:bg-white light:border-gray-200',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer',
        glow && 'hover:border-primary-500/50 hover:shadow-glow',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
