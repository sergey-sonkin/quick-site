import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PageContainer } from "@/components/layout/page-container";

// Use the correct type for Next.js App Router page props
type BlogPostParams = {
  params: {
    slug: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = params;

  // In a real application, this would come from a database or CMS
  // For demo purposes, we're just showing static content based on the slug
  const getBlogContent = (slug: string) => {
    switch (slug) {
      case "getting-started-with-nextjs-typescript":
        return {
          title: "Getting Started with Next.js and TypeScript",
          date: "April 10, 2024",
          tags: ["Next.js", "TypeScript", "Web Development"],
          content: (
            <>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Next.js combined with TypeScript provides a powerful foundation
                for modern web development. In this post, we&apos;ll walk
                through setting up a new project with these technologies.
              </p>
              <h2 className="text-xl font-semibold mt-8 mb-3">Why Next.js?</h2>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Next.js offers a great developer experience with features like
                server-side rendering, static site generation, API routes, and
                more. It&apos;s a production-ready framework that makes building
                React applications a breeze.
              </p>
              <h2 className="text-xl font-semibold mt-8 mb-3">
                Adding TypeScript
              </h2>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                TypeScript brings static typing to JavaScript, helping catch
                errors early in the development process and providing better
                tooling support. Next.js has built-in TypeScript support, making
                it easy to get started.
              </p>
              <h2 className="text-xl font-semibold mt-8 mb-3">
                Getting Started
              </h2>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                To create a new Next.js project with TypeScript, you can use the
                following command:
              </p>
              <Card className="my-6">
                <CardContent className="p-4 font-mono text-sm overflow-x-auto bg-neutral-50 dark:bg-neutral-900">
                  npx create-next-app@latest my-app --typescript
                </CardContent>
              </Card>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                This will set up a new project with all the necessary
                configuration for TypeScript. From there, you can start building
                your application with confidence!
              </p>
            </>
          ),
        };
      case "why-i-love-tailwindcss":
        return {
          title: "Why I Love TailwindCSS",
          date: "March 25, 2024",
          tags: ["TailwindCSS", "CSS", "Design"],
          content: (
            <>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                After using various CSS frameworks and methodologies over the
                years, I&apos;ve found TailwindCSS to be the most efficient and
                enjoyable way to style web applications.
              </p>
              <h2 className="text-xl font-semibold mt-8 mb-3">
                Utility-First Approach
              </h2>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                TailwindCSS takes a utility-first approach to styling, providing
                small, single-purpose classes that can be composed to build any
                design. This eliminates the need to write custom CSS in most
                cases.
              </p>
              <h2 className="text-xl font-semibold mt-8 mb-3">
                Rapid Development
              </h2>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                With TailwindCSS, I can build UI components much faster because
                I don&apos;t have to context-switch between HTML and CSS files.
                Everything is right there in the markup, making it easy to
                iterate quickly.
              </p>
              <h2 className="text-xl font-semibold mt-8 mb-3">
                Responsive Design Made Simple
              </h2>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                TailwindCSS makes responsive design incredibly straightforward
                with its intuitive breakpoint prefixes (sm:, md:, lg:, etc.).
                This makes it easy to create layouts that work well on all
                screen sizes.
              </p>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                If you haven&apos;t tried TailwindCSS yet, I highly recommend
                giving it a shot for your next project!
              </p>
            </>
          ),
        };
      case "building-accessible-web-applications":
        return {
          title: "Building Accessible Web Applications",
          date: "March 12, 2024",
          tags: ["Accessibility", "Web Development", "UI/UX"],
          content: (
            <>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Accessibility is a critical aspect of web development that
                ensures all users, regardless of ability, can use your
                application effectively. Here are some key considerations for
                building accessible web applications.
              </p>
              <h2 className="text-xl font-semibold mt-8 mb-3">Semantic HTML</h2>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Using semantic HTML elements is the foundation of accessibility.
                Elements like{" "}
                <code className="px-1 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 font-mono text-sm">
                  nav
                </code>
                ,{" "}
                <code className="px-1 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 font-mono text-sm">
                  header
                </code>
                ,{" "}
                <code className="px-1 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 font-mono text-sm">
                  main
                </code>
                , and{" "}
                <code className="px-1 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 font-mono text-sm">
                  button
                </code>{" "}
                convey meaning to assistive technologies.
              </p>
              <h2 className="text-xl font-semibold mt-8 mb-3">
                Keyboard Navigation
              </h2>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Ensure all interactive elements can be accessed and used with a
                keyboard alone. This includes proper focus management and
                visible focus indicators.
              </p>
              <h2 className="text-xl font-semibold mt-8 mb-3">
                ARIA Attributes
              </h2>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                When HTML semantics aren&apos;t enough, ARIA (Accessible Rich
                Internet Applications) attributes can provide additional context
                for assistive technologies. Use them judiciously and test
                thoroughly.
              </p>
              <h2 className="text-xl font-semibold mt-8 mb-3">Testing</h2>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Regular testing with screen readers and other assistive
                technologies is essential. Tools like Lighthouse, axe, and Wave
                can help identify accessibility issues, but nothing replaces
                testing with real users.
              </p>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                By prioritizing accessibility from the start of your project,
                you can create web applications that are usable by everyone,
                which not only expands your audience but is also the right thing
                to do.
              </p>
            </>
          ),
        };
      default:
        return {
          title: "Blog Post Not Found",
          date: "",
          tags: [],
          content: <p>The requested blog post could not be found.</p>,
        };
    }
  };

  const post = getBlogContent(slug);

  return (
    <PageContainer maxWidth="prose">
      <article>
        <Button variant="ghost" asChild className="mb-6 pl-0 hover:pl-0">
          <Link href="/blog" className="inline-flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to all posts
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

          {post.date && (
            <div className="text-neutral-500 dark:text-neutral-400 mb-4">
              {post.date}
            </div>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <Separator className="my-8" />

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {post.content}
        </div>
      </article>
    </PageContainer>
  );
}
