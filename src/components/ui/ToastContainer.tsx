import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { useToast } from '@/context/ToastContext';
import { cn } from '@/lib/utils';
import { ToastVariant } from '@/types';

const variantConfig: Record<
  ToastVariant,
  { icon: React.ComponentType<{ className?: string }>; classes: string }
> = {
  success: {
    icon: CheckCircle,
    classes: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  },
  error: {
    icon: AlertCircle,
    classes: 'border-red-500/30 bg-red-500/10 text-red-300',
  },
  warning: {
    icon: AlertTriangle,
    classes: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  },
  info: {
    icon: Info,
    classes: 'border-primary-500/30 bg-primary-500/10 text-primary-300',
  },
};

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div
      className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 max-w-sm w-full pointer-events-none"
      aria-live="polite"
      aria-label="Notifications"
    >
      <AnimatePresence>
        {toasts.map((toast) => {
          const { icon: Icon, classes } = variantConfig[toast.variant];
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              role="alert"
              className={cn(
                'pointer-events-auto flex items-start gap-3 p-4 rounded-xl border',
                'backdrop-blur-sm shadow-xl',
                'bg-dark-card/90',
                classes
              )}
            >
              <Icon className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="flex-1 text-sm font-medium text-gray-100">{toast.message}</p>
              <button
                onClick={() => removeToast(toast.id)}
                className="shrink-0 text-gray-400 hover:text-white transition-colors"
                aria-label="Dismiss notification"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
