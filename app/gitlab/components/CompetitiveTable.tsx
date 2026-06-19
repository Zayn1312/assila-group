import { Check, X } from 'lucide-react'
import GlassCard from './GlassCard'

export default function CompetitiveTable() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">
          Why GitLab wins at Thales.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* GitLab — Hero card */}
          <GlassCard highlight className="p-6 lg:row-span-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-orange-gitlab font-extrabold text-lg font-display">
                GitLab
              </span>
            </div>
            <p className="text-[#C8C2D4] text-xs mb-5">
              The platform, not the stack
            </p>
            <ul className="space-y-3">
              {[
                'Single application',
                'Self-managed for sovereignty',
                'Software Bill of Materials native',
                'Cultural operating system (Handbook + all-remote)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-orange-gitlab flex-shrink-0 mt-0.5" />
                  <span className="text-[#E7E2F0] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* GitHub */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white font-bold text-lg font-display">
                GitHub + Actions
              </span>
            </div>
            <p className="text-[#C8C2D4] text-xs mb-5">
              A stack you stitch together
            </p>
            <ul className="space-y-3">
              {[
                'Limited self-hosting',
                'Software Bill of Materials = paid tier',
                'No cultural moat',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#C8C2D4] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Azure DevOps */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white font-bold text-lg font-display">
                Azure DevOps
              </span>
            </div>
            <p className="text-[#C8C2D4] text-xs mb-5">
              4 SKUs, multiple UIs
            </p>
            <ul className="space-y-3">
              {[
                'Cloud-first only',
                'Software Bill of Materials via Defender',
                'No cultural moat',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#C8C2D4] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <p className="text-[#E7E2F0] text-center mt-10 text-lg font-medium">
          GitLab Ultimate is{' '}
          <span className="text-orange-gitlab font-bold">1 license</span>. The
          competition is 4 SKUs across 2 vendors.
          <br />
          <span className="text-white">
            For Thales, that&apos;s{' '}
            <span className="text-orange-gitlab">the call</span>.
          </span>
        </p>
      </div>
    </section>
  )
}
