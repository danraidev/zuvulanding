import { PenTool, BookOpen, Search } from 'lucide-react';

export default function Solution() {
  const useCases = [
    {
      icon: PenTool,
      title: 'Write Better',
      description: 'Compare writing styles from different AIs. See how Claude drafts an email vs. how Gemini makes it creative. Pick or combine the best parts.',
    },
    {
      icon: BookOpen,
      title: 'Learn Anything',
      description: 'Learning code or history? Different AIs explain concepts differently. Compare teaching styles to find what clicks for you.',
    },
    {
      icon: Search,
      title: 'Research & Get Answers',
      description: 'Get accurate answers, verified by multiple AIs. Compare sources from Perplexity and analysis from Claude to find the truth.',
    },
  ];

  return (
    <section id="compare" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4">
            Built for Real Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're creating, learning, or researching, Zuvu adapts to how you work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-[#f5f5f5] to-white hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#020CFE]/20"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#020CFE] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-[#020CFE]" size={24} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#0a0a0a] mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3.5 bg-[#020CFE] text-white font-semibold rounded-full hover:bg-[#0108d4] transition-all duration-200 shadow-lg hover:shadow-xl">
            Start Using Zuvu Free
          </button>
        </div>
      </div>
    </section>
  );
}
