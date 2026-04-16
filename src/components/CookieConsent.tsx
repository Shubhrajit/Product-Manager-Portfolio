import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('portfolio__cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('portfolio__cookie_consent', 'accepted');
    setIsVisible(false);
    // If analytics were present, we would initialize them here.
  };

  const handleDecline = () => {
    localStorage.setItem('portfolio__cookie_consent', 'declined');
    setIsVisible(false);
    // If analytics were present, we would ensure they are NOT injected.
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">We value your privacy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept all", you consent to our use of cookies. Read our <a href="#/privacy-policy" className="text-brand-400 hover:underline">Privacy Policy</a> for more details.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0 w-full md:w-auto">
              <button
                id="cookie-btn-decline"
                onClick={handleDecline}
                className="flex-1 md:flex-none px-6 py-3 rounded-full text-sm font-medium border border-gray-700 hover:bg-gray-800 transition-colors"
              >
                Decline
              </button>
              <button
                id="cookie-btn-accept"
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-3 rounded-full text-sm font-medium bg-brand-600 hover:bg-brand-700 transition-colors"
              >
                Accept all
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
