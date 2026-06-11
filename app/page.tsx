const PROJECTS = [
  {
    name: "Dary",
    subtitle: "Family Intelligence System",
    description:
      "Custom AI that runs your home. Smart automation, voice control in 9 languages, family coordination — private, local, 1300+ tests passing. Custom-trained LLM, PWA, native apps.",
    tags: ["Python", "FastAPI", "SvelteKit", "React Native", "LLM"],
    stack: "Python + SvelteKit + React Native",
    progress: 75,
    color: "#a855f7",
    colorRgb: "168, 85, 247",
    status: "active" as const,
    live: "https://dary.me",
    github: "https://github.com/Zayn1312/dary",
  },
  {
    name: "PHAENOTYPE",
    subtitle: "Athlete Coaching & Body Tracking",
    description:
      "Phenotype-based coaching platform. Training, nutrition, CGM, progress photos, AI recommendations based on genetic profiling — 22 DB tables, coach marketplace, real-time chat.",
    tags: ["Next.js", "Supabase", "Tailwind", "TypeScript"],
    stack: "Next.js 16 + Supabase + Tailwind",
    progress: 90,
    color: "#14b8a6",
    colorRgb: "20, 184, 166",
    status: "active" as const,
    live: "https://athlete.assila.group",
  },
  {
    name: "EVLVD",
    subtitle: "Pet Evolution Game",
    description:
      "Your pet evolves as you build real-life habits. 72 sprites, mood-based music, streak heatmaps, full persistence with SQLite.",
    tags: ["React Native", "Expo", "Zustand", "Drizzle"],
    stack: "React Native + Expo + SQLite",
    progress: 80,
    color: "#10b981",
    colorRgb: "16, 185, 129",
    status: "active" as const,
    github: "https://github.com/Zayn1312/EVLVD",
  },
  {
    name: "GlucoBro",
    subtitle: "Glucose Tracker PWA",
    description:
      "Progressive web app for continuous glucose monitoring. Track, analyze, and understand blood sugar patterns in real time.",
    tags: ["PWA", "TypeScript", "Health"],
    stack: "TypeScript PWA",
    progress: 45,
    color: "#06b6d4",
    colorRgb: "6, 182, 212",
    status: "active" as const,
    github: "https://github.com/Zayn1312/GlucoBro",
  },
  {
    name: "Reclaim",
    subtitle: "AI Refund Agent",
    description:
      "Automated AI agent for refund claims. Upload your case, let the AI negotiate with the company — get your money back.",
    tags: ["AI", "Automation", "Agent"],
    stack: "AI Agent",
    progress: 35,
    color: "#f97316",
    colorRgb: "249, 115, 22",
    status: "active" as const,
    github: "https://github.com/Zayn1312/reclaim",
  },
  {
    name: "CLUEF",
    subtitle: "Background Removal",
    description:
      "AI-powered background removal with one click. Clean, precise cutouts for any image — powered by deep learning.",
    tags: ["AI", "Image Processing", "Python"],
    stack: "Python + Deep Learning",
    progress: 10,
    color: "#ec4899",
    colorRgb: "236, 72, 153",
    status: "paused" as const,
    github: "https://github.com/Zayn1312/cluef",
  },
];

const STATUS_MAP = {
  active: { label: "Active", className: "status-active" },
  dev: { label: "In Dev", className: "status-dev" },
  paused: { label: "Paused", className: "status-paused" },
};

export default function Home() {
  const activeCount = PROJECTS.filter((p) => p.status !== "paused").length;

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <div className="logo-mark">A</div>
            <span className="logo-text">Assila Group</span>
          </div>
          <nav className="nav-links">
            <a href="#projects">Projects</a>
            <a href="/hubspot">HubSpot</a>
            <a
              href="https://github.com/Zayn1312"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            {PROJECTS.length} Projects &middot; {activeCount} Active
          </div>
          <h1 className="hero-title">
            Building <span className="hero-gradient">what&apos;s next</span>
          </h1>
          <p className="hero-desc">
            AI assistants, games, platforms, servers — from idea to production.
            Solo-developed, open-source where possible.
          </p>
        </section>

        {/* Stats */}
        <section className="stats">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">{PROJECTS.length}</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{activeCount}</div>
              <div className="stat-label">Active</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">100K+</div>
              <div className="stat-label">Lines of Code</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">Solo</div>
              <div className="stat-label">Developer</div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="projects" id="projects">
          <div className="section-header">
            <h2 className="section-title">All Projects</h2>
            <p className="section-subtitle">
              From AI to gaming — everything built from scratch.
            </p>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((p, i) => {
              const status = STATUS_MAP[p.status];
              return (
                <article
                  key={p.name}
                  className={`project-card delay-${i + 1}`}
                  style={
                    {
                      "--card-accent": p.color,
                      "--card-accent-rgb": p.colorRgb,
                    } as React.CSSProperties
                  }
                >
                  <div className="card-header">
                    <div className="card-title-group">
                      <div
                        className="project-icon"
                        style={{ background: p.color }}
                      >
                        {p.name[0]}
                      </div>
                      <div>
                        <div className="project-name">{p.name}</div>
                        <div className="project-subtitle">{p.subtitle}</div>
                      </div>
                    </div>
                    <span className={`status-badge ${status.className}`}>
                      {status.label}
                    </span>
                  </div>

                  <p className="project-desc">{p.description}</p>

                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="card-footer">
                    <div className="progress-group">
                      <div className="progress-track">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${p.progress}%`,
                            background: p.color,
                          }}
                        />
                      </div>
                      <span className="progress-label">{p.progress}%</span>
                    </div>
                    <div className="project-links">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          Live &#8599;
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          &copy; 2026 Assila Group. All rights reserved.
        </p>
      </footer>
    </>
  );
}
