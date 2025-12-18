# Landing Page

A modern, responsive landing page built with Next.js 14 and Tailwind CSS. This is a static site that can be deployed to any static hosting service.

## Features

- 🎨 **Modern Design** - Beautiful, clean UI with smooth animations and transitions
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Static Export** - Pre-rendered static HTML for fast loading and easy deployment
- 🎯 **Tailwind CSS** - Utility-first CSS framework for rapid styling
- 🖼️ **Optimized Images** - Local images optimized for performance
- ♿ **Accessible** - Semantic HTML and proper ARIA labels

## Sections

- **Hero Section** - Eye-catching header with background image
- **Benefits/Features** - Three-column grid showcasing key benefits
- **About/Story** - Two-column layout with image and content
- **Services** - Grid of service offerings
- **Testimonials** - Client testimonials with ratings
- **Contact Form** - Contact form with validation
- **Footer** - Contact information and links

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

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `out` folder to Netlify
3. Or connect your Git repository for automatic deployments

## Project Structure

```
landing/
├── app/
│   ├── globals.css          # Global styles with Tailwind directives
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page component
├── public/
│   └── images/              # Static images
│       ├── hero.jpg         # Hero section image
│       └── story.jpg        # Story section image
├── out/                     # Generated static files (after build)
├── next.config.js           # Next.js configuration (static export)
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.mjs       # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#a3b087',
    dark: '#435663',
    light: '#fff8d4',
  },
  // ... more colors
}
```

### Content

Edit `app/page.tsx` to update:
- Hero section text and images
- Benefits/features content
- About section content
- Services offered
- Testimonials
- Contact information

### Images

Replace images in `public/images/`:
- `hero.jpg` - Hero section background
- `story.jpg` - Story/About section image

## Configuration

### Static Export

The project is configured for static export in `next.config.js`:

```javascript
{
  output: 'export',
  images: {
    unoptimized: true,
  }
}
```

**Note**: With static export, you cannot use:
- API routes (`app/api`)
- Server-side rendering (SSR)
- Incremental Static Regeneration (ISR)
- Image optimization (images are unoptimized)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is private and proprietary.

## Contributing

This is a private project. For questions or issues, please contact the project maintainer.

