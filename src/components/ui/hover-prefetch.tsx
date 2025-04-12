"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import * as React from "react";

interface HoverPrefetchProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  prefetchOnHover?: boolean;
  prefetchOnMount?: boolean;
}

export function HoverPrefetch({
  href,
  children,
  prefetchOnHover = true,
  prefetchOnMount = false,
  ...props
}: HoverPrefetchProps) {
  const router = useRouter();

  // Optional: Prefetch on component mount
  React.useEffect(() => {
    if (prefetchOnMount) {
      router.prefetch(href);
    }
  }, [href, prefetchOnMount, router]);

  // Prefetch on hover
  const handleMouseEnter = React.useCallback(() => {
    if (prefetchOnHover) {
      router.prefetch(href);
    }
  }, [href, prefetchOnHover, router]);

  return (
    <Link href={href} onMouseEnter={handleMouseEnter} {...props}>
      {children}
    </Link>
  );
}
