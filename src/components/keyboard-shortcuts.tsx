"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { ShortcutsHelp } from "./shortcuts-help";

interface KeyboardShortcut {
  key: string;
  path?: string;
  description: string;
  action?: () => void;
}

export function KeyboardShortcuts() {
  const router = useRouter();
  const [helpOpen, setHelpOpen] = useState(false);

  const shortcuts = useMemo<KeyboardShortcut[]>(() => [
    { key: "h", path: "/", description: "Home" },
    { key: "r", path: "/resume", description: "Resume" },
    { key: "b", path: "/blog", description: "Blog" },
    {
      key: "?",
      description: "Show keyboard shortcuts",
      action: () => setHelpOpen(true),
    },
  ], [setHelpOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if modifier keys are pressed or if user is typing in an input/textarea
      if (
        event.ctrlKey ||
        event.altKey ||
        event.metaKey ||
        event.shiftKey ||
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        (event.target instanceof HTMLElement && event.target.isContentEditable)
      ) {
        return;
      }

      const shortcut = shortcuts.find((s) => s.key === event.key.toLowerCase());

      if (shortcut) {
        event.preventDefault();
        if (shortcut.action) {
          shortcut.action();
        } else if (shortcut.path) {
          router.push(shortcut.path);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router, shortcuts, helpOpen]);

  return <ShortcutsHelp open={helpOpen} onOpenChange={setHelpOpen} />;
}
