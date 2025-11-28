import { Upload, Settings, ImagePlus, Layers } from 'lucide-react';

export default function Solution() {
  const features = [
    {
      icon: Upload,
      title: 'Upload & Analyze Your Files.',
      description: 'Drop in PDFs, CSVs, and other documents, then ask questions directly against them. Zuvu.ai keeps your files in context so you can summarize, extract insights, or validate claims without copy-paste.',
    },
    {
      icon: Settings,
      title: 'Chat Rules for Your Tone & Business Context.',
      description: 'Set Rules once per chat so every model stays aligned with your style and facts — e.g. your company voice, audience, preferred structure, or key business details. Less re-explaining, more consistent output.',
    },
    {
      icon: ImagePlus,
      title: 'Create & Edit Images on the Go.',
      description: 'Generate images right inside chat: press Create Image, describe what you want, and Zuvu.ai makes it. Want changes? Edit the image in the same thread and keep iterating with your text and files in context.',
    },
    {
      icon: Layers,
      title: 'All in One Multimodal Workspace.',
      description: 'Text, web, documents, and images — all in the same conversation window, with your human team mates or friends and AIs working together.',
    },
  ];

  return (
    <section id="compare" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4">
            Everything in One Place
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get better answers together. Integrate with Notion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
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
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.zuvu.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-[#020CFE] text-white font-semibold rounded-full hover:bg-[#0108d4] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Using Zuvu.ai Free
          </a>
        </div>
      </div>
    </section>
  );
}
