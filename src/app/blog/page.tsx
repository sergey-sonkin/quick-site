import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageContainer } from "@/components/layout/page-container";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags?: string[];
}

export default function BlogPage() {
  // This would typically come from a database or CMS
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Getting Started with Next.js and TypeScript",
      date: "April 10, 2024",
      excerpt:
        "Learn how to set up a new project with Next.js and TypeScript for a modern web development experience.",
      slug: "getting-started-with-nextjs-typescript",
      tags: ["Next.js", "TypeScript", "Web Development"],
    },
    {
      id: "2",
      title: "Why I Love TailwindCSS",
      date: "March 25, 2024",
      excerpt:
        "Exploring the benefits of using TailwindCSS for rapid UI development and consistent design.",
      slug: "why-i-love-tailwindcss",
      tags: ["TailwindCSS", "CSS", "Design"],
    },
    {
      id: "3",
      title: "Building Accessible Web Applications",
      date: "March 12, 2024",
      excerpt:
        "Tips and techniques for creating web applications that are accessible to all users, regardless of ability.",
      slug: "building-accessible-web-applications",
      tags: ["Accessibility", "Web Development", "UI/UX"],
    },
  ];

  return (
    <PageContainer maxWidth="prose">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          My thoughts on technology, design, and development.
        </p>
      </div>

      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                {post.date}
              </div>
              <CardTitle className="text-2xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="text-base">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild>
                <Link href={`/blog/${post.slug}`}>
                  Read more
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
                    className="ml-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
