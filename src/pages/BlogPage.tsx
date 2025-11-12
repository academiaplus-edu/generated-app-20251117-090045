import React, { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { api } from '@/lib/api-client';
import { blogPosts } from '@/content/blog-posts';
import { Search } from 'lucide-react';
const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});
type NewsletterFormValues = z.infer<typeof newsletterSchema>;
const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];
export function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter(post => selectedCategory === 'All' || post.category === selectedCategory)
      .filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [searchTerm, selectedCategory]);
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
    <MainLayout>
      <div className="bg-brand-light dark:bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-blue dark:text-white">Insights for Academic Excellence</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Our expert-written articles on academic writing, publishing strategy, and research productivity.
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Filters */}
          <div className="mb-12 space-y-6">
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                type="search"
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <Button 
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'bg-brand-blue text-white' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.slug} className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <Link to={`/blog/${post.slug}`} className="block">
                    <AspectRatio ratio={16 / 9}>
                      <img src={post.image} alt={post.title} className="object-cover w-full h-full" />
                    </AspectRatio>
                  </Link>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit bg-brand-gold/10 text-brand-gold">{post.category}</Badge>
                    <CardTitle className="font-serif mt-2">
                      <Link to={`/blog/${post.slug}`} className="hover:text-brand-gold transition-colors">{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="p-0 text-brand-blue dark:text-brand-gold">
                      <Link to={`/blog/${post.slug}`}>Read More →</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold">No Articles Found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
      <section className="py-20 md:py-32 bg-brand-light dark:bg-brand-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-blue dark:text-white">Stay Ahead of the Curve</h2>
          <p className="mt-4 text-muted-foreground">Get monthly writing tips & journal alerts delivered straight to your inbox.</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 flex max-w-md mx-auto gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" className="flex-grow" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs mt-1 text-left" />
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-brand-gold hover:bg-yellow-500 text-brand-blue font-bold" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? '...' : 'Subscribe'}
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </MainLayout>
  );
}