import { ArrowLeft } from 'lucide-react';
import { Link } from './Router';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[#020CFE] hover:text-[#0108d4] mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-8">Terms of Service</h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <p className="text-lg font-semibold text-gray-800">
              Terms of Service content will be added here.
            </p>

            <p>
              Please check back soon for our complete Terms of Service.
            </p>

            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <h2 className="text-xl font-semibold text-[#0a0a0a] mb-2">Questions?</h2>
              <p className="text-gray-600">
                For any questions about our Terms of Service, please contact us at{' '}
                <a href="mailto:contact@zuvu.ai" className="text-[#020CFE] hover:underline">
                  contact@zuvu.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
