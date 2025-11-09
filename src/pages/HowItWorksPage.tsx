import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileUp, UserCheck, FileCheck, MessageSquare, FileDown, Send } from 'lucide-react';
const processSteps = [
  { icon: FileUp, title: 'Submit Your Request', description: 'Fill out our brief online form with your project details, document type, and deadline. Upload your file securely.' },
  { icon: UserCheck, title: 'Get Matched & Quoted', description: 'We match you with a subject-specialist who assesses your needs. You receive a no-obligation quote and timeline.' },
  { icon: FileCheck, title: 'Review & Approve', description: 'Once you approve the scope and price, make a secure payment to begin the process. Your expert gets to work immediately.' },
  { icon: MessageSquare, title: 'Work in Progress', description: 'Receive real-time updates on your project. You can communicate directly with your assigned expert for any clarifications.' },
  { icon: FileDown, title: 'Receive & Review', description: 'Get your polished document back with all changes tracked. We include comments explaining key revisions.' },
  { icon: Send, title: 'Revise & Publish', description: 'We offer free revisions within the original scope. Once you are satisfied, you are ready for submission!' },
];
export function HowItWorksPage() {
  return (
    <MainLayout>
      <div className="bg-brand-light dark:bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-blue dark:text-white">A Simple, Transparent Process</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We've streamlined our workflow to be as clear and efficient as possible, so you can focus on your research.
          </p>
        </div>
      </div>
      {/* Visual Timeline */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* The vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-0.5 bg-border hidden md:block" aria-hidden="true"></div>
            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, index) => (
                <div key={step.title} className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                  <div className={`flex md:justify-center ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="bg-brand-gold/10 p-4 rounded-full mb-4 md:mb-0">
                      <step.icon className="h-10 w-10 text-brand-gold" />
                    </div>
                  </div>
                  <div className={`text-center md:text-left ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <p className="text-sm font-semibold text-brand-gold uppercase tracking-wider">Step {index + 1}</p>
                    <h3 className="text-2xl font-bold font-serif mt-1">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Snippet */}
      <section className="py-16 md:py-24 bg-brand-light dark:bg-brand-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white">Quick Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">How long does editing take?</AccordionTrigger>
              <AccordionContent>
                Turnaround times depend on the document length and service level. Standard editing for a 10,000-word manuscript typically takes 5-7 business days. We also offer express options for tighter deadlines.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">Is my data and research safe?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We use encrypted file transfers and have strict confidentiality agreements with all our experts. Your intellectual property is always secure with us. We are happy to sign a Non-Disclosure Agreement (NDA) upon request.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">What if I need revisions?</AccordionTrigger>
              <AccordionContent>
                We offer a free revision period (typically 14 days) for any changes within the original scope of the project. Your satisfaction is our top priority, and we will work with you to ensure the final document meets your expectations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </MainLayout>
  );
}