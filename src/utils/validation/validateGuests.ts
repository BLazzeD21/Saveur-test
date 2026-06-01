import { GUEST_COUNT_MAX, GUEST_COUNT_MIN } from '@/constants';

export const validateGuests = (guestsCount: number): boolean | string => {
  if (!Number.isInteger(guestsCount)) {
    return 'Выберите количество гостей';
  }

  if (guestsCount > GUEST_COUNT_MAX || guestsCount < GUEST_COUNT_MIN) {
    return 'Выберите из доступного диапазона';
  }

  return true;
};
