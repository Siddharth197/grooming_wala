'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, CheckCircle, Dog, MessageCircle } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const servicePrices: Record<string, string> = {
  'Signature Spa': '₹2,499',
  'Breed Styling': '₹3,499',
  'Express Fresh': '₹1,299',
  "Puppy's First Spa": '₹1,899',
  'De-Shedding Mud Bath': '₹2,899',
  'Feline Elegance': '₹2,199',
};

export default function BookingPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', service: '', petName: '', petBreed: '', petType: 'Dog', serviceMode: 'Home', address: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to book');
      setStatus('success');
      // Keep formData state so we can generate the WhatsApp confirmation link
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', date: '', service: '', petName: '', petBreed: '', petType: 'Dog', serviceMode: 'Home', address: '' });
    setStatus('');
  };

  const getWhatsAppLink = () => {
    const serviceName = formData.service;
    const price = servicePrices[serviceName] || '';
    const dateFormatted = formData.date
      ? new Date(formData.date).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
      : '';

    const message = `Hello Grooming Wala! 🐾\n\nI'd like to confirm my grooming appointment details:\n\n👤 *Pet Parent*: ${formData.name}\n📞 *Phone*: ${formData.phone}\n🐶 *Pet Type*: ${formData.petType}\n🐾 *Pet Name*: ${formData.petName}\n🐕 *Breed*: ${formData.petBreed}\n📅 *Preferred Date*: ${dateFormatted}\n🏠 *Address*: ${formData.address}\n✨ *Selected Service*: ${serviceName}${price ? ` (${price})` : ''}\n\nPlease confirm my booking slot! Thank you.`;

    return `https://wa.me/917417909911?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
          <span className="tag-sage mb-6 inline-block">Reservations</span>
          <h1 className="font-display text-5xl font-bold leading-tight text-deep md:text-6xl">
            Book a <span className="gradient-text italic">Spa Day.</span>
          </h1>
          <p className="mt-6 text-lg text-mocha">
            Reserve your pet's luxury grooming session. We will contact you to confirm the exact time.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mt-16 max-w-2xl">
          <div className="glass-card gradient-border relative p-8 sm:p-12">

            {status === 'success' ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center py-12 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(123,163,123,0.1)] text-emerald">
                  <CheckCircle size={40} />
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold text-deep">Request Received!</h3>
                <p className="mt-4 text-lg text-mocha max-w-md mx-auto">
                  Your request has been saved. Click below to send the details directly to our WhatsApp and instantly confirm your slot!
                </p>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-btn shimmer mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1ebd5b] px-8 py-4 text-base font-bold text-white shadow-soft transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
                >
                  <MessageCircle size={20} />
                  Confirm on WhatsApp 🐾
                </a>

                <button onClick={handleReset} className="mt-8 text-sm font-semibold text-emerald transition hover:text-sage">
                  Book another session
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-deep">Pet Parent Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-mocha opacity-60" size={18} />
                      <input
                        type="text"
                        required
                        className="w-full bg-[rgba(255,255,255,0.8)] border border-[rgba(123,163,123,0.2)] rounded-xl py-3 pl-12 pr-4 text-deep placeholder-[rgba(74,92,80,0.6)] focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-deep">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-mocha opacity-60" size={18} />
                      <input
                        type="tel"
                        required
                        className="w-full bg-[rgba(255,255,255,0.8)] border border-[rgba(123,163,123,0.2)] rounded-xl py-3 pl-12 pr-4 text-deep placeholder-[rgba(74,92,80,0.6)] focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

<div className="grid gap-6 sm:grid-cols-2">
  <div className="space-y-2">
    <label className="text-sm font-medium text-deep">Pet Name</label>
    <div className="relative">
      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-mocha opacity-60" size={18} />
      <input
        type="text"
        required
        className="w-full bg-[rgba(255,255,255,0.8)] border border-[rgba(123,163,123,0.2)] rounded-xl py-3 pl-12 pr-4 text-deep placeholder-[rgba(74,92,80,0.6)] focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition"
        placeholder="Buddy"
        value={formData.petName}
        onChange={e => setFormData({ ...formData, petName: e.target.value })}
      />
    </div>
  </div>
  <div className="space-y-2">
    <label className="text-sm font-medium text-deep">Pet Breed</label>
    <div className="relative">
      <Dog className="absolute left-4 top-1/2 -translate-y-1/2 text-mocha opacity-60" size={18} />
      <input
        type="text"
        required
        className="w-full bg-[rgba(255,255,255,0.8)] border border-[rgba(123,163,123,0.2)] rounded-xl py-3 pl-12 pr-4 text-deep placeholder-[rgba(74,92,80,0.6)] focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition"
        placeholder="Labrador"
        value={formData.petBreed}
        onChange={e => setFormData({ ...formData, petBreed: e.target.value })}
      />
    </div>
  </div>
  <div className="space-y-2">
    <label className="text-sm font-medium text-deep">Pet Type</label>
    <select
      className="w-full bg-[rgba(255,255,255,0.8)] border border-[rgba(123,163,123,0.2)] rounded-xl py-3 px-4 text-deep focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition"
      value={formData.petType}
      onChange={e => setFormData({ ...formData, petType: e.target.value })}
    >
      <option value="Dog">Dog</option>
      <option value="Cat">Cat</option>
    </select>
  </div>

</div>
<div className="space-y-2 mt-4">
  <label className="text-sm font-medium text-deep">Address</label>
  <div className="relative">
    <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-mocha opacity-60" size={18} />
    <input
      type="text"
      required
      className="w-full bg-[rgba(255,255,255,0.8)] border border-[rgba(123,163,123,0.2)] rounded-xl py-3 pl-12 pr-4 text-deep placeholder-[rgba(74,92,80,0.6)] focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition"
      placeholder="123, Main St, City"
      value={formData.address}
      onChange={e => setFormData({ ...formData, address: e.target.value })}
    />
  </div>
</div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-deep">Preferred Date</label>
                      <Calendar
                        onChange={(date: Date | Date[] | null) => {
                          const d = date instanceof Date ? date : null;
                          const iso = d ? d.toISOString().split('T')[0] : '';
                          setFormData({ ...formData, date: iso });
                        }}
                        value={formData.date ? new Date(formData.date) : null}
                        className="rounded-lg overflow-hidden"
                      />
                    </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-deep">Select Service</label>
                  <div className="relative">
                    <Dog className="absolute left-4 top-1/2 -translate-y-1/2 text-mocha opacity-60" size={18} />
                    <select
                      required
                      className="w-full appearance-none bg-[rgba(255,255,255,0.8)] border border-[rgba(123,163,123,0.2)] rounded-xl py-3 pl-12 pr-4 text-deep focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="" disabled className="text-mocha">Choose a spa package...</option>
                      <option value="Signature Spa" className="bg-white text-deep">Signature Spa - ₹2,499</option>
                      <option value="Breed Styling" className="bg-white text-deep">Breed Styling - ₹3,499</option>
                      <option value="Express Fresh" className="bg-white text-deep">Express Fresh - ₹1,299</option>
                      <option value="Puppy's First Spa" className="bg-white text-deep">Puppy's First Spa - ₹1,899</option>
                      <option value="De-Shedding Mud Bath" className="bg-white text-deep">De-Shedding Mud Bath - ₹2,899</option>
                      <option value="Feline Elegance" className="bg-white text-deep">Feline Elegance - ₹2,199</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="glow-btn shimmer mt-4 w-full rounded-xl bg-gradient-to-r from-emerald to-sage py-4 text-sm font-bold text-white shadow-soft disabled:opacity-70"
                >
                  {status === 'loading' ? 'Processing...' : 'Request Appointment'}
                </button>

                {status === 'error' && (
                  <p className="mt-4 text-center text-sm font-medium text-red-500">
                    Something went wrong. Please try again or call us.
                  </p>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

