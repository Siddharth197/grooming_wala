'use client';

import { motion } from 'framer-motion';
import { Check, Crown } from 'lucide-react';

interface PackageGridProps {
  packages: { name: string; benefits: string[]; price: string }[];
}

export function PackageGrid({ packages }: PackageGridProps) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {packages.map((plan, index) => {
        const isPopular = index === 1;
        return (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className={`glass-card gradient-border group relative overflow-hidden p-6 ${isPopular ? 'ring-[2px] ring-gold/40 shadow-glow-gold' : ''}`}
          >
            {/* Popular badge */}
            {isPopular && (
              <div className="absolute -right-8 top-5 rotate-45 bg-gradient-to-r from-gold to-gold-light px-10 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                Popular
              </div>
            )}

            {/* Icon */}
            <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${isPopular ? 'bg-[rgba(212,168,83,0.15)] text-gold-dark' : 'bg-[rgba(123,163,123,0.15)] text-emerald'}`}>
              <Crown size={20} />
            </div>

            {/* Title */}
            <h3 className="mt-4 font-display text-xl font-semibold text-deep">{plan.name}</h3>

            {/* Price */}
            <p className={`mt-3 text-2xl font-bold ${isPopular ? 'text-gold-dark' : 'text-emerald'}`}>
              {plan.price}
            </p>

            {/* Benefits */}
            <ul className="mt-6 space-y-3">
              {plan.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm text-mocha">
                  <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${isPopular ? 'bg-[rgba(212,168,83,0.2)] text-gold-dark' : 'bg-[rgba(123,163,123,0.2)] text-emerald'}`}>
                    <Check size={12} />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="/booking"
              className={`glow-btn mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                isPopular
                  ? 'bg-gradient-to-r from-gold to-gold-light text-white shadow-glow-gold'
                  : 'bg-gradient-to-r from-emerald to-sage text-white shadow-soft'
              }`}
            >
              Join plan
            </a>
          </motion.div>
        );
      })}
    </div>
  );
}
