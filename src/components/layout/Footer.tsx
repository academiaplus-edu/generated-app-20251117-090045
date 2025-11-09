import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { BookOpenCheck, Linkedin, Twitter } from 'lucide-react';
import { toast } from 'sonner';
import { api } from '@/lib/api-client';
const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});
type NewsletterFormValues = z.infer<typeof newsletterSchema>;
export function Footer() {
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: '' },
  });
  async function onSubmit(data: NewsletterFormValues) {
    const promise = api('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    toast.promise(promise, {
      loading: 'Subscribing...',
      success: () => {
        form.reset();
        return 'Thank you for subscribing!';
      },
      error: 'Failed to subscribe. Please try again.',
    });
  }
  return (
    <footer className="bg-brand-blue text-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <BookOpenCheck className="h-7 w-7 text-brand-gold" />
              <span className="text-xl font-bold text-white">AcademiaPlus</span>
            </Link>
            <p className="text-sm text-gray-300">
              Elevating Academic Excellence Through Expert Writing & Publishing Support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-brand-gold transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-brand-gold transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-brand-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-brand-gold transition-colors">How It Works</Link></li>
              <li><Link to="/quote" className="text-gray-300 hover:text-brand-gold transition-colors">Get a Quote</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-2">Get monthly writing tips & journal alerts.</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs mt-1" />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="bg-brand-gold hover:bg-yellow-500 text-brand-blue font-bold" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? '...' : 'Subscribe'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AcademiaPlus. All rights reserved.</p>
          <p className="mt-1">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}