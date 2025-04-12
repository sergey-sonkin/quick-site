import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { PageContainer } from "@/components/layout/page-container";

export default function Home() {
  return (
    <PageContainer maxWidth="prose">
      <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-8 items-center py-8">
        <div className="w-full md:w-1/2 order-2 md:order-1 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Hi, I&apos;m Your Name</h1>
            <p className="text-xl text-neutral-500 dark:text-neutral-400">
              Developer, designer, and creative thinker
            </p>
          </div>
          
          <p className="text-neutral-600 dark:text-neutral-300">
            I&apos;m passionate about building beautiful and functional web experiences that solve real problems.
            Welcome to my personal website where you can learn about my professional journey and thoughts.
          </p>
          
          <div className="flex flex-wrap gap-3 pt-2">
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">TailwindCSS</Badge>
            <Badge variant="secondary">UI Design</Badge>
          </div>
          
          <div className="flex gap-4 pt-2">
            <Button asChild>
              <Link href="/resume">View Resume</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">Read Blog</Link>
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <Avatar className="w-64 h-64 border-4 border-neutral-200 dark:border-neutral-800">
            {/* Replace with your actual photo */}
            <AvatarImage src="/profile-photo.jpg" alt="Your Name" />
            <AvatarFallback className="text-xl bg-neutral-100 dark:bg-neutral-800">
              YN
            </AvatarFallback>
          </Avatar>
        </div>
      </section>
      
      <Separator />
      
      {/* Featured Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Project One</CardTitle>
              <CardDescription>A brief description of this amazing project</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Built with React, TypeScript and TailwindCSS. This project demonstrates
                my ability to create elegant, responsive user interfaces.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View Project
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Project Two</CardTitle>
              <CardDescription>Another awesome project to showcase</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                A full-stack application built with Next.js that integrates with
                multiple APIs and handles complex state management.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View Project
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Project Three</CardTitle>
              <CardDescription>The last project in this showcase</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                An innovative solution that demonstrates my problem-solving skills
                and attention to detail in both design and implementation.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View Project
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      </div>
    </PageContainer>
  );
}
