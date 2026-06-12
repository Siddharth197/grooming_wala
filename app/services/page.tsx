'use client';

import { motion } from 'framer-motion';
import { PackageGrid } from '../../components/PackageGrid';
import { ServiceCard } from '../../components/ServiceCard';
import { FAQAccordion } from '../../components/FAQAccordion';
import { faqItems } from '../../lib/data';

export default function ServicesPage() {
  const spaServices = [
    { title: "Signature Spa", price: "₹2,499", description: "A deeply relaxing full-body treatment featuring aromatherapy.", features: ['Aromatherapy Bath', 'Blueberry Facial', 'Nail Buffing'] },
    { title: "Breed Styling", price: "₹3,499", description: "Precision haircuts customized to breed standards.", features: ['Custom Haircut', 'De-shedding', 'Ear Cleaning'] },
    { title: "Express Fresh", price: "₹1,299", description: "A quick but luxurious refresh for pets on the go.", features: ['Premium Wash', 'Blow Dry', 'Cologne Spritz'] },
    { title: "Puppy's First Spa", price: "₹1,899", description: "A gentle introduction to grooming for puppies under 6 months.", features: ['Tearless Bath', 'Light Trim', 'Paw Balm'] },
    { title: "De-Shedding Mud Bath", price: "₹2,899", description: "Dead Sea mineral mud bath to dramatically reduce shedding.", features: ['Mud Massage', 'Undercoat Removal', 'Hydrating Spray'] },
    { title: "Feline Elegance", price: "₹2,199", description: "Specialized calm grooming exclusively for cats.", features: ['Waterless Bath option', 'Nail Caps', 'Gentle Brush'] },
  ];

  const packages = [
    { name: 'Essential Care', price: '₹1,999/mo', benefits: ['1 Express Fresh session', 'Nail clipping', 'Ear cleaning'] },
    { name: 'Luxury Member', price: '₹3,999/mo', benefits: ['2 Signature Spa sessions', 'Teeth brushing', 'Priority booking'] },
    { name: 'Royal Treatment', price: '₹6,999/mo', benefits: ['Unlimited Express Fresh', '1 Breed Styling', 'Free VIP upgrades'] }
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
          <span className="tag-gold mb-6 inline-block">Menu of Services</span>
          <h1 className="font-display text-5xl font-bold text-deep md:text-6xl">
            Spa Treatments & <span className="gradient-text italic">Memberships.</span>
          </h1>
        </motion.div>

        {/* Services */}
        <div className="mt-24">
          <h2 className="font-display text-3xl font-bold text-deep">A La Carte Spa Services</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spaServices.map((svc, i) => (
              <ServiceCard key={svc.title} index={i} {...svc} />
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mt-32">
          <h2 className="font-display text-3xl font-bold text-deep">Membership Plans</h2>
          <p className="mt-4 text-lg text-mocha">Keep your pet looking perfect year-round with our exclusive memberships.</p>
          <PackageGrid packages={packages} />
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-32 max-w-3xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-deep">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-mocha">Everything you need to know before your visit.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </div>
  );
}
