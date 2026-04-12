import React, { useEffect } from 'react';
import { PRIVACY_LAST_UPDATED } from '../config/legalDates';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto prose prose-gray">
        <h1 className="font-display text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: {PRIVACY_LAST_UPDATED}</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">1. What data is collected</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Currently, this portfolio website does not actively collect personal data through forms or accounts, as there is no direct contact form implemented (contact is handled via direct email links). 
          </p>
          <p className="text-gray-600 leading-relaxed">
            If analytics or third-party tracking tools are enabled in the future, they may collect standard internet log information and details of visitor behavior patterns (e.g., IP address, browser type, pages visited).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">2. How data is used</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Any information collected is used solely for the purpose of:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Understanding how visitors interact with the portfolio.</li>
            <li>Improving the website's design, content, and user experience.</li>
            <li>Responding to direct inquiries sent via email.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">3. Third-party services</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This website is hosted on GitHub Pages. GitHub may collect user IP addresses and standard web log information for security and performance monitoring. Please refer to the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">GitHub Privacy Statement</a> for more details.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Currently, no additional third-party analytics scripts (such as Google Analytics or Plausible) are loaded on this site.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This website utilizes a minimal cookie consent mechanism to respect your privacy preferences. Your consent decision (accept or decline) is stored locally in your browser using <code>localStorage</code> under the key <code>portfolio__cookie_consent</code>.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Because no active analytics scripts are currently deployed, declining cookies simply dismisses the banner and prevents future tracking scripts from being injected if they are added later.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">5. User rights & contact information</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You have the right to request information about the data we hold about you, or request its deletion. Since we do not store personal data directly on our servers, such requests primarily apply to any direct email correspondence.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For any privacy-related questions, please contact me via <a href="https://forms.gle/rKi2Ac8KYrztpL5E8" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">this form</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
