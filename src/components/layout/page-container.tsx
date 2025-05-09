import * as React from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "prose";
}

export function PageContainer({
  children,
  className,
  maxWidth = "2xl",
  ...props
}: PageContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
    prose: "max-w-prose",
  };

  return (
    <div className={cn("w-full py-8", className)} {...props}>
      <div
        className={cn(
          "container mx-auto px-4",
          maxWidthClasses[maxWidth],
          // Add width constraints to ensure consistency
          "w-full"
        )}
      >
        {children}
      </div>
    </div>
  );
}
