import { MessageSquare, Layers, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Type your question once.',
      description: 'Type your question once in our simple, intuitive interface. No need to learn multiple platforms.',
      step: '01',
    },
    {
      icon: Layers,
      title: 'Choose models (or let Zuvu.ai pick "Auto").',
      description: 'Zuvu.ai automatically queries ChatGPT, Claude, Gemini, and 250+ other AI models simultaneously.',
      step: '02',
    },
    {
      icon: CheckCircle2,
      title: 'Build upon AI outputs.',
      description: 'Iterate with different AIs, refine responses, and get better answers by having them collaborate and build on each other\'s insights.',
      step: '03',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple as Asking a Question.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three simple steps to get the best AI answers every time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#020CFE]/20 h-full">
                <div className="relative">
                  <div className="w-16 h-16 bg-[#020CFE] rounded-2xl flex items-center justify-center mb-6 relative z-10">
                    <step.icon className="text-white" size={28} />
                  </div>
                  <div className="absolute -top-2 -left-2 text-6xl font-bold text-[#020CFE] opacity-10">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">
                  {step.title}
                </h3>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-6 w-12 h-12 bg-[#020CFE] rounded-full items-center justify-center z-20 transform -translate-y-1/2">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3.5 bg-[#020CFE] text-white font-semibold rounded-full hover:bg-[#0108d4] transition-all duration-200 shadow-lg hover:shadow-xl">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
