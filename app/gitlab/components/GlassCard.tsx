interface GlassCardProps {
  children: React.ReactNode
  className?: string
  highlight?: boolean
}

export default function GlassCard({
  children,
  className = '',
  highlight = false,
}: GlassCardProps) {
  return (
    <div
      className={`
        bg-white/[0.08] backdrop-blur-xl rounded-2xl
        ${highlight
          ? 'border border-orange-gitlab/60 shadow-[0_0_30px_rgba(252,109,38,0.15)]'
          : 'border border-white/20'
        }
        ${className}
      `}
    >
      {children}
    </div>
  )
}
