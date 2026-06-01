import { cn } from '@/utils';

interface SubmitButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

export const Button = ({ children, className, ...props }: SubmitButtonProps) => {
  return (
    <button
      className={cn(
        'w-full mt-4 cursor-pointer rounded-xl bg-accent py-3 text-sm sm:text-base font-medium text-background transition-all duration-200 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
