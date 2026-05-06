import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 border-t border-gray-100">
      <h2 className="text-4xl font-black mb-4">404 - Not Found</h2>
      <p className="text-gray-500 font-medium mb-8">Could not find requested resource</p>
      <Link href="/" className="px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors">
        Return Home
      </Link>
    </div>
  );
}
