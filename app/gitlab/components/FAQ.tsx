'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Why did you pick Thales?',
    a: "Because it's real. Thales already uses GitLab\u200A—\u200Athat's public. Jordan Dubié went on record about it. I didn't want to build a fantasy account plan for a company that might never buy. I wanted to show how I'd take an existing win and expand it. 81,000 employees, 68 countries, and a published case study I can reference on day one. That's not a cold lead\u200A—\u200Athat's a warm account with public proof.",
  },
  {
    q: 'What if Jordan Dubié has left Thales?',
    a: "Then my first call changes, not my strategy. The Thales DevSecOps program is bigger than one person. If Jordan moved on, I find his successor\u200A—\u200Athe new Chief Product Owner or whoever inherited the GitLab rollout. The account plan stays the same: find the champion, understand their metric, and map the expansion. Champions change. The installed base doesn't.",
  },
  {
    q: 'Why GitLab over GitHub?',
    a: "For Thales specifically? Sovereignty. Thales builds defense systems. They need self-managed. GitHub's self-hosted option is limited and expensive. Azure DevOps is cloud-first. GitLab Ultimate gives them one license, one platform, on their own infrastructure. Add the Software Bill of Materials requirement and it's not even a close call.",
  },
  {
    q: 'How do you handle the unknown CISO name?',
    a: "I flagged it intentionally. I could have invented a name or left it out. Instead, I made it visible because that's how I'd actually work. The Group Chief Information Security Officer (CISO) is the risk gate for any security platform decision. I don't pretend to know things I don't. Week 1: I ask Jordan, I check LinkedIn, I check conference speaker lists. By week 2 I have a name and a meeting strategy.",
  },
  {
    q: "What's the biggest risk in this strategy?",
    a: "Timing. The Bitbucket renewal window is a hypothesis\u200A—\u200AI don't know the exact date. If I miss it, the budget conversation gets harder. That's why my first two weeks are all listening: I need to validate the renewal cycle before I build the business case. The second risk is internal: if Thales already has a GitLab AE who owns this account, I need to find that out on day one, not day thirty.",
  },
  {
    q: 'What would you do differently if you had 6 more weeks?',
    a: "I'd build a real Total Cost of Ownership (TCO) model. Right now, my competitive positioning is qualitative\u200A—\u200A'one license vs. four SKUs.' With six more weeks, I'd price out what Thales is actually paying for Bitbucket + Jenkins + Jira + a standalone Software Bill of Materials tool. Then I'd put a number on the GitLab consolidation. CFOs don't buy stories. They buy spreadsheets.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">
          Questions you&apos;d ask.
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.03] transition-colors"
              >
                <span className="text-white font-medium">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#C8C2D4] flex-shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-[#C8C2D4] text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
