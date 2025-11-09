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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
const quoteFormSchema = z.object({
  name: z.string().min(2, { message: 'Name is required.' }),
  email: z.string().email({ message: 'A valid email is required.' }),
  documentType: z.string().min(1, { message: 'Please select a document type.' }),
  academicLevel: z.string().min(1, { message: 'Please select an academic level.' }),
  subjectArea: z.string().min(1, { message: 'Please select a subject area.' }),
  wordCount: z.coerce.number().min(1, { message: 'Word count is required and must be at least 1.' }),
  deadline: z.string().min(1, { message: 'Deadline is required.' }),
  requirements: z.string().optional(),
  service: z.string().min(1, { message: 'Please select a preferred service.' }),
});
type QuoteFormValues = z.infer<typeof quoteFormSchema>;
export function QuotePage() {
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: '',
      email: '',
      documentType: '',
      academicLevel: '',
      subjectArea: '',
      wordCount: undefined,
      deadline: '',
      requirements: '',
      service: '',
    }
  });
  async function onSubmit(data: QuoteFormValues) {
    const promise = api('/api/quote', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    toast.promise(promise, {
      loading: 'Submitting your request...',
      success: () => {
        form.reset();
        return 'Quote request submitted! We will email you a detailed quote shortly.';
      },
      error: 'Failed to submit request. Please check your details and try again.',
    });
  }
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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
                            {...field}
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
                  <Button type="submit" size="lg" className="w-full bg-brand-gold hover:bg-yellow-500 text-brand-blue font-bold" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}