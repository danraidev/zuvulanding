export default function WhyZuvu() {
  const painPoints = [
    {
      emoji: '🔄',
      title: 'Constant Switching',
      description: 'Copying the same question over and over between ChatGPT, Claude, and Perplexity.',
    },
    {
      emoji: '💬',
      title: 'Lost Context',
      description: 'Each AI starts from zero. Your conversation history doesn\'t carry over.',
    },
    {
      emoji: '⏰',
      title: 'Wasted Time',
      description: 'Managing multiple tabs and subscriptions. It\'s exhausting.',
    },
  ];

  return (
    <section id="why-zuvu" className="py-20 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            You're Already Using Multiple AIs. Why Make It Complicated?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <div className="text-5xl mb-4">
                {point.emoji}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {point.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
