import Link from 'next/link';
import { Instagram, MessageCircle, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-[rgba(123,163,123,0.2)] bg-white">
      {/* Gradient divider */}
      <div className="section-divider" />

      <div className="container mx-auto px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-xl font-semibold text-deep">Grooming Wala</h3>
            <p className="mt-4 text-sm leading-7 text-mocha">
              Premium pet grooming appointments designed with an elegant, calming spa aesthetic. Where every pet feels loved.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(123,163,123,0.3)] bg-offwhite text-emerald transition-all hover:-translate-y-1 hover:border-emerald hover:bg-[rgba(123,163,123,0.1)] hover:shadow-soft" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/917417909911" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(123,163,123,0.3)] bg-offwhite text-emerald transition-all hover:-translate-y-1 hover:border-emerald hover:bg-[rgba(123,163,123,0.1)] hover:shadow-soft" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(123,163,123,0.3)] bg-offwhite text-emerald transition-all hover:-translate-y-1 hover:border-emerald hover:bg-[rgba(123,163,123,0.1)] hover:shadow-soft" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">Quick Links</h4>
            <div className="mt-6 flex flex-col gap-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'About', href: '/about' },
                { label: 'Booking', href: '/booking' }
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-mocha transition-colors hover:text-emerald">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">Services</h4>
            <div className="mt-6 flex flex-col gap-3">
              {['Pet Spa Signature', 'Deluxe Grooming', 'Express Glow', 'Aromatherapy'].map((service) => (
                <span key={service} className="text-sm text-mocha">{service}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">Contact</h4>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-start gap-3 text-sm text-mocha">
                <MapPin size={16} className="mt-0.5 shrink-0 text-emerald" />
                <span>Roorkee, Uttarakhand</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-mocha">
                <Phone size={16} className="shrink-0 text-emerald" />
                <span>+91 74179 09911</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-mocha">
                <Mail size={16} className="shrink-0 text-emerald" />
                <span>gromingwala@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-[rgba(123,163,123,0.2)] pt-8 text-center text-sm text-[rgba(74,92,80,0.6)]">
          © 2026 Grooming Wala. Crafted for calm, confidence, and care.
        </div>
      </div>
    </footer>
  );
}
