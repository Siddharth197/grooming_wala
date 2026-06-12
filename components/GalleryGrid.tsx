'use client';

import { motion } from 'framer-motion';

export function GalleryGrid() {
  const pairs = [
    {
      title: 'Fluffy to Fresh',
      before: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Shaggy to Styled',
      before: 'https://images.unsplash.com/photo-1537151608804-ea6fac25d4b8?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2">
      {pairs.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="glass-card group overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row">
            {/* Before */}
            <div className="relative flex-1 min-w-0 overflow-hidden">
              <img
                src={p.before}
                alt={`${p.title} - before`}
                className="block h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-copper shadow-sm">
                Before
              </span>
            </div>
            {/* After */}
            <div className="relative flex-1 min-w-0 overflow-hidden">
              <img
                src={p.after}
                alt={`${p.title} - after`}
                className="block h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-emerald to-sage px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                After
              </span>
            </div>
          </div>
          <div className="px-6 py-5">
            <h3 className="font-display text-base font-semibold text-deep">{p.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-mocha">
              Gentle techniques and premium finishing for a calm transformation.
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
