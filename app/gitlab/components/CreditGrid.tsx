import GlassCard from './GlassCard'

const values = [
  {
    letter: 'C',
    word: 'Collaboration',
    text: 'Pod-selling. Solutions Architect on every Thales call from week one. No solo demos.',
  },
  {
    letter: 'R',
    word: 'Results',
    text: 'Coverage beats activity. By week four, Jordan Dubié and two dev leads in Salesforce.',
  },
  {
    letter: 'E',
    word: 'Efficiency',
    text: 'First email to Thales is a link to the GitLab Handbook. If they read it, half my discovery is done.',
  },
  {
    letter: 'D',
    word: 'Diversity',
    text: 'Thales runs 68 countries\u200A—\u200A68 buying cultures. I sell to the room I\u2019m in.',
  },
  {
    letter: 'I',
    word: 'Iteration',
    text: 'Six weeks of Proof of Concept on one Toulouse team beats six months of slide decks.',
  },
  {
    letter: 'T',
    word: 'Transparency',
    text: 'Send Jordan the discount math up front. Trust beats tactics on renewal.',
  },
]

export default function CreditGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Six values. Six sales habits.
        </h2>
        <p className="text-[#C8C2D4] mb-12 max-w-2xl">
          GitLab&apos;s CREDIT values aren&apos;t wall art. They&apos;re how I
          want to run every deal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((v) => (
            <GlassCard key={v.letter} className="p-6">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-4xl font-extrabold text-orange-gitlab font-display">
                  {v.letter}
                </span>
                <span className="text-xl font-bold text-white font-display">
                  {v.word}
                </span>
              </div>
              <p className="text-[#C8C2D4] text-sm leading-relaxed">
                {v.text}
              </p>
            </GlassCard>
          ))}
        </div>

        <p className="text-[#C8C2D4] text-sm mt-8 italic">
          Not a sales playbook. This is how GitLab works&thinsp;&mdash;&thinsp;and how I want to sell.
        </p>
      </div>
    </section>
  )
}
