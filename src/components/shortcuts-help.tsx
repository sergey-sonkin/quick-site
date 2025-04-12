"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

interface ShortcutsHelpProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ShortcutsHelp({ open, onOpenChange }: ShortcutsHelpProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-background rounded-lg p-6 max-w-md w-full shadow-lg">
        <h2 className="text-xl font-bold mb-4">Keyboard Shortcuts</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Home</span>
            <kbd className="px-2 py-1 bg-secondary rounded font-mono">h</kbd>
          </div>
          <div className="flex items-center justify-between">
            <span>Resume</span>
            <kbd className="px-2 py-1 bg-secondary rounded font-mono">r</kbd>
          </div>
          <div className="flex items-center justify-between">
            <span>Blog</span>
            <kbd className="px-2 py-1 bg-secondary rounded font-mono">b</kbd>
          </div>
          <div className="flex items-center justify-between">
            <span>Shortcuts Help</span>
            <kbd className="px-2 py-1 bg-secondary rounded font-mono">?</kbd>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </div>
      </div>
    </div>
  );
}
