'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { BookingDetail } from '@/components';
import { Button } from '@/components/UI';
import type { BookingFormData } from '@/types';
import { cn } from '@/utils';

interface ConfirmationScreenProps extends React.ComponentPropsWithoutRef<'div'> {
  bookingData: BookingFormData;
  resetForm: () => void;
}

export const ConfirmationScreen = ({
  bookingData,
  resetForm,
  className,
  ...props
}: ConfirmationScreenProps) => {
  const { name, date, time, guests } = bookingData;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={cn(
        'fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center',
        className,
      )}
    >
      <div
        {...props}
        className={cn(
          'w-full max-w-100 bg-background flex flex-col justify-center mx-2 rounded-2xl p-4 sm:p-6 md:p-10 shadow-2xl my-4 sm:mx-4',
          className,
        )}
      >
        <h2 className="text-center font-semibold text-2xl mb-2">Уважаемый {bookingData.name}!</h2>
        <div className="flex gap-2 items-center m-auto">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image src="/check.svg" alt="Галочка" height={25} width={25} />
          </motion.div>

          <p className="text-center"> Бронирование подтверждено</p>
        </div>

        <div className="pl-1.5">
          <p className="text-accent my-5 text-center">Детали брони</p>
          <BookingDetail label="Имя">{name}</BookingDetail>
          {/* <BookingDetail label="Телефон">{phone}</BookingDetail> */}
          <BookingDetail label="Дата">{date}</BookingDetail>
          <BookingDetail label="Время">{time}</BookingDetail>
          <BookingDetail label="Гостей">{guests}</BookingDetail>
        </div>

        <Button onClick={resetForm}>Забронировать ещё</Button>
      </div>
    </motion.div>
  );
};
