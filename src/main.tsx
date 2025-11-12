import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { ServicesPage } from '@/pages/ServicesPage';
import { AboutPage } from '@/pages/AboutPage';
import { HowItWorksPage } from '@/pages/HowItWorksPage';
import { SuccessStoriesPage } from '@/pages/SuccessStoriesPage';
import { BlogPage } from '@/pages/BlogPage';
import { ContactPage } from '@/pages/ContactPage';
import { QuotePage } from '@/pages/QuotePage';
import { FAQPage } from '@/pages/FAQPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { PartnershipsPage } from '@/pages/PartnershipsPage';
import { ClientLoginPage } from '@/pages/ClientLoginPage';
const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <RouteErrorBoundary /> },
  { path: "/services", element: <ServicesPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/about", element: <AboutPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/how-it-works", element: <HowItWorksPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/success-stories", element: <SuccessStoriesPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/blog", element: <BlogPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/blog/:slug", element: <ArticlePage />, errorElement: <RouteErrorBoundary /> },
  { path: "/contact", element: <ContactPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/quote", element: <QuotePage />, errorElement: <RouteErrorBoundary /> },
  { path: "/faq", element: <FAQPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/partnerships", element: <PartnershipsPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/client-login", element: <ClientLoginPage />, errorElement: <RouteErrorBoundary /> },
]);
// Do not touch this code
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
)