export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#0b0b0f", color: "#fff" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "64px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 700, letterSpacing: 0.5 }}>Skuvera</div>
          <a
            href="mailto:hello@getskuvera.com"
            style={{
              color: "#fff",
              textDecoration: "none",
              opacity: 0.9,
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "10px 14px",
              borderRadius: 10,
            }}
          >
            Contact
          </a>
        </div>

        <div style={{ marginTop: 80 }}>
          <div style={{ display: "inline-flex", gap: 8, alignItems: "center", padding: "6px 10px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.12)", opacity: 0.9 }}>
            <span style={{ width: 8, height: 8, borderRadius: 99, background: "#22c55e", display: "inline-block" }} />
            <span style={{ fontSize: 13 }}>Early access</span>
          </div>

          <h1 style={{ fontSize: 44, lineHeight: 1.05, marginTop: 18, marginBottom: 14 }}>
            Clean inventory, track changes, and keep teams aligned.
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.5, opacity: 0.85, maxWidth: 720 }}>
            Skuvera helps organizations manage SKUs and product data with simple workflows, audit trails, and multi-org support.
            Join the waitlist to get early access.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" }}>
            <a
              href="mailto:hello@getskuvera.com?subject=Skuvera%20Early%20Access&body=Name:%0ACompany:%0AWhat%20are%20you%20trying%20to%20solve%20with%20SKU%20data%3F%0A"
              style={{
                background: "#fff",
                color: "#0b0b0f",
                textDecoration: "none",
                padding: "12px 16px",
                borderRadius: 12,
                fontWeight: 700,
              }}
            >
              Request access
            </a>

            <a
              href="#features"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "12px 16px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.15)",
                fontWeight: 600,
                opacity: 0.95,
              }}
            >
              See what it does
            </a>
          </div>

          <div id="features" style={{ marginTop: 70, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {[
              {
                title: "Multi-org ready",
                desc: "Keep data separated by organization with clean permissions.",
              },
              {
                title: "Audit-friendly",
                desc: "Track edits and changes so you know what happened and when.",
              },
              {
                title: "Fast SKU search",
                desc: "Find products quickly and keep names/UPCs consistent.",
              },
              {
                title: "Built for teams",
                desc: "Simple workflows that reduce spreadsheet chaos.",
              },
            ].map((x) => (
              <div
                key={x.title}
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 16,
                  padding: 16,
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <div style={{ fontWeight: 700, marginBottom: 6 }}>{x.title}</div>
                <div style={{ opacity: 0.8, lineHeight: 1.4 }}>{x.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 70, opacity: 0.65, fontSize: 13 }}>
            © {new Date().getFullYear()} Skuvera. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
