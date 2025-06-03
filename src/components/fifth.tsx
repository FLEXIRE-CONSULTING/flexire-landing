import { FaHandPointRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import background from '../assets/BGHERO4.jpeg';

const Fifth = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const circleVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.7,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={background}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Circle */}
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="p-8 bg-blue-900/80 backdrop-blur-lg rounded-full aspect-square max-w-md w-full flex flex-col justify-center"
            variants={circleVariants}
            whileHover={{ scale: 1.02, opacity: 0.8 }}
          >
            <h3 className="text-center font-lexend text-2xl md:text-3xl font-medium text-white mb-6">
              What sets us apart?
            </h3>
            <ul className="space-y-4 font-lexend text-white/90">
              {[
                "Customized Solution",
                "Expertise Across Industries",
                "Data-Driven Approach"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center gap-3 text-sm md:text-base"
                  whileHover={{ x: 5 }}
                >
                  <FaHandPointRight className="text-yellow-400 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Right Circle */}
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="p-8 bg-red-600/60 backdrop-blur-lg rounded-full aspect-square max-w-md w-full flex flex-col justify-center"
            variants={circleVariants}
            whileHover={{ scale: 1.02, opacity: 0.8 }}
          >
            <h3 className="text-center font-lexend text-2xl md:text-3xl font-medium text-white mb-6">
              Market Insights
            </h3>
            <motion.p 
              className="font-lexend text-white/90 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              The demand for data-driven decision-making is growing across all industries. 
              Our target markets include: Real Estate, Aerospace, Immigration, Security, 
              Oil and Gas, Transportation (Both Land and Rail), Healthcare, Government-Owned 
              Organizations, SMEs
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Fifth;