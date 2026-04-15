import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  ExternalLink, 
  Github,
  Linkedin,
  Sparkles,
  Download
} from 'lucide-react';
import { CASE_STUDIES, EXPERTISE, EXPERIENCE } from '../constants';

import wnsLogo from '../assets/wns.png';
import tcsLogo from '../assets/tcs.png';
import pidiliteLogo from '../assets/pidilite.png';
import iimuLogo from '../assets/iimu.png';
import srmLogo from '../assets/srm.png';

const SCROLL_OFFSET = 80;

export default function Home() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - SCROLL_OFFSET,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="section-pad-premium px-6 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="motion-premium"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-8 border border-brand-100">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              <span>Available for new opportunities</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-brand-900">
              Building <span className="text-brand-600">GenAI & AgenticAI</span> products for enterprise transformation.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed">
              Hi, I'm Shubhrajit Choudhury. A Product & Digital Transformation Manager specializing in AI solutions. I lead end-to-end product lifecycles to deliver millions in cost savings and operational efficiency.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-20">
              <button 
                onClick={() => scrollTo('work')}
                className="px-8 py-4 bg-brand-900 text-white rounded-full font-medium hover:bg-brand-600 transition-colors flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Explore Enterprise Impact</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a 
                href={`${import.meta.env.BASE_URL}Shubhrajit_Choudhury.pdf`}
                download="Shubhrajit_Choudhury.pdf"
                className="px-8 py-4 bg-white text-brand-900 border border-brand-200 rounded-full font-medium hover:bg-brand-50 hover:border-brand-300 transition-colors flex items-center space-x-2 shadow-sm hover:shadow-md"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shubhrajitchoudhury" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 text-slate-500 hover:text-brand-900 bg-brand-50 hover:bg-brand-100 rounded-full transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 text-slate-500 hover:text-brand-900 bg-brand-50 hover:bg-brand-100 rounded-full transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Halo Effect: Proof-First Architecture */}
            <div className="pt-12 border-t border-gray-200/60">
              <p className="text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">
                Trusted by & Educated at
              </p>
              <div className="flex flex-wrap items-center gap-10 md:gap-16 lg:gap-20">
                <a href="https://www.wns.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-8 md:h-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <img src={wnsLogo} alt="WNS" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                </a>
                <a href="https://www.tcs.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-8 md:h-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <img src={tcsLogo} alt="TCS" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                </a>
                <a href="https://www.pidilite.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-14 md:h-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <img src={pidiliteLogo} alt="Pidilite" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                </a>
                <a href="https://www.iimu.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-16 md:h-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <img src={iimuLogo} alt="IIM Udaipur" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                </a>
                <a href="https://www.srmist.edu.in/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-10 md:h-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <img src={srmLogo} alt="SRM IST" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section-pad-premium bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-brand-900">Selected Work</h2>
            <p className="text-slate-500 text-lg">A collection of my recent product initiatives and case studies.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, index) => (
              <motion.div 
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group cursor-pointer flex flex-col motion-premium ${
                  index === 0 || index === 3 ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                <div className={`w-full ${index === 0 || index === 3 ? 'aspect-video md:aspect-[2.2/1]' : 'aspect-video md:aspect-square'} ${study.color} rounded-[2rem] mb-6 overflow-hidden relative flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]`}>
                  <div className="absolute inset-0 bg-brand-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Sparkles className="w-12 h-12 text-brand-900/10" />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-brand-50 border border-brand-100 rounded-full text-xs font-medium text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 text-brand-900 group-hover:text-brand-600 transition-colors flex items-center justify-between">
                  {study.title}
                  <ExternalLink className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {study.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Expertise & Stack</h2>
            <p className="text-gray-500 text-lg">The tools and frameworks I use to build products.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {EXPERTISE.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/50 transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-xl mb-4">{item.category}</h3>
                <ul className="space-y-3">
                  {item.skills.map(skill => (
                    <li key={skill} className="flex items-center text-gray-600">
                      <ChevronRight className="w-4 h-4 text-brand-400 mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gray-900 text-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-gray-400 text-lg">My professional journey so far.</p>
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2"></div>
                
                <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-5 h-5 absolute left-[50%] -translate-x-1/2 rounded-full border-4 border-gray-900 bg-brand-500 z-10 mt-1.5"></div>
                  
                  {/* Mobile timeline dot */}
                  <div className="md:hidden w-3 h-3 absolute left-0 top-2 rounded-full bg-brand-500"></div>
                  <div className="md:hidden absolute left-1.5 top-5 bottom-[-3rem] w-px bg-gray-800"></div>

                  <div className="md:w-[45%] mb-2 md:mb-0">
                    <div className={`text-brand-400 font-mono text-sm mb-2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="font-display text-2xl font-bold mb-1">{exp.role}</h3>
                    <div className="text-gray-400 font-medium mb-4">{exp.company}</div>
                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
