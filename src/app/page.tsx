import Link from "next/link";

const projects = [
  {
    title: "Distributed Task Scheduler",
    description:
      "A fault-tolerant distributed task scheduler built with Go and Redis. Handles millions of scheduled jobs with exactly-once execution guarantees.",
    tags: ["Go", "Redis", "gRPC", "Docker"],
    href: "https://github.com",
  },
  {
    title: "Real-Time Analytics Pipeline",
    description:
      "Stream processing pipeline ingesting 100K events/sec. Built with Kafka, Flink, and ClickHouse for sub-second query latency.",
    tags: ["Java", "Kafka", "Apache Flink", "ClickHouse"],
    href: "https://github.com",
  },
  {
    title: "CLI Database Migration Tool",
    description:
      "Zero-downtime schema migration tool for PostgreSQL. Supports backwards-compatible migrations with automatic rollback.",
    tags: ["Rust", "PostgreSQL", "CLI"],
    href: "https://github.com",
  },
];

const experience = [
  {
    role: "ML Engineer",
    company: "Comcast T&P",
    dates: "2026 — Present",
    description:
      "Building an agentic AI platform for cross-team adoption. RAG-powered agents for network operations. Evaluation frameworks with LLM-as-judge on AWS Bedrock.",
  },
  {
    role: "Software Engineer, CORE Rotational Program",
    company: "Comcast NBCUniversal",
    dates: "2024 — 2026",
    description:
      "Three rotations spanning the broader Comcast portfolio; UX engineering at Peacock, AI engineering at Universal Creative, and ML engineering at T&P.",
  },
  {
    role: "B.S. Computer Science",
    company: "Oregon State University",
    dates: "2019 — 2024",
    description: "",
  },
];

export default function Home() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero">
        <h1>Ariel Meshorer</h1>
        <p>
          Software engineer focused on distributed systems, ML infrastructure,
          and building things that scale.
        </p>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About</h2>
        <p>
          I&apos;m a software engineer who enjoys working at the intersection of
          producct and infrastructure. I care about writing 
          clear code, thoughtful design, and making complex systems feel simple.
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          When I&apos;m not coding, you&apos;ll find me reading about
          distributed systems, contributing to open-source projects, or writing
          on my blog.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        {experience.map((item) => (
          <div key={item.role + item.company} className="experience-item">
            <div className="experience-header">
              <div className="role">{item.role}</div>
              <span className="dates">{item.dates}</span>
            </div>
            <div className="company">{item.company}</div>
            {item.description && <p>{item.description}</p>}
          </div>
        ))}
      </section>

      {/* Blog preview */}
      <section className="section">
        <h2>Recent Writing</h2>
        <div className="blog-list">
          <div className="blog-entry">
            <Link href="/blog/what-i-learned-from-three-rotations">
              Three Teams, Two Years, One Career Direction
            </Link>
            <span className="meta">Mar 2026</span>
          </div>
          <div className="blog-entry">
            <Link href="/blog/building-reliable-distributed-systems">
              Building Reliable Distributed Systems
            </Link>
            <span className="meta">Mar 2026</span>
          </div>
        </div>
        <p style={{ marginTop: "1rem" }}>
          <Link href="/blog" style={{ fontSize: "0.9rem", color: "var(--gray)" }}>
            View all posts &rarr;
          </Link>
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p style={{ marginBottom: "1rem", color: "var(--gray)" }}>
          Feel free to reach out — I&apos;m always open to interesting
          conversations.
        </p>
        <div className="contact-links">
          <a href="mailto:hello@example.com">Email</a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
