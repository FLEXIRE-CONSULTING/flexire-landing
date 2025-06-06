import { motion } from 'framer-motion';
import background from '../assets/BGHERO1.svg';
import logo from '../assets/logo2.svg';
import { useEffect, useState } from 'react';

const First = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = ['home', 'about', 'services', 'contact'].map((link) => (
    <motion.li
      key={link}
      className={`px-3 py-2 sm:px-5 sm:py-3 cursor-pointer capitalize font-[Inria_Sans] relative group ${
        activeSection === link ? 'text-[#1E3A8A]' : 'text-white' // Changed to deep blue
      }`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      onClick={() => handleNavClick(link)}
    >
      {link}
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-[#1E3A8A] transition-all duration-300 ${ // Changed to deep blue
          activeSection === link ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </motion.li>
  ));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className='relative h-screen w-full overflow-hidden' id="home">
      {/* Background with Gradient Overlay */}
      <motion.div
        className='absolute top-0 left-0 z-[-1] w-full h-full'
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={background}
          alt='background'
          className='object-cover w-full h-full'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 backdrop-blur-[1px]' />
      </motion.div>

      {/* Navbar */}
      <motion.nav
        className='flex justify-between items-center h-[80px] sm:h-[90px] px-6 sm:px-8 md:px-12 lg:px-24 py-4'
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <motion.div
          className='h-10 sm:h-12'
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={logo}
            alt='Flexire Logo'
            className='h-full object-contain'
          />
        </motion.div>
        <ul className='flex items-center gap-1 sm:gap-3'>{navLinks}</ul>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className='flex flex-col justify-center h-[calc(100vh-90px)] px-6 sm:px-12 lg:px-24 xl:px-32 text-left max-w-6xl'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.h1
          className='font-[Lexend] font-bold text-5xl sm:text-6xl md:text-7xl leading-tight text-white mb-8'
          variants={itemVariants}
        >
          Powering Smarter Decisions.<span></span><br /> {/* Changed to deep blue */}
          Driven by Data & AI.
        </motion.h1>

        <motion.p
          className='font-[Inria_Sans] text-lg text-gray-200 max-w-3xl mb-12 leading-relaxed'
          variants={itemVariants}
        >
          We unlock actionable insights from your data assets, transforming information into strategic advantage and measurable business outcomes.
        </motion.p>

        <motion.div className='flex flex-col sm:flex-row gap-4' variants={itemVariants}>
          <motion.button
            className='font-[Lexend] font-medium text-white rounded-full bg-[#1E3A8A] px-8 py-4 text-lg capitalize hover:bg-[#2E4A9A] transition-all duration-300 shadow-lg hover:shadow-xl'
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick('contact')}
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default First;