import React from 'react';

interface BulletPointProps {
  children: React.ReactNode;
}

/**
 * A reusable bullet point component for lists
 * Displays a bullet with the primary theme color followed by content
 */
export function BulletPoint({ children }: BulletPointProps) {
  return (
    <li className="flex items-start">
      <span className="text-primary mr-2">•</span>
      <span>{children}</span>
    </li>
  );
}