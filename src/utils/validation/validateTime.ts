import { TIME_SLOTS } from '@/constants';

export const validateTime = (time: string, date?: string): true | string => {
  if (!TIME_SLOTS.includes(time)) {
    return 'Выберите корректное время';
  }

  if (!date) {
    return true;
  }

  const selectedDate = new Date(date);
  const now = new Date();

  const isToday =
    selectedDate.getFullYear() === now.getFullYear() &&
    selectedDate.getMonth() === now.getMonth() &&
    selectedDate.getDate() === now.getDate();

  if (!isToday) {
    return true;
  }

  const [hours, minutes] = time.split(':').map(Number);

  const selectedDateTime = new Date(selectedDate);
  selectedDateTime.setHours(hours, minutes, 0, 0);

  if (selectedDateTime <= now) {
    return 'Это время уже прошло';
  }

  return true;
};
