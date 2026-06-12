'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  highlight: string;
}

interface Props {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: Props) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next();
          return 0;
        }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="mt-8 space-y-8">
      {/* Testimonial card */}
      <div className="relative min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="glass-card relative overflow-hidden p-8 md:p-10"
          >
            {/* Decorative quote */}
            <Quote size={48} className="absolute right-6 top-6 text-sage/20" />

            {/* Highlight badge */}
            <span className="tag-sage">{testimonials[active].highlight}</span>

            {/* Stars */}
            <div className="mt-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>

            {/* Quote text */}
            <p className="mt-5 font-display text-xl font-medium leading-relaxed text-deep md:text-2xl">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>

            {/* Author */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald to-sage text-sm font-bold text-white shadow-soft">
                {testimonials[active].name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-deep">{testimonials[active].name}</p>
                <p className="text-xs text-mocha">{testimonials[active].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress indicators */}
      <div className="flex items-center justify-center gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => { setActive(index); setProgress(0); }}
            className="relative h-2 overflow-hidden rounded-full transition-all duration-300"
            style={{ width: active === index ? '48px' : '12px' }}
            aria-label={`View testimonial ${index + 1}`}
          >
            <span className="absolute inset-0 bg-[rgba(123,163,123,0.15)]" />
            {active === index && (
              <motion.span
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald to-sage"
                style={{ width: `${progress}%` }}
              />
            )}
            {active !== index && (
              <span className="absolute inset-0 rounded-full bg-[rgba(123,163,123,0.2)]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
