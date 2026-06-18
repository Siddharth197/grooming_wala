'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { RandomPetImage } from '../../components/RandomPetImage';

export default function ContactPage() {
  const cards = [
    { icon: MapPin, title: 'Visit the Spa', text: 'Roorkee, Uttarakhand', delay: 0.1 },
    { icon: Phone, title: 'Call Us', text: '+91 74179 09911', delay: 0.2 },
    { icon: Mail, title: 'Email', text: 'gromingwala@gmail.com', delay: 0.3 },
    { icon: Clock, title: 'Hours', text: 'Tue - Sun: 9AM - 7PM\nMon: Closed', delay: 0.4 },
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
          <span className="tag-sage mb-6 inline-block">Get in Touch</span>
          <h1 className="font-display text-5xl font-bold leading-tight text-deep md:text-6xl">
            We'd love to <span className="gradient-text italic">hear from you.</span>
          </h1>
        </motion.div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: card.delay }}
                className="glass-card flex flex-col items-center p-8 text-center"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(123,163,123,0.1)] text-emerald">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-deep">{card.title}</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-mocha">{card.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Pet visual and map placeholder */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card overflow-hidden p-2"
          >
            <RandomPetImage caption="Visit our spa soon" className="h-[400px]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="glass-card overflow-hidden p-2"
          >
            <div className="flex h-[400px] w-full items-center justify-center rounded-[1.25rem] border border-[rgba(123,163,123,0.15)] bg-[#f0f0e6] relative overflow-hidden">
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1a3324 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               <div className="relative text-center">
                 <MapPin size={48} className="mx-auto text-emerald drop-shadow-lg animate-bounce" />
                 <p className="mt-4 font-display text-xl font-bold text-deep">Location Map</p>
                 <p className="text-sm text-mocha">Roorkee, Uttarakhand</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
