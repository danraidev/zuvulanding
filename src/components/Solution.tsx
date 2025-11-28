export default function Solution() {
  const valueProps = [
    {
      title: 'Compare Side-by-Side',
      description: 'See how different AIs respond to the same question in one view.',
    },
    {
      title: '"Auto" Select',
      description: 'Not sure which AI to use? Let Zuvu automatically route your question to the best model for the job.',
    },
    {
      title: 'Keep Your Context',
      description: 'Your conversation flows naturally. No copy-pasting. No starting over.',
    },
  ];

  return (
    <section id="compare" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4">
            One Chat. Multiple AIs. Zero Friction.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zuvu brings ChatGPT, Claude, Gemini, and other top models into a single workspace.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-[#f5f5f5] to-white hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#020CFE]/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 bg-[#020CFE] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0a0a0a]">
                  {prop.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {prop.description}
              </p>
            </div>
          ))}
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
