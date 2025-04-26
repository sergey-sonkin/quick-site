import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageContainer } from "@/components/layout/page-container";
import { BulletPoint } from "./(components)/bullet-point";

/**
 * Resume Page
 *
 * Design Patterns:
 * ---------------
 * 1. Typography Scale
 *    - text-3xl: Primary page headers (h1)
 *    - text-xl: Section headers (h2)
 *    - text-lg: Company/organization names (h3)
 *    - text-md: Role titles/sub-elements (h4)
 *    - Default base size for body text
 *
 * 2. Visual Separation Strategy
 *    - Vertical spacing (mb-8) between major sections
 *    - Separators with reduced opacity instead of boxes/borders
 *    - Consistent internal component spacing
 *    - Typography and spacing over explicit containers
 *
 * 3. Career Progression Visualization
 *    - Timeline with vertical connecting line for positions at same company
 *    - Circular markers to denote each position
 *    - Subtle styling to show relationship between elements
 *
 * 4. Content Organization
 *    - Two-column grid for related content (education)
 *    - Consistent badge styling for dates: bg-primary/10 text-primary border-0
 *    - Bulleted lists with colored bullets (text-primary)
 */
export default function ResumePage() {
  return (
    <PageContainer maxWidth="prose">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Resume</h1>
        <p className="text-muted-foreground">
          Software developer with expertise in modern web technologies
        </p>
      </div>

      {/* Professional Summary section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>
        <p className="text-foreground/90 leading-relaxed">
          Detail-oriented software developer with a passion for creating elegant
          solutions to complex problems. Experienced in modern web technologies
          and committed to producing high-quality, maintainable code. Strong
          communication skills and experience working in collaborative team
          environments.
        </p>
      </div>

      {/* Experience section with career progression timeline */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-6">Experience</h2>

        {/* Narmi Experience with timeline showing promotion */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
            <h3 className="text-lg font-bold text-foreground">Narmi</h3>
            <Badge className="mt-1 md:mt-0 bg-primary/10 text-primary border-0 font-medium">
              Aug 2023 - Present
            </Badge>
          </div>
          <p className="text-muted-foreground mb-5">New York, NY</p>
          <Separator className="my-6 opacity-30" />

          {/* Career progression visualization with timeline connector */}
          {/* Software Engineer II Role */}
          <div className="mb-10 relative">
            {/* Vertical timeline connector */}
            <div className="hidden md:block absolute left-0 h-full w-0.5 bg-primary/20"></div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
              <div className="flex items-center">
                {/* Position marker */}
                <div className="hidden md:flex mr-3 h-2.5 w-2.5 rounded-full bg-primary"></div>
                <h4 className="text-md font-semibold ml-0 md:ml-2">
                  Software Engineer II
                </h4>
              </div>
              <Badge className="mt-1 md:mt-0 bg-primary/10 text-primary border-0 font-medium">
                Dec 2024
              </Badge>
            </div>
            <ul className="space-y-3 text-foreground/80 mt-4 ml-0 md:ml-7">
              <BulletPoint>
                Continue to own many responsibilities owned as Software Engineer
                I, building larger in scope features and owning work usually
                done by other pods to keep new financial institutions going live
                on schedule
              </BulletPoint>
              <BulletPoint>
                Expanded internal tooling to speed up routine deploys and
                incident response
              </BulletPoint>
              <BulletPoint>
                Automated mobile app screenshot process, saving hundreds of
                hours yearly
              </BulletPoint>
              <BulletPoint>
                Move Solutions team forward by triaging issues and helping
                implement process changes as most senior IC on team
              </BulletPoint>
              <BulletPoint>
                Onboarded another 2 new software engineers onto the team
              </BulletPoint>
            </ul>
          </div>

          {/* Software Engineer I Role */}
          <div className="relative">
            {/* Continuation of timeline connector */}
            <div className="hidden md:block absolute left-0 top-0 h-full w-0.5 bg-primary/20"></div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
              <div className="flex items-center">
                {/* Position marker */}
                <div className="hidden md:flex mr-3 h-2.5 w-2.5 rounded-full bg-primary"></div>
                <h4 className="text-md font-semibold ml-0 md:ml-2">
                  Software Engineer
                </h4>
              </div>
              <Badge className="mt-1 md:mt-0 bg-primary/10 text-primary border-0 font-medium">
                Aug 2023
              </Badge>
            </div>
            <ul className="space-y-3 text-foreground/80 mt-4 ml-0 md:ml-7">
              <BulletPoint>
                As a software engineer on the Solutions pod, helped 18 financial
                institutions go live by building out features, spinning up
                infrastructure, investigating issues and upgrading integrations
                to support aggressive go-live schedules
              </BulletPoint>
              <BulletPoint>
                As the Solutions Point Person assigned to the Community Savings
                go-live, helped the financial institution go live with Narmi in
                49 days, helping their institution secure $2.5 million in
                deposits and setting a company record for fastest go-live 4
                months into the job
              </BulletPoint>
              <BulletPoint>
                Triaged and responded to hundreds of emails sent to
                support@narmi.com that required engineering input
              </BulletPoint>
              <BulletPoint>
                Acted as sole engineering representative on numerous debugging
                calls and working sessions with both technical and non-technical
                folk at financial institutions and third parties
              </BulletPoint>
              <BulletPoint>
                Acted as reporter and/or responder on dozens of incidents
              </BulletPoint>
              <BulletPoint>
                Built out tooling for reducing time to resolution for issues and
                incidents
              </BulletPoint>
              <BulletPoint>
                Earned Quarterly Employee Recognition Award in Q1 2024
              </BulletPoint>
              <BulletPoint>
                Onboarded 2 new software engineers onto the team
              </BulletPoint>
            </ul>
          </div>
        </div>

        {/* Previous Experience - standalone experience */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
            <h3 className="text-lg font-bold text-foreground">LiquidX</h3>
            <Badge className="mt-1 md:mt-0 bg-primary/10 text-primary border-0 font-medium">
              Jun 2021 - Sep 2021
            </Badge>
          </div>
          <p className="text-muted-foreground mb-5">Boston, MA</p>
          <Separator className="my-6 opacity-30" />
          {/* Wrap title in a flex container to add the marker */}
          <div className="flex items-center mb-4">
            {/* Position marker */}
            <div className="hidden md:flex mr-3 h-2.5 w-2.5 rounded-full bg-primary"></div>
            {/* Adjust title margin to align with marker */}
            <h4 className="text-md font-semibold ml-0 md:ml-2">
              Data Engineer Intern
            </h4>
          </div>
          {/* Bullet points with original left margin */}
          <ul className="space-y-3 text-foreground/80 mt-4 ml-0 md:ml-7">
            <BulletPoint>
              Primary focus: custom Deep OCR document digitization model built
              on PyTorch and OpenCV
            </BulletPoint>
            <BulletPoint>
              Researched and implemented advanced algorithms for recognition and
              extraction of unstructured data
            </BulletPoint>
            <BulletPoint>
              Optimized data pre-processing after identifying key trends in
              customers’ documents, eliminating hours of training time
            </BulletPoint>
            <BulletPoint>
              Curated extensive training, validation, and testing datasets
              comprising thousands of internal and external documents
            </BulletPoint>
            <BulletPoint>
              Implemented robust pipelines to efficiently process model output
              and seamlessly integrate with other product offerings
            </BulletPoint>
            <BulletPoint>
              Collaborated cross-functionally to integrate machine learning
              solutions into product offerings
            </BulletPoint>
            <BulletPoint>
              Regularly presented research findings, progress updates, and MVP
              demonstrations to product team, project leads, and C-Suite
            </BulletPoint>
          </ul>
        </div>
      </div>

      {/* Education section with multi-major display */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-6">Education</h2>

        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
            <h3 className="text-lg font-bold">The University of Chicago</h3>
            <Badge className="mt-1 md:mt-0 bg-primary/10 text-primary border-0 font-medium">
              Sep 2018 - Jun 2022
            </Badge>
          </div>
          <p className="text-muted-foreground mb-5">Chicago, Illinois</p>
          <Separator className="my-6 opacity-30" />

          {/* Multi-major display using grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* First Major with distinctive icon */}
            <div>
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-accent/20 text-accent mr-3">
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
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </span>
                <h4 className="text-md font-semibold">Computer Science</h4>
              </div>
              <p className="text-foreground/80 mb-2 ml-11">
                Bachelor of Science
              </p>
              <p className="text-muted-foreground mb-4 ml-11">
                Specialization in Machine Learning
              </p>
              <div className="flex flex-wrap gap-2 ml-11">
                <Badge variant="outline" className="text-foreground/80">
                  Algorithm Design
                </Badge>
                <Badge variant="outline" className="text-foreground/80">
                  AI Fundamentals
                </Badge>
                <Badge variant="outline" className="text-foreground/80">
                  Deep Learning
                </Badge>
              </div>
            </div>

            {/* Second Major with distinctive icon */}
            <div>
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 text-primary mr-3">
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
                    <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13z"></path>
                    <circle cx="12" cy="8" r="2"></circle>
                  </svg>
                </span>
                <h4 className="text-md font-semibold">Statistics</h4>
              </div>
              <p className="text-foreground/80 mb-2 ml-11">
                Bachelor of Science
              </p>
              <p className="text-muted-foreground mb-4 ml-11">
                Focus on Computational Methods
              </p>
              <div className="flex flex-wrap gap-2 ml-11">
                <Badge variant="outline" className="text-foreground/80">
                  Data Analysis
                </Badge>
                <Badge variant="outline" className="text-foreground/80">
                  Probability Theory
                </Badge>
                <Badge variant="outline" className="text-foreground/80">
                  Statistical Modeling
                </Badge>
              </div>
            </div>
          </div>

          {/* Achievement callout using border instead of box */}
          {/* <div className="mt-8 pl-4 border-l-2 border-primary/30">
            <p className="text-foreground/90 italic">
              <span className="font-semibold not-italic">Achievement:</span>{" "}
              Graduated with double major, completing comprehensive research
              projects in both fields while maintaining Dean's List standing.
            </p>
          </div> */}
        </div>
      </div>

      {/* Skills section with categorized tabs */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-6">Skills</h2>
        {/* Tab navigation using underlines instead of boxes */}
        <Tabs defaultValue="tech" className="w-full">
          <TabsList className="w-full mb-6 bg-transparent border-b border-border">
            <TabsTrigger
              value="tech"
              className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent data-[state=active]:text-primary"
            >
              Technical
            </TabsTrigger>
            <TabsTrigger
              value="soft" // Added missing value prop
              className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent data-[state=active]:text-primary"
            >
              Soft Skills
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent data-[state=active]:text-primary"
            >
              Tools
            </TabsTrigger>
          </TabsList>
          {/* Skill badges with consistent color system */}
          <TabsContent value="tech" className="space-y-4 mt-2">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-accent/5 hover:bg-accent/10 text-accent border-0">
                JavaScript
              </Badge>
              <Badge className="bg-accent/5 hover:bg-accent/10 text-accent border-0">
                TypeScript
              </Badge>
              <Badge className="bg-accent/5 hover:bg-accent/10 text-accent border-0">
                React
              </Badge>
              <Badge className="bg-accent/5 hover:bg-accent/10 text-accent border-0">
                Next.js
              </Badge>
              <Badge className="bg-accent/5 hover:bg-accent/10 text-accent border-0">
                TailwindCSS
              </Badge>
              <Badge className="bg-accent/5 hover:bg-accent/10 text-accent border-0">
                Node.js
              </Badge>
              <Badge className="bg-accent/5 hover:bg-accent/10 text-accent border-0">
                HTML5/CSS3
              </Badge>
              <Badge className="bg-accent/5 hover:bg-accent/10 text-accent border-0">
                REST APIs
              </Badge>
              <Badge className="bg-accent/5 hover:bg-accent/10 text-accent border-0">
                GraphQL
              </Badge>
            </div>
          </TabsContent>
          <TabsContent value="soft" className="space-y-4 mt-2">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary/5 hover:bg-primary/10 text-primary border-0">
                Team Collaboration
              </Badge>
              <Badge className="bg-primary/5 hover:bg-primary/10 text-primary border-0">
                Problem Solving
              </Badge>
              <Badge className="bg-primary/5 hover:bg-primary/10 text-primary border-0">
                Communication
              </Badge>
              <Badge className="bg-primary/5 hover:bg-primary/10 text-primary border-0">
                Time Management
              </Badge>
              <Badge className="bg-primary/5 hover:bg-primary/10 text-primary border-0">
                Adaptability
              </Badge>
              <Badge className="bg-primary/5 hover:bg-primary/10 text-primary border-0">
                Leadership
              </Badge>
            </div>
          </TabsContent>
          <TabsContent value="tools" className="space-y-4 mt-2">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Git</Badge>
              <Badge variant="outline">VS Code</Badge>
              <Badge variant="outline">Figma</Badge>
              <Badge variant="outline">Docker</Badge>
              <Badge variant="outline">JIRA</Badge>
              <Badge variant="outline">Webpack</Badge>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Contact section with interactive elements */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Contact</h2>
        <div className="flex flex-col md:flex-row flex-wrap gap-y-5 gap-x-8">
          <a
            href="mailto:sergey@sonkin.net"
            className="flex items-center gap-3 group hover:text-primary transition-colors"
          >
            <div className="p-2 rounded-full bg-primary/10 text-primary">
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
            <span>sergey@sonkin.net</span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="flex items-center gap-3 group hover:text-primary transition-colors"
          >
            <div className="p-2 rounded-full bg-primary/10 text-primary">
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
            <span>linkedin.com/in/yourusername</span>
          </a>
        </div>
      </div>
    </PageContainer>
  );
}
