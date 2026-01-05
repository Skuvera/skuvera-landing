export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "56px 20px", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#22c55e" }} />
          <span style={{ fontSize: 14, opacity: 0.8 }}>Skuvera • Early access</span>
        </div>

        <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: 0 }}>
          Track inventory transfers across locations without spreadsheets.
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.6, margin: 0, opacity: 0.85 }}>
          Skuvera helps teams manage locations, SKUs, and transfers with a clean history of what moved, when, and by who.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
          <a
            href="mailto:hello@getskuvera.com?subject=Skuvera%20Early%20Access&body=Name%3A%0ACompany%3A%0ARole%3A%0AHow%20many%20locations%3A%0AWhat%20problem%20are%20you%20trying%20to%20solve%3A"
            style={{
              padding: "12px 16px",
              borderRadius: 10,
              background: "#111827",
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
              display: "inline-block"
            }}
          >
            Request access
          </a>

          <a
            href="https://github.com/skuvera"
            style={{
              padding: "12px 16px",
              borderRadius: 10,
              border: "1px solid #e5e7eb",
              textDecoration: "none",
              color: "#111827",
              fontWeight: 600,
              display: "inline-block"
            }}
          >
            Follow progress
          </a>
        </div>

        <footer style={{ marginTop: 40, fontSize: 14, opacity: 0.7 }}>
          © {new Date().getFullYear()} Skuvera
        </footer>
      </div>
    </main>
  );
}
