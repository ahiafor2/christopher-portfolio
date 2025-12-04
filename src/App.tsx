import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-200 font-sans selection:bg-industrial-500 selection:text-white relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Achievements />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={scrollToTop}
                className="fixed bottom-20 md:bottom-8 right-6 z-[100] p-3 bg-industrial-500 text-dark-950 rounded-full shadow-xl shadow-industrial-500/30 hover:bg-white hover:text-industrial-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-industrial-500 focus:ring-offset-dark-950 border border-industrial-400/50"
                aria-label="Scroll to top"
            >
                <ArrowUp className="h-6 w-6" />
            </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;