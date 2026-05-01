// brand-spec.jsx — Mostafa Ead brand system handoff doc.
// Renders inside #app. Owns light/dark switching via [data-theme] on <html>.

const { useEffect } = React;

// ── Static data ──────────────────────────────────────────────

const BRAND = {
  scales: {
    brand: [
      { tok: "brand-50",  hex: "#EEF3FB" },
      { tok: "brand-100", hex: "#DBE5F4" },
      { tok: "brand-200", hex: "#B7CAE8" },
      { tok: "brand-300", hex: "#7E9DD0" },
      { tok: "brand-400", hex: "#4F75B5" },
      { tok: "brand-500", hex: "#2B538F", primary: true },
      { tok: "brand-600", hex: "#1F4276" },
      { tok: "brand-700", hex: "#173458" },
      { tok: "brand-800", hex: "#11253E" },
      { tok: "brand-900", hex: "#0B1A2C" },
    ],
    neutral: [
      { tok: "neutral-0",   hex: "#FFFFFF" },
      { tok: "neutral-25",  hex: "#FBFBFC" },
      { tok: "neutral-50",  hex: "#F6F7F8" },
      { tok: "neutral-100", hex: "#EEF0F2" },
      { tok: "neutral-200", hex: "#E2E5E9" },
      { tok: "neutral-300", hex: "#C9CED4" },
      { tok: "neutral-400", hex: "#9AA1AB" },
      { tok: "neutral-500", hex: "#6B7280" },
      { tok: "neutral-600", hex: "#4A515B" },
      { tok: "neutral-700", hex: "#2E343C" },
      { tok: "neutral-800", hex: "#1B1F25" },
      { tok: "neutral-900", hex: "#0F1217" },
    ],
  },
};

// ── Header ───────────────────────────────────────────────────

function DocHead() {
  return (
    <header className="doc-head">
      <div>
        <div className="eyebrow">Brand System · v1.0</div>
        <h1>Mostafa Ead — Personal Brand</h1>
        <p className="sub">
          A restrained engineering-grade identity for a Tech Lead portfolio.
          Built to read credible to recruiters and engineering managers in 30 seconds.
        </p>
      </div>
      <div className="meta">
        Owner&nbsp;&nbsp;Mostafa Ead<br/>
        Use&nbsp;&nbsp;&nbsp;&nbsp;Astro · Tailwind<br/>
        Themes&nbsp;Light · Dark<br/>
        Updated 2026-05-01
      </div>
    </header>
  );
}

// ── 1. Brand essence ─────────────────────────────────────────

function Essence() {
  return (
    <section>
      <h2>01 — Brand essence</h2>
      <p className="lede" style={{ marginBottom: 28 }}>
        Mostafa builds and leads mobile engineering teams that ship calmly and on time —
        with the AI/ML range to back the next thing the company needs to build.
      </p>
      <div className="grid grid-3">
        <div className="card">
          <div className="eyebrow mono" style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 10 }}>Adjectives</div>
          <div style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.5 }}>
            Composed.<br/>Precise.<br/>Senior.
          </div>
        </div>
        <div className="card">
          <div className="eyebrow mono" style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 10 }}>Hero signal</div>
          <div style={{ fontSize: 16, lineHeight: 1.55 }}>
            Mobile engineering leadership. 7+ years cross-platform, 9+ shipping production software, teams of 5–11.
          </div>
        </div>
        <div className="card" style={{ background: "transparent" }}>
          <div className="eyebrow mono" style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 10 }}>Explicitly NOT</div>
          <div style={{ fontSize: 16, lineHeight: 1.55, color: "var(--text-soft)" }}>
            An "AI engineer" personal brand. The ML credential is supporting evidence, never the headline.
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 2. Verbal identity ───────────────────────────────────────

