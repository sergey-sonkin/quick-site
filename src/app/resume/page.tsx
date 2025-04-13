import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PageContainer } from "@/components/layout/page-container";

export default function ResumePage() {
  return (
    <PageContainer maxWidth="prose">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Resume</h1>
        <p className="text-muted-foreground">
          Software developer with expertise in modern web technologies
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Professional Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/85">
            Detail-oriented software developer with a passion for creating
            elegant solutions to complex problems. Experienced in modern web
            technologies and committed to producing high-quality, maintainable
            code. Strong communication skills and experience working in
            collaborative team environments.
          </p>
        </CardContent>
      </Card>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <h3 className="text-xl font-medium">Software Engineer</h3>
              <Badge variant="outline" className="mt-2 md:mt-0">
                August 2023 - Present
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              Example Company, City
            </p>
            <Separator className="my-4" />
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <div className="mr-2 mt-1 rounded-full bg-secondary p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>
                  Developed and maintained scalable web applications using React
                  and TypeScript
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 rounded-full bg-secondary p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Implemented responsive designs using TailwindCSS</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 rounded-full bg-secondary p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>
                  Collaborated with cross-functional teams to deliver
                  high-quality software solutions
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 rounded-full bg-secondary p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>
                  Mentored junior developers and conducted code reviews
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <h3 className="text-xl font-medium">Web Developer</h3>
              <Badge variant="outline" className="mt-2 md:mt-0">
                Jun 2017 - Dec 2019
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              Previous Company, City
            </p>
            <Separator className="my-4" />
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <div className="mr-2 mt-1 rounded-full bg-secondary p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>
                  Built responsive web applications using modern JavaScript
                  frameworks
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 rounded-full bg-secondary p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>
                  Collaborated with designers to implement UI/UX designs
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 rounded-full bg-secondary p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Optimized application performance and accessibility</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        {/* <h2 className="text-2xl font-semibold mb-6">Education</h2> */}
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <h3 className="text-xl font-medium">The University of Chicago</h3>
              <Badge variant="outline" className="mt-2 md:mt-0">
                Sep 2018 - Jun 2022
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              Chicago, Illinois
            </p>
            <Separator className="my-4" />
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="mr-2 mt-1 rounded-full bg-secondary p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-foreground/85">
                  Bachelor's - Computer Science with a Specialization in Machine
                  Learning
                </span>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-1 rounded-full bg-secondary p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-foreground/85">
                  Bachelor's - Statistics
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="tech">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="tech" className="flex-1">
                Technical
              </TabsTrigger>
              <TabsTrigger value="soft" className="flex-1">
                Soft Skills
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex-1">
                Tools
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tech" className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>Node.js</Badge>
                <Badge>HTML5/CSS3</Badge>
                <Badge>REST APIs</Badge>
                <Badge>GraphQL</Badge>
              </div>
            </TabsContent>
            <TabsContent value="soft" className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge>Team Collaboration</Badge>
                <Badge>Problem Solving</Badge>
                <Badge>Communication</Badge>
                <Badge>Time Management</Badge>
                <Badge>Adaptability</Badge>
                <Badge>Leadership</Badge>
              </div>
            </TabsContent>
            <TabsContent value="tools" className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge>Git</Badge>
                <Badge>VS Code</Badge>
                <Badge>Figma</Badge>
                <Badge>Docker</Badge>
                <Badge>JIRA</Badge>
                <Badge>Webpack</Badge>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-foreground/85">your.email@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <span className="text-foreground/85">
                github.com/yourusername
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-foreground/85">
                linkedin.com/in/yourusername
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
