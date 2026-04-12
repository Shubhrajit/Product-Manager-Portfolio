import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Menu,
  X
} from 'lucide-react';

import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookieConsent from './components/CookieConsent';

const SCROLL_OFFSET_ACTIVE = 100;
const SCROLL_OFFSET_CLICK = 80;

// CASE_STUDIES moved to constants.tsx

// EXPERTISE moved to constants.tsx

// EXPERIENCE moved to constants.tsx

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/') return;

    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const sections = ['home', 'work', 'expertise', 'experience'];
        const scrollPosition = window.scrollY + SCROLL_OFFSET_ACTIVE;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
            }
          }
        }
      }, 50); // 50ms throttle
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [location.pathname]);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({ top: element.offsetTop - SCROLL_OFFSET_CLICK, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - SCROLL_OFFSET_CLICK, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-100 selection:text-brand-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link 
            to="/" 
            onClick={() => handleNavClick('home')}
            className="font-display font-bold text-xl tracking-tight"
          >
            SC.
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {['Work', 'Expertise', 'Experience'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                  location.pathname === '/' && activeSection === item.toLowerCase() ? 'text-brand-600' : 'text-gray-500'
                }`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-brand-600 transition-colors"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col space-y-4"
          >
            {['Work', 'Expertise', 'Experience'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`text-base font-medium transition-colors text-left ${
                  location.pathname === '/' && activeSection === item.toLowerCase() ? 'text-brand-600' : 'text-gray-600'
                }`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="inline-block text-center px-5 py-3 mt-2 bg-gray-900 text-white text-base font-medium rounded-full hover:bg-brand-600 transition-colors"
            >
              Let's Talk
            </button>
          </motion.div>
        )}
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        {/* Contact/Footer */}
        <section id="contact" className="py-24 px-6 border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Let's build something great.</h2>
            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
              I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a 
              href="https://forms.gle/rKi2Ac8KYrztpL5E8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-600 text-white rounded-full font-medium hover:bg-brand-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Say Hello</span>
            </a>

            <div className="mt-32 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Shubhrajit Choudhury. All rights reserved.</p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <Link to="/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy</Link>
                <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms</Link>
                <a href="https://www.linkedin.com/in/shubhrajitchoudhury" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CookieConsent />
    </div>
  );
}
