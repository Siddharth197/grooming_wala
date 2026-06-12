'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/917417909911"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      className="group fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow hover:bg-[#1ebd5b]"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Pulse ring */}
      <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-[#25D366] opacity-60" />
      
      <MessageCircle size={28} className="transition-transform duration-300 group-hover:scale-110" />

      {/* Tooltip */}
      <span className="pointer-events-none absolute -top-12 right-0 w-max translate-y-2 rounded-xl border border-[rgba(123,163,123,0.2)] bg-white px-4 py-2 text-sm font-medium text-deep opacity-0 shadow-soft transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        Chat with us! 🐾
      </span>
    </motion.a>
  );
}
