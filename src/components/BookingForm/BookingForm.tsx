'use client';
import type { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { BookingFields, SubmitButton } from '@/components';
import type { BookingFormData } from '@/types';
import { cn } from '@/utils';

interface BookingFormProps extends React.ComponentPropsWithoutRef<'div'> {
  setBookingData: Dispatch<SetStateAction<BookingFormData | null>>;
}

export const BookingForm = ({ setBookingData, className, ...props }: BookingFormProps) => {
  const bookingForm = useForm<BookingFormData>({ mode: 'onBlur', reValidateMode: 'onChange' });

  const onSubmit = async (data: BookingFormData) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });

    const isDataValid = await bookingForm.trigger();

    if (isDataValid) {
      setBookingData(data);

      bookingForm.reset();
    }
  };

  bookingForm.watch();

  return (
    <div
      {...props}
      className={cn(
        'w-full max-w-150 bg-background flex flex-col items-center justify-center mx-auto rounded-2xl p-4 sm:px-6 md:px-10 pt-8 shadow-2xl',
        className,
      )}
    >
      <h1 className="text-center text-2xl font-semibold sm:text-3xl">Бронирование столика</h1>
      <form
        onSubmit={bookingForm.handleSubmit(onSubmit)}
        className="w-full rounded-3xl bg-form p-4 sm:p-6 md:p-8"
      >
        <BookingFields
          register={bookingForm.register}
          errors={bookingForm.formState.errors}
          getValues={bookingForm.getValues}
        />
        <SubmitButton isSubmitting={bookingForm.formState.isSubmitting} />
      </form>
    </div>
  );
};
