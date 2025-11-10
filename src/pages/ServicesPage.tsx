import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PenSquare, BookUp, GraduationCap, CheckCheck, Database } from 'lucide-react';
const services = {
  writing: {
    title: 'Academic Writing',
    icon: PenSquare,
    items: [
      { title: 'Research Papers', description: 'Original articles, reviews, and analyses in management, social sciences, and more.', for: 'Researchers, Postdocs' },
      { title: 'Theses & Dissertations', description: 'Comprehensive support from proposal to final draft, with a focus on social science methodologies.', for: 'PhD & Master’s Candidates' },
      { title: 'Case Studies & Reports', description: 'Detailed and structured reporting for business and social science findings.', for: 'Students, Professionals' },
      { title: 'Personal Statements & SOPs', description: 'Crafting compelling narratives for graduate school applications.', for: 'Applicants for Grad School' },
    ],
  },
  editing: {
    title: 'Editing & Proofreading',
    icon: CheckCheck,
    items: [
      { title: 'Language Polishing', description: 'Grammar, clarity, style, and tone enhancement.', for: 'Non-native English Speakers' },
      { title: 'Technical Editing', description: 'Improving structure, flow, logic, and coherence.', for: 'All Academic Authors' },
      { title: 'Journal Formatting', description: 'Adherence to APA, MLA, Chicago, Vancouver, etc.', for: 'Authors targeting specific journals' },
      { title: 'Pre-submission Review', description: 'A final check to maximize acceptance chances.', for: 'Researchers ready to submit' },
    ],
  },
  publishing: {
    title: 'Publishing Support',
    icon: BookUp,
    items: [
      { title: 'Journal Selection Strategy', description: 'Identifying suitable, high-impact journals for your field.', for: 'Early-career Researchers' },
      { title: 'Manuscript Submission', description: 'Navigating submission portals and requirements.', for: 'First-time Authors' },
      { title: 'Response to Reviewers', description: 'Crafting persuasive rebuttals and revisions.', for: 'Authors undergoing peer review' },
      { title: 'Copyright & Licensing', description: 'Guidance on author rights and open access.', for: 'All Published Authors' },
    ],
  },
  data: {
    title: 'Data Services',
    icon: Database,
    items: [
      { title: 'Data Collection', description: 'Assistance with survey design, data scraping, and sourcing for quantitative and qualitative studies.', for: 'Researchers, PhD Candidates' },
      { title: 'Data Analysis', description: 'Expert analysis using SPSS, R, Stata, and NVivo for statistical and thematic insights.', for: 'Academics, Institutions' },
      { title: 'Synthetic Data Generation', description: 'Creating anonymized, realistic datasets for research and testing purposes.', for: 'Data Scientists, Innovators' },
      { title: 'Data Transformation', description: 'Cleaning, structuring, and preparing raw data for robust analysis and visualization.', for: 'All Researchers' },
    ],
  },
  additional: {
    title: 'Additional Services',
    icon: GraduationCap,
    items: [
      { title: 'Grant & Proposal Writing', description: 'Developing strong proposals for research funding.', for: 'Principal Investigators, NGOs' },
      { title: 'Conference Materials', description: 'Abstracts, posters, and presentations.', for: 'Academic Presenters' },
      { title: 'Book Chapters & Monographs', description: 'Support for long-form academic works.', for: 'Established Academics' },
      { title: 'Translation + Editing', description: 'High-quality translation with academic polish.', for: 'International Scholars' },
    ],
  },
};
const ServiceCard = ({ title, description, forWho }: { title: string; description: string; forWho: string }) => (
  <Card className="h-full flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
    <CardHeader>
      <CardTitle className="text-lg font-serif">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow flex flex-col justify-between">
      <p className="text-muted-foreground mb-4">{description}</p>
      <div>
        <p className="text-xs font-semibold text-brand-blue dark:text-brand-light uppercase tracking-wider">Who it's for</p>
        <p className="text-sm text-muted-foreground">{forWho}</p>
      </div>
    </CardContent>
  </Card>
);
export function ServicesPage() {
  return (
    <MainLayout>
      <div className="bg-brand-light dark:bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-blue dark:text-white">Our Comprehensive Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Tailored support for every stage of your academic and research career. We provide the expertise you need to succeed.
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
          {Object.values(services).map((category) => (
            <section key={category.title}>
              <div className="flex items-center gap-4 mb-8">
                <category.icon className="h-8 w-8 text-brand-gold" />
                <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white">{category.title}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((service) => (
                  <ServiceCard key={service.title} title={service.title} description={service.description} forWho={service.for} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <section className="py-20 md:py-32 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">Have a Specific Need?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">Our services are fully customizable. Contact us for a personalized plan that fits your unique project requirements.</p>
          <Button asChild size="lg" className="mt-8 bg-brand-gold hover:bg-yellow-500 text-brand-blue font-bold text-base px-8 py-6">
            <Link to="/quote">Get a Custom Quote</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}