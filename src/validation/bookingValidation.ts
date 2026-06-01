import { validateDate, validateGuests, validateName, validatePhone, validateTime } from '@/utils';

export const bookingValidation = {
  name: {
    required: 'Введите имя',
    validate: validateName,
  },

  phone: {
    required: 'Введите телефон',
    validate: validatePhone,
  },

  date: {
    required: 'Выберите дату',
    validate: validateDate,
  },

  time: (date?: string) => ({
    required: 'Выберите время',
    validate: (time: string) => validateTime(time, date),
  }),

  guests: {
    required: 'Выберите количество гостей',
    valueAsNumber: true,
    validate: validateGuests,
  },
};
