import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
const blogPosts = [
  {
    title: '10 Common Reasons Manuscripts Get Rejected',
    category: 'Publishing Strategies',
    excerpt: 'Understanding why papers are rejected is the first step to avoiding common pitfalls and increasing your chances of acceptance.',
    image: 'https://images.unsplash.com/photo-1583464653429-03a1f3a8b74a?q=80&w=2070&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'How to Write a Strong Abstract That Gets Noticed',
    category: 'Academic Writing Tips',
    excerpt: 'Your abstract is your paper\'s elevator pitch. Learn the key components of a powerful abstract that captures editors\' attention.',
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Thesis vs. Dissertation: Key Differences Explained',
    category: 'Academic Writing Tips',
    excerpt: 'While often used interchangeably, there are crucial differences. We break down what you need to know for your graduate degree.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Navigating Peer Review: A Guide for Early-Career Researchers',
    category: 'Publishing Strategies',
    excerpt: 'Peer review can be daunting. This guide provides actionable tips for responding to reviewer comments constructively and professionally.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Avoiding Predatory Journals: Red Flags to Watch For',
    category: 'Publishing Strategies',
    excerpt: 'Protect your research from predatory publishers. Learn to identify the warning signs and choose reputable journals for your work.',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Time Management for Researchers: Maximizing Productivity',
    category: 'Researcher Life',
    excerpt: 'Juggling research, writing, and teaching is a challenge. Discover proven time management techniques tailored for the academic world.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop',
    link: '#',
  },
];
export function BlogPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.title} className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <Link to={post.link} className="block">
                  <AspectRatio ratio={16 / 9}>
                    <img src={post.image} alt={post.title} className="object-cover w-full h-full" />
                  </AspectRatio>
                </Link>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit bg-brand-gold/10 text-brand-gold">{post.category}</Badge>
                  <CardTitle className="font-serif mt-2">
                    <Link to={post.link} className="hover:text-brand-gold transition-colors">{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 text-brand-blue dark:text-brand-gold">
                    <Link to={post.link}>Read More →</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <section className="py-20 md:py-32 bg-brand-light dark:bg-brand-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-blue dark:text-white">Stay Ahead of the Curve</h2>
          <p className="mt-4 text-muted-foreground">Get monthly writing tips & journal alerts delivered straight to your inbox.</p>
          <form className="mt-8 flex max-w-md mx-auto gap-2">
            <Input type="email" placeholder="Enter your email" className="flex-grow" />
            <Button type="submit" className="bg-brand-gold hover:bg-yellow-500 text-brand-blue font-bold">Subscribe</Button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
}