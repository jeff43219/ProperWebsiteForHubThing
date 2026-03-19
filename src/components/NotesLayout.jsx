import { useEffect, useState } from "react";

const buildCss = (accent) => `
  .notes-wrap{--accent:${accent};--accent-light:${accent}1f;--surface:#1e1e1e;--surface2:#252525;--border:#2e2e2e;--text:#f0f0f0;--muted:#888;--green:#2E9E6B;--green-light:rgba(46,158,107,0.12);--red-light:rgba(212,82,42,0.1);--red-dark:#c0392b}
  .notes-wrap *{box-sizing:border-box}
  .notes-wrap .notes-layout{display:flex;min-height:calc(100vh - 56px)}
  .notes-wrap .notes-sidebar{flex-shrink:0;background:#111;border-right:1px solid #2a2a2a;position:sticky;top:56px;height:calc(100vh - 56px);overflow-y:auto;overflow-x:hidden;width:220px}
  .notes-wrap .sidebar-inner{padding:20px 0;min-width:220px;width:220px}
  .notes-wrap .sidebar-label{font-size:.6rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.28);padding:16px 16px 6px;display:block;white-space:nowrap}
  .notes-wrap .sidebar-link{display:flex;align-items:center;gap:8px;padding:8px 16px;color:rgba(255,255,255,.55);font-size:.8rem;font-weight:500;border-left:3px solid transparent;transition:all .18s ease;cursor:pointer;background:none;border-top:none;border-right:none;border-bottom:none;width:100%;text-align:left;white-space:nowrap}
  .notes-wrap .sidebar-link:hover{color:#fff;background:rgba(255,255,255,.05)}
  .notes-wrap .sidebar-link.active{color:#fff;background:rgba(255,255,255,.06);border-left-color:var(--accent)}
  .notes-wrap .sidebar-num{background:rgba(255,255,255,.1);color:rgba(255,255,255,.5);font-size:.62rem;font-weight:700;border-radius:4px;padding:1px 5px;font-family:monospace;flex-shrink:0}
  .notes-wrap .sidebar-link.active .sidebar-num{background:${accent}4d;color:var(--accent)}
  .notes-wrap .notes-main{flex:1;min-width:0;padding:48px 56px}
  .notes-wrap .hero-tag{display:inline-block;background:${accent}33;color:${accent};border:1px solid ${accent}59;font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:4px 12px;border-radius:99px;margin-bottom:14px}
  .notes-wrap .hero-title{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:800;color:#fff;letter-spacing:-.04em;line-height:1.1;margin-bottom:12px}
  .notes-wrap .hero-sub{color:rgba(255,255,255,.5);font-size:.95rem;max-width:480px;line-height:1.7}
  .notes-wrap .hero-bar{height:3px;background:linear-gradient(90deg,${accent},#f5a623,#2E9E6B);margin:32px 0 48px;border-radius:2px}
  .notes-wrap .section{margin-bottom:64px}
  .notes-wrap .section-header{display:flex;align-items:center;gap:14px;margin-bottom:22px;padding-bottom:14px;border-bottom:2px solid var(--border)}
  .notes-wrap .section-num{background:#111;color:var(--accent);font-size:.75rem;font-weight:700;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:monospace}
  .notes-wrap .section-header h2{font-size:1.3rem;font-weight:700;color:var(--text);letter-spacing:-.03em}
  .notes-wrap .intro{background:var(--surface);border-left:4px solid var(--accent);border-radius:0 10px 10px 0;padding:14px 18px;font-size:.93rem;color:var(--text);margin-bottom:24px;line-height:1.7}
  .notes-wrap h3{font-size:.85rem;font-weight:700;color:var(--text);margin:28px 0 12px;text-transform:uppercase;letter-spacing:.05em}
  .notes-wrap .divider{height:1px;background:var(--border);margin:0 0 64px}
  .notes-wrap .stores-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin-bottom:8px}
  .notes-wrap .store-card{background:var(--surface);border:1.5px solid var(--border);border-radius:14px;padding:18px 16px;transition:all .18s ease}
  .notes-wrap .store-card:hover{border-color:${accent}66;transform:translateY(-2px)}
  .notes-wrap .store-icon{font-size:1.4rem;margin-bottom:8px}
  .notes-wrap .store-name{font-size:.75rem;font-weight:700;color:var(--text);margin-bottom:6px}
  .notes-wrap .store-desc{font-size:.82rem;color:var(--muted);line-height:1.55;margin-bottom:8px}
  .notes-wrap .store-formula{font-family:monospace;font-size:.82rem;background:var(--accent-light);border:1px solid ${accent}40;border-radius:6px;padding:3px 10px;color:var(--accent);font-weight:600;display:inline-block}
  .notes-wrap .two-col{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:10px 0 20px}
  .notes-wrap .two-col.tight{margin:8px 0}
  .notes-wrap .info-card{background:var(--surface);border:1.5px solid var(--border);border-radius:12px;padding:16px}
  .notes-wrap .info-card.accent-border{border-color:${accent}40}
  .notes-wrap .info-head{font-size:.78rem;font-weight:700;letter-spacing:.05em;color:var(--text);margin-bottom:10px;text-transform:uppercase}
  .notes-wrap .info-card p{font-size:.88rem;color:var(--muted);line-height:1.6}
  .notes-wrap .info-card p strong{color:var(--text)}
  .notes-wrap .chain-list{display:flex;flex-direction:column;gap:10px;margin-bottom:20px}
  .notes-wrap .chain{background:var(--surface);border:1.5px solid var(--border);border-radius:12px;padding:14px 16px;display:flex;align-items:flex-start;gap:14px;flex-wrap:wrap}
  .notes-wrap .chain-label{font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);white-space:nowrap;padding-top:2px;min-width:110px}
  .notes-wrap .chain-steps{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
  .notes-wrap .chain-step{font-size:.82rem;font-weight:600;background:var(--surface2);border:1.5px solid var(--border);border-radius:99px;padding:4px 12px;color:var(--text)}
  .notes-wrap .chain-step.waste{background:var(--accent-light);border-color:${accent}4d;color:var(--accent)}
  .notes-wrap .chain-arrow{color:var(--muted);font-size:.9rem;font-weight:700}
  .notes-wrap .callout{background:var(--surface);border:1.5px solid var(--border);border-radius:12px;padding:16px 20px;margin:20px 0}
  .notes-wrap .callout.warn{border-color:${accent}4d;background:var(--accent-light)}
  .notes-wrap .callout-title{font-size:.75rem;font-weight:700;color:var(--text);margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em}
  .notes-wrap .callout p,.notes-wrap .callout{font-size:.88rem;line-height:1.65;color:var(--text)}
  .notes-wrap .unit-grid{display:flex;flex-direction:column;gap:4px;margin-top:4px}
  .notes-wrap .unit-row{display:flex;justify-content:space-between;font-size:.86rem;padding:5px 0;border-bottom:1px solid ${accent}26}
  .notes-wrap .unit-row:last-child{border-bottom:none}
  .notes-wrap .unit-val{font-family:monospace;font-weight:700;color:var(--accent)}
  .notes-wrap .calc-block{background:var(--surface);border:1.5px solid var(--border);border-radius:14px;padding:20px 22px;margin-bottom:20px}
  .notes-wrap .calc-formula-big{font-family:monospace;font-size:clamp(1.1rem,2.5vw,1.5rem);font-weight:700;color:var(--accent);background:var(--accent-light);border:1.5px solid ${accent}40;border-radius:10px;padding:10px 18px;display:inline-block;margin-bottom:14px}
  .notes-wrap .calc-legend{display:flex;flex-wrap:wrap;gap:8px 20px;margin-bottom:12px}
  .notes-wrap .calc-legend span{font-size:.82rem;color:var(--muted)}
  .notes-wrap .calc-legend strong{color:var(--text)}
  .notes-wrap .calc-notes{font-size:.87rem;line-height:1.65;color:var(--text)}
  .notes-wrap .calc-notes p{margin-bottom:8px}
  .notes-wrap .calc-notes p:last-child{margin-bottom:0}
  .notes-wrap .calc-notes strong{color:var(--accent)}
  .notes-wrap .resource-block{margin-bottom:20px}
  .notes-wrap .resource-head{font-size:.8rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:10px 16px;border-radius:10px 10px 0 0}
  .notes-wrap .resource-head.nonrenew{background:#111;color:rgba(255,255,255,.85)}
  .notes-wrap .pro-card,.notes-wrap .con-card{background:var(--surface);border:1.5px solid var(--border);padding:0}
  .notes-wrap .two-col.tight .pro-card{border-radius:0 0 0 10px}
  .notes-wrap .two-col.tight .con-card{border-radius:0 0 10px 0}
  .notes-wrap .pro-head,.notes-wrap .con-head{font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:8px 14px;border-bottom:1.5px solid var(--border)}
  .notes-wrap .pro-head{background:var(--green-light);color:#2E9E6B}
  .notes-wrap .con-head{background:var(--red-light);color:var(--red-dark)}
  .notes-wrap .pro-card ul,.notes-wrap .con-card ul{list-style:none;padding:10px 14px}
  .notes-wrap .pro-card li,.notes-wrap .con-card li{font-size:.85rem;padding:5px 0 5px 16px;position:relative;border-bottom:1px solid var(--border);line-height:1.5;color:var(--text)}
  .notes-wrap .pro-card li:last-child,.notes-wrap .con-card li:last-child{border-bottom:none}
  .notes-wrap .pro-card li::before,.notes-wrap .con-card li::before{content:'›';position:absolute;left:3px;color:var(--muted);font-weight:700}
  .notes-wrap .renew-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin-bottom:20px}
  .notes-wrap .renew-card{background:var(--surface);border:1.5px solid var(--border);border-radius:14px;overflow:hidden;transition:all .18s ease}
  .notes-wrap .renew-card:hover{border-color:rgba(46,158,107,.35);transform:translateY(-2px)}
  .notes-wrap .renew-head{font-size:.78rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:10px 14px;background:var(--green-light);color:#2E9E6B;border-bottom:1.5px solid rgba(46,158,107,.2)}
  .notes-wrap .renew-how{font-size:.83rem;color:var(--text);padding:10px 14px 6px;line-height:1.5}
  .notes-wrap .renew-pros{font-size:.8rem;color:#2E9E6B;padding:4px 14px;background:rgba(46,158,107,.06);border-top:1px solid rgba(46,158,107,.15);font-weight:500}
  .notes-wrap .renew-cons{font-size:.8rem;color:var(--red-dark);padding:4px 14px 10px;font-weight:500}
  .notes-wrap .reliability-bar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px}
  .notes-wrap .rel-label{font-size:.7rem;color:var(--muted);font-weight:600;letter-spacing:.06em;text-transform:uppercase}
  .notes-wrap .rel-items{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
  .notes-wrap .rel-item{font-size:.78rem;font-weight:600;padding:4px 12px;border-radius:99px;border:1.5px solid}
  .notes-wrap .rel-item.high{background:var(--green-light);color:#2E9E6B;border-color:rgba(46,158,107,.3)}
  .notes-wrap .rel-item.mid{background:var(--surface2);color:var(--text);border-color:var(--border)}
  .notes-wrap .rel-item.low{background:var(--accent-light);color:var(--accent);border-color:${accent}4d}
  .notes-wrap .rel-arrow{color:var(--muted);font-weight:700}
  .notes-wrap .waste-list{display:flex;flex-direction:column;gap:10px;margin-bottom:24px}
  .notes-wrap .waste-item{display:flex;align-items:flex-start;gap:14px;background:var(--surface);border:1.5px solid var(--border);border-radius:12px;padding:14px 16px;font-size:.88rem;line-height:1.6}
  .notes-wrap .waste-icon{font-size:1.3rem;flex-shrink:0;margin-top:1px}
  .notes-wrap .steps-list{display:flex;flex-direction:column;gap:10px;margin-bottom:20px}
  .notes-wrap .step{display:flex;gap:14px;align-items:flex-start;background:var(--surface);border:1.5px solid var(--border);border-radius:12px;padding:14px 16px;font-size:.88rem;line-height:1.6}
  .notes-wrap .step-num{font-size:.75rem;font-weight:700;background:var(--accent);color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
  .notes-wrap .grid-explainer{display:flex;align-items:center;gap:8px;flex-wrap:wrap;background:var(--surface);border:1.5px solid var(--border);border-radius:14px;padding:20px;margin:16px 0 12px;justify-content:center}
  .notes-wrap .grid-step{text-align:center;min-width:90px}
  .notes-wrap .grid-icon{font-size:1.5rem;margin-bottom:4px}
  .notes-wrap .grid-label{font-size:.72rem;font-weight:700;color:var(--text);line-height:1.3}
  .notes-wrap .grid-sub{font-size:.66rem;color:var(--muted);margin-top:3px;line-height:1.35}
  .notes-wrap .grid-arrow{font-size:1.2rem;color:var(--accent);font-weight:700;flex-shrink:0}
  .notes-wrap .grid-note{font-size:.85rem;color:var(--muted);line-height:1.6;margin-top:4px}
  .notes-wrap .grid-note strong{color:var(--text)}
  .notes-wrap .formula-table{width:100%;border-collapse:collapse;font-size:.88rem}
  .notes-wrap .formula-table thead tr{background:#111}
  .notes-wrap .formula-table th{padding:10px 16px;text-align:left;font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.7)}
  .notes-wrap .formula-table tbody tr{background:var(--surface);border-bottom:1px solid var(--border)}
  .notes-wrap .formula-table tbody tr:hover{background:var(--accent-light)}
  .notes-wrap .formula-table td{padding:10px 16px;line-height:1.5;color:var(--text)}
  .notes-wrap .f-formula{font-family:monospace;font-size:.9rem;font-weight:700;color:var(--accent)}
  .notes-wrap .mistake-list{display:flex;flex-direction:column;gap:10px}
  .notes-wrap .mistake{display:flex;gap:14px;align-items:flex-start;background:var(--surface);border:1.5px solid var(--border);border-left:4px solid var(--accent);border-radius:0 12px 12px 0;padding:14px 16px;font-size:.88rem;line-height:1.6}
  .notes-wrap .mistake-x{font-size:1rem;font-weight:700;color:var(--accent);flex-shrink:0;margin-top:1px}
  .notes-wrap .mistake em{color:var(--accent);font-style:normal;font-weight:600}
  .notes-wrap .def-table{width:100%;border-collapse:collapse;font-size:.88rem}
  .notes-wrap .def-table thead tr{background:#111}
  .notes-wrap .def-table th{padding:10px 16px;text-align:left;font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.7)}
  .notes-wrap .def-table tbody tr{background:var(--surface);border-bottom:1px solid var(--border)}
  .notes-wrap .def-table tbody tr:hover{background:var(--accent-light)}
  .notes-wrap .def-table td{padding:10px 16px;line-height:1.55;color:var(--text);vertical-align:top}
  .notes-wrap .def-table td:first-child{font-weight:600;white-space:nowrap;color:var(--accent);width:200px}
  .notes-wrap .reveal{opacity:0;transform:translateY(20px);transition:opacity .55s ease,transform .55s ease}
  .notes-wrap .reveal.visible{opacity:1;transform:none}
  @media(max-width:768px){
    .notes-wrap .notes-sidebar{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:200;background:rgba(0,0,0,0);transition:transform .25s ease,background .25s ease;transform:translateX(-100%);display:flex;flex-direction:column;justify-content:center}
    .notes-wrap .notes-sidebar.mobile-open{transform:translateX(0);background:rgba(0,0,0,0.85)}
    .notes-wrap .notes-sidebar .sidebar-inner{background:#111;width:80%;max-width:300px;height:100%;padding:80px 0 40px;overflow-y:auto}
    .notes-wrap .notes-sidebar.mobile-open .sidebar-inner{box-shadow:4px 0 32px rgba(0,0,0,0.5)}
    .notes-wrap .mobile-hamburger{display:flex !important}
    .notes-wrap .notes-main{padding:28px 20px}
    .notes-wrap .two-col{grid-template-columns:1fr}
    .notes-wrap .stores-grid{grid-template-columns:1fr 1fr}
    .notes-wrap .renew-grid{grid-template-columns:1fr}
    .notes-wrap .grid-explainer{flex-direction:column}
    .notes-wrap .chain{flex-direction:column;gap:8px}
    .notes-wrap .chain-label{min-width:unset}
    .notes-wrap .def-table td:first-child{white-space:normal;width:auto}
  }
`;