function Verbal() {
  return (
    <section>
      <h2>02 — Verbal identity</h2>

      <h3>Tagline</h3>
      <div className="grid grid-2" style={{ marginBottom: 32 }}>
        <div className="card">
          <div className="mono" style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 10 }}>RECOMMENDED</div>
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.015em", marginBottom: 10 }}>
            Mobile engineering, shipped.
          </div>
          <p style={{ marginBottom: 0, fontSize: 13 }}>
            Three words. Names the discipline (mobile), names the deliverable (shipping).
            "Shipped" is the operative verb in senior engineering culture — it does the lifting that "passionate" or "innovative" can't.
          </p>
        </div>
        <div className="card">
          <div className="mono" style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 10 }}>ALT</div>
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.015em", marginBottom: 10 }}>
            Tech lead. Mobile, IoT, and beyond.
          </div>
          <p style={{ marginBottom: 0, fontSize: 13 }}>
            More descriptive, less rhythmic. Use if you'd rather front-load the role title for ATS / recruiter skim. Trade-off: reads like a résumé header rather than a brand line.
          </p>
        </div>
      </div>

      <h3>Voice & tone</h3>
      <p>
        Write like a senior engineer: <strong>concrete nouns, active verbs, no marketing varnish.</strong>
        Headers state facts; buttons name actions; the About paragraph is one tight pass through scope, scale, and stack.
      </p>

      <div className="vt-grid" style={{ marginTop: 18 }}>
        <div className="vt do">
          <h4>Do</h4>
          <ul>
            <li>
              Lead with verifiable facts.
              <small>"Led 9-engineer team shipping a Flutter app to 14 markets." Not "Passionate about scalable mobile."</small>
            </li>
            <li>
              Use the engineer's vocabulary.
              <small>"Cross-platform", "release cadence", "RAG architecture" — words a hiring manager will grep for.</small>
            </li>
            <li>
              Buttons name a specific next step.
              <small>"View work" · "Read CV" · "Email me" — not "Get started" or "Let's chat".</small>
            </li>
          </ul>
        </div>
        <div className="vt dont">
          <h4>Don't</h4>
          <ul>
            <li>
              Don't reach for adjectives.
              <small>Avoid "passionate", "rockstar", "ninja", "lifelong learner". The work shows it.</small>
            </li>
            <li>
              Don't decorate with emoji or 🚀 / 🤖 / ✨.
              <small>The site is a CV, not a Twitter bio. One emoji erodes the seniority signal.</small>
            </li>
            <li>
              Don't lead with the AI specialty.
              <small>"AWS ML — Specialty" goes in the credentials row, not in the H1. Otherwise the positioning drifts.</small>
            </li>
          </ul>
        </div>
      </div>

      <h3 style={{ marginTop: 32 }}>About paragraph — canonical</h3>
      <div className="card" style={{ background: "var(--surface-2)" }}>
        <p style={{ fontSize: 16, lineHeight: 1.65, marginBottom: 0, color: "var(--text)" }}>
          I'm Mostafa, a Tech Lead based in Cairo working remotely with international teams.
          Nine years in production software, seven leading cross-platform mobile work in Flutter —
          consumer, fintech, IoT, and edtech apps in global app stores. I've led teams of five to eleven
          engineers and currently spend my evenings on AI agent systems and RAG architectures
          (AWS Certified ML — Specialty).
        </p>
      </div>
    </section>
  );
}

// ── 3. Visual identity — color ───────────────────────────────

