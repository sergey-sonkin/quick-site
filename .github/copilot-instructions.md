# Personal Website Project Reference

## Project Overview

This document serves as a reference guide for the personal website project, outlining its purpose, technical specifications, and future considerations.

### Purpose

A modern personal website that includes:

- Professional landing page with photo
- Resume/CV section
- Blog section
- Responsive design for all devices

## Technical Stack

### Core Technologies

- **Next.js**: For server-rendered React applications

  - Using App Router architecture
  - Version: 15.x

- **TypeScript**: For type safety and improved development experience

  - Version: 5.x

- **TailwindCSS**: For utility-first styling

  - Version: 3.x (Note: v4 compatibility issues were encountered)

- **shadcn UI**: For reusable UI components
  - Based on Radix UI primitives

### Package Management

- **pnpm**: Preferred over npm for better dependency management and performance

### Build Tools

- **Vite**: For fast development and bundling
  - Used via Next.js integration

### Aesthetics

- **Nord color scheme**: Used throughout the application for consistent branding
  - Implemented via CSS variables and Tailwind configuration
  - Color palette defined in `src/lib/nord-colors.ts`
  - Semantic color mapping in `tailwind.config.js` and `globals.css`
  - All neutral Tailwind colors have been replaced with Nord equivalents
  - Uses semantic variables like `text-muted-foreground` instead of direct color references

#### Nord Color Palette Structure

The Nord color palette is organized into four distinct color groups:

1. **Polar Night** (dark greys/blacks - nord0 to nord3)

   - Used for dark backgrounds, text in light mode
   - Example: `#2E3440` (nord0) - Darkest background color

2. **Snow Storm** (light greys/whites - nord4 to nord6)

   - Used for light backgrounds, text in dark mode
   - Example: `#ECEFF4` (nord6) - Brightest snow storm color

3. **Frost** (blue accent colors - nord7 to nord10)

   - Used for interactive elements, links, accents
   - Example: `#88C0D0` (nord8) - Bright blue accent

4. **Aurora** (colorful accent colors - nord11 to nord15)
   - Used for specific semantic contexts (errors, warnings, etc.)
   - Example: `#BF616A` (nord11) - Red for errors

#### Color Usage Guidelines

1. **Prefer Semantic Variables**:

   ```jsx
   <p className="text-muted-foreground">Some text</p>
   <div className="bg-secondary">A container</div>
   <div className="border border-border">A border</div>
   ```

2. **Use Opacity Modifiers** for variants:

   ```jsx
   <p className="text-foreground/75">75% opacity text</p>
   <p className="text-primary/90">90% opacity primary color</p>
   ```

3. **Direct Access** when necessary:
   ```jsx
   <div className="bg-nord-8">Frost blue background</div>
   <div className="text-polar-night-darkest">Dark text</div>
   ```

#### Semantic Color Mapping

| Semantic Name    | Light Theme | Dark Theme | Usage                  |
| ---------------- | ----------- | ---------- | ---------------------- |
| background       | nord6       | nord0      | Page backgrounds       |
| foreground       | nord0       | nord6      | Primary text           |
| primary          | nord10      | nord8      | Primary buttons, links |
| secondary        | nord5       | nord1      | Secondary containers   |
| muted            | nord4       | nord2      | Subdued elements       |
| muted-foreground | nord3       | nord4      | Secondary text         |
| accent           | nord7       | nord9      | Accent elements        |
| border           | nord4       | nord3      | Borders and dividers   |
| destructive      | nord11      | nord11     | Error indicators       |

## Project Structure

```
website2/
├── src/
│   ├── app/
│   │   ├── components/     # Reusable UI components
│   │   ├── blog/           # Blog pages and posts
│   │   │   └── [slug]/     # Dynamic blog post routes
│   │   ├── resume/         # Resume/CV page
│   │   ├── globals.css     # Global styles and Tailwind imports
│   │   ├── layout.tsx      # Root layout with navigation
│   │   └── page.tsx        # Home/landing page
│   ├── components/
│   │   └── ui/             # UI components from shadcn
│   │       └── theme-provider.tsx  # Dark/light mode provider
│   ├── lib/
│   │   └── theme-script.ts # Theme initialization script
│   │   └── nord-colors.ts  # Nord color palette definitions
│   └── ...
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── next.config.ts          # Next.js configuration
└── ...
```

## Key Features

1. **Landing Page**

   - Photo/avatar section
   - Brief introduction
   - Navigation to other sections

2. **Resume Page**

   - Professional summary
   - Work experience
   - Education
   - Skills
   - Contact information

3. **Blog Section**

   - List of blog posts
   - Individual blog post pages
   - Categorization or tagging (future)

4. **Theme System**
   - Dark/light mode toggle with system preference detection
   - Persistence via localStorage
   - Flash-free theme switching with pre-hydration script
   - Default fallback to dark mode when system preference unavailable

## Deployment

### Target Platform

- **Cloudflare Pages**: For static site deployment
  - Static assets are served from Cloudflare's edge network
  - Consider Cloudflare Workers for any serverless API needs

### Build Configuration

```bash
# Build command
pnpm build

# Output directory
.next
```

## Design Considerations

### Responsiveness

- Mobile-first approach using TailwindCSS breakpoints
- Testing required on multiple device sizes

### Accessibility

- Ensure proper contrast ratios
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility

### Performance

- Optimize images (using Next.js Image component)
- Minimize JavaScript bundle size
- Implement proper code splitting
- Prevent FOUC (Flash of Unstyled Content) with theme script

## Future Enhancements

1. **Content Management**

   - Consider headless CMS integration for blog posts
   - Options: Contentful, Sanity, or MDX files

2. **Interactive Elements**

   - Contact form with validation
   - Project showcase with filtering
   - ~~Dark/light mode toggle~~ (Implemented)

3. **SEO Improvements**

   - Metadata optimization
   - Open Graph tags
   - Structured data

4. **Analytics**
   - Privacy-focused analytics integration
   - Options: Plausible, Simple Analytics, or self-hosted solutions

## Technical Notes

### Configuration Issues

- TailwindCSS v4 had compatibility issues; using v3 instead
- PostCSS configuration requires CommonJS format (not ESM)
- File naming: use `.js` for config files, not `.mjs`

### Theme Implementation

- Uses class strategy for dark mode via Tailwind (`darkMode: "class"`)
- Theme preferences stored in localStorage
- Pre-hydration script prevents theme flicker
- System preference detection with dark mode fallback
- Three theme options: light, dark, and system (follows OS preference)

### Development Workflow

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Run production build locally
pnpm start
```

## Maintenance Guidelines

1. Keep dependencies updated regularly
2. Test across browsers and devices before major updates
3. Maintain consistent code formatting and naming conventions
4. Document any significant architectural changes
5. Consider implementing automated tests for critical functionality

---

This reference document will evolve as the project develops. Review and update it periodically to reflect the current state and future direction of the personal website.
