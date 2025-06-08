import { motion } from 'framer-motion';
import background from '../assets/BGHERO1.svg';
import logo from '../assets/logo2.svg';
import { useEffect, useState } from 'react';

const First = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  const navLinks = ['home', 'about', 'services', 'contact'].map((link) => (
    <motion.li
      key={link}
      className={`px-2 py-1 sm:px-5 sm:py-3 cursor-pointer capitalize font-[Inria_Sans] relative group ${
        activeSection === link ? 'text-[#1E3A8A]' : 'text-white'
      }`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      onClick={() => handleNavClick(link)}
    >
      {link}
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-[#1E3A8A] transition-all duration-300 ${
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
        className='flex justify-between items-center h-[80px] sm:h-[90px] px-4 sm:px-8 md:px-12 lg:px-24 py-4'
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <motion.div
          className='h-12 sm:h-14' // Larger logo on mobile
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={logo}
            alt='Flexire Logo'
            className='h-full object-contain'
          />
        </motion.div>
        
        {/* Desktop Navigation */}
        <ul className='hidden sm:flex items-center gap-1 sm:gap-3'>
          {navLinks}
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className='sm:hidden text-white focus:outline-none'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="sm:hidden absolute top-[80px] left-0 right-0 bg-black/90 backdrop-blur-md z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks}
          </ul>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.section
        className='flex flex-col justify-center h-[calc(100vh-90px)] px-4 sm:px-12 lg:px-24 xl:px-32 text-left max-w-6xl'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
      <motion.h2
         className='font-[Lexend] font-bold text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-4xl leading-tight text-white mb-6 sm:mb-8'
        variants={itemVariants}
      >
        Powering Smarter Decisions.<br />
        Driven by Data & AI.
      </motion.h2>

        <motion.p
          className='font-[Inria_Sans] text-base sm:text-lg text-gray-200 max-w-3xl mb-8 sm:mb-12 leading-relaxed'
          variants={itemVariants}
        >
          We unlock actionable insights from your data assets, transforming information into strategic advantage and measurable business outcomes.
        </motion.p>

        <motion.div className='flex flex-col sm:flex-row gap-4' variants={itemVariants}>
          <motion.button
            className='font-[Lexend] font-medium text-white rounded-full bg-[#1E3A8A] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg capitalize hover:bg-[#2E4A9A] transition-all duration-300 shadow-lg hover:shadow-xl'
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