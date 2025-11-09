import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Quote, CheckCircle, BookCheck } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
const caseStudies = [
  {
    title: 'From Rejection to a Top Management Journal',
    challenge: 'A business school researcher faced rejection for a promising study due to a weak theoretical framework and unclear contributions.',
    solution: 'Our expert consultant helped refine the research questions, strengthen the theoretical framework, and clearly articulate the study\'s contribution to management literature.',
    result: 'The revised paper was accepted in a prestigious Q1 management journal.',
  },
  {
    title: 'PhD Dissertation in Sociology Completed Ahead of Schedule',
    challenge: 'A PhD candidate was struggling to synthesize a large volume of qualitative data for their sociology dissertation.',
    solution: 'We assigned a qualitative research specialist who provided guidance on thematic analysis and narrative construction, helping to shape a coherent and impactful dissertation.',
    result: 'The student successfully defended their dissertation with distinction, finishing a month ahead of schedule.',
  },
];
const testimonials = [
  { 
    name: 'Dr. Chiamaka Adebayo', 
    role: 'Senior Lecturer, University of Lagos', 
    text: 'AcademiaPlus transformed my manuscript. The editor assigned to my project had a deep understanding of social sciences in the Nigerian context, which was invaluable. My paper was accepted by a top journal on the first submission!', 
    avatar: 'https://i.pravatar.cc/150?u=chiamaka' 
  },
  { 
    name: 'Oluwaseun Adekunle', 
    role: 'PhD Candidate, University of Ibadan', 
    text: 'As a PhD candidate, finishing my dissertation felt like a monumental task. The support I received was phenomenal, especially with structuring my literature review and methodology chapters. I passed my viva with flying colours.', 
    avatar: 'https://i.pravatar.cc/150?u=oluwaseun' 
  },
  { 
    name: 'Professor Fatima Bello', 
    role: 'Researcher, Ahmadu Bello University', 
    text: 'Their team’s professionalism and adherence to deadlines are commendable. They assisted with a grant proposal that was successfully funded. I highly recommend their services to any serious academic.', 
    avatar: 'https://i.pravatar.cc/150?u=fatima' 
  },
];
const journals = ['Journal of Management', 'Admin Science Quarterly', 'American Sociological Review', 'Harvard Business Review', 'IEEE', 'Elsevier', 'Springer', 'PLOS ONE'];
export function SuccessStoriesPage() {
  return (
    <MainLayout>
      <div className="bg-brand-light dark:bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-blue dark:text-white">Real Results, Real Impact</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are proud to have helped scholars from around the world achieve their publishing goals. Here are some of their stories.
          </p>
        </div>
      </div>
      {/* Case Studies Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-center mb-12 text-brand-blue dark:text-white">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.title} className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <p className="font-semibold">Challenge:</p>
                    <p className="text-muted-foreground mb-4">{study.challenge}</p>
                    <p className="font-semibold">Solution:</p>
                    <p className="text-muted-foreground mb-4">{study.solution}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="font-semibold flex items-center gap-2"><CheckCircle className="text-green-500 h-5 w-5" />Result:</p>
                    <p className="text-muted-foreground">{study.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-brand-light dark:bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-center mb-12 text-brand-blue dark:text-white">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <Card key={t.name} className="flex flex-col">
                <CardContent className="pt-6 flex-grow flex flex-col justify-between">
                  <Quote className="h-6 w-6 text-brand-gold/50 mb-4" />
                  <p className="text-muted-foreground italic flex-grow">"{t.text}"</p>
                  <div className="mt-6 flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={t.avatar} />
                      <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-brand-blue dark:text-white">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Journals Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-center mb-4 text-brand-blue dark:text-white">Our Clients Have Published In</h2>
          <p className="text-center text-muted-foreground mb-12">and many other prestigious journals and publishers.</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {journals.map(journal => (
              <p key={journal} className="text-lg font-semibold text-muted-foreground grayscale hover:grayscale-0 transition-all">{journal}</p>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">Join Our Growing List of Success Stories</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">Let us help you navigate the path to publication. Get your free, no-obligation quote today.</p>
          <Button asChild size="lg" className="mt-8 bg-brand-gold hover:bg-yellow-500 text-brand-blue font-bold text-base px-8 py-6">
            <Link to="/quote">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}