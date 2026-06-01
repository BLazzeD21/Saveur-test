'use client';

import { useState } from 'react';
import { BookingForm } from '@/components';
import type { BookingFormData } from '@/types';

export const Main = () => {
  const [bookingData, setBookingData] = useState<BookingFormData | null>(null);

  return (
    <>
      {bookingData?.name}
      <BookingForm setBookingData={setBookingData} />
    </>
  );
};
