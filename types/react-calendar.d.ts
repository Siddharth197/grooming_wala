declare module 'react-calendar' {
  import { ComponentType } from 'react';

  interface CalendarProps {
    onChange?: (value: Date | Date[] | null) => void;
    value?: Date | Date[] | null;
    className?: string;
    minDate?: Date;
    maxDate?: Date;
    locale?: string;
  }

  const Calendar: ComponentType<CalendarProps>;
  export default Calendar;
}

declare module 'react-calendar/dist/Calendar.css';
