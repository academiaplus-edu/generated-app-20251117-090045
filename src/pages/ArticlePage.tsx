import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { blogPosts } from '@/content/blog-posts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
export function ArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl font-bold font-serif">Post Not Found</h1>
          <p className="mt-4 text-muted-foreground">The article you are looking for does not exist.</p>
          <Button onClick={() => navigate('/blog')} className="mt-8">Back to Blog</Button>
        </div>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <div className="bg-white dark:bg-gray-900 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <header className="mb-12">
              <Button variant="ghost" onClick={() => navigate('/blog')} className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Button>
              <p className="text-brand-gold font-semibold">{post.category}</p>
              <h1 className="mt-2 text-4xl md:text-5xl font-bold font-serif text-brand-blue dark:text-white leading-tight">
                {post.title}
              </h1>
              <div className="mt-6 flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </header>
            <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
              <img src={post.image} alt={post.title} className="rounded-lg mb-12 w-full" />
              {post.content.map((block, index) => {
                if (block.type === 'h2') {
                  return <h2 key={index} className="font-serif !mt-12 !mb-4">{block.text}</h2>;
                }
                return <p key={index}>{block.text}</p>;
              })}
            </div>
          </article>
        </div>
      </div>
      <section className="py-20 md:py-32 bg-brand-light dark:bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-blue dark:text-white">Need Expert Help with Your Manuscript?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Our PhD-level experts can help you with writing, editing, and publishing support.</p>
          <Button asChild size="lg" className="mt-8 bg-brand-gold hover:bg-yellow-500 text-brand-blue font-bold text-base px-8 py-6">
            <Link to="/quote">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}