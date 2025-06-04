import { motion } from 'framer-motion';
import image from '../assets/formSection.svg';
import { useState } from 'react';
import { FormEvent } from 'react';

const Sixth = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to send message. Please try again later or contact us directly at info@flexireconsulting.biz');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#f5f2e9] to-[#e5dfc8] flex items-center justify-center overflow-hidden" id='contact'>
      {/* Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#135A84]/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#c46e65]/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        {/* Image Section */}
        <motion.div 
          className="hidden lg:flex justify-center items-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative w-full max-w-xl">
            <motion.img
              src={image}
              alt="Contact illustration"
              className="w-full h-auto object-contain drop-shadow-2xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-sm p-8 sm:p-10 rounded-xl shadow-lg border border-gray-100"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-6">
                <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="font-lexend font-bold text-3xl md:text-4xl text-[#135A84] mb-4">
                Thank You!
              </h2>
              <p className="font-lexend text-gray-600 mb-8">
                We appreciate you reaching out. Your message has been sent successfully and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="group flex items-center justify-center gap-3 bg-[#135A84] hover:bg-[#0f4a6f] text-white font-lexend font-semibold text-lg py-3.5 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send Another Message
                </button>
                <a 
                  href="#contact" 
                  className="group flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[#135A84] font-lexend font-semibold text-lg py-3.5 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200"
                >
                  Close
                </a>
              </div>
            </motion.div>
          ) : (
            <>
              <motion.h2 
                className="font-lexend font-bold text-3xl md:text-4xl text-[#135A84] mb-4"
                variants={itemVariants}
              >
                Let's collaborate
              </motion.h2>

              <motion.p 
                className="font-lexend text-gray-600 mb-8"
                variants={itemVariants}
              >
                Ready to transform your business with data? Reach out and we'll get back to you within 24 hours.
              </motion.p>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 font-lexend"
                >
                  <p>{error}</p>
                </motion.div>
              )}

              <motion.form 
                action="https://formsubmit.co/info@flexireconsulting.biz"
                method="POST"
                className="flex flex-col gap-4"
                variants={containerVariants}
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_captcha" value="false" />

                {[ 
                  { type: "text", name: "name", placeholder: "Your Name" },
                  { type: "email", name: "email", placeholder: "Email Address" },
                  { type: "tel", name: "phone", placeholder: "Phone Number" },
                  { type: "text", name: "organization", placeholder: "Organization" }
                ].map((field, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <input
                      required
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="font-lexend text-gray-700 text-base w-full p-3.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#135A84]/50 focus:border-[#135A84] transition-all duration-300 hover:border-gray-300"
                      disabled={isLoading}
                    />
                  </motion.div>
                ))}

                <motion.div variants={itemVariants}>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project needs..."
                    className="font-lexend text-gray-700 text-base w-full p-3.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#135A84]/50 focus:border-[#135A84] resize-none transition-all duration-300 hover:border-gray-300"
                    disabled={isLoading}
                  />
                </motion.div>

                <motion.div 
                  className="mt-4"
                  variants={itemVariants}
                >
                  <motion.button 
                    type="submit"
                    className="group flex items-center justify-center gap-3 bg-[#135A84] hover:bg-[#0f4a6f] text-white font-lexend font-semibold text-lg py-3.5 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={!isLoading ? { scale: 1.02, boxShadow: "0 4px 20px -6px rgba(19, 90, 132, 0.5)" } : {}}
                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Email Us"
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Sixth;