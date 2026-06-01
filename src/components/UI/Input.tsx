import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { ErrorLabel } from '@/components/UI';
import { cn } from '@/utils';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  registration: UseFormRegisterReturn;
  label: string;
  error?: FieldError | undefined;
  placeholder?: string | undefined;
}

export const Input = ({
  registration,
  className,
  label,
  placeholder,
  error,
  type,
  ...props
}: InputProps) => {
  return (
    <div>
      <label>
        <p className="mb-1 text-sm sm:text-base">{label}</p>
        <input
          type={type ?? 'text'}
          placeholder={placeholder}
          className={cn(
            'w-80 sm:w-full rounded-xl border px-3 py-2.5 text-sm sm:px-4 sm:py-3 sm:text-base outline-none transition-colors',
            className,
            error ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-accent',
          )}
          {...registration}
          {...props}
        />
      </label>
      <ErrorLabel error={error} />
    </div>
  );
};
