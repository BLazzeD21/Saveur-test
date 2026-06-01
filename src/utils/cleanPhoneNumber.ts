export const cleanPhoneNumber = (phone: string): string => {
  return phone.replace(/[\s\-()]/g, '');
};
