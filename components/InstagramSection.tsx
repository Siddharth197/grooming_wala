'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

interface InstagramPost {
  caption: string;
  image: string;
}

interface Props {
  posts: InstagramPost[];
}

export function InstagramSection({ posts }: Props) {
  return (
    <div className="mt-6 space-y-6">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] text-white">
          <Instagram size={16} />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mocha">@groomingwala</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post, i) => (
          <motion.div
            key={post.caption}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card group cursor-pointer overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.caption}
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[rgba(255,255,255,0.9)] via-[rgba(255,255,255,0.5)] to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <div className="text-center">
                  <Instagram size={28} className="mx-auto text-emerald" />
                  <p className="mt-2 text-sm font-semibold text-emerald">View on Instagram</p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="font-display text-sm font-semibold text-deep">{post.caption}</p>
              <p className="mt-2 text-xs text-mocha">Discover more spa moments and styling inspiration.</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
