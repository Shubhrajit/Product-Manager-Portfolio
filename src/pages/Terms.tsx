import React, { useEffect } from 'react';
import { TERMS_LAST_UPDATED } from '../config/legalDates';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto prose prose-gray">
        <h1 className="font-display text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-gray-500 mb-12">Last updated: {TERMS_LAST_UPDATED}</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing and using this portfolio website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">2. Intellectual property</h2>
          <p className="text-gray-600 leading-relaxed">
            All content, designs, text, graphics, and interfaces on this website are the intellectual property of Shubhrajit Choudhury, unless otherwise noted. You may not copy, reproduce, distribute, or create derivative works from this content without explicit written permission.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">3. Permitted use of the site</h2>
          <p className="text-gray-600 leading-relaxed">
            You are granted a limited, non-exclusive, non-transferable license to view the portfolio for personal, non-commercial purposes, such as evaluating my professional experience for employment or freelance opportunities.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">4. Disclaimer of warranties</h2>
          <p className="text-gray-600 leading-relaxed">
            This website and its content are provided "as is" and "as available" without any warranties of any kind, either express or implied. I do not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">5. Limitation of liability</h2>
          <p className="text-gray-600 leading-relaxed">
            In no event shall Shubhrajit Choudhury be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, this website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">6. Governing law</h2>
          <p className="text-gray-600 leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws of [YOUR_JURISDICTION]. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of [YOUR_JURISDICTION].
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">7. Changes to terms</h2>
          <p className="text-gray-600 leading-relaxed">
            I reserve the right to modify these terms at any time. We do so by posting and drawing attention to the updated terms on the Site. Your decision to continue to visit and make use of the Site after such changes have been made constitutes your formal acceptance of the new Terms & Conditions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about these Terms, please contact me at: <a href="mailto:shubhrajit.choudhury.2022@iimu.ac.in" className="text-brand-600 hover:underline">shubhrajit.choudhury.2022@iimu.ac.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