function Color() {
  const swatches = [
    { name: "Primary",   tok: "--primary",  hex: "#2B538F", on: "#FFFFFF", note: "Brand-500. Deep engineering blue." },
    { name: "On primary", tok: "--on-primary", hex: "#FFFFFF", on: "#2B538F", note: "Used on filled buttons / mark." },
    { name: "Background", tok: "--bg",      hex: "#FFFFFF", on: "#0F1217", note: "Page surface, light mode." },
    { name: "Surface",    tok: "--surface", hex: "#F6F7F8", on: "#0F1217", note: "Cards, code blocks, mark backdrops." },
    { name: "Border",     tok: "--border",  hex: "#E2E5E9", on: "#0F1217", note: "1px hairlines. Never heavier." },
    { name: "Text",       tok: "--text",    hex: "#0F1217", on: "#FFFFFF", note: "Body and headings." },
    { name: "Muted",      tok: "--text-muted", hex: "#6B7280", on: "#FFFFFF", note: "Captions, mono labels." },
    { name: "Success",    tok: "--success", hex: "#137A4B", on: "#FFFFFF", note: "Status dots, AA on white only." },
  ];
  return (
    <section>
      <h2>03 — Color</h2>

      <h3>Semantic tokens</h3>
      <p>
        These are the names code should reference. Hex values change per theme — semantic names don't.
      </p>
      <div className="grid grid-4" style={{ marginTop: 14, marginBottom: 36 }}>
        {swatches.map(s => (
          <div className="swatch" key={s.tok}>
            <div className="chip-color" style={{ background: s.hex }} />
            <div>
              <div className="meta-row">
                <span className="name">{s.name}</span>
                <span>{s.hex}</span>
              </div>
              <div className="meta-row" style={{ marginTop: 2 }}>
                <span style={{ color: "var(--text-muted)" }}>{s.tok}</span>
              </div>
              <div style={{ marginTop: 6, fontSize: 12.5, color: "var(--text-soft)", fontFamily: "var(--font-sans)" }}>
                {s.note}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3>Brand scale</h3>
      <p>50–900 ramp. <strong>500 is the canonical primary</strong> in light mode; the dark-mode primary lifts to ~brand-300 to keep AA against dark surfaces.</p>
      <div className="scale">
        {BRAND.scales.brand.map(s => (
          <div className="step" key={s.tok}
               style={{
                 background: s.hex,
                 color: parseInt(s.tok.split('-')[1]) >= 400 ? "#fff" : "#11253E",
                 outline: s.primary ? "2px solid var(--text)" : "none",
                 outlineOffset: s.primary ? 2 : 0,
               }}>
            {s.tok.replace("brand-","")}
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: 28 }}>Neutral scale</h3>
      <div className="scale" style={{ gridTemplateColumns: "repeat(12, 1fr)" }}>
        {BRAND.scales.neutral.map(s => {
          const n = parseInt(s.tok.split('-')[1]);
          return (
            <div className="step" key={s.tok}
                 style={{
                   background: s.hex,
                   color: n >= 400 ? "#fff" : "#0F1217",
                 }}>
              {s.tok.replace("neutral-","")}
            </div>
          );
        })}
      </div>

      <h3 style={{ marginTop: 36 }}>Contrast — WCAG AA</h3>
      <div className="contrast-row">
        <div className="contrast-card" style={{ background: "#FFFFFF", color: "#0F1217" }}>
          <span className="lbl">Light mode</span>
          <div style={{ fontSize: 18, fontWeight: 500 }}>Body on background</div>
          <div className="ratio">#0F1217 on #FFFFFF · 18.9:1 <span className="pill-pass" style={{ marginLeft: 6 }}>AAA</span></div>
          <div style={{ marginTop: 8, color: "#2B538F", fontWeight: 500 }}>Primary on background</div>
          <div className="ratio">#2B538F on #FFFFFF · 7.7:1 <span className="pill-pass" style={{ marginLeft: 6 }}>AAA</span></div>
          <div style={{ marginTop: 8, color: "#6B7280" }}>Muted on background</div>
          <div className="ratio">#6B7280 on #FFFFFF · 4.7:1 <span className="pill-pass" style={{ marginLeft: 6 }}>AA</span></div>
        </div>
        <div className="contrast-card" style={{ background: "#0B0D11", color: "#ECEEF1", borderColor: "#232830" }}>
          <span className="lbl" style={{ opacity: .8 }}>Dark mode</span>
          <div style={{ fontSize: 18, fontWeight: 500 }}>Body on background</div>
          <div className="ratio" style={{ opacity: .8 }}>#ECEEF1 on #0B0D11 · 16.4:1 <span className="pill-pass" style={{ marginLeft: 6 }}>AAA</span></div>
          <div style={{ marginTop: 8, color: "#6F9AD8", fontWeight: 500 }}>Primary on background</div>
          <div className="ratio" style={{ opacity: .8 }}>#6F9AD8 on #0B0D11 · 6.8:1 <span className="pill-pass" style={{ marginLeft: 6 }}>AAA</span></div>
          <div style={{ marginTop: 8, color: "#8A929D" }}>Muted on background</div>
          <div className="ratio" style={{ opacity: .8 }}>#8A929D on #0B0D11 · 5.6:1 <span className="pill-pass" style={{ marginLeft: 6 }}>AA</span></div>
        </div>
      </div>
    </section>
  );
}

// ── 4. Typography ─────────────────────────────────────────────

function Typography() {
  return (
    <section>
      <h2>04 — Typography</h2>
      <div className="grid grid-2" style={{ alignItems: "start", gap: 32 }}>
        <div>
          <h3>Inter Tight</h3>
          <p>
            One sans for everything. <strong>Inter Tight</strong> is the modern grotesk used by tools senior engineers respect (Linear-adjacent), with tighter default tracking that makes -0.02em headings feel intentional rather than squeezed. Paired with a system fallback so the font stack degrades cleanly on cold loads.
          </p>
          <pre className="code" style={{ marginTop: 14 }}>{`--font-sans:
  "Inter Tight",
  ui-sans-serif, system-ui,
  -apple-system, "Segoe UI",
  Roboto, "Helvetica Neue",
  Arial, sans-serif;

--font-mono:
  "JetBrains Mono",
  ui-monospace, SFMono-Regular,
  Menlo, Consolas, monospace;`}</pre>
          <p style={{ marginTop: 14, fontSize: 13 }}>
            JetBrains Mono is reserved for: code blocks, metadata rows (location, role, dates), and labels like "v1.0" — small accents that earn the engineering register without becoming theme-park.
          </p>
        </div>

        <div className="card type-spec">
          <div className="type-row">
            <div className="meta">H1<br/>3rem · 600<br/>-0.025em</div>
            <div className="t-h1">Mobile engineering, shipped.</div>
          </div>
          <div className="type-row">
            <div className="meta">H2<br/>2rem · 600<br/>-0.02em</div>
            <div className="t-h2">Selected work, 2019–present</div>
          </div>
          <div className="type-row">
            <div className="meta">H3<br/>1.375rem · 600<br/>-0.01em</div>
            <div className="t-h3">Lead Engineer · IoT companion app</div>
          </div>
          <div className="type-row">
            <div className="meta">Body<br/>1rem · 400<br/>1.6 leading</div>
            <div className="t-body">Nine years of production software, seven leading cross-platform mobile work in Flutter, with a recent expansion into AI agent systems and RAG architectures.</div>
          </div>
          <div className="type-row">
            <div className="meta">Small<br/>0.8125rem · 400</div>
            <div className="t-small">Cairo · UTC+2 · Available May 2026</div>
          </div>
        </div>
      </div>

      <h3 style={{ marginTop: 36 }}>Scale</h3>
      <pre className="code">{`/* type scale (rem) */
--text-h1:    3rem;        /* 48px */
--text-h2:    2rem;        /* 32px */
--text-h3:    1.375rem;    /* 22px */
--text-body:  1rem;        /* 16px */
--text-small: 0.8125rem;   /* 13px */

/* line-height & tracking */
h1 { line-height: 1.05; letter-spacing: -0.025em; font-weight: 600; }
h2 { line-height: 1.15; letter-spacing: -0.020em; font-weight: 600; }
h3 { line-height: 1.30; letter-spacing: -0.010em; font-weight: 600; }
p  { line-height: 1.60; letter-spacing:  0;       font-weight: 400; }`}</pre>
    </section>
  );
}

// ── 5. Wordmark ───────────────────────────────────────────────

const FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="6" fill="#2B538F"/>
  <path d="M7.4 23V9h3.05l4.55 8.85L19.55 9h3.05v14h-2.65V13.6L16.05 22h-2.1L9.95 13.55V23H7.4z" fill="#FFFFFF"/>
</svg>`;

function Wordmark() {
  return (
    <section>
      <h2>05 — Wordmark</h2>
      <p style={{ marginBottom: 18 }}>
        Filled square mark + lowercase wordmark. The square holds an Inter Tight 'M' at 700, optical-centered.
        Works as a 32×32 favicon and as a header lockup beside the name. No graphic logo — the wordmark IS the brand.
      </p>

      <div className="wm-stage">
        <div className="wm-lockup">
          <div className="wm-mark">M</div>
          <div className="wm-text">mostafa ead<span className="light">  ·  tech lead</span></div>
        </div>
      </div>

      <h3 style={{ marginTop: 36 }}>Construction</h3>
      <div className="grid grid-2" style={{ alignItems: "start" }}>
        <dl className="kv card">
          <dt>Mark</dt>
          <dd>Filled rounded square. <code>36×36</code> in header / <code>32×32</code> favicon.</dd>
          <dt>Mark radius</dt>
          <dd><code>7px</code> at 36 / <code>6px</code> at 32. (≈ 18% of side)</dd>
          <dt>Glyph</dt>
          <dd>Inter Tight, weight <code>700</code>, optical size <code>22px / 36box</code>.</dd>
          <dt>Glyph color</dt>
          <dd><code>#FFFFFF</code> on <code>--primary</code>.</dd>
          <dt>Wordmark</dt>
          <dd>Inter Tight, weight <code>600</code>, <code>22px</code>, <code>letter-spacing -0.015em</code>, lowercase.</dd>
          <dt>Lockup gap</dt>
          <dd><code>14px</code> between mark and wordmark.</dd>
          <dt>Role suffix</dt>
          <dd>Optional. Inter Tight 400, <code>--text-muted</code>. Separator: thin spaces around <code>·</code>.</dd>
          <dt>Dark mode</dt>
          <dd>Mark stays brand-500; if surface is below brand-700, swap mark to <code>--neutral-0</code> with <code>--brand-700</code> glyph.</dd>
        </dl>

        <div>
          <div className="favicon-row">
            <div className="fav-tile">
              <div className="frame"><div dangerouslySetInnerHTML={{ __html: FAVICON_SVG.replace('width="32" height="32"', 'width="64" height="64"') }} /></div>
              <span className="lbl">64px preview</span>
            </div>
            <div className="fav-tile">
              <div className="frame"><div dangerouslySetInnerHTML={{ __html: FAVICON_SVG }} /></div>
              <span className="lbl">32px favicon</span>
            </div>
            <div className="fav-tile">
              <div className="frame" style={{ padding: 8 }}><div dangerouslySetInnerHTML={{ __html: FAVICON_SVG.replace('width="32" height="32"', 'width="16" height="16"') }} /></div>
              <span className="lbl">16px tab</span>
            </div>
          </div>
          <pre className="code" style={{ marginTop: 16 }}>{`<!-- public/favicon.svg -->
<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="6" fill="#2B538F"/>
  <path d="M7.4 23V9h3.05l4.55 8.85L19.55 9
           h3.05v14h-2.65V13.6L16.05 22h-2.1
           L9.95 13.55V23H7.4z"
        fill="#FFFFFF"/>
</svg>`}</pre>
        </div>
      </div>
    </section>
  );
}

// ── 6. Hero reference ─────────────────────────────────────────

function HeroReference() {
  return (
    <section>
      <h2>06 — Hero reference</h2>
      <p style={{ marginBottom: 22 }}>
        Two-column hero on a 1100px content max-width. <strong>Left column carries the H1 + lede + CTAs</strong>;
        right column is a metadata rail (location, availability, stack) typeset in JetBrains Mono so the engineer signal
        is visual, not described. Spacing rhythm: <code>72 / 56 / 32 / 20 / 12</code> px.
        The H1 uses one inline accent — the role noun — in <code>--primary</code>. No hero image, no gradient, no animation.
      </p>

      <div className="hero-frame">
        <div className="browser">
          <div className="dots"><span className="dot"/><span className="dot"/><span className="dot"/></div>
          <div className="url">mostafaead.dev</div>
          <div style={{ width: 38 }} />
        </div>

        <div className="hero">
          <div className="hero-nav">
            <div className="wm-lockup">
              <div className="wm-mark" style={{ width: 28, height: 28, borderRadius: 6, fontSize: 17 }}>M</div>
              <div className="wm-text" style={{ fontSize: 16 }}>mostafa ead</div>
            </div>
            <div className="links">
              <a href="#">Work</a>
              <a href="#">Writing</a>
              <a href="#">CV</a>
              <a href="#">Contact</a>
            </div>
          </div>

          <div>
            <h1 className="hero-title">
              Tech Lead — <em>mobile</em>, IoT &amp; cross-platform engineering.
            </h1>
            <p className="hero-sub">
              Nine years shipping production software, seven leading cross-platform mobile work in Flutter.
              Currently leading a team of nine; recently expanded into AI agent systems and RAG architectures.
            </p>
            <div className="hero-cta">
              <a className="btn-primary" href="#">View work →</a>
              <a className="btn-ghost" href="#">Read CV</a>
            </div>
          </div>

          <div className="hero-meta">
            <div className="row">
              <span className="key">Status</span>
              <span className="val"><span className="status-dot"/>Open to roles</span>
            </div>
            <div className="row">
              <span className="key">Based</span>
              <span className="val">Cairo, EG · UTC+2</span>
            </div>
            <div className="row">
              <span className="key">Stack</span>
              <span className="val">Flutter · Dart · Swift · Kotlin · Python</span>
            </div>
            <div className="row">
              <span className="key">Cert</span>
              <span className="val">AWS ML — Specialty</span>
            </div>
            <div className="row">
              <span className="key">Teams</span>
              <span className="val">Led 5–11 engineers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 7. Handoff ────────────────────────────────────────────────

function Handoff() {
  return (
    <section>
      <h2>07 — Handoff to Claude Code</h2>
      <p>
        Drop these blocks into <code>src/styles/global.css</code> and <code>src/data/site.ts</code>.
        The favicon SVG above goes verbatim to <code>public/favicon.svg</code>.
      </p>

      <h3 style={{ marginTop: 18 }}>global.css — @theme</h3>
      <pre className="code">{`@theme {
  /* color — brand */
  --color-brand-50:  #EEF3FB;
  --color-brand-100: #DBE5F4;
  --color-brand-200: #B7CAE8;
  --color-brand-300: #7E9DD0;
  --color-brand-400: #4F75B5;
  --color-brand-500: #2B538F;
  --color-brand-600: #1F4276;
  --color-brand-700: #173458;
  --color-brand-800: #11253E;
  --color-brand-900: #0B1A2C;

  /* color — neutral */
  --color-neutral-0:   #FFFFFF;
  --color-neutral-50:  #F6F7F8;
  --color-neutral-100: #EEF0F2;
  --color-neutral-200: #E2E5E9;
  --color-neutral-300: #C9CED4;
  --color-neutral-400: #9AA1AB;
  --color-neutral-500: #6B7280;
  --color-neutral-600: #4A515B;
  --color-neutral-700: #2E343C;
  --color-neutral-800: #1B1F25;
  --color-neutral-900: #0F1217;

  --color-positive:      #137A4B;
  --color-positive-dark: #3DBE82;

  /* type */
  --font-sans: "Inter Tight", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;

  --text-h1:    3rem;
  --text-h2:    2rem;
  --text-h3:    1.375rem;
  --text-body:  1rem;
  --text-small: 0.8125rem;

  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 10px;
}

/* semantic — light */
:root {
  --bg: var(--color-neutral-0);
  --surface: var(--color-neutral-50);
  --border: var(--color-neutral-200);
  --text: var(--color-neutral-900);
  --text-muted: var(--color-neutral-500);
  --primary: var(--color-brand-500);
  --on-primary: #FFFFFF;
  --success: var(--color-positive);
}

/* semantic — dark */
.dark {
  --bg: #0B0D11;
  --surface: #11141A;
  --border: #232830;
  --text: #ECEEF1;
  --text-muted: #8A929D;
  --primary: #6F9AD8;
  --on-primary: #0B1A2C;
  --success: var(--color-positive-dark);
}`}</pre>

      <h3 style={{ marginTop: 28 }}>src/data/site.ts</h3>
      <pre className="code">{`export const site = {
  name: "Mostafa Ead",
  role: "Tech Lead — Mobile, IoT & Cross-Platform Engineering",
  location: "Cairo, EG",
  timezone: "UTC+2",
  tagline: "Mobile engineering, shipped.",
  status: "Open to roles",
  links: {
    cv: "/cv.pdf",
    email: "mailto:hi@mostafaead.dev",
    github: "https://github.com/…",
    linkedin: "https://linkedin.com/in/…",
  },
  stack: ["Flutter", "Dart", "Swift", "Kotlin", "Python"],
  certs: ["AWS Certified ML — Specialty"],
} as const;`}</pre>
    </section>
  );
}

// ── App ──────────────────────────────────────────────────────

function App() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", t.dark ? "dark" : "light");
  }, [t.dark]);

  return (
    <>
      <div className="page">
        <DocHead />
        <Essence />
        <Verbal />
        <Color />
        <Typography />
        <Wordmark />
        <HeroReference />
        <Handoff />
        <footer className="doc-foot">
          <span>Mostafa Ead — Brand System v1.0</span>
          <span>Built for Astro · Tailwind · Light & Dark</span>
        </footer>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakToggle label="Dark mode" value={t.dark} onChange={(v) => setTweak('dark', v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
