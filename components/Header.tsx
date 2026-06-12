'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';
import logo from '../Image/logo.png';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Booking', href: '/booking' },
  { label: 'Contact', href: '/contact' }
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[rgba(123,163,123,0.15)] bg-[rgba(255,255,255,0.85)] backdrop-blur-2xl shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative">
                <img src={logo.src} alt="Grooming Wala logo" className="h-11 w-11 rounded-full object-contain transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(123,163,123,0.3)]" />
              </div>
              <span className="font-display text-xl font-semibold tracking-wide text-deep transition-colors group-hover:text-sage">
                Grooming Wala
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item, i) => (
              <motion.div key={item.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 * i }}>
                <Link
                  href={item.href}
                  className="relative text-sm font-medium text-mocha transition-colors duration-300 hover:text-emerald after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-emerald after:to-sage after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            {/* Instagram Icon Link */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 * (navItems.length) }}>
              <a href="https://instagram.com/groomingwala" target="_blank" rel="noreferrer" className="text-emerald hover:text-sage">
                <Instagram size={20} />
              </a>
            </motion.div>
          </nav>

          {/* Desktop CTA */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="hidden md:block">
            <Link
              href="/booking"
              className="glow-btn shimmer inline-flex items-center rounded-full bg-gradient-to-r from-emerald to-sage px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300"
            >
              Book now
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-xl border border-[rgba(123,163,123,0.3)] bg-[rgba(255,255,255,0.5)] p-2.5 text-emerald transition hover:bg-[rgba(123,163,123,0.1)] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-deep/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-[rgba(123,163,123,0.2)] bg-offwhite p-8 shadow-2xl md:hidden"
            >
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="mb-8 self-end rounded-xl border border-[rgba(123,163,123,0.3)] bg-white p-2 text-emerald transition hover:bg-[rgba(123,163,123,0.1)]"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
              <div className="flex flex-col gap-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center rounded-2xl px-4 py-3 text-base font-medium text-deep transition-all hover:bg-[rgba(123,163,123,0.1)] hover:text-emerald"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto">
                <Link
                  href="/booking"
                  onClick={() => setMobileOpen(false)}
                  className="mt-6 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald to-sage px-6 py-3.5 text-sm font-semibold text-white shadow-soft"
                >
                  Book now
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
