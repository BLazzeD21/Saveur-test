import type { FieldErrors, UseFormGetValues, UseFormRegister } from 'react-hook-form';
import { Input, Select } from '@/components/UI';
import { GUEST_COUNT, TIME_SLOTS } from '@/constants';
import type { BookingFormData } from '@/types';
import { bookingValidation } from '@/validation';

interface BookingFieldsProps extends React.ComponentPropsWithoutRef<'div'> {
  register: UseFormRegister<BookingFormData>;
  errors: FieldErrors<BookingFormData>;
  getValues: UseFormGetValues<BookingFormData>;
}

export const BookingFields = ({ register, errors, getValues }: BookingFieldsProps) => {
  return (
    <>
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
    </>
  );
};
