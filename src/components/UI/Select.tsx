import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { ErrorLabel } from '@/components/UI';
import { cn } from '@/utils';

interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  registration: UseFormRegisterReturn;
  optionsList: string[] | number[];
  defaultOption: string;
  label: string;
  error?: FieldError | undefined;
}

export const Select = ({
  registration,
  className,
  label,
  optionsList,
  defaultOption,
  error,
  ...props
}: SelectProps) => {
  return (
    <div>
      <label>
        <p className="mb-1 text-sm sm:text-base">{label}</p>
        <select
          className={cn(
            'w-80 sm:w-full rounded-xl border px-4 py-3 outline-none',
            className,
            error ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-accent',
          )}
          {...registration}
          {...props}
        >
          <option value="">{defaultOption}</option>

          {optionsList.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <ErrorLabel error={error} />
    </div>
  );
};
