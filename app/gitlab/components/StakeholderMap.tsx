import { User, DollarSign, Shield } from 'lucide-react'
import GlassCard from './GlassCard'

const stakeholders = [
  {
    role: 'Champion',
    name: 'Jordan Dubié',
    title: 'Chief Product Owner',
    description:
      'Public GitLab fan. Start here.',
    highlight: true,
    icon: User,
    verified: true,
  },
  {
    role: 'Economic Buyer',
    name: 'Nicolas Fernandez',
    title: 'Group CTO, Vélizy HQ',
    description:
      'Total Cost of Ownership (TCO) obsessed. Hates being on the wrong Power BI slide.',
    highlight: false,
    icon: DollarSign,
    verified: true,
  },
  {
    role: 'Risk Gate',
    name: 'Group CISO',
    title: 'Chief Information Security Officer — name TBC, validate week 1',
    description:
      'Software Bill of Materials = headache. GitLab takes it.',
    highlight: false,
    icon: Shield,
    verified: false,
  },
]

export default function StakeholderMap() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">
          Three people. Three different conversations.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stakeholders.map((s) => {
            const Icon = s.icon
            return (
              <GlassCard
                key={s.role}
                highlight={s.highlight}
                className="p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      s.highlight
                        ? 'bg-orange-gitlab/20 text-orange-gitlab'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      s.highlight ? 'text-orange-gitlab' : 'text-[#C8C2D4]'
                    }`}
                  >
                    {s.role}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-1">
                  {s.name}
                </h3>
                <p className="text-[#C8C2D4] text-sm mb-4">{s.title}</p>
                <p className="text-[#E7E2F0] text-sm leading-relaxed mt-auto">
                  {s.description}
                </p>

                {s.verified && (
                  <p className="text-xs text-[#C8C2D4]/60 mt-4">
                    Verified from public sources
                  </p>
                )}
              </GlassCard>
            )
          })}
        </div>

        <p className="text-[#C8C2D4] text-sm mt-8">
          Two names verified from public sources. The Risk Gate name I map in
          week&nbsp;1.
        </p>
      </div>
    </section>
  )
}
