import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Routes, Route, Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { 
  Menu,
  X
} from 'lucide-react';

import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import { APP_VERSION, VERSION_NOTES, SCROLL_OFFSET_ACTIVE, SCROLL_OFFSET_CLICK } from './constants';

// CASE_STUDIES moved to constants.tsx

// EXPERTISE moved to constants.tsx

// EXPERIENCE moved to constants.tsx

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [versionInfo, setVersionInfo] = useState({
    version: APP_VERSION,
    notes: VERSION_NOTES
  });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch latest commit for automatic versioning
    const fetchVersion = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        const res = await fetch('https://api.github.com/repos/shubhrajit/Product-Manager-Portfolio/commits/main', {
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!res.ok) {
          console.warn(`GitHub API returned status: ${res.status}. Using fallback version info.`);
          return; // Keep default version info from constants
        }
        
        const data = await res.json();
        if (data && data.sha && data.commit) {
          const shortSha = data.sha.substring(0, 7);
          const messageLines = data.commit.message.split('\n').filter((line: string) => line.trim() !== '');
          setVersionInfo({
            version: `v-${shortSha}`,
            notes: messageLines.slice(0, 4) // Show up to 4 lines of the commit message
          });
        }
      } catch (err) {
        console.warn('Failed to fetch version info, using fallback:', err);
      }
    };

    fetchVersion();
  }, []);

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
          <div className="flex flex-col">
            <Link 
              to="/" 
              onClick={() => handleNavClick('home')}
              className="font-display font-bold text-xl tracking-tight leading-none"
            >
              SC.
            </Link>
            <button 
              onClick={() => handleNavClick('work')}
              className="text-[10px] text-slate-400 hover:text-brand-600 font-mono mt-1 group relative text-left transition-colors"
            >
              {versionInfo.version}
              <div className="absolute top-full left-0 mt-2 w-56 p-4 bg-brand-900 text-white text-xs rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 font-sans border border-slate-800">
                <p className="font-semibold mb-2 text-brand-200 uppercase tracking-wider text-[10px]">Latest Updates</p>
                <ul className="space-y-1.5 text-slate-300">
                  {versionInfo.notes.map((note, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-brand-500">•</span>
                      <span className="leading-tight">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          </div>
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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </main>

      <CookieConsent />
    </div>
  );
}
