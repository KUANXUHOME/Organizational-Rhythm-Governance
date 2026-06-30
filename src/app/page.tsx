import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container">
      <p className="subtitle">
        In the AI era, competitive advantage shifts from speed to structural coherence.
        <br />
        AI acceleration is manufacturing systemic organizational instability. Existing management
        theory cannot fully explain or govern this phenomenon.
        <br />
        <br />
        DUAL-RHYTHM ARCHITECTURE&trade; provides the structural solution.
      </p>

      <section className="card" style={{ marginBottom: 32 }}>
        <div className="formulaTitle">A NEW MANAGEMENT CATEGORY</div>
        <div className="formula">Organizational Rhythm Governance&trade; (ORG&trade;)</div>
        <p className="formulaDescription">
          Define stability under acceleration.
          <br />
          Stability as Competitive Advantage.
        </p>
      </section>

      <section className="card" style={{ marginBottom: 32 }}>
        <div className="formulaTitle">Certification Program</div>
        <div className="formula" style={{ fontSize: 22 }}>
          Become a Certified ORG&trade; Practitioner
        </div>
        <p className="formulaDescription">
          The industry-first certification standard for measuring structural stability under AI
          acceleration. Includes comprehensive training, a rigorous exam, and official directory
          listing.
        </p>

        <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Link
            href="https://buy.stripe.com/6oU7sL7358vSdYs0Ad"
            target="_blank"
            rel="noopener noreferrer"
            className="systemButton buttonPrimary buttonLarge"
          >
            Enroll — $5,000/year
          </Link>
          <Link
            href="https://theossindex.com"
            target="_blank"
            rel="noopener noreferrer"
            className="systemButton buttonSecondary buttonLarge"
          >
            Try The OSS Index&trade;
          </Link>
        </div>
      </section>

      <section className="card" style={{ marginBottom: 32 }}>
        <div className="formulaTitle">Program Structure</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {[
            {
              phase: "Phase 1",
              title: "Foundation Training",
              desc: "Learn the Dual-Rhythm Architecture&trade; framework, Stability Triad Model&trade;, and OSS Index&trade; methodology.",
            },
            {
              phase: "Phase 2",
              title: "Practical Application",
              desc: "Conduct 5 supervised organizational stability assessments using the full 20-sub-indicator diagnostic.",
            },
            {
              phase: "Phase 3",
              title: "Certification Exam",
              desc: "Pass a comprehensive written and practical exam demonstrating mastery of organizational stability governance.",
            },
            {
              phase: "Phase 4",
              title: "Directory Listing",
              desc: "Receive your official ORG&trade; practitioner badge and listing in the certified practitioner directory.",
            },
          ].map((p) => (
            <div
              key={p.phase}
              style={{
                display: "flex",
                gap: 16,
                paddingBottom: 16,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#0ea16a",
                  background: "rgba(14,161,106,0.1)",
                  padding: "4px 10px",
                  borderRadius: 8,
                  height: "fit-content",
                  flexShrink: 0,
                }}
              >
                {p.phase}
              </span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>{p.title}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>
                  {p.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          textAlign: "center",
          padding: "32px 0",
          color: "rgba(255,255,255,0.35)",
          fontSize: 13,
        }}
      >
        <p>
          The OSS Index&trade; Platform:
          <Link
            href="https://theossindex.com"
            target="_blank"
            style={{ color: "#0ea16a", marginLeft: 8 }}
          >
            theossindex.com
          </Link>
        </p>
        <p style={{ marginTop: 8 }}>
          Dual-Rhythm Architecture&trade;:
          <Link
            href="https://dual-rhythm-architecture.vercel.app"
            target="_blank"
            style={{ color: "rgba(255,255,255,0.6)", marginLeft: 8 }}
          >
            dualrhythmsystems.com
          </Link>
        </p>
      </section>
    </div>
  );
}