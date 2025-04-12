import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Sorry, the page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}