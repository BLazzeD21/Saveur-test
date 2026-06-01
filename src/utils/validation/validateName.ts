export const validateName = (name: string): boolean | string => {
    if (!name) {
    return 'Введите имя';
  }

  const trimmedName = name.trim();

  if (trimmedName.length < 2) {
    return 'Минимум 2 символа';
  }

  const regex = /^[A-Za-zА-Яа-яЁё\s-]+$/;

  if (!regex.test(trimmedName)) {
    return 'Допустимы только буквы, пробелы и дефис';
  }

  return true;
};
