'use client';

import { motion } from 'framer-motion';
import { CalendarCheck, CreditCard, Users } from 'lucide-react';

export function AdminCards() {
  const cards = [
    { title: "Today's bookings", value: '18', detail: 'Confirmed appointments waiting.', icon: CalendarCheck, color: 'from-emerald to-sage', bg: 'bg-[rgba(123,163,123,0.1)]' },
    { title: 'Pending payments', value: '4', detail: 'Pending payments needing action.', icon: CreditCard, color: 'from-gold to-copper', bg: 'bg-[rgba(212,168,83,0.1)]' },
    { title: 'Active members', value: '124', detail: 'Loyalty plans under management.', icon: Users, color: 'from-sage to-emerald', bg: 'bg-[rgba(45,138,94,0.1)]' }
  ];

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-3">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="glass-card group relative overflow-hidden p-6"
          >
            {/* Gradient accent bar */}
            <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${card.color} opacity-80`} />

            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mocha">{card.title}</p>
                <p className="mt-3 font-display text-4xl font-bold text-deep">{card.value}</p>
                <p className="mt-3 text-sm leading-6 text-mocha">{card.detail}</p>
              </div>
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-white shadow-soft`}>
                <Icon size={20} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
