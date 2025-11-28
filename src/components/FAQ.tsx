import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: 'About Zuvu.ai',
      faqs: [
        {
          question: 'What is Zuvu.ai?',
          answer: 'Zuvu.ai is a collaborative AI workspace that brings together multiple AI models and human teammates in one chat. It offers a smart routing engine, document-aware chat, chat rules (system prompts that persist through the whole chat), custom routing rules to different models, and integration with other productivity tools. The goal is to give users reliable answers and workflows without constant tab-switching or manual copy-pasting.',
        },
        {
          question: 'How does the Smart Router work?',
          answer: 'The Smart Router uses category-aware routing: when you ask a question, Zuvu.ai assigns it to a category (such as research, coding, legal, analytics, etc.) and selects the model that tends to perform best for that category. For example, a research question might be routed to Perplexity Sonar, while a coding question might use Claude Sonnet 4.5. This removes guess-work and ensures that each query goes to the best model available.',
        },
        {
          question: 'Which AI models can I use?',
          answer: 'Zuvu.ai supports many popular models including: OpenAI (GPT-5.1, GPT-5 Chat, image-1), Anthropic (Claude Sonnet 4.5, Claude Opus), Google (Gemini 3 Pro, Imagen nano banana), Perplexity (Sonar Pro), xAI (Grok 4.1, Grok Vision), and others like Mistral, Qwen, Meta Llama models. You can also invite multiple models into the same chat to compare their answers.',
        },
        {
          question: 'Do I need to know which model to use?',
          answer: 'No. If you use the Smart Router, Zuvu.ai decides the best model based on the task. You can, however, mention a specific model with @ModelName to direct a question to that model if you want to see how it performs. You can also add multiple models to the chat and have them critique or build on each other\'s responses.',
        },
      ],
    },
    {
      category: 'Working with Documents',
      faqs: [
        {
          question: 'How do I upload and summarise documents?',
          answer: 'Go to the Documents tab or click the Docs icon inside a chat. You can upload PDFs, CSVs or other files using the paperclip icon. Once uploaded, use the # symbol to reference a file and ask questions. For example, "#AnnualReport.pdf summarize this" prompts the AI to read the file and summarise it.',
        },
        {
          question: 'Can Zuvu.ai search the web for live information?',
          answer: 'Yes. In a chat, clicking the Web button activates live web search. When web search is enabled, questions such as "Find the latest news about Zuvu.ai" are answered using current internet sources.',
        },
        {
          question: 'How do I generate images?',
          answer: 'Click the Create Image button at the bottom of the chat window. The button will turn Active. Then type a description of what you want and send the message. Zuvu.ai will route your request to an appropriate image-generation model and return a picture. After the image appears, you can press the edit button to refine the output.',
        },
      ],
    },
    {
      category: 'Customisation',
      faqs: [
        {
          question: 'What are Chat Rules?',
          answer: 'Chat Rules are system prompts that apply to every model in a chat. They set tone, formatting or facts that the models must remember. For example, a rule might say, "Always use a friendly, concise tone and cite sources." You can add information about yourself or your company to persist through chats for optimized and correct outputs from all the models in the chat.',
        },
        {
          question: 'What are Routers?',
          answer: 'Besides the Smart Router, Zuvu.ai allows you to create your own custom routers. A router is a set of routing rules that specify which model should answer certain types of prompts. You can name your router, create rules manually by adding condition-model pairs, generate rules with AI, and test the router. This lets advanced users fine-tune performance or control costs by assigning the right model for specific tasks.',
        },
      ],
    },
    {
      category: 'Pricing & Support',
      faqs: [
        {
          question: 'How much does Zuvu.ai cost?',
          answer: 'Zuvu.ai is free to try for one prompt. After that, the service currently costs US$4.99 per month. A paid subscription unlocks access to multiple models, document handling, web search, image generation, custom routers and Notion export.',
          id: 'pricing',
        },
        {
          question: 'How does Zuvu.ai handle privacy and data security?',
          answer: 'Zuvu.ai emphasizes consent and data protection. Chat history and documents are stored only to provide services; analytics are opt-in and aggregated; and user identifiers are hashed. Third-party model providers may receive chat messages for processing, but Zuvu.ai does not sell user data. The platform is working toward SOC 2 compliance and offers data residency options for enterprise customers.',
        },
        {
          question: 'How do I contact support or give feedback?',
          answer: 'Reach out at contact@zuvu.ai. Zuvu.ai welcomes feedback and runs user surveys to guide feature development.',
        },
      ],
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
            Everything you need to know about Zuvu.ai
          </p>
        </div>

        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = faqCategories
                    .slice(0, categoryIndex)
                    .reduce((sum, cat) => sum + cat.faqs.length, 0) + faqIndex;

                  return (
                    <div
                      key={faqIndex}
                      id={faq.id}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left"
                      >
                        <span className="text-lg font-semibold text-[#0a0a0a] pr-8">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`text-[#020CFE] flex-shrink-0 transition-transform duration-300 ${
                            openIndex === globalIndex ? 'rotate-180' : ''
                          }`}
                          size={24}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openIndex === globalIndex ? 'max-h-[500px]' : 'max-h-0'
                        }`}
                      >
                        <div className="px-6 pb-5">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:contact@zuvu.ai"
            className="text-[#020CFE] font-semibold hover:underline"
          >
            Contact us at contact@zuvu.ai →
          </a>
        </div>
      </div>
    </section>
  );
}
