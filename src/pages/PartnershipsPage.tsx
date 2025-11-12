import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Handshake } from 'lucide-react';
const partners = [
  { name: 'University of Lagos', type: 'Academic Partner', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWu0gSDIX9pLRj5s00ajAXjx9AJ5vR2LxJQ&s' },
  { name: 'Ahmadu Bello University', type: 'Research Collaboration', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQLkH0VWFvm7ldWbQzoNvU13_Q7Dec7vjlw&s' },
  { name: 'Nigerian Institute of Social and Economic Research (NISER)', type: 'Institutional Affiliate', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHyKJDJ2ooppzXccD5_Z_W26Y3IhPKlWalxQ&s' },
  { name: 'Social Science Research Council', type: 'Network Affiliate', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-6Aqa7QPxaf56XYMugGOnyg-TuL6WbpfyA&s' },
  { name: 'Elsevier', type: 'Publisher Network', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8MkVdr9WIJ5wYDkyR2ryK84fS792-VYqNw&s' },
  { name: 'Springer Nature', type: 'Publisher Network', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR748UQA1nS3oE2gJj8dJHD5CwCSre9Jr7T8Q&s' },
  { name: 'The Federal Polytechnic Offa', type: 'Academic Partner', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7eoq628FuSv3yET4l4vOn7neGnPc2ygFUsQ&s' },
  { name: 'Joseph Ayo Babalola University (JABU)', type: 'Academic Partner', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAWsUVDpVNQMwaQMUuurITMdBDK2l3Bxw57Q&s' },
  { name: 'College of Insurance and Financial Management (CIFM)', type: 'Institutional Affiliate', logo: 'https://pbs.twimg.com/profile_images/1265567830172471298/CnQqWqEE_400x400.jpg' },
  { name: 'Lagos State University (LASU)', type: 'Academic Partner', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3sSpkK3WeqZ7bW859Yu54_BIIdBPEhVdzg&s' },
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
          <div className="flex justify-center">
            <div className="inline-grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {partners.map((partner) => (
                <div key={partner.name} className="text-center p-6 border rounded-lg bg-background hover:shadow-md transition-shadow flex flex-col items-center justify-center space-y-4">
                  {partner.logo ? (
                    <img src={partner.logo} alt={`${partner.name} logo`} className="h-20 object-contain" />
                  ) : (
                    <div className="h-20 flex items-center justify-center">
                       <Handshake className="h-10 w-10 text-muted-foreground" />
                    </div>
                  )}
                  <div>
                    <p className="text-base font-semibold text-brand-blue dark:text-white">{partner.name}</p>
                    <p className="text-sm text-brand-gold">{partner.type}</p>
                  </div>
                </div>
              ))}
            </div>
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