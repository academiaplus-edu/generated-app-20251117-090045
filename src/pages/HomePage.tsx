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
  },
];
export function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-light dark:bg-brand-blue py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 {...fadeIn} className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif text-brand-blue dark:text-white leading-tight">
            From Draft to Publication – <br /> 
            <span className="text-brand-teal">We’re With You Every Step.</span>
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Elevating Academic Excellence Through Unique <span className="text-brand-gold font-bold">Expert</span> Writing & Publishing Support.
          </motion.p>
          <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-cyan-400 text-brand-blue font-bold text-lg px-10 py-6 shadow-glow transition-all hover:scale-105">
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 border-brand-teal/30 hover:border-brand-teal">
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
            <div className="w-20 h-1 bg-brand-teal mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeIn}>
              <Card className="text-center h-full hover:shadow-soft transition-shadow border-brand-teal/5">
                <CardHeader>
                  <div className="mx-auto bg-brand-teal/10 p-4 rounded-full w-fit">
                    <Book className="h-8 w-8 text-brand-teal" />
                  </div>
                  <CardTitle className="mt-4 font-serif">Research Paper Writing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Expert assistance in crafting original articles, reviews, and case studies that meet the highest academic standards.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <Card className="text-center h-full hover:shadow-soft transition-shadow border-brand-teal/5">
                <CardHeader>
                  <div className="mx-auto bg-brand-teal/10 p-4 rounded-full w-fit">
                    <Edit3 className="h-8 w-8 text-brand-teal" />
                  </div>
                  <CardTitle className="mt-4 font-serif">Thesis & Dissertation Editing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Meticulous editing for clarity, structure, and formatting, from proposal to final submission.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
              <Card className="text-center h-full hover:shadow-soft transition-shadow border-brand-teal/5">
                <CardHeader>
                  <div className="mx-auto bg-brand-teal/10 p-4 rounded-full w-fit">
                    <Send className="h-8 w-8 text-brand-teal" />
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
      <section className="py-16 md:py-24 bg-brand-light dark:bg-brand-blue border-y border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-blue dark:text-white">Why AcademiaPlus?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "PhD-Level Subject Experts",
              "100% Confidential & Secure",
              "On-Time Delivery Guaranteed",
              "Published in Q1 Journals",
            ].map((item, index) => (
              <motion.div key={item} {...fadeIn} transition={{ delay: index * 0.1 }}>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-brand-teal mt-1 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-blue dark:text-white">Voices of Excellence</h2>
          </div>
          <Carousel opts={{ loop: true }} className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-none bg-transparent">
                    <CardContent className="text-center p-8">
                      <Quote className="h-8 w-8 text-brand-teal/30 mx-auto mb-4" />
                      <p className="text-lg italic text-muted-foreground">"{testimonial.text}"</p>
                      <div className="mt-6 flex items-center justify-center space-x-3">
                        <Avatar className="h-12 w-12 border-2 border-brand-teal/20">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback className="bg-brand-blue text-brand-teal">{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <p className="font-semibold text-brand-blue dark:text-white">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-brand-teal border-brand-teal/30" />
            <CarouselNext className="text-brand-teal border-brand-teal/30" />
          </Carousel>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-brand-blue text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">Ready to Publish with Confidence?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">Let our experts help you achieve your academic goals. Get a personalized quote today.</p>
          <Button asChild size="lg" className="mt-8 bg-brand-teal hover:bg-cyan-400 text-brand-blue font-bold text-lg px-12 py-7 transition-all hover:scale-105 shadow-glow">
            <Link to="/quote">Start Today</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}