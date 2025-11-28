import { ArrowLeft } from 'lucide-react';
import { Link } from './Router';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[#020CFE] hover:text-[#0108d4] mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-8">About Zuvu.ai</h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-xl text-gray-600">
              Zuvu.ai is a collaborative AI workspace that brings together multiple AI models and human teammates in one unified chat environment.
            </p>

            <h2 className="text-3xl font-bold text-[#0a0a0a] mt-12 mb-4">Our Mission</h2>
            <p>
              We're on a mission to eliminate the frustration of switching between multiple AI tools. Instead of juggling ChatGPT, Claude, Gemini, and countless other AI platforms, Zuvu.ai provides a single, powerful interface where all these models work together seamlessly.
            </p>

            <h2 className="text-3xl font-bold text-[#0a0a0a] mt-12 mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Smart Router:</strong> Automatically selects the best AI model for your specific task using category-aware routing
              </li>
              <li>
                <strong>Multi-Model Collaboration:</strong> Access to 300+ AI models including GPT-5.1, Claude Sonnet 4.5, Gemini 3 Pro, Grok 4.1, and more
              </li>
              <li>
                <strong>Document-Aware Chat:</strong> Upload PDFs, CSVs, and other files to ask questions directly against your documents
              </li>
              <li>
                <strong>Chat Rules:</strong> Set persistent system prompts that apply to all models in your conversation
              </li>
              <li>
                <strong>Image Generation & Editing:</strong> Create and refine images right inside your chat
              </li>
              <li>
                <strong>Web Search:</strong> Get live information from the internet when you need current data
              </li>
              <li>
                <strong>Custom Routers:</strong> Build your own routing rules for advanced use cases
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0a0a0a] mt-12 mb-4">Why Zuvu.ai?</h2>
            <p>
              Traditional AI workflows are broken. Users waste hours copying prompts between different tools, losing context with every switch, and paying for multiple subscriptions. Zuvu.ai solves this by providing:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>One unified interface for all your AI needs</li>
              <li>Preserved context across all models in a conversation</li>
              <li>A single affordable subscription replacing multiple AI tool costs</li>
              <li>Real collaboration between different AI models building on each other's insights</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0a0a0a] mt-12 mb-4">Get Started</h2>
            <p>
              Ready to simplify your AI workflow? Try Zuvu.ai free and experience the difference of having all your AI tools working together in harmony.
            </p>

            <div className="mt-8">
              <a
                href="https://www.zuvu.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 bg-[#020CFE] text-white font-semibold rounded-full hover:bg-[#0108d4] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Try Zuvu.ai Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
