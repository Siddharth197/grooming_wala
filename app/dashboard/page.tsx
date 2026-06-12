'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AdminCards } from '../../components/AdminCards';

interface Booking {
  id: number;
  name: string;
  phone: string;
  date: string;
  service: string;
  created_at: string;
}

export default function Dashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await fetch('/api/bookings');
        const data = await res.json();
        if (data.data) {
          setBookings(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch bookings', err);
      } finally {
        setLoading(false);
      }
    }
    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-display text-4xl font-bold text-deep">Admin Overview</h1>
          <p className="mt-2 text-mocha">Manage your spa appointments and clientele.</p>
        </motion.div>

        <AdminCards />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold text-deep">Recent Appointments</h2>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[rgba(123,163,123,0.05)] text-xs uppercase text-mocha">
                  <tr>
                    <th className="px-6 py-5 font-semibold tracking-wider">Client</th>
                    <th className="px-6 py-5 font-semibold tracking-wider">Service</th>
                    <th className="px-6 py-5 font-semibold tracking-wider">Date Requested</th>
                    <th className="px-6 py-5 font-semibold tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(123,163,123,0.1)]">
                  {loading ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-mocha">
                        Loading appointments...
                      </td>
                    </tr>
                  ) : bookings.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-mocha">
                        No appointments found.
                      </td>
                    </tr>
                  ) : (
                    bookings.map((b) => (
                      <tr key={b.id} className="transition-colors hover:bg-[rgba(123,163,123,0.02)]">
                        <td className="px-6 py-5 font-medium text-deep">
                          {b.name}
                          <div className="mt-1 text-xs text-mocha">{b.phone}</div>
                        </td>
                        <td className="px-6 py-5 text-mocha">{b.service}</td>
                        <td className="px-6 py-5 text-mocha">{b.date}</td>
                        <td className="px-6 py-5">
                          <span className="inline-flex rounded-full bg-[rgba(123,163,123,0.1)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald">
                            Pending
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
