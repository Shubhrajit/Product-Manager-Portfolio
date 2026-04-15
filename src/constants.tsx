import React from 'react';
import { Terminal, LineChart, Briefcase, Users } from 'lucide-react';

export const APP_VERSION = "v0.2.11";
export const VERSION_NOTES = [
  "Fixed GitHub Pages logo rendering",
  "Resolved TypeScript build errors",
  "Centralized scroll constants",
  "Added fallback routing"
];

export const SCROLL_OFFSET_ACTIVE = 100;
export const SCROLL_OFFSET_CLICK = 80;

export const CASE_STUDIES = [
  {
    id: 1,
    title: 'Enterprise GenAI & AgenticAI Solutions',
    description: 'Led end-to-end product lifecycle for 10+ AI use cases (fare automation, refunds, audits) for Fortune 500 airline clients, delivering $3.7M+ in cost savings.',
    tags: ['GenAI', 'Agentic AI', 'Automation'],
    color: 'bg-blue-50',
  },
  {
    id: 2,
    title: 'Digital Maturity & Revenue Tracking',
    description: 'Built revenue-tracking frameworks to monitor $77M+ in digital value and standardized a Digital Maturity Framework (DMOF) for C-level business reviews.',
    tags: ['Strategy', 'Analytics', 'Frameworks'],
    color: 'bg-brand-50',
  },
  {
    id: 3,
    title: 'KPI-Driven Loyalty Program Revamp',
    description: 'Proposed and piloted a new loyalty program framework with 100+ contractors, achieving a 90% acceptance rate and projecting 35% revenue growth.',
    tags: ['Product Strategy', 'B2B', 'User Research'],
    color: 'bg-purple-50',
  },
  {
    id: 4,
    title: 'Global Network Operations Dashboards',
    description: 'Built real-time monitoring dashboards and managed critical incidents for a major UK-based banking client, reducing operational failures by 13% YoY.',
    tags: ['Operations', 'Data', 'Agile'],
    color: 'bg-orange-50',
  }
];

export const EXPERTISE = [
  {
    category: 'AI & Technology',
    icon: <Terminal className="w-6 h-6 text-brand-600" />,
    skills: ['Generative AI (GenAI)', 'Agentic AI', 'AI/ML Use Case Design', 'Process Automation'],
  },
  {
    category: 'Product Strategy',
    icon: <LineChart className="w-6 h-6 text-brand-600" />,
    skills: ['Product Roadmaps', 'Digital Transformation', 'Program Governance', 'User Story Creation'],
  },
  {
    category: 'Execution & Agile',
    icon: <Briefcase className="w-6 h-6 text-brand-600" />,
    skills: ['Agile/Scrum', 'Stakeholder Management', 'Design Thinking', 'CAPM/PMP'],
  },
  {
    category: 'Data & Analytics',
    icon: <Users className="w-6 h-6 text-brand-600" />,
    skills: ['Data Analytics', 'Power BI', 'Real-time Dashboards', 'KPI Tracking'],
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Sr. Consultant',
    company: 'WNS Global Services',
    period: 'Jul 2024 - Present',
    description: 'Leading GenAI and automation initiatives for airline clients, delivering $3.7M+ in savings. Owned full product lifecycle for 10+ AI/AgenticAI use cases.',
  },
  {
    id: 2,
    role: 'MBA',
    company: 'IIM Udaipur',
    period: '2022 - 2024',
    description: 'Master of Business Administration.',
  },
  {
    id: 3,
    role: 'Summer Intern',
    company: 'Pidilite Industries',
    period: 'Apr 2023 - Jun 2023',
    description: 'Proposed and piloted a KPI-driven loyalty program, achieving a 90% acceptance rate among 100+ contractors.',
  },
  {
    id: 4,
    role: 'Assistant Systems Engineer',
    company: 'TCS',
    period: 'Oct 2020 - May 2022',
    description: 'Promoted to Shift Lead within 3 months. Managed critical incidents for a major UK-based banking client, maintaining 98% SLA adherence.',
  },
  {
    id: 5,
    role: 'B.Tech, Computer Science Engineering',
    company: 'SRM IST',
    period: '2015 - 2019',
    description: 'Bachelor of Technology in Computer Science Engineering.',
  }
];
