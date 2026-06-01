import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';
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
        <p>{label}</p>
        <input
          type={type ?? 'text'}
          placeholder={placeholder}
          className={cn(
            'w-full rounded-xl border px-4 py-3 outline-none',
            className,
            error ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-accent',
          )}
          {...registration}
          {...props}
        />
      </label>

      <p className="mt-1 min-h-5 text-xs italic text-red-400">{error?.message}</p>
    </div>
  );
};
