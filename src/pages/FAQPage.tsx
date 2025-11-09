import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const faqItems = {
  "Services & Process": [
    {
      q: "What services do you offer?",
      a: "We offer a comprehensive suite of services including academic writing (research papers, theses), editing and proofreading, and full publishing support from journal selection to submission.",
    },
    {
      q: "How does the process work?",
      a: "Our process is simple: 1. Submit your request and document. 2. We match you with a subject expert and provide a quote. 3. You approve and make a secure payment. 4. We complete the work and deliver it with tracked changes. 5. You request any revisions needed.",
    },
    {
      q: "Can I request the same writer or editor again?",
      a: "Yes, absolutely. We encourage building a relationship with our experts. You can request a specific editor for your project, subject to their availability.",
    },
  ],
  "Ethics & Guarantees": [
    {
      q: "Is your service ethical?",
      a: "Yes. Our services are designed to enhance your writing and research, not to replace your work. We provide expert guidance, editing, and support in line with academic integrity standards. We do not engage in ghostwriting or any form of academic misconduct.",
    },
    {
      q: "Do you guarantee publication?",
      a: "While we cannot guarantee publication—as the final decision rests with journal editors and peer reviewers—we guarantee to significantly maximize your chances by ensuring your manuscript is of the highest quality in terms of language, structure, and formatting.",
    },
    {
      q: "What if I’m not satisfied with the work?",
      a: "Your satisfaction is our priority. We offer a free revision period (typically 14-30 days) to address any concerns within the original scope of the project. We will work with you until you are fully satisfied with the final document.",
    },
  ],
  "Privacy & Confidentiality": [
    {
      q: "How do you protect my privacy and research data?",
      a: "We treat your work with the utmost confidentiality. All our staff and experts sign strict non-disclosure agreements (NDAs). We use secure, encrypted systems for all file transfers and communications. Your data will never be shared with any third party.",
    },
    {
      q: "Is my payment information secure?",
      a: "Yes. All payments are processed through a secure, PCI-compliant payment gateway. We do not store your credit card information on our servers.",
    },
  ],
};
export function FAQPage() {
  return (
    <MainLayout>
      <div className="bg-brand-light dark:bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-blue dark:text-white">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Find answers to common questions about our services, process, and policies.
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
          {Object.entries(faqItems).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold font-serif mb-6 text-brand-blue dark:text-white">{category}</h2>
              <Accordion type="single" collapsible className="w-full space-y-2">
                {items.map((item, index) => (
                  <AccordionItem value={`item-${category}-${index}`} key={item.q} className="border-b">
                    <AccordionTrigger className="text-lg text-left hover:no-underline">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
      <section className="py-20 md:py-32 bg-brand-light dark:bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-blue dark:text-white">Still Have Questions?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Our support team is ready to help. Reach out to us with any specific inquiries.</p>
          <Button asChild size="lg" className="mt-8 bg-brand-gold hover:bg-yellow-500 text-brand-blue font-bold text-base px-8 py-6">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}