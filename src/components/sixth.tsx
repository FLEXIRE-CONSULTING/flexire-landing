import { motion, AnimatePresence } from 'framer-motion';
//import image from '../assets/formSection.svg';
import { useState } from 'react';
import { FormEvent } from 'react';

const Sixth = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

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
      
      if (!response.ok) throw new Error('Submission failed');
      
      // Visual feedback sequence
      setIsLoading(false);
      setShowSuccess(true);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Show success for 2 seconds
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      setIsLoading(false);
      setError( `${error} && 'Failed to send. Please try again or email us directly at info@flexireconsulting.biz'`);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#f5f2e9] to-[#e5dfc8] flex items-center justify-center overflow-hidden" id='contact'>
      {/* ... (other decorative elements remain the same) ... */}

      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        {/* Image Section (unchanged) */}

        {/* Form Section */}
        <motion.div className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-sm p-8 sm:p-10 rounded-xl shadow-lg border border-gray-100">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"
                >
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </motion.div>
              </div>
              <h2 className="font-lexend font-bold text-3xl md:text-4xl text-[#135A84] mb-4">
                Message Sent!
              </h2>
              <p className="font-lexend text-gray-600 mb-8">
                We've received your message and will get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="group flex items-center justify-center gap-3 bg-[#135A84] hover:bg-[#0f4a6f] text-white font-lexend font-semibold text-lg py-3.5 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send Another Message
                </button>
              </div>
            </motion.div>
          ) : (
            <>
              <h2 className="font-lexend font-bold text-3xl md:text-4xl text-[#135A84] mb-4">
                Let's collaborate
              </h2>

              <p className="font-lexend text-gray-600 mb-8">
                Ready to transform your business with data? Reach out and we'll get back to you within 24 hours.
              </p>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 font-lexend"
                  >
                    <p>{error}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 font-lexend"
                  >
                    <p>✓ Message sent successfully!</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form 
                action="https://formsubmit.co/info@flexireconsulting.biz"
                method="POST"
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                {/* Form fields remain the same */}
                
                <div className="mt-4">
                  <button 
                    type="submit"
                    className={`group flex items-center justify-center gap-3 bg-[#135A84] hover:bg-[#0f4a6f] text-white font-lexend font-semibold text-lg py-3.5 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg w-full ${
                      isLoading ? 'opacity-80 cursor-not-allowed' : ''
                    }`}
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
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Sixth;