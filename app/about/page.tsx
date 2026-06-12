'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TestimonialCarousel } from '../../components/TestimonialCarousel';
import { testimonials as aboutTestimonials } from '../../lib/data';
import { Heart, ShieldCheck, Sparkles, Award } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: Heart, title: 'Unconditional Love', text: 'We treat every pet exactly as we treat our own—with patience, kindness, and deep affection.' },
    { icon: ShieldCheck, title: 'Absolute Safety', text: 'Our facilities are cage-free and meticulously sanitized, ensuring a stress-free environment.' },
    { icon: Sparkles, title: 'Premium Products', text: 'We exclusively use organic, hypoallergenic shampoos and conditioners that nourish the coat.' },
    { icon: Award, title: 'Master Stylists', text: 'Our groomers undergo rigorous training and certification in breed-specific styling and behavior.' },
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
          <span className="tag-sage mb-6 inline-block">Our Story</span>
          <h1 className="font-display text-5xl font-bold leading-tight text-deep md:text-6xl">
            Redefining the <span className="gradient-text italic">grooming experience.</span>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-mocha md:text-xl">
            Grooming Wala was founded on a simple belief: grooming should be a luxury spa day, not a stressful chore. 
            We've created a sanctuary where pets feel safe, loved, and leave looking their absolute best.
          </p>
        </motion.div>
        {/* Branding Image */}
        <section className="my-16 flex justify-center">
          <Image
            src="/branding.png"
            alt="Branding mockup"
            width={500}
            height={300}
            className="rounded-2xl shadow-glow"
          />
        </section>
        {/* Testimonials */}
        <section className="mt-20">
          <h2 className="font-display text-3xl font-bold text-deep text-center mb-8">What Our Clients Say</h2>
          <TestimonialCarousel testimonials={aboutTestimonials} />
        </section>

        {/* Values Grid */}
        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card group p-8 text-center"
              >
                <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[rgba(123,163,123,0.1)] to-[rgba(212,168,83,0.1)] text-emerald transition-transform duration-500 group-hover:scale-110 group-hover:bg-[rgba(123,163,123,0.2)]">
                  <Icon size={28} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-deep">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-mocha">{value.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
