import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section className="py-32 bg-dark-900 border-y border-white/5 relative overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 id="testimonials-heading" className="text-industrial-500 font-mono text-sm uppercase tracking-widest mb-4">Endorsements</h2>
          <h3 className="text-2xl sm:text-4xl font-display font-bold text-white text-center">Trusted by Industry Leaders</h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-dark-950 border border-white/5 p-8 md:p-16 flex flex-col items-center text-center shadow-2xl">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-industrial-500 opacity-20 hidden md:block">
                <Quote size={60} />
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center w-full z-10"
              >
                {/* Quote Text */}
                <p className="text-xl md:text-2xl text-slate-300 font-light italic mb-10 leading-relaxed max-w-2xl">
                "{TESTIMONIALS_DATA[currentIndex].quote}"
                </p>

                {/* Image - Moved above name */}
                <div className="w-16 h-16 md:w-20 md:h-20 relative rounded-full overflow-hidden border-2 border-slate-600 hover:border-industrial-500 transition-colors duration-300 mb-4 shadow-lg group">
                    <img 
                    src={TESTIMONIALS_DATA[currentIndex].image} 
                    alt={TESTIMONIALS_DATA[currentIndex].name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                    />
                </div>

                {/* Name & Role */}
                <div>
                    <h5 className="font-display font-bold text-white text-xl uppercase tracking-wide">{TESTIMONIALS_DATA[currentIndex].name}</h5>
                    <p className="text-industrial-500 font-mono text-xs mt-1">{TESTIMONIALS_DATA[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex gap-2 mt-8">
                <button onClick={prevSlide} className="p-3 border border-white/10 hover:bg-white/5 hover:border-industrial-500 text-slate-400 hover:text-white transition-all rounded-full">
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={nextSlide} className="p-3 border border-white/10 hover:bg-white/5 hover:border-industrial-500 text-slate-400 hover:text-white transition-all rounded-full">
                    <ChevronRight className="h-5 w-5" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;