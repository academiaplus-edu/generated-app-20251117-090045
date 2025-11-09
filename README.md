# AcademiaPlus

A visually stunning, professional website for an academic writing and publishing support service, designed to build trust and attract scholarly clients. Built on Cloudflare Workers with a React frontend.

[cloudflarebutton]

---

## About The Project

AcademiaPlus is a premium, professional web application designed to be the public-facing platform for a high-end academic support service. It serves to establish brand credibility, showcase a comprehensive suite of services, and convert visitors into clients. The platform is structured around several key pages: a compelling Homepage to introduce the brand; a detailed Services page outlining offerings like writing, editing, and publishing support; an About Us page to build trust through team and process transparency; a Success Stories page to provide social proof; a Resources/Blog for content marketing and SEO; and robust forms for contact and detailed project quotes. The design is minimalist, professional, and visually stunning, emphasizing clarity, trustworthiness, and academic excellence.

## Key Features

-   **Stunning Homepage:** A visually impressive landing page to introduce the brand and services.
-   **Comprehensive Services:** Detailed breakdown of all academic writing, editing, and publishing support.
-   **Trust-Building Content:** 'About Us' and 'Success Stories' pages to showcase expertise and results.
-   **Clear User Journey:** A 'How It Works' page to guide clients through the process.
-   **Engagement & SEO:** A dedicated Blog/Resources section for valuable content.
-   **Lead Generation:** Integrated 'Contact Us' and 'Get a Quote' forms.
-   **Professional & Minimalist UI:** A clean, modern design with a focus on user experience.

## Tech Stack

This project is a full-stack application built with a modern, serverless architecture.

-   **Frontend:**
    -   [React](https://react.dev/)
    -   [Vite](https://vitejs.dev/)
    -   [React Router](https://reactrouter.com/)
    -   [Tailwind CSS](https://tailwindcss.com/)
    -   [shadcn/ui](https://ui.shadcn.com/)
    -   [Framer Motion](https://www.framer.com/motion/)
-   **Backend:**
    -   [Cloudflare Workers](https://workers.cloudflare.com/)
    -   [Hono](https://hono.dev/)
-   **Storage:**
    -   [Cloudflare Durable Objects](https://developers.cloudflare.com/durable-objects/)
-   **Language:**
    -   [TypeScript](https://www.typescriptlang.org/)
-   **Tooling:**
    -   [Bun](https://bun.sh/)
    -   [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   [Bun](https://bun.sh/docs/installation) installed on your machine.
-   A [Cloudflare account](https://dash.cloudflare.com/sign-up).
-   [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed and authenticated:
    ```sh
    bun install -g wrangler
    wrangler login
    ```

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/academiaplus.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd academiaplus
    ```
3.  Install dependencies:
    ```sh
    bun install
    ```

## Usage

To start the development server, which includes the Vite frontend and the Hono backend worker, run:

```sh
bun dev
```

This will start the Vite development server, typically on `http://localhost:3000`. API requests from the frontend to `/api/*` are automatically proxied to the Cloudflare Worker running locally.

## Project Structure

-   `src/`: Contains the React frontend application code.
    -   `pages/`: Top-level page components.
    -   `components/`: Reusable UI components, including shadcn/ui.
    -   `lib/`: Utility functions and API client.
-   `worker/`: Contains the Cloudflare Worker (Hono) backend code.
    -   `index.ts`: The main worker entry point.
    -   `user-routes.ts`: Application-specific API routes.
    -   `core-utils.ts`: Durable Object helpers and core utilities.
-   `shared/`: TypeScript types and data shared between the frontend and backend.

## Deployment

This application is designed for easy deployment to Cloudflare.

1.  Build the application for production:
    ```sh
    bun run build
    ```
2.  Deploy the application using Wrangler:
    ```sh
    bun run deploy
    ```

Wrangler will build the worker and deploy it along with the static assets from the frontend to your Cloudflare account.

Alternatively, deploy directly from your GitHub repository:

[cloudflarebutton]

## License

Distributed under the MIT License. See `LICENSE` for more information.