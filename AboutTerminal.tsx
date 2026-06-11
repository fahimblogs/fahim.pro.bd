import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-20 px-4 w-full flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Moments & Art</h2>
        <div className="w-16 h-1 bg-theme mx-auto rounded-full"></div>
      </div>

      <div className="relative w-full max-w-4xl aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-zinc-800 bg-gray-100 dark:bg-zinc-900 group">
        
        {GALLERY_IMAGES.map((img, index) => (
          <div
            key={img.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
              index === activeIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay for Text Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {GALLERY_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
