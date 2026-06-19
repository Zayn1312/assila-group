import { Mail, Download } from 'lucide-react'

export default function CTASection() {
  return (
    <footer className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="mailto:anouar@assila.group"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-orange-gitlab text-white font-semibold text-lg rounded-xl hover:bg-orange-gitlab/90 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email me
          </a>
          <a
            href="/assets/anouar-thales-case.pdf"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/10 text-white font-semibold text-lg rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download the deck
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#C8C2D4] text-sm">
            &copy; {new Date().getFullYear()} Anouar Assila
          </p>
          <a
            href="https://linkedin.com/in/anouar-assila"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C8C2D4] text-sm hover:text-white transition-colors"
          >
            LinkedIn &rarr;
          </a>
        </div>
      </div>
    </footer>
  )
}
