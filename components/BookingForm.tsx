import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface IFormInput {
  name: string;
  email: string;
  service: string;
  date: Date | null;
}

const services = ['Haircut', 'Shave', 'Full Grooming', 'Facial'];

export default function BookingForm() {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log('Booking data:', { ...data, date: selectedDate });
    // Placeholder: integrate with backend or email service
    alert('Booking submitted!');
    reset();
    setSelectedDate(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-offwhite rounded-2xl shadow-glow">
      <h2 className="text-2xl font-display text-deep mb-4 text-center">Book an Appointment</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-deep mb-1">Name</label>
          <input
            {...register('name', { required: true })}
            className="w-full rounded-md border border-sage/30 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-deep mb-1">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="w-full rounded-md border border-sage/30 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-deep mb-1">Service</label>
          <select
            {...register('service', { required: true })}
            className="w-full rounded-md border border-sage/30 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald"
          >
            <option value="">Select a service</option>
            {services.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-deep mb-1">Choose Date</label>
          <Calendar
            onChange={(date: Date | Date[] | null) => setSelectedDate(date instanceof Date ? date : null)}
            value={selectedDate}
            className="rounded-lg overflow-hidden"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-gradient-to-r from-emerald to-sage py-2 text-white font-semibold hover:opacity-90 transition"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
