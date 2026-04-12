import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_VERSION, VERSION_NOTES } from '../constants';

export default function Footer() {
  const [time, setTime] = useState<string>('');
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata', // Assuming India based on IIMU/SRM/TCS
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }) + ' IST');
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3; // 0.3 is the magnetic pull strength
    const y = (e.clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section id="contact" className="relative bg-brand-900 text-white min-h-[80vh] flex flex-col justify-between px-6 pt-32 pb-12 overflow-hidden">
      {/* Background subtle elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto w-full flex-grow flex flex-col items-center justify-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Have an idea? <br />
            <span className="text-brand-500">Let's build it.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-16 max-w-xl mx-auto leading-relaxed">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you.
          </p>
          
          <motion.a 
            ref={buttonRef}
            href="https://forms.gle/rKi2Ac8KYrztpL5E8"
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="inline-flex items-center justify-center space-x-3 px-10 py-5 bg-white text-brand-900 rounded-full font-bold text-lg hover:bg-brand-50 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          >
            <Mail className="w-5 h-5" />
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-5 h-5 opacity-50" />
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Footer Area */}
      <div className="max-w-6xl mx-auto w-full mt-24 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 z-10">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
          <span>Local Time in India: {time}</span>
          <span className="mx-2 text-slate-700">|</span>
          <button 
            onClick={() => {
              const element = document.getElementById('work');
              if (element) {
                window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
              }
            }}
            className="group relative hover:text-white transition-colors font-mono text-xs"
          >
            {APP_VERSION}
            <div className="absolute bottom-full left-0 md:left-1/2 md:-translate-x-1/2 mb-2 w-48 p-2 bg-white text-brand-900 text-xs rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 text-left font-sans leading-relaxed">
              {VERSION_NOTES}
            </div>
          </button>
        </div>
        
        <div className="flex items-center space-x-8">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          <a href="https://www.linkedin.com/in/shubhrajitchoudhury" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </section>
  );
}
