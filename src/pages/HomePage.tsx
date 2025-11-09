import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { Book, Edit3, Send, CheckCircle, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};
const testimonials = [
  {
    name: 'Dr. Chiamaka Adebayo',
    role: 'Senior Lecturer, University of Lagos',
    text: 'AcademiaPlus transformed my manuscript. The editor assigned to my project had a deep understanding of social sciences in the Nigerian context, which was invaluable. My paper was accepted by a top journal on the first submission!',
    avatar: 'https://images.unsplash.com/photo-1610482102493-866d8b53c211?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Oluwaseun Adekunle',
    role: 'PhD Candidate, University of Ibadan',
    text: 'As a PhD candidate, finishing my dissertation felt like a monumental task. The support I received was phenomenal, especially with structuring my literature review and methodology chapters. I passed my viva with flying colours.',
    avatar: 'https://images.unsplash.com/photo-1609359458392-b9b167346551?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Professor Fatima Bello',
    role: 'Researcher, Ahmadu Bello University',
    text: 'Their team’s professionalism and adherence to deadlines are commendable. They assisted with a grant proposal that was successfully funded. I highly recommend their services to any serious academic.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop'
  },
];
export function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-light dark:bg-brand-blue py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 {...fadeIn} className="text-4xl md:text-6xl font-extrabold font-serif text-brand-blue dark:text-white leading-tight">
            From Draft to Publication – <br /> We’re With You Every Step of the Way.
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Elevating Academic Excellence Through Expert Writing & Publishing Support.
          </motion.p>
          <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-gold hover:bg-yellow-500 text-brand-blue font-bold text-base px-8 py-6">
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 py-6">
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Key Services Snapshot */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-blue dark:text-white">Our Core Services</h2>
            <p className="mt-4 text-muted-foreground">Comprehensive support for your academic journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeIn}>
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto bg-brand-gold/10 p-4 rounded-full w-fit">
                    <Book className="h-8 w-8 text-brand-gold" />
                  </div>
                  <CardTitle className="mt-4 font-serif">Research Paper Writing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Expert assistance in crafting original articles, reviews, and case studies that meet the highest academic standards.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto bg-brand-gold/10 p-4 rounded-full w-fit">
                    <Edit3 className="h-8 w-8 text-brand-gold" />
                  </div>
                  <CardTitle className="mt-4 font-serif">Thesis & Dissertation Editing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Meticulous editing for clarity, structure, and formatting, from proposal to final submission.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto bg-brand-gold/10 p-4 rounded-full w-fit">
                    <Send className="h-8 w-8 text-brand-gold" />
                  </div>
                  <CardTitle className="mt-4 font-serif">Journal Submission Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Strategic guidance on journal selection, manuscript formatting, and navigating the submission process.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Why Choose Us? */}
      <section className="py-16 md:py-24 bg-brand-light dark:bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-blue dark:text-white">Why Choose AcademiaPlus?</h2>
            <p className="mt-4 text-muted-foreground">Your trusted partner for academic success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "PhD-Level Subject Experts",
              "100% Confidential & Plagiarism-Free",
              "On-Time Delivery Guaranteed",
              "Published in Q1 Journals",
            ].map((item, index) => (
              <motion.div key={item} {...fadeIn} transition={{ delay: index * 0.1 }}>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-brand-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-brand-blue dark:text-white">{item}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Client Testimonials */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-blue dark:text-white">What Our Clients Say</h2>
          </div>
          <Carousel opts={{ loop: true }} className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-none">
                    <CardContent className="text-center p-8">
                      <Quote className="h-8 w-8 text-brand-gold/50 mx-auto mb-4" />
                      <p className="text-lg italic text-muted-foreground">"{testimonial.text}"</p>
                      <div className="mt-6 flex items-center justify-center space-x-3">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-brand-blue dark:text-white">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">Ready to Publish with Confidence?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">Let our experts help you achieve your academic goals. Get a personalized quote today.</p>
          <Button asChild size="lg" className="mt-8 bg-brand-gold hover:bg-yellow-500 text-brand-blue font-bold text-base px-8 py-6">
            <Link to="/quote">Start Today</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}