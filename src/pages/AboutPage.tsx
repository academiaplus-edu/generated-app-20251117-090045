import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShieldCheck, Star, Users, Handshake } from 'lucide-react';
const teamMembers = [
  { name: 'Dr. Evelyn Reed', role: 'Founder & Lead Editor, PhD', avatar: 'https://i.pravatar.cc/150?u=evelyn', bio: 'A published author in cell biology with over 15 years of experience in academic editing and mentoring.' },
  { name: 'Dr. Samuel Chen', role: 'Senior Editor, Engineering, PhD', avatar: 'https://i.pravatar.cc/150?u=samuel', bio: 'Specializes in engineering and computer science manuscripts, with a focus on IEEE and ACM standards.' },
  { name: 'Dr. Isabella Rossi', role: 'Humanities Specialist, PhD', avatar: 'https://i.pravatar.cc/150?u=isabella', bio: 'Expert in social sciences and humanities, ensuring arguments are coherent, compelling, and well-structured.' },
];
const coreValues = [
  { title: 'Integrity', icon: ShieldCheck, description: 'We uphold the highest ethical standards, ensuring all work is original and properly attributed.' },
  { title: 'Excellence', icon: Star, description: 'Our commitment to quality means every document we handle meets rigorous academic standards.' },
  { title: 'Confidentiality', icon: Users, description: 'Your research and personal data are protected with strict confidentiality agreements and secure systems.' },
  { title: 'Collaboration', icon: Handshake, description: 'We work as your partner, providing constructive feedback to enhance your skills and scholarly impact.' },
];
export function AboutPage() {
  return (
    <MainLayout>
      <div className="bg-brand-light dark:bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-blue dark:text-white">Founded by Scholars, for Scholars</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We understand the pressures and challenges of academic life because we’ve lived them. Our mission is to provide the support you need to share your research with the world.
          </p>
        </div>
      </div>
      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                AcademiaPlus was born from a simple observation: brilliant researchers often struggle not with their ideas, but with the specific conventions of academic writing and publishing. After years of peer-reviewing and mentoring junior colleagues, our founder, Dr. Evelyn Reed, saw a need for a service that was both expert-driven and empathetic to the scholar's journey.
              </p>
              <p className="mt-4 text-muted-foreground">
                We assembled a team of PhD-level experts from diverse fields, all united by a passion for clear, impactful scholarly communication. Today, we are a trusted partner for academics worldwide.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="Team collaborating" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section className="py-16 md:py-24 bg-brand-light dark:bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white">Meet Our Expert Team</h2>
            <p className="mt-4 text-muted-foreground">A selection of our dedicated PhD-level editors and writers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <Card key={member.name} className="text-center">
                <CardContent className="pt-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold font-serif">{member.name}</h3>
                  <p className="text-brand-gold text-sm font-semibold">{member.role}</p>
                  <p className="mt-2 text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Core Values & Quality Assurance */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white mb-8">Our Core Values</h2>
            <div className="space-y-6">
              {coreValues.map(value => (
                <div key={value.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-brand-gold/10 p-3 rounded-full">
                    <value.icon className="h-6 w-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white mb-8">Our Quality Assurance Process</h2>
            <ol className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-lg">Subject-Matter Matching</h3>
                  <p className="text-muted-foreground">Your document is assigned to an editor with expertise in your specific field of study.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-lg">Three-Stage Review</h3>
                  <p className="text-muted-foreground">Includes a technical edit, language polish, and final formatting check to ensure comprehensive quality.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-lg">Plagiarism Check</h3>
                  <p className="text-muted-foreground">We use industry-standard software like Turnitin to guarantee the originality of all written content.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}