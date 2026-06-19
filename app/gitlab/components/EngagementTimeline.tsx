const phases = [
  {
    weeks: 'Week 1–2',
    label: 'Listen',
    description: 'Jordan + 3 development leads. No pitch.',
    color: 'purple',
  },
  {
    weeks: 'Week 3–6',
    label: 'Frame',
    description:
      'Software Bill of Materials workshop with the Chief Information Security Officer (CISO).',
    color: 'purple',
  },
  {
    weeks: 'Week 7–12',
    label: 'Prove',
    description: 'Proof of Concept on one Toulouse team. 6 weeks.',
    color: 'purple',
  },
  {
    weeks: 'Week 12+',
    label: 'Expand',
    description:
      'Toulouse \u2192 V\u00e9lizy \u2192 Spain. Reference, then roll.',
    color: 'orange',
  },
]

export default function EngagementTimeline() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          First 90 days. No miracles, just rhythm.
        </h2>
        <p className="text-[#C8C2D4] mb-12 max-w-2xl">
          Four phases. Each one earns the right to start the next.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-8">
            {phases.map((phase, i) => (
              <div key={phase.label} className="relative flex gap-6 md:gap-8">
                {/* Dot on timeline */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                      phase.color === 'orange'
                        ? 'bg-orange-gitlab/20 text-orange-gitlab border-2 border-orange-gitlab/40'
                        : 'bg-purple-gitlab/20 text-purple-gitlab border-2 border-purple-gitlab/40'
                    }`}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="pb-2 pt-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        phase.color === 'orange'
                          ? 'text-orange-gitlab'
                          : 'text-purple-gitlab'
                      }`}
                    >
                      {phase.weeks}
                    </span>
                    <span className="text-xl font-bold text-white font-display">
                      {phase.label}
                    </span>
                  </div>
                  <p className="text-[#E7E2F0] leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