export default function NotesLayout({ tag, title, subtitle, accent = "#d4522a", topics = [], reference = [], children }) {
  const [activeId, setActiveId] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const allNav = [...topics, ...reference];

  useEffect(() => {
    const onScroll = () => {
      let cur = "";
      allNav.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) cur = id;
      });
      if (cur) setActiveId(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [allNav.map(n => n.id).join()]);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.06 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const SidebarLinks = ({ items }) => items.map(({ num, id, label }) => (
    <button key={id} className={`sidebar-link${activeId === id ? " active" : ""}`} onClick={() => scrollTo(id)}>
      <span className="sidebar-num">{num}</span>{label}
    </button>
  ));

  return (
    <div className="notes-wrap" style={{ fontFamily: "'Inter', sans-serif", color: "#f0f0f0" }}>
      <style>{buildCss(accent)}</style>

      <div className="notes-layout">
        {/* Sidebar — desktop sticky, mobile full-screen overlay */}
        <aside
          className={`notes-sidebar${mobileOpen ? " mobile-open" : ""}`}
          onClick={e => { if (e.target === e.currentTarget) setMobileOpen(false) }}
        >
          <div className="sidebar-inner">
            {topics.length > 0 && (
              <>
                <span className="sidebar-label">Topics</span>
                <SidebarLinks items={topics} />
              </>
            )}
            {reference.length > 0 && (
              <>
                <span className="sidebar-label">Reference</span>
                <SidebarLinks items={reference} />
              </>
            )}
          </div>
        </aside>

        {/* Main content */}
        <main className="notes-main">
          {/* Mobile hamburger — fixed, always visible, shrinks on scroll */}
          <button
            onClick={() => setMobileOpen(true)}
            className="mobile-hamburger"
            style={{
              display: "none",
              position: "fixed",
              top: scrolled ? 66 : 70,
              left: scrolled ? 12 : 16,
              zIndex: 150,
              alignItems: "center",
              gap: 6,
              background: "#1a1a1a",
              border: "1px solid #2a2a2a",
              borderRadius: scrolled ? 8 : 10,
              color: "#ccc",
              cursor: "pointer",
              padding: scrolled ? "6px 10px" : "9px 14px",
              fontSize: scrolled ? ".72rem" : ".8rem",
              fontWeight: 600,
              transition: "all .2s ease",
              boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
          >
            <svg
              width={scrolled ? 14 : 18}
              height={scrolled ? 14 : 18}
              viewBox="0 0 18 18"
              fill="none"
              style={{ transition: "all .2s ease", flexShrink: 0 }}
            >
              <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Topics
          </button>

          {/* Hero */}
          {tag && <div className="hero-tag">{tag}</div>}
          {title && <h1 className="hero-title">{title}</h1>}
          {subtitle && <p className="hero-sub">{subtitle}</p>}
          {(tag || title || subtitle) && <div className="hero-bar" />}

          {children}
        </main>
      </div>
    </div>
  );
}