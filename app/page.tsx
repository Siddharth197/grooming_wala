'use client';

import { motion } from 'framer-motion';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { servicesList, faqItems, testimonials, instagramPosts } from '../lib/data';
import { CheckCircle, ShieldCheck, Heart } from 'lucide-react';
import { InstagramSection } from '../components/InstagramSection';

export default function Home() {
  return (
    <div className="relative">
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="container relative z-10 mx-auto px-6 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
              <span className="tag-sage mb-6 inline-block">Premium Pet Care</span>
              <h1 className="font-display text-5xl font-bold leading-tight text-deep md:text-7xl lg:leading-[1.1]">
                Luxury grooming for <span className="gradient-text italic">beloved pets.</span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-mocha md:text-xl">
                Experience a calm, stress-free spa day tailored to your pet's needs. Because they deserve the absolute best.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a href="/booking" className="glow-btn shimmer inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald to-sage px-8 py-4 text-base font-semibold text-white shadow-soft transition-all duration-300">
                  Book an appointment
                </a>
                <a href="/services" className="inline-flex items-center justify-center rounded-full border border-[rgba(123,163,123,0.4)] bg-[rgba(255,255,255,0.5)] px-8 py-4 text-base font-semibold text-emerald transition-all duration-300 hover:bg-white hover:shadow-soft">
                  Explore services
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-14 flex items-center gap-8 border-t border-[rgba(123,163,123,0.2)] pt-8 text-sm text-mocha font-medium">
                <div className="flex items-center gap-2"><ShieldCheck size={20} className="text-emerald" /> Certified Stylists</div>
                <div className="flex items-center gap-2"><Heart size={20} className="text-emerald" /> Cage-Free</div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/5] w-full">
                {/* Decorative border */}
                <div className="absolute -inset-4 rounded-3xl border border-[rgba(123,163,123,0.2)] bg-[rgba(255,255,255,0.4)] backdrop-blur-sm transition-transform duration-700 hover:scale-[1.02]" />
                
                {/* Main image card */}
                <div className="glass-card absolute inset-0 flex flex-col overflow-hidden p-3 shadow-deep hover:shadow-glow">
                  <div className="relative flex-1 overflow-hidden rounded-2xl border border-[rgba(123,163,123,0.15)]">
                    <img
                      src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=1200&q=80"
                      alt="Happy groomed pet"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Floating stat inside image */}
                  <div className="absolute bottom-10 -left-6 rounded-2xl border border-[rgba(123,163,123,0.2)] bg-white/95 p-5 shadow-glow backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald to-sage text-white">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <p className="font-display text-2xl font-bold text-deep">5,000+</p>
                        <p className="text-xs font-semibold uppercase tracking-wider text-mocha">Happy Pets</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
            <span className="tag-gold mb-4 inline-block">The Spa Menu</span>
            <h2 className="font-display text-4xl font-bold text-deep md:text-5xl">Signature Treatments</h2>
            <p className="mt-6 text-lg text-mocha">Everything from relaxing baths to full stylistic transformations, performed with premium natural products.</p>
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard 
              index={0}
              title="Signature Spa" 
              price="₹2,499" 
              description="A deeply relaxing full-body treatment featuring aromatherapy, hydro-massage, and premium conditioning." 
              features={['Aromatherapy Bath', 'Blueberry Facial', 'Nail Buffing']} 
            />
            <ServiceCard 
              index={1}
              title="Breed Styling" 
              price="₹3,499" 
              description="Precision haircuts customized to breed standards or your personal preference by our master stylists." 
              features={['Custom Haircut', 'De-shedding', 'Ear Cleaning']} 
            />
            <ServiceCard 
              index={2}
              title="Express Fresh" 
              price="₹1,299" 
              description="A quick but luxurious refresh for pets on the go. Perfect between full grooming sessions." 
              features={['Premium Wash', 'Blow Dry', 'Cologne Spritz']} 
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="tag-sage mb-4 inline-block">Client Love</span>
              <h2 className="font-display text-4xl font-bold text-deep md:text-5xl">Hear from our pet parents</h2>
              <p className="mt-6 text-lg leading-relaxed text-mocha">Don't just take our word for it. See why thousands of pet parents trust Grooming Wala for their furry family members.</p>
              
              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-[rgba(123,163,123,0.2)] pt-10">
                <div>
                  <p className="font-display text-4xl font-bold text-deep">4.9/5</p>
                  <p className="mt-2 text-sm text-mocha">Average rating on Google</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-bold text-deep">98%</p>
                  <p className="mt-2 text-sm text-mocha">Return client rate</p>
                </div>
              </div>
            </motion.div>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="font-display text-4xl font-bold text-deep">Our Styling Gallery</h2>
              <p className="mt-4 text-lg text-mocha">Follow our daily transformations.</p>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[rgba(123,163,123,0.4)] bg-[rgba(255,255,255,0.6)] px-6 py-3 text-sm font-semibold text-emerald transition hover:bg-white hover:shadow-soft">
              Follow @groomingwala
            </a>
          </motion.div>
          <InstagramSection posts={instagramPosts} />
        </div>
      </section>
    </div>
  );
}
