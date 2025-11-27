import { AlertCircle, Copy, Clock, AlertTriangle } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Constant Switching',
      description: 'Copying the same question over and over between ChatGPT, Claude, and Perplexity. Wasted time managing multiple tabs and subscriptions.',
    },
    {
      icon: Clock,
      title: 'Wasted Time',
      description: 'Learning new UIs with every $20 subscription for different tools. With Zuvu: one UI, one subscription, all the tools.',
    },
    {
      icon: AlertCircle,
      title: 'Lost Context',
      description: 'Each AI starts from zero. Your conversation history doesn\'t carry over. Context rebuilding eats up productivity.',
    },
    {
      icon: Copy,
      title: 'Manual Stitching',
      description: 'Copying responses between apps, manually reformatting, and struggling to keep everything in sync across tools.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4">
            The Problem: AI's Fragmentation Crisis
          </h2>
          <p className="text-xl text-gray-600">
            Today's AI tools excel alone—but collapse together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#020CFE] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-[#020CFE]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">{problem.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl border-2 border-red-200 p-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="text-red-600 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-xl font-bold text-red-900 mb-2">The Cost? Friction, Frustration, Lost Momentum</h3>
              <p className="text-lg text-red-800">
                Disconnected apps force teams into endless manual stitching, repetitive prompting, and constant context rebuilding—wasting billions of hours every year.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-[#0a0a0a] mb-6">Example: Launching a Product Announcement</h3>

          <div className="space-y-4">
            {[
              { title: 'Prompt Fatigue', desc: 'Repeatedly re-explaining your concept to ChatGPT, losing context every time you switch tasks.' },
              { title: 'Model Whiplash', desc: 'Bouncing between GPT for ideation, Claude for nuanced copy, Bard for creative angles—each move kills momentum.' },
              { title: 'Fact-Checking Scramble', desc: 'Someone asks, "Are these claims validated?" Now you\'re frantically querying Perplexity, pasting results manually back into Notion.' },
              { title: 'Google Rabbit Hole', desc: 'Searching "best AI model for product launches," drowning in conflicting recommendations and endless tabs.' },
              { title: 'Slack Chaos', desc: 'Feedback scattered across multiple Slack threads—"Wait, is this the final copy or yesterday\'s draft?"' },
              { title: 'Formatting Nightmare', desc: 'Transferring final text into Google Docs—bullets break, formatting collapses, another hour wasted.' },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 pb-4 border-b border-gray-200 last:border-b-0">
                <div className="w-8 h-8 rounded-full bg-[#020CFE] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a0a0a] mb-1">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
