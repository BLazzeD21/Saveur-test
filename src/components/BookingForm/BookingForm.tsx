'use client';

interface BookingFormProps extends React.ComponentPropsWithoutRef<'div'> {}

import { useForm } from 'react-hook-form';
import { Input, Select } from '@/components/UI';
import { GUEST_COUNT, TIME_SLOTS } from '@/constants';
import type { BookingFormData } from '@/types';
import { cn } from '@/utils';
import { bookingValidation } from '@/validation';

export const BookingForm = ({ className, ...props }: BookingFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: BookingFormData) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });

    reset();
  };

  watch();

  return (
    <div
      {...props}
      className={cn(
        'w-150 bg-background flex items-center justify-center flex-col m-auto rounded-2xl p-4 pt-8 px-10 shadow-2xl',
        className,
      )}
    >
      <h1 className="text-3xl font-semibold text-center">Бронирование столика</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full rounded-3xl bg-form p-8 focus:border-accent"
      >
        <Input
          registration={register('name', bookingValidation.name)}
          type="text"
          label="Введите имя гостя"
          placeholder="Имя"
          error={errors.name}
        />
        <Input
          registration={register('phone', bookingValidation.phone)}
          type="tel"
          label="Введите номер телефона"
          placeholder="+7 (999) 123-45-67"
          error={errors.phone}
        />
        <Input
          registration={register('date', bookingValidation.date)}
          min={new Date().toISOString().split('T')[0]}
          type="date"
          label="Выберите дату посещения"
          error={errors.date}
        />
        <Select
          registration={register('time', bookingValidation.time(getValues('date')))}
          optionsList={TIME_SLOTS}
          label="Выберите время посещения"
          defaultOption="Выберите время"
          error={errors.time}
        />
        <Select
          registration={register('guests', bookingValidation.guests)}
          optionsList={GUEST_COUNT}
          label="Выберите количество гостей"
          defaultOption="Количество гостей"
          error={errors.guests}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 rounded-xl bg-accent transition-colors duration-200 hover:opacity-80 py-3 font-medium text-white disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? 'Бронирую...' : 'Забронировать'}
        </button>
      </form>
    </div>
  );
};
