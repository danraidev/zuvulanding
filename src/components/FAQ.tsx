import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What AIs are available?',
      answer: '250+ models including ChatGPT (GPT-4, GPT-4o), Claude (Sonnet, Opus), Google Gemini, Perplexity, Midjourney, Stable Diffusion, and specialized models for coding, writing, research from 40+ providers.',
    },
    {
      question: 'Do I need to sign up to try Zuvu?',
      answer: 'No! You can start using our demo immediately with no sign-up. Sign up for a free account only when you want to save your chat history or access more features.',
    },
    {
      question: 'What is "auto-routing"?',
      answer: 'It\'s our simple feature where Zuvu analyzes your question and automatically selects the best AI model to answer it. You are always in control.',
    },
    {
      question: 'Is my data private?',
      answer: 'Yes. Your conversations are private and never used to train AI models. You can delete your history anytime.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Zuvu
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-[#0a0a0a] pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-[#020CFE] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="text-[#020CFE] font-semibold hover:underline"
          >
            Get in touch with our team →
          </a>
        </div>
      </div>
    </section>
  );
}
