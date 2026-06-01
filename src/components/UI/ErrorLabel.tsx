import { AnimatePresence, motion } from 'motion/react';
import type { FieldError } from 'react-hook-form';
import { cn } from '@/utils';

interface InputProps extends React.ComponentPropsWithoutRef<'p'> {
  error: FieldError | undefined;
}

export const ErrorLabel = ({ error, className, ...props }: InputProps) => {
  return (
    <p className={cn('mt-1 min-h-5 text-xs sm:text-sm italic text-red-400', className)} {...props}>
      <AnimatePresence mode="wait">
        {error?.message && (
          <motion.span
            key={error.message}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {error.message}
          </motion.span>
        )}
      </AnimatePresence>
    </p>
  );
};
