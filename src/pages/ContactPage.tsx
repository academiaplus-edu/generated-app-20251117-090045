import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { api } from '@/lib/api-client';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  service: z.string().min(1, { message: 'Please select a service.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});
type ContactFormValues = z.infer<typeof contactFormSchema>;
export function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', service: '', message: '' },
  });
  async function onSubmit(data: ContactFormValues) {
    const promise = api('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    toast.promise(promise, {
      loading: 'Sending your message...',
      success: () => {
        form.reset();
        return 'Your message has been sent successfully! We will get back to you within 2 hours.';
      },
      error: 'Failed to send message. Please try again later.',
    });
  }
  return (
    <MainLayout>
      <div className="bg-brand-light dark:bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-blue dark:text-white">Get in Touch</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We’re here to help. Whether you have a question about our services or need a custom quote, please don't hesitate to reach out.
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white">Contact Information</h2>
              <p className="text-muted-foreground">
                Our team is available to answer your questions during business hours. We guarantee a response within 2 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-brand-gold" />
                  <a href="mailto:support@academiaplus.org" className="hover:text-brand-gold transition-colors">support@academiaplus.org</a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-brand-gold" />
                  <span>+1 (555) 123-4567 (Virtual)</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-brand-gold" />
                  <span>123 Academic Lane, Scholar City, USA (Virtual Office)</span>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-muted-foreground hover:text-brand-gold transition-colors"><Linkedin size={24} /></a>
                <a href="#" className="text-muted-foreground hover:text-brand-gold transition-colors"><Twitter size={24} /></a>
              </div>
            </div>
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Dr. Jane Doe" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="jane.doe@university.edu" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="service" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Needed</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="Editing & Proofreading">Editing & Proofreading</SelectItem>
                          <SelectItem value="Academic Writing">Academic Writing</SelectItem>
                          <SelectItem value="Publishing Support">Publishing Support</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem><FormLabel>Your Message</FormLabel><FormControl><Textarea placeholder="Please describe your project or question in detail..." rows={6} {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <div className="flex items-center justify-between">
                    <Button type="submit" size="lg" className="bg-brand-gold hover:bg-yellow-500 text-brand-blue font-bold" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    <div className="text-sm text-muted-foreground">
                      <p>We reply within 2 hours.</p>
                    </div>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}