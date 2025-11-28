import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onTryFree: () => void;
}

export default function Hero({ onTryFree }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-white to-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              <span className="text-sm text-[#020CFE] font-medium">Access 250+ AI models</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-[#0a0a0a] leading-tight">
              Ask Once. Compare Answers from Multiple AIs. Find the Best Solution Faster.
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Stop juggling AI tools. Get the best of ChatGPT, Claude & Gemini in one conversation, instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onTryFree}
                className="px-8 py-3.5 bg-[#020CFE] text-white font-semibold rounded-full hover:bg-[#0108d4] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Try Free — No Sign-Up Required
              </button>
              <a
                href="#how-it-works"
                className="px-8 py-3.5 bg-white text-[#0a0a0a] font-semibold rounded-full border-2 border-gray-200 hover:border-[#020CFE] hover:text-[#020CFE] transition-all duration-200 flex items-center justify-center gap-2"
              >
                See How It Works
                <ChevronDown size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              <div className="space-y-4">
                <div className="bg-[#f5f5f5] rounded-lg p-4">
                  <p className="text-sm text-[#0a0a0a] font-medium">What's the best way to learn React?</p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 border border-green-200">
                    <div className="text-xs font-semibold text-green-700 mb-2">ChatGPT</div>
                    <div className="text-xs text-gray-600 line-clamp-3">
                      Start with official docs, build small projects...
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200">
                    <div className="text-xs font-semibold text-blue-700 mb-2">Claude</div>
                    <div className="text-xs text-gray-600 line-clamp-3">
                      Focus on fundamentals first, then hooks...
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 border border-purple-200">
                    <div className="text-xs font-semibold text-purple-700 mb-2">Gemini</div>
                    <div className="text-xs text-gray-600 line-clamp-3">
                      Practice with interactive tutorials...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#020CFE] opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#020CFE] opacity-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
