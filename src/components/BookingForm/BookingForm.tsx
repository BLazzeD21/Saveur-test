'use client';
import type { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitButton } from '@/components';
import { GUEST_COUNT_MAX, GUEST_COUNT_MIN, TIME_SLOTS } from '@/constants';
import type { BookingFormData } from '@/types';
import {
  cleanPhoneNumber,
  cn,
  formatDate,
  validateDate,
  validateGuests,
  validateName,
  validatePhone,
  validateTime,
} from '@/utils';
import { Input, Select } from '../UI';

interface BookingFormProps extends React.ComponentPropsWithoutRef<'div'> {
  setBookingData: Dispatch<SetStateAction<BookingFormData | null>>;
}

export const BookingForm = ({ setBookingData, className, ...props }: BookingFormProps) => {
  const bookingForm = useForm<BookingFormData>({ mode: 'onBlur' });

  const onSubmit = async (data: BookingFormData) => {
    const cleanData = {
      ...data,
      name: data.name.trim(),
      date: formatDate(data.date),
      phone: cleanPhoneNumber(data.phone),
    };

    await new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });

    setBookingData(cleanData);
    bookingForm.reset();
  };

  bookingForm.watch();

  return (
    <div
      {...props}
      className={cn(
        'w-full bg-background flex flex-col items-center justify-center mx-auto rounded-2xl p-4 sm:px-6 md:px-10 pt-8 shadow-2xl',
        className,
      )}
    >
      <h1 className="text-center text-2xl font-semibold sm:text-3xl">Бронирование столика</h1>
      <form
        onSubmit={bookingForm.handleSubmit(onSubmit)}
        className="w-full rounded-3xl bg-form p-4 sm:p-6 md:p-8"
      >
        <Input
          registration={bookingForm.register('name', {
            required: 'Введите имя',
            validate: validateName,
          })}
          type="text"
          label="Введите имя гостя"
          placeholder="Имя"
          error={bookingForm.formState.errors.name}
        />

        <Input
          registration={bookingForm.register('phone', {
            required: 'Введите телефон',
            validate: validatePhone,
          })}
          type="tel"
          label="Введите номер телефона"
          placeholder="+7 (999) 123-45-67"
          error={bookingForm.formState.errors.phone}
        />

        <Input
          registration={bookingForm.register('date', {
            required: 'Выберите дату',
            validate: validateDate,
          })}
          min={new Date().toISOString().split('T')[0]}
          type="date"
          label="Выберите дату посещения"
          error={bookingForm.formState.errors.date}
        />

        <Select
          registration={bookingForm.register('time', {
            required: 'Выберите время',
            validate: (time: string) => validateTime(time, bookingForm.getValues('date')),
          })}
          optionsList={TIME_SLOTS}
          label="Выберите время посещения"
          defaultOption="Выберите время"
          error={bookingForm.formState.errors.time}
        />
        <Input
          registration={bookingForm.register('guests', {
            required: 'Выберите количество гостей',
            validate: validateGuests,
            setValueAs: (value) => (value === '' ? undefined : Number(value)),
          })}
          min={GUEST_COUNT_MIN}
          max={GUEST_COUNT_MAX}
          defaultValue={1}
          label="Выберите количество гостей"
          error={bookingForm.formState.errors.guests}
          type="number"
        />
        <SubmitButton isSubmitting={bookingForm.formState.isSubmitting} />
      </form>
    </div>
  );
};
