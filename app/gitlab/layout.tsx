import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Case Study: Thales — Anouar's GitLab AE Application",
  description:
    'How I would have taken complete pipeline ownership of the Thales DevSecOps opportunity. A case study for GitLab Account Executive.',
  openGraph: {
    title: "Case Study: Thales — Anouar's GitLab AE Application",
    description:
      'How I would have taken complete pipeline ownership of the Thales DevSecOps opportunity.',
    type: 'article',
    images: ['/gitlab/opengraph-image'],
    url: 'https://assila.group/gitlab',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Case Study: Thales — Anouar's GitLab AE Application",
    description:
      'How I would have taken complete pipeline ownership of the Thales DevSecOps opportunity.',
  },
  alternates: {
    canonical: 'https://assila.group/gitlab',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function GitLabLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
