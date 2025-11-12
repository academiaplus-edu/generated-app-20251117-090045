import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Handshake } from 'lucide-react';
const partners = [
  { name: 'University of Lagos', type: 'Academic Partner' },
  { name: 'Ahmadu Bello University', type: 'Research Collaboration' },
  { name: 'Nigerian Institute of Social and Economic Research (NISER)', type: 'Institutional Affiliate' },
  { name: 'Social Science Research Council', type: 'Network Affiliate' },
  { name: 'Elsevier', type: 'Publisher Network' },
  { name: 'Springer Nature', type: 'Publisher Network' },
  { name: 'The Federal Polytechnic Offa', type: 'Academic Partner' },
  { name: 'Joseph Ayo Babalola University (JABU)', type: 'Academic Partner' },
  { name: 'College of Insurance and Financial Management (CIFM)', type: 'Institutional Affiliate' },
  { name: 'Lagos State University (LASU)', type: 'Academic Partner' },
];
export function PartnershipsPage() {
  return (
    <MainLayout>
      <div className="bg-brand-light dark:bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-blue dark:text-white">Partnerships & Affiliations</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We believe in the power of collaboration to advance scholarly research and communication.
          </p>
        </div>
      </div>
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white">Our Valued Partners</h2>
            <p className="mt-4 text-muted-foreground">
              We are proud to collaborate with leading universities, research institutions, and academic networks.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="text-center p-6 border rounded-lg bg-background hover:shadow-md transition-shadow">
                <p className="text-lg font-semibold text-brand-blue dark:text-white">{partner.name}</p>
                <p className="text-sm text-brand-gold">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32 bg-brand-light dark:bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Handshake className="h-12 w-12 text-brand-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-blue dark:text-white">Become a Partner</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            If your institution, university, or organization is interested in collaborating with us to support researchers, we would love to hear from you.
          </p>
          <Button asChild size="lg" className="mt-8 bg-brand-gold hover:bg-yellow-500 text-brand-blue font-bold text-base px-8 py-6">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}