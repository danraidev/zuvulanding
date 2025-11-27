export default function UseCases() {
  const useCases = [
    {
      title: 'Write Better ✍️',
      description: 'Compare writing styles from different AIs. See how Claude drafts an email vs. how Gemini makes it creative. Pick or combine the best parts.',
    },
    {
      title: 'Learn Anything 🎓',
      description: 'Learning code or history? Different AIs explain concepts differently. Compare teaching styles to find what clicks for you.',
    },
    {
      title: 'Research & Answers 🔍',
      description: 'Get accurate answers, verified by multiple AIs. Compare sources from Perplexity and analysis from Claude to find the truth.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4">
            Built for Real Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're creating, learning, or researching, Zuvu adapts to how you work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4">
                {useCase.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
