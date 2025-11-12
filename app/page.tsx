import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">PolicyEngine Marketing Materials</h1>

      <div className="space-y-4">
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">APPAM Trifold Brochure (Professional)</h2>
          <p className="text-gray-600 mb-4">Professional trifold brochure for APPAM conference</p>
          <Link
            href="/trifold/appam-pro"
            className="inline-block bg-pe-teal text-white px-6 py-2 rounded hover:bg-pe-teal-600 mr-4"
          >
            View Professional Version
          </Link>
          <Link
            href="/trifold/appam"
            className="inline-block bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
          >
            View Original Version
          </Link>
        </div>
      </div>
    </main>
  );
}
