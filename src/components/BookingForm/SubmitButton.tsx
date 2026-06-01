import Image from 'next/image';
import { Button } from '@/components/UI';

interface SubmitButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  isSubmitting: boolean;
}

export const SubmitButton = ({ className, isSubmitting, ...props }: SubmitButtonProps) => {
  return (
    <Button type="submit" disabled={isSubmitting} {...props}>
      {isSubmitting ? (
        <span className="flex items-center justify-center gap-3">
          <Image src="/spinner.svg" alt="" className="size-5 animate-spin" height={25} width={25} />
          Бронирую...
        </span>
      ) : (
        'Забронировать'
      )}
    </Button>
  );
};
