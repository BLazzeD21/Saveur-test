export const validatePhone = (phone: string): boolean | string => {
      if (!phone) {
    return 'Укажите номер телефона';
  }

  if (!/^[+\d()\-\s]+$/.test(phone)) {
    return 'Введите корректный номер телефона';
  }

  const digits = phone.replace(/\D/g, '');

  const isValid = digits.length === 11 && (digits.startsWith('7') || digits.startsWith('8'));

  return isValid ? true : 'Введите корректный номер в формате +7 или 8';
};
