import { motion } from 'framer-motion';
import { FaDotCircle } from 'react-icons/fa';
import background from '../assets/BGHERO1.svg';
import logo from '../assets/FLEXIRE.svg';
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
        activeSection === link ? 'text-[#c46e65]' : 'text-white'
      }`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      onClick={() => handleNavClick(link)}
    >
      {link}
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-[#c46e65] transition-all duration-300 ${
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
      {/* Background Image with Parallax Effect */}
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
        <div className='absolute inset-0 bg-black/30 backdrop-blur-sm' />
      </motion.div>

      {/* Navbar */}
      <motion.nav
        className='flex justify-between items-center h-[80px] sm:h-[120px] px-6 sm:px-8 md:px-12 lg:px-24 py-4'
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <motion.div
          className='h-full'
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
        className='flex flex-col justify-center h-[calc(100vh-120px)] px-6 sm:px-12 lg:px-24 xl:px-32 text-left max-w-4xl'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          className='flex items-center gap-3 mb-4 sm:mb-6'
          variants={itemVariants}
        >
          <FaDotCircle className='text-white text-lg sm:text-xl' />
          <span className='font-[Lexend] font-bold text-lg sm:text-xl text-[#f3f6fb] tracking-wider'>
            Flexire Consulting
          </span>
        </motion.div>

        <motion.h2
          className='font-[Lexend] font-bold text-4xl sm:text-5xl md:text-4.5xl leading-tight text-white mb-6 sm:mb-8'
          variants={itemVariants}
        >
          Powering Smarter Decisions.{' '}
          <span className='text-[#c46e65]'>Fueling Business Growth.</span>{' '}
          Driven by Data and AI
        </motion.h2>

        <motion.div variants={itemVariants}>
          <motion.button
            className='font-[Lexend] font-medium text-white rounded-full bg-[#053C7F] px-8 py-4 text-lg capitalize hover:bg-[#0a4b97] transition-all duration-300 shadow-lg hover:shadow-xl'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick('contact')}
          >
            Get a Consultation
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default First;