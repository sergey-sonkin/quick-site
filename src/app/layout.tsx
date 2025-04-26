import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import SocialLinks from "./components/SocialLinks";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "about.sonkin.net",
  description: "Personal website and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          html {
            visibility: hidden;
          }
        `}</style>
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <KeyboardShortcuts />
          <header className="bg-background border-b border-border">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-xl font-bold">
                sonkin.net
              </Link>
              <div className="flex items-center gap-2">
                <nav className="flex items-center gap-1 md:gap-2">
                  <Button variant="ghost" asChild>
                    <Link href="/" prefetch={true}>
                      Home{" "}
                      <span className="ml-1 text-xs opacity-60 hidden sm:inline">
                        [h]
                      </span>
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/resume" prefetch={true}>
                      Resume{" "}
                      <span className="ml-1 text-xs opacity-60 hidden sm:inline">
                        [r]
                      </span>
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/blog" prefetch={true}>
                      Blog{" "}
                      <span className="ml-1 text-xs opacity-60 hidden sm:inline">
                        [b]
                      </span>
                    </Link>
                  </Button>
                </nav>
                <ThemeToggle />
              </div>
            </div>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="bg-background border-t border-border py-6">
            <div className="container mx-auto px-4 flex flex-col items-center gap-4">
              <SocialLinks />
              <Separator className="my-4 w-1/3" />
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} sonkin.net. All rights reserved.
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
