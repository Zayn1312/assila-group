import { Quote } from 'lucide-react'
import GlassCard from './GlassCard'

export default function QuoteCard() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <GlassCard className="p-8 md:p-12 relative overflow-hidden">
          {/* Decorative quote mark */}
          <Quote className="absolute top-6 right-6 w-16 h-16 text-orange-gitlab/10" />

          <blockquote className="relative z-10">
            <p className="text-xl md:text-2xl text-white font-display leading-relaxed mb-8">
              &ldquo;With GitLab, we went from a completely isolated situation
              to a collaborative environment that enables better communication
              and coordination among diverse teams.&rdquo;
            </p>

            <footer className="flex flex-col sm:flex-row sm:items-center gap-2">
              <div>
                <cite className="not-italic text-white font-semibold">
                  Jordan Dubié
                </cite>
                <span className="text-[#C8C2D4]">
                  , Chief Product Owner, Thales
                </span>
              </div>
              <span className="hidden sm:inline text-[#C8C2D4]/40">
                &bull;
              </span>
              <a
                href="https://about.gitlab.com/customers/thales/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-gitlab text-sm hover:underline"
              >
                Source: about.gitlab.com/customers/thales
              </a>
            </footer>
          </blockquote>
        </GlassCard>
      </div>
    </section>
  )
}
