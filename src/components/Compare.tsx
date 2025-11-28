import { Check, X } from 'lucide-react';

export default function Compare() {
  const comparison = {
    traditional: [
      { feature: 'Multiple browser tabs', has: true },
      { feature: 'Copy-paste between tools', has: true },
      { feature: 'Remember which AI said what', has: true },
      { feature: 'Pay for multiple subscriptions', has: true },
      { feature: 'Build upon AI outputs', has: false },
      { feature: 'Single unified interface', has: false },
      { feature: 'Real AI collaboration', has: false },
      { feature: 'Save hours every week', has: false },
    ],
    zuvu: [
      { feature: 'One simple interface', has: true },
      { feature: 'Real-time AI collaboration', has: true },
      { feature: 'Clear AI attribution', has: true },
      { feature: 'Single affordable plan', has: true },
      { feature: 'Build upon AI outputs', has: true },
      { feature: 'Single unified interface', has: true },
      { feature: 'Real AI collaboration', has: true },
      { feature: 'Save hours every week', has: true },
    ],
  };

  return (
    <section id="compare" className="py-20 px-6 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4">
            Traditional Way vs Zuvu.ai
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stop wasting time switching between AI tools. See the difference yourself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                <X className="text-gray-500" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0a0a0a]">Traditional Way</h3>
                <p className="text-sm text-gray-500">The old, tedious approach</p>
              </div>
            </div>

            <ul className="space-y-3">
              {comparison.traditional.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className={`mt-1 ${item.has ? 'text-red-500' : 'text-gray-300'}`}>
                    {item.has ? <X size={20} /> : <Check size={20} />}
                  </div>
                  <span className={`${item.has ? 'text-gray-600' : 'text-gray-400 line-through'}`}>
                    {item.feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#020CFE] to-[#0108d4] rounded-2xl p-8 border-2 border-[#020CFE] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>

            <div className="flex items-center gap-3 mb-6 relative">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Check className="text-[#020CFE]" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zuvu.ai</h3>
                <p className="text-sm text-blue-100">The smart, efficient way</p>
              </div>
            </div>

            <ul className="space-y-3 relative">
              {comparison.zuvu.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className={`mt-1 ${item.has ? 'text-white' : 'text-blue-300'}`}>
                    {item.has ? <Check size={20} /> : <X size={20} />}
                  </div>
                  <span className={`${item.has ? 'text-white font-medium' : 'text-blue-200 line-through'}`}>
                    {item.feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
