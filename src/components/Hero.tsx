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
                Get unlimited access to top AI models.
              </h1>
              <p className="text-2xl font-semibold text-gray-700">
                Smart Router finds The Best model to answer any question.
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              One UI. One subscription. Access Grok 4.1, ChatGPT 5.1, Gemini 3 Pro, and 200+ more models. Build on each models responses. Get better answers together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://accounts.zuvu.ai/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#020CFE] text-white font-semibold rounded-full hover:bg-[#0108d4] transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              >
                Sign Up
              </a>
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
                    @ALL Create a product launch strategy for Zuvu.ai
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
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#60a5fa] text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs text-sm leading-relaxed">
                    <span className="text-xs font-semibold opacity-75 block mb-1">CMO</span>
                    <div>@Grok Suggest a viral angle</div>
                    <div>@Claude Whip up a landing page</div>
                    <div>@Gemini what problems are we solving?</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      X
                    </div>
                    <div className="bg-gray-50 rounded-2xl rounded-tl-none px-4 py-3 max-w-sm text-sm text-gray-700">
                      <div className="font-semibold text-gray-900 mb-1">Grok 4.1:</div>
                      Viral angle: Position as "AI without switching fatigue"...
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      C
                    </div>
                    <div className="bg-gray-50 rounded-2xl rounded-tl-none px-4 py-3 max-w-sm text-sm text-gray-700 relative group">
                      <div className="font-semibold text-gray-900 mb-2">Claude:</div>
                      <div className="bg-[#1e1e1e] text-gray-300 rounded-lg p-3 font-mono text-xs overflow-x-auto relative">
                        <button
                          className="absolute top-2 right-2 p-1.5 bg-gray-700 hover:bg-gray-600 rounded transition-colors opacity-0 group-hover:opacity-100"
                          onClick={() => {
                            const code = `<!DOCTYPE html>\n<html>\n<head>\n  <title>Zuvu - AI Agents made Easy</title>\n  <style>\n    body { font-family: Arial; text-align: center; padding: 50px; background: #f4f4f4; }`;
                            navigator.clipboard.writeText(code);
                          }}
                          title="Copy code"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                        <div className="text-[10px] leading-relaxed">
                          <div>&lt;!DOCTYPE html&gt;</div>
                          <div>&lt;html&gt;</div>
                          <div>&lt;head&gt;</div>
                          <div className="pl-2">&lt;title&gt;Zuvu - AI Agents made Easy&lt;/title&gt;</div>
                          <div className="pl-2">&lt;style&gt;</div>
                          <div className="pl-4 text-gray-400">body &#123; font-family: Arial; text-align: center; padding: 50px; background: #f4f4f4; &#125;</div>
                        </div>
                      </div>
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
