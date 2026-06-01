'use client';

import { useState } from 'react';
import { BookingForm, ConfirmationScreen } from '@/components';
import type { BookingFormData } from '@/types';

export const Main = () => {
  const [bookingData, setBookingData] = useState<BookingFormData | null>(null);

  const resetForm = (): void => {
    setBookingData(null);
  };

  return (
    <>
      {bookingData && <ConfirmationScreen bookingData={bookingData} resetForm={resetForm} />}
      <BookingForm setBookingData={setBookingData} />
    </>
  );
};
