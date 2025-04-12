"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function KeyboardIndicator() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the indicator on first visit
    let hasSeenIndicator = false;

    // Check if we're in a browser environment
    if (typeof window !== "undefined") {
      hasSeenIndicator = !!localStorage.getItem("hasSeenKeyboardIndicator");
    }

    if (!hasSeenIndicator) {
      setIsVisible(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("hasSeenKeyboardIndicator", "true");
      }

      // Hide after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-background border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 shadow-lg z-50 flex items-center gap-3">
      <p className="text-sm">
        Press{" "}
        <kbd className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded font-mono text-xs">
          ?
        </kbd>{" "}
        for keyboard shortcuts
      </p>
      <Button variant="ghost" size="sm" onClick={() => setIsVisible(false)}>
        Dismiss
      </Button>
    </div>
  );
}
