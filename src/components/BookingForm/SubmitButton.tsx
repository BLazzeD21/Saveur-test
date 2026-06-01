import Image from 'next/image';
import { cn } from '@/utils';

interface SubmitButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  isSubmitting: boolean;
}

export const SubmitButton = ({ className, isSubmitting, ...props }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={cn(
        'w-full mt-4 cursor-pointer rounded-xl bg-accent py-3 text-sm sm:text-base font-medium text-background transition-all duration-200 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {isSubmitting ? (
        <span className="flex items-center justify-center gap-3">
          <Image src="/spinner.svg" alt="" className="size-5 animate-spin" height={25} width={25} />
          Бронирую...
        </span>
      ) : (
        'Забронировать'
      )}
    </button>
  );
};
