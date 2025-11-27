interface FinalCTAProps {
  onTryFree: () => void;
}

export default function FinalCTA({ onTryFree }: FinalCTAProps) {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#020CFE] to-[#0109c9]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Simplify Your AI Workflow?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join users who stopped switching and started getting better answers faster.
        </p>
        <button
          onClick={onTryFree}
          className="px-8 py-3.5 bg-white text-[#020CFE] font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Try Zuvu Free
        </button>
      </div>
    </section>
  );
}
