'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  index?: number;
}

const icons = ['🧖', '✨', '⚡'];

export function ServiceCard({ title, description, price, features, index = 0 }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card gradient-border group relative overflow-hidden p-8"
    >
      {/* Decorative glow */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-sage/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        {/* Icon + Title */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{icons[index % icons.length]}</span>
            <h3 className="font-display text-2xl font-semibold text-deep">{title}</h3>
          </div>
          <span className="tag-gold whitespace-nowrap">{price}</span>
        </div>

        {/* Description */}
        <p className="mt-5 text-sm leading-7 text-mocha">{description}</p>

        {/* Features */}
        <ul className="mt-6 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-sm text-mocha">
              <Sparkles size={14} className="shrink-0 text-gold-dark" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/booking"
          className="glow-btn shimmer mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald to-sage px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300"
        >
          Book now
        </a>
      </div>
    </motion.article>
  );
}
