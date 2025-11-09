import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lock } from 'lucide-react';
export function ClientLoginPage() {
  return (
    <MainLayout>
      <div className="bg-brand-light dark:bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex items-center justify-center min-h-[40vh]">
            <Card className="w-full max-w-md text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-brand-gold/10 p-4 rounded-full w-fit mb-4">
                  <Lock className="h-10 w-10 text-brand-gold" />
                </div>
                <CardTitle className="text-3xl font-serif">Client Portal Coming Soon</CardTitle>
                <CardDescription className="text-lg text-muted-foreground pt-2">
                  We are building a secure portal for you to manage projects, communicate with your expert, and track progress.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  This feature is currently under development. In the meantime, all communication and file sharing will be handled securely via email.
                </p>
                <Button asChild>
                  <Link to="/">Return to Homepage</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}