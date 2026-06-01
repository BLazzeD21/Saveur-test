export const validateDate = (date: string): boolean | string => {
  if (!date) {
    return 'Выберите дату';
  }

  const selected = new Date(date);
  const today = new Date();
  const maxDate = new Date(today);

  selected.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  maxDate.setDate(maxDate.getDate() + 90);

  if (selected < today) {
    return 'Дата не может быть прошедшей';
  }

  if (selected > maxDate) {
    return 'Дата должна быть не позднее 90 дней';
  }

  return true;
};
