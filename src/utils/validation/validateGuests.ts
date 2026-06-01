import { GUEST_COUNT } from '@/constants';

export const validateGuests = (count: number): boolean | string => {
  if (!GUEST_COUNT.includes(count)) {
    return 'Выберите количество гостей';
  }

  return true;
};
