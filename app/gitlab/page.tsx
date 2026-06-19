export const runtime = 'edge'

import Hero from './components/Hero'
import GlassCard from './components/GlassCard'
import CreditGrid from './components/CreditGrid'
import StakeholderMap from './components/StakeholderMap'
import EngagementTimeline from './components/EngagementTimeline'
import CompetitiveTable from './components/CompetitiveTable'
import QuoteCard from './components/QuoteCard'
import CTASection from './components/CTASection'
import FAQ from './components/FAQ'

export default function GitLabPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-navy-900 to-navy-950 font-body text-[#E7E2F0] overflow-hidden">
      {/* ───────── 1. Hero ───────── */}
      <Hero />

      {/* ───────── 2. About Me ───────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              I&apos;m Anouar.
            </h2>
            <p className="text-lg text-[#E7E2F0] leading-relaxed mb-4">
              I&apos;m interviewing for an Account Executive role at GitLab.
            </p>
            <p className="text-[#C8C2D4] leading-relaxed mb-6">
              I sell because I understand what I&apos;m selling. Before
              applying, I read the Handbook cover to cover. I studied how GitLab
              ships, how it prices, and how it wins in regulated industries.
              I&apos;m not here because I want an AE quota&thinsp;&mdash;&thinsp;I&apos;m
              here because I believe a single DevSecOps platform is the right
              answer for enterprises like Thales, and I want to be the person
              who proves it.
            </p>
            <a
              href="https://linkedin.com/in/anouar-assila"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-gitlab text-sm hover:underline"
            >
              LinkedIn &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ───────── 3. The Brief ───────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
            What GitLab asked me.
          </h2>
          <GlassCard className="p-8 md:p-10">
            <blockquote className="text-xl md:text-2xl text-white font-display leading-relaxed mb-4">
              &ldquo;Take complete pipeline ownership and turn a seemingly
              impossible opportunity into a transformational success
              story.&rdquo;
            </blockquote>
            <p className="text-[#C8C2D4] text-sm">
              &mdash; GitLab Interview Panel
            </p>
          </GlassCard>
          <p className="text-[#E7E2F0] mt-6 text-lg">
            I picked Thales. Here&apos;s why and here&apos;s how.
          </p>
        </div>
      </section>

      {/* ───────── 4. The Story — Thales ───────── */}
      <section id="case-study" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">
            Thales built hardware for 125 years.
            <br />
            <span className="text-orange-gitlab">
              Now their satellites are software-defined.
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { value: '~81,000', label: 'employees' },
              { value: '68', label: 'countries' },
              { value: '~5,000', label: 'DevSecOps users' },
              { value: '20×', label: 'faster builds' },
              { value: '8×', label: 'more deployments' },
            ].map((stat) => (
              <GlassCard key={stat.label} className="p-5 text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-white font-display mb-1">
                  {stat.value}
                </p>
                <p className="text-[#C8C2D4] text-sm">{stat.label}</p>
              </GlassCard>
            ))}
          </div>

          <p className="text-[#C8C2D4]/60 text-xs mt-6">
            Source:{' '}
            <a
              href="https://about.gitlab.com/customers/thales/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitLab&apos;s published Thales case study
            </a>
          </p>
        </div>
      </section>

      {/* ───────── 5. CREDIT Values ───────── */}
      <CreditGrid />

      {/* ───────── 6. The Wedge ───────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">
            The wedge: Software Bill of Materials.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <GlassCard className="p-6">
              <h3 className="text-orange-gitlab font-semibold text-sm uppercase tracking-wider mb-4">
                Pain
              </h3>
              <ul className="space-y-3">
                {[
                  '5,000 devs across 7 disconnected tool silos',
                  'Compliance evidence = quarterly fire drill',
                  'Every M&A acquisition adds another stack',
                ].map((item) => (
                  <li
                    key={item}
                    className="text-[#E7E2F0] text-sm flex items-start gap-2"
                  >
                    <span className="text-orange-gitlab mt-1">&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-purple-gitlab font-semibold text-sm uppercase tracking-wider mb-4">
                Signals
              </h3>
              <ul className="space-y-3">
                {[
                  'DevSecOps team tripled in 18 months (hiring signal)',
                  'Bitbucket renewal in 9 months (locked budget window)',
                  'Chief Information Security Officer (CISO) is public on Software Bill of Materials (political mandate)',
                ].map((item) => (
                  <li
                    key={item}
                    className="text-[#E7E2F0] text-sm flex items-start gap-2"
                  >
                    <span className="text-purple-gitlab mt-1">&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <GlassCard highlight className="p-8">
            <p className="text-lg md:text-xl text-white font-display leading-relaxed">
              The Software Bill of Materials mandate. It&apos;s the one
              initiative no one&thinsp;&mdash;&thinsp;regulators, customers, the
              Pentagon&thinsp;&mdash;&thinsp;can deprioritize. And GitLab is the
              only single-application answer.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* ───────── 7. Stakeholder Map ───────── */}
      <StakeholderMap />

      {/* ───────── 8. Engagement Timeline ───────── */}
      <EngagementTimeline />

      {/* ───────── 9. Why GitLab Wins ───────── */}
      <CompetitiveTable />

      {/* ───────── 10. The Quote ───────── */}
      <QuoteCard />

      {/* ───────── 11. The Commitment ───────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
            Pipeline ownership.{' '}
            <span className="text-orange-gitlab">Day one.</span>
          </h2>

          <ul className="space-y-4 mb-8 max-w-2xl">
            {[
              {
                day: 'Monday',
                text: 'I finish the GitLab Handbook.',
              },
              {
                day: 'Tuesday',
                text: 'I call Jordan Dubié.',
              },
              {
                day: 'Wednesday',
                text: 'I have a working hypothesis I would defend at the Quarterly Business Review (QBR).',
              },
            ].map((item) => (
              <li key={item.day} className="flex items-start gap-3">
                <span className="text-orange-gitlab font-bold font-display min-w-[100px]">
                  {item.day}
                </span>
                <span className="text-[#E7E2F0]">{item.text}</span>
              </li>
            ))}
          </ul>

          <p className="text-[#C8C2D4] text-lg leading-relaxed max-w-2xl italic">
            I don&apos;t promise transformational success in week one. I promise
            to be the AE who doesn&apos;t wait for marketing to send leads.
          </p>
        </div>
      </section>

      {/* ───────── 12. FAQ ───────── */}
      <FAQ />

      {/* ───────── 13. CTA / Footer ───────── */}
      <CTASection />
    </main>
  )
}
