# Landing Page

A modern, responsive landing page built with Next.js 14 and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14.2.35
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **Build Tool**: Next.js built-in bundler
- **Static Export**: Configured for static site generation

## Getting Started

### Prerequisites

- Node.js 18+ (or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build static site for production
- `npm run start` - Start production server (requires build first)
- `npm run lint` - Run ESLint to check code quality

## Building for Production

To create a static export:

```bash
npm run build
```

The static files will be generated in the `out/` directory, ready to be deployed to any static hosting service.

## Deployment

### Static Hosting Services

The `out/` directory contains all static files that can be deployed to:

- **Vercel** - Automatic deployment from Git
- **Netlify** - Drag and drop the `out` folder
- **GitHub Pages** - Upload `out` folder contents
- **AWS S3** - Upload `out` folder to S3 bucket
- **Any static host** - Upload `out` folder contents
