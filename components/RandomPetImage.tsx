'use client';

import { useEffect, useState } from 'react';
import { getRandomPetImage } from '../lib/petImages';

interface RandomPetImageProps {
  alt?: string;
  className?: string;
  caption?: string;
}

export function RandomPetImage({ alt = 'Pet enjoying grooming', className = '', caption }: RandomPetImageProps) {
  const [image, setImage] = useState<{ src: string } | null>(null);

  useEffect(() => {
    setImage(getRandomPetImage());
  }, []);

  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-[#f8faf5] ${className}`.trim()}>
      {image ? (
        <img src={image.src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="h-full w-full bg-slate-100/80" />
      )}
      {caption ? (
        <div className="absolute left-4 bottom-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-deep shadow-sm">
          {caption}
        </div>
      ) : null}
    </div>
  );
}
