import React, { useState, useEffect } from 'react';
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
const quoteFormSchema = z.object({
  name: z.string().min(2, { message: 'Name is required.' }),
  email: z.string().email({ message: 'A valid email is required.' }),
  documentType: z.string().min(1, { message: 'Please select a document type.' }),
  academicLevel: z.string().min(1, { message: 'Please select an academic level.' }),
  subjectArea: z.string().min(1, { message: 'Please select a subject area.' }),
  wordCount: z.number().int().min(1, { message: "Word count must be a positive number." }),
  deadline: z.string().min(1, { message: 'Deadline is required.' }),
  requirements: z.string().default(""),
  service: z.string().min(1, { message: 'Please select a preferred service.' }),
});
type QuoteFormValues = z.infer<typeof quoteFormSchema>;
const BASE_RATE_PER_WORD = 5; // NGN
const SERVICE_MULTIPLIER: Record<string, number> = {
  Writing: 1.5,
  Editing: 1.0,
  'Full Support (Writing + Editing + Publishing)': 2.0,
};
const DEADLINE_MULTIPLIER = {
  'standard': 1.0,
  'express': 1.5,
};
export function QuotePage() {
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: '',
      email: '',
      documentType: '',
      academicLevel: '',
      subjectArea: '',
      wordCount: 0,
      deadline: '',
      requirements: '',
      service: '',
    },
  });
  const wordCount = form.watch('wordCount');
  const service = form.watch('service');
  const deadline = form.watch('deadline');
  useEffect(() => {
    if (wordCount && wordCount > 0 && service) {
      const serviceMult = SERVICE_MULTIPLIER[service] || 1.0;
      let deadlineMult = DEADLINE_MULTIPLIER['standard'];
      if (deadline) {
        const deadlineDate = new Date(deadline);
        const today = new Date();
        const diffTime = deadlineDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays <= 7) {
          deadlineMult = DEADLINE_MULTIPLIER['express'];
        }
      }
      const price = wordCount * BASE_RATE_PER_WORD * serviceMult * deadlineMult;
      setEstimatedPrice(price);
    } else {
      setEstimatedPrice(null);
    }
  }, [wordCount, service, deadline]);
  const onSubmit = async (data: QuoteFormValues) => {
    try {
      const promise = api('/api/quote', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      toast.promise(promise, {
        loading: 'Submitting your request...',
        success: () => {
          form.reset();
          setEstimatedPrice(null);
          return 'Quote request submitted! We will email you a detailed quote shortly.';
        },
        error: 'Failed to submit request. Please check your details and try again.',
      });
    } catch (error) {
      console.error('Submission failed', error);
      toast.error('An unexpected error occurred.');
    }
  };
  return (
    <MainLayout>
      <div className="bg-brand-light dark:bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-blue dark:text-white">Get a Free, No-Obligation Quote</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Provide us with the details of your project, and our team will get back to you with a personalized quote within a few hours.
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Project Details</CardTitle>
                  <CardDescription>All fields are required unless marked optional.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Dr. Jane Doe" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="jane.doe@university.edu" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField control={form.control} name="documentType" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Type of Document</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl><SelectTrigger><SelectValue placeholder="Select document type" /></SelectTrigger></FormControl>
                              <SelectContent>
                                <SelectItem value="Research Paper">Research Paper</SelectItem>
                                <SelectItem value="Thesis/Dissertation">Thesis/Dissertation</SelectItem>
                                <SelectItem value="Case Study">Case Study</SelectItem>
                                <SelectItem value="Grant Proposal">Grant Proposal</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="academicLevel" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Academic Level</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl><SelectTrigger><SelectValue placeholder="Select academic level" /></SelectTrigger></FormControl>
                              <SelectContent>
                                <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                                <SelectItem value="Master's">Master's</SelectItem>
                                <SelectItem value="PhD">PhD</SelectItem>
                                <SelectItem value="Postdoctoral">Postdoctoral</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="subjectArea" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject Area</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl><SelectTrigger><SelectValue placeholder="Select subject area" /></SelectTrigger></FormControl>
                            <SelectContent>
                              <SelectItem value="Management & Business Studies">Management & Business Studies</SelectItem>
                              <SelectItem value="Sociology & Political Science">Sociology & Political Science</SelectItem>
                              <SelectItem value="Psychology & Education">Psychology & Education</SelectItem>
                              <SelectItem value="Economics & Finance">Economics & Finance</SelectItem>
                              <SelectItem value="Public Policy & Administration">Public Policy & Administration</SelectItem>
                              <SelectItem value="Other Social Sciences">Other Social Sciences</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField control={form.control} name="wordCount" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Word Count</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="e.g., 8000"
                                value={field.value}
                                onChange={e => {
                                  const val = e.target.valueAsNumber;
                                  field.onChange(isNaN(val) ? 0 : val);
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="deadline" render={({ field }) => (
                          <FormItem><FormLabel>Deadline</FormLabel><FormControl><Input type="date" {...field} min={new Date().toISOString().split("T")[0]} /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="service" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Service</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl><SelectTrigger><SelectValue placeholder="Select preferred service" /></SelectTrigger></FormControl>
                              <SelectContent>
                                <SelectItem value="Writing">Writing</SelectItem>
                                <SelectItem value="Editing">Editing</SelectItem>
                                <SelectItem value="Full Support (Writing + Editing + Publishing)">Full Support</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                      <FormField control={form.control} name="requirements" render={({ field }) => (
                        <FormItem><FormLabel>Specific Requirements (Optional)</FormLabel><FormControl><Textarea placeholder="e.g., Format for APA 7th edition, focus on improving the methodology section..." rows={4} {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <Button type="submit" size="lg" className="w-full bg-brand-teal hover:bg-cyan-400 text-brand-blue font-bold" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? 'Submitting...' : 'Submit Request'}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="bg-brand-light dark:bg-brand-blue/50 border-brand-teal/20">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">Estimated Cost</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {estimatedPrice !== null ? (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-4xl font-bold text-brand-blue dark:text-brand-teal">
                          ₦{estimatedPrice.toLocaleString()}
                        </p>
                        <p className="text-muted-foreground mt-2 text-sm">
                          This is an estimate. A final quote will be provided via email after a detailed review.
                        </p>
                      </motion.div>
                    ) : (
                      <p className="text-muted-foreground">
                        Please fill in the word count and select a service to see an estimated price.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}