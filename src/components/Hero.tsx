import { ChevronDown, Zap } from 'lucide-react';

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
              <Zap size={16} className="text-[#020CFE]" />
              <span className="text-sm text-[#020CFE] font-medium">Get $300+ worth of AI subscriptions</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0a0a0a] leading-tight">
                Ask Once. Multiplayer AI. No Lost Context.
              </h1>
              <p className="text-2xl font-semibold text-gray-700">
                Smart Router finds the best answer for any question.
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              One UI. One subscription. Access Grok 4.1, ChatGPT 5.1, Gemini 3 Pro, and 300+ more models. Build on each other's responses. Get better answers together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onTryFree}
                className="px-8 py-3.5 bg-[#020CFE] text-white font-semibold rounded-full hover:bg-[#0108d4] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Try Free
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
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-4 text-sm font-semibold text-gray-700">Marketing Strategy Chat</span>
              </div>

              <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                <div className="flex justify-end">
                  <div className="bg-[#020CFE] text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs text-sm">
                    <span className="text-xs font-semibold opacity-75 block mb-1">CEO</span>
                    Create a product launch strategy for Zuvu.ai
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      G
                    </div>
                    <div className="bg-gray-50 rounded-2xl rounded-tl-none px-4 py-3 max-w-sm text-sm text-gray-700">
                      <div className="font-semibold text-gray-900 mb-1">Gemini 3 Pro:</div>
                      Focus on embedded integrations with partner platforms...
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      P
                    </div>
                    <div className="bg-gray-50 rounded-2xl rounded-tl-none px-4 py-3 max-w-sm text-sm text-gray-700">
                      <div className="font-semibold text-gray-900 mb-1">Perplexity (Web):</div>
                      Latest market data shows AI workplace tools grew 340% YoY...
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      X
                    </div>
                    <div className="bg-gray-50 rounded-2xl rounded-tl-none px-4 py-3 max-w-sm text-sm text-gray-700">
                      <div className="font-semibold text-gray-900 mb-1">Grok 4.1:</div>
                      Viral angle: Position as "AI without switching fatigue"...
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#020CFE] text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs text-sm">
                    <span className="text-xs font-semibold opacity-75 block mb-1">CMO</span>
                    Clarify strategy
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      C
                    </div>
                    <div className="bg-gray-50 rounded-2xl rounded-tl-none px-4 py-3 max-w-sm text-sm text-gray-700">
                      <div className="font-semibold text-gray-900 mb-1">Claude:</div>
                      Target B2B teams who struggle with AI tool fragmentation...
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      G
                    </div>
                    <div className="bg-gray-50 rounded-2xl rounded-tl-none px-4 py-3 max-w-sm text-sm text-gray-700">
                      <div className="font-semibold text-gray-900 mb-1">Gemini 3 Pro:</div>
                      Emphasize ROI: saved subscriptions, time saved, and unified context...
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="text-xs text-gray-500 italic">
                    All models working in one chat. One context. Real collaboration.
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-600">Rules • Image • Edit • Export</span>
                <span className="text-xs text-gray-500">All AIs seeing same context</span>
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
