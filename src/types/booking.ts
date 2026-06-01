export type BookingStatus = 'idle' | 'loading' | 'success';

export interface BookingFormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
}
