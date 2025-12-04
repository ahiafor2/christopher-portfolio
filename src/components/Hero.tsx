import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { HERO_DATA, CV_LINK, ASSETS } from '../constants';
import { motion } from 'framer-motion';
import { useScrollTo } from '../hooks/useScrollTo';

const Hero: React.FC = () => {
  const scrollTo = useScrollTo();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950 pt-20" aria-label="Introduction">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('${ASSETS.HERO_BG}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/95 to-dark-950/60"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 bg-[size:30px_30px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:items-start text-center lg:text-left">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block px-3 py-1 border border-industrial-500/30 rounded-full bg-industrial-500/10 backdrop-blur-sm"
        >
            <span className="text-industrial-500 font-mono text-xs sm:text-sm uppercase tracking-widest font-semibold">
                Available for Projects
            </span>
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight"
        >
            {HERO_DATA.name}
        </motion.h1>

        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-industrial-500 font-mono mb-8 uppercase tracking-widest"
        >
            {HERO_DATA.title}
        </motion.h2>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed font-light"
        >
            {HERO_DATA.tagline}
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
            <a 
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="px-8 py-4 bg-industrial-500 text-dark-950 font-bold uppercase tracking-widest text-sm hover:bg-industrial-400 transition-all rounded-sm flex items-center justify-center gap-2 group"
                aria-label="Hire me"
            >
                Hire Me 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            
            <a 
                href={CV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-slate-700 text-white font-bold uppercase tracking-widest text-sm hover:border-white hover:bg-white/5 transition-all rounded-sm flex items-center justify-center gap-2 group"
                aria-label="Download CV"
            >
                Download CV
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" aria-hidden="true" />
            </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-industrial-500 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;