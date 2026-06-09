/* ═══════════════════════════════════════════════════
   CHEF COACH — Design System
   CSS propre, écrit une seule fois
═══════════════════════════════════════════════════ */

/* ─── Tokens ─── */
:root {
  --bg:          #faf8f5;
  --surface:     #ffffff;
  --surface-2:   #f3f0eb;
  --surface-3:   #ebe7e0;
  --border:      rgba(0,0,0,0.07);
  --border-md:   rgba(0,0,0,0.12);
  --text:        #1a1a2e;
  --muted:       #7c7c8a;
  --orange:      #e85d04;
  --orange-dark: #c44d00;
  --orange-soft: #fff2e8;
  --green:       #16a34a;
  --green-soft:  #f0fdf4;
  --blue:        #2563eb;
  --blue-soft:   #eff6ff;
  --red:         #dc2626;
  --red-soft:    #fef2f2;
  --yellow:      #d97706;
  --yellow-soft: #fffbeb;

  --r-xs:  8px;
  --r-sm:  12px;
  --r-md:  16px;
  --r-lg:  20px;
  --r-xl:  28px;
  --r-2xl: 36px;

  --sh-xs: 0 1px 4px rgba(0,0,0,0.06);
  --sh-sm: 0 2px 10px rgba(0,0,0,0.08);
  --sh-md: 0 8px 24px rgba(0,0,0,0.10);
  --sh-lg: 0 20px 60px rgba(0,0,0,0.14);

  --nav-h:    64px;
  --safe-bot: env(safe-area-inset-bottom, 0px);
  --safe-top: env(safe-area-inset-top, 0px);
  --font: -apple-system, 'SF Pro Text', BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --font-display: -apple-system, 'SF Pro Display', BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

html[data-theme="light"] {
  color-scheme: light;
  --bg:          #faf8f5;
  --surface:     #ffffff;
  --surface-2:   #f3f0eb;
  --surface-3:   #ebe7e0;
  --border:      rgba(0,0,0,0.07);
  --border-md:   rgba(0,0,0,0.12);
  --text:        #1a1a2e;
  --muted:       #7c7c8a;
  --orange-soft: #fff2e8;
  --orange-dark: #c44d00;
  --green-soft:  #f0fdf4;
  --blue-soft:   #eff6ff;
  --red-soft:    #fef2f2;
  --yellow-soft: #fffbeb;
}
html[data-theme="dark"] {
  color-scheme: dark;
  --bg:          #111118;
  --surface:     #1c1c24;
  --surface-2:   #26262f;
  --surface-3:   #31313c;
  --border:      rgba(255,255,255,0.07);
  --border-md:   rgba(255,255,255,0.13);
  --text:        #f0f0f5;
  --muted:       #8888a0;
  --orange-soft: #2d1600;
  --orange-dark: #fb8033;
  --green-soft:  #0a2018;
  --blue-soft:   #0c1a3d;
  --red-soft:    #2a0a0a;
  --yellow-soft: #1f1000;
}

/* ─── Reset ─── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html {
  background: var(--bg);
  font-family: var(--font);
  font-size: 16px;
  line-height: 1.5;
  color: var(--text);
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}
body { min-height: 100dvh; overflow-x: hidden; }
button { font: inherit; border: none; background: none; cursor: pointer; -webkit-tap-highlight-color: transparent; }
input, textarea, select { font: inherit; outline: none; }
img, svg { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; -webkit-tap-highlight-color: transparent; }
ul { list-style: none; }

/* ─── Shell ─── */
#app { min-height: 100dvh; }

.page {
  width: 100%;
  max-width: min(480px, 100vw);
  margin: 0 auto;
  padding: 0 0 calc(var(--nav-h) + var(--safe-bot) + 20px);
  min-height: 100dvh;
  overflow-x: hidden;
}

/* ─── Bottom Nav ─── */
.bottom-nav {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  z-index: 200;
  background: rgba(250,248,245,0.95);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: center;
  padding-bottom: var(--safe-bot);
}
body.has-onboarding .bottom-nav { display: none; }
.nav-inner {
  display: flex;
  width: 100%;
  max-width: min(480px, 100vw);
  justify-content: space-around;
}
.nav-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 10px 8px 8px;
  color: var(--muted);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: color 0.15s;
  min-width: 56px;
  border-radius: var(--r-sm);
}
.nav-btn svg { width: 22px; height: 22px; }
.nav-btn.active { color: var(--orange); }

/* ─── Typography ─── */
.t-display { font-family: var(--font-display); font-size: 28px; font-weight: 800; line-height: 1.1; letter-spacing: -0.03em; }
.t-title   { font-family: var(--font-display); font-size: 22px; font-weight: 800; line-height: 1.15; letter-spacing: -0.02em; }
.t-h3      { font-size: 17px; font-weight: 700; line-height: 1.3; }
.t-h4      { font-size: 15px; font-weight: 700; line-height: 1.3; }
.t-body    { font-size: 15px; line-height: 1.55; }
.t-small   { font-size: 13px; line-height: 1.45; }
.t-muted   { color: var(--muted); }
.t-orange  { color: var(--orange); }
.t-green   { color: var(--green); }
.t-red     { color: var(--red); }

/* ─── Spacing utilities ─── */
.mt-4  { margin-top: 4px; }
.mt-8  { margin-top: 8px; }
.mt-12 { margin-top: 12px; }
.mt-16 { margin-top: 16px; }
.mt-20 { margin-top: 20px; }
.mt-24 { margin-top: 24px; }
.mb-8  { margin-bottom: 8px; }
.mb-12 { margin-bottom: 12px; }
.mb-16 { margin-bottom: 16px; }
.mb-20 { margin-bottom: 20px; }

/* ─── Stack / layout ─── */
.stack    { display: flex; flex-direction: column; }
.stack-4  { display: flex; flex-direction: column; gap: 4px; }
.stack-8  { display: flex; flex-direction: column; gap: 8px; }
.stack-10 { display: flex; flex-direction: column; gap: 10px; }
.stack-12 { display: flex; flex-direction: column; gap: 12px; }
.stack-16 { display: flex; flex-direction: column; gap: 16px; }
.stack-20 { display: flex; flex-direction: column; gap: 20px; }
.row      { display: flex; align-items: center; }
.row-sb   { display: flex; align-items: center; justify-content: space-between; }
.row-gap8 { gap: 8px; }
.row-gap12{ gap: 12px; }
.grow     { flex: 1; min-width: 0; }
.hidden   { display: none !important; }

/* ─── Padding horizontal (sections de page) ─── */
.px { padding-left: 16px; padding-right: 16px; }

/* ─── Cards ─── */
.card {
  background: var(--surface);
  border-radius: var(--r-xl);
  border: 1px solid var(--border);
  box-shadow: var(--sh-sm);
  padding: 16px;
}
.card-flat {
  background: var(--surface-2);
  border-radius: var(--r-lg);
  padding: 14px;
}

/* ─── Buttons ─── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  padding: 0 20px;
  border-radius: var(--r-lg);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.1s, opacity 0.15s;
  -webkit-tap-highlight-color: transparent;
  white-space: nowrap;
  text-decoration: none;
}
.btn:active { transform: scale(0.97); }
.btn-sm  { height: 36px; padding: 0 14px; font-size: 13px; border-radius: var(--r-sm); }
.btn-lg  { height: 56px; padding: 0 28px; font-size: 17px; border-radius: var(--r-xl); }
.btn-full { width: 100%; }
.btn-primary  { background: var(--orange); color: white; box-shadow: 0 6px 18px rgba(232,93,4,0.28); }
.btn-secondary{ background: var(--surface-2); color: var(--text); }
.btn-ghost    { background: transparent; color: var(--muted); }
.btn-green    { background: var(--green); color: white; box-shadow: 0 6px 16px rgba(22,163,74,0.22); }
.btn:disabled { opacity: 0.4; pointer-events: none; }

/* ─── Badges ─── */
.badge {
  display: inline-flex; align-items: center; gap: 4px;
  padding: 3px 10px; border-radius: 999px;
  font-size: 12px; font-weight: 700; white-space: nowrap;
}
.badge-orange { background: var(--orange-soft); color: var(--orange-dark); }
.badge-green  { background: var(--green-soft);  color: var(--green); }
.badge-blue   { background: var(--blue-soft);   color: var(--blue); }
.badge-red    { background: var(--red-soft);    color: var(--red); }
.badge-yellow { background: var(--yellow-soft); color: var(--yellow); }
.badge-neutral{ background: var(--surface-2);  color: var(--muted); }

/* ─── Progress bar ─── */
.progress-bar {
  height: 8px; background: var(--surface-3);
  border-radius: 999px; overflow: hidden;
}
.progress-fill {
  height: 100%; border-radius: 999px;
  background: linear-gradient(90deg, var(--orange), #facc15);
  transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
  min-width: 3px;
}
.progress-bar.thin   { height: 5px; }
.progress-bar.thick  { height: 12px; }

/* ─── Difficulty dots ─── */
.diff-dot {
  display: inline-block; width: 6px; height: 6px;
  border-radius: 50%; background: var(--surface-3);
  margin-right: 2px;
}
.diff-dot.filled { background: var(--orange); }
.difficulty { display: inline-flex; align-items: center; }

/* ─── Section header ─── */
.sec-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 14px; }
.sec-header-link { font-size: 14px; color: var(--orange); font-weight: 600; }

/* ─── Toasts ─── */
.toast {
  position: fixed;
  bottom: calc(var(--nav-h) + var(--safe-bot) + 14px);
  left: 50%; transform: translateX(-50%);
  z-index: 500;
  background: var(--text); color: white;
  padding: 12px 20px; border-radius: 999px;
  font-size: 14px; font-weight: 700;
  box-shadow: var(--sh-lg); white-space: nowrap;
  animation: toastIn 0.2s ease both;
}
@keyframes toastIn {
  from { opacity: 0; transform: translateX(-50%) translateY(8px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}

/* ─── Empty state ─── */
.empty-state { text-align: center; padding: 40px 20px; color: var(--muted); }
.empty-icon  { font-size: 48px; margin-bottom: 12px; }
.empty-title { font-size: 17px; font-weight: 700; color: var(--text); }
.empty-sub   { font-size: 14px; margin-top: 6px; line-height: 1.5; }

/* ════════════════════════════════════════════════
   ACCUEIL
════════════════════════════════════════════════ */
.home-hero {
  width: 100%;
  max-width: 100vw;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 55%, #2d1b10 100%);
  border-radius: 0 0 var(--r-2xl) var(--r-2xl);
  padding: calc(var(--safe-top) + 20px) 20px 24px;
  color: white;
  position: relative;
  overflow: hidden;
}
.home-hero::before {
  content: '';
  position: absolute;
  top: -30px; right: -30px;
  width: 180px; height: 180px;
  background: radial-gradient(circle, rgba(232,93,4,0.4), transparent 70%);
  pointer-events: none;
}
.hero-greeting { font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.55); letter-spacing: 0.05em; text-transform: uppercase; }
.home-hero .row-sb { align-items: flex-start; gap: 12px; min-width: 0; }
.home-hero .row-sb > div:first-child { min-width: 0; }
.hero-title { font-family: var(--font-display); font-size: 26px; font-weight: 800; line-height: 1.15; letter-spacing: -0.02em; margin-top: 4px; overflow-wrap: anywhere; }
.hero-sub { font-size: 14px; color: rgba(255,255,255,0.6); margin-top: 4px; }
.streak-pill {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 12px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 999px;
  font-size: 13px; font-weight: 700; color: white;
  backdrop-filter: blur(8px);
  flex-shrink: 1;
  white-space: nowrap;
}
.hero-stats {
  display: grid; grid-template-columns: repeat(3,1fr);
  gap: 8px; margin-top: 18px;
}
.hero-stat {
  background: rgba(255,255,255,0.09);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--r-md); padding: 10px; text-align: center;
  min-width: 0;
}
.hero-stat-val { font-family: var(--font-display); font-size: 22px; font-weight: 800; color: white; }
.hero-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 2px; }

/* Contenu de l'accueil avec padding horizontal */
.home-hero + * { margin-top: 20px; }
#current-page > *:not(.home-hero) { padding-left: 16px; padding-right: 16px; }
#current-page > .home-hero { margin-left: 0; margin-right: 0; }

.mission-card {
  background: var(--orange-soft);
  border: 1.5px solid rgba(232,93,4,0.18);
  border-radius: var(--r-xl); padding: 16px;
}
.mission-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--orange-dark); }
.mission-title { font-size: 17px; font-weight: 800; margin-top: 4px; line-height: 1.3; }
.mission-sub   { font-size: 13px; color: var(--muted); margin-top: 4px; }

.quick-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.quick-tile {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--r-xl); padding: 18px; text-align: center;
  box-shadow: var(--sh-xs); cursor: pointer;
  transition: transform 0.1s;
  display: block;
}
.quick-tile:active { transform: scale(0.97); }
.quick-icon  { font-size: 30px; }
.quick-title { font-size: 15px; font-weight: 800; margin-top: 8px; }
.quick-sub   { font-size: 12px; color: var(--muted); }

.action-grid { display: grid; grid-template-columns: 1fr; gap: 10px; }
.action-card {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 10px 12px;
  align-items: center;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  padding: 14px;
  box-shadow: var(--sh-xs);
}
.action-card:active { transform: scale(0.99); }
.action-card .progress-bar { grid-column: 2; }
.action-primary {
  background: var(--orange-soft);
  border-color: rgba(232,93,4,0.2);
}
.action-icon {
  grid-row: span 2;
  width: 44px; height: 44px;
  border-radius: var(--r-md);
  display: flex; align-items: center; justify-content: center;
  background: var(--surface-2);
  font-size: 22px;
}
.action-title { font-size: 15px; font-weight: 800; line-height: 1.25; }
.action-sub { font-size: 12px; color: var(--muted); line-height: 1.35; }

.xp-pill {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 7px 14px;
  background: var(--yellow-soft);
  border: 1px solid rgba(217,119,6,0.2);
  border-radius: 999px;
  font-size: 14px; font-weight: 800; color: var(--yellow);
}

/* ════════════════════════════════════════════════
   APPRENDRE — Modules
════════════════════════════════════════════════ */
.learn-hero {
  padding: calc(var(--safe-top) + 18px) 16px 18px;
  background: linear-gradient(135deg, #fff7ed, #ffffff 58%, #f0fdf4);
  border-bottom: 1px solid var(--border);
}
.learn-progress {
  background: rgba(255,255,255,0.72);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 12px;
  font-size: 13px;
  color: var(--muted);
  font-weight: 700;
}
.continue-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  background: var(--text);
  color: white;
  border-radius: var(--r-xl);
  box-shadow: var(--sh-md);
}
.continue-label {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.62);
}
.continue-title { font-size: 17px; font-weight: 800; line-height: 1.25; margin-top: 3px; }
.continue-sub { font-size: 13px; color: rgba(255,255,255,0.68); margin-top: 2px; }
.continue-arrow {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255,255,255,0.14);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 18px;
  font-weight: 800;
}
.learn-groups { padding: 16px; }
#current-page > .learn-hero { padding: calc(var(--safe-top) + 18px) 16px 18px; }
#current-page > .learn-groups { padding: 16px; }
.learn-group {
  background: transparent;
}
.learn-group-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
}
.learn-group-title { font-size: 18px; font-weight: 800; line-height: 1.2; }
.learn-group-sub { font-size: 13px; color: var(--muted); margin-top: 3px; line-height: 1.4; }
.learn-group-count {
  flex-shrink: 0;
  padding: 5px 10px;
  border-radius: 999px;
  background: var(--surface-2);
  color: var(--muted);
  font-size: 12px;
  font-weight: 800;
}
.module-card {
  background: var(--surface);
  border-radius: var(--r-xl);
  border: 1px solid var(--border);
  box-shadow: var(--sh-sm);
  overflow: hidden;
}
.module-header {
  display: flex; align-items: center; gap: 14px;
  padding: 16px; cursor: pointer;
}
.module-header:active { background: var(--surface-2); }
.module-emoji {
  width: 48px; height: 48px; border-radius: var(--r-md);
  display: flex; align-items: center; justify-content: center;
  font-size: 24px; flex-shrink: 0;
}
.module-meta  { flex: 1; min-width: 0; }
.module-title { font-size: 16px; font-weight: 800; }
.module-desc  { font-size: 13px; color: var(--muted); margin-top: 2px; }
.module-progress-row { display: flex; align-items: center; gap: 10px; margin-top: 8px; }
.module-progress-label { font-size: 12px; color: var(--muted); font-weight: 600; white-space: nowrap; }
.module-chevron { font-size: 20px; color: var(--muted); transition: transform 0.25s; flex-shrink: 0; }
.module-chevron.open { transform: rotate(90deg); }

.module-lessons {
  border-top: 1px solid var(--border);
  max-height: 0; overflow: hidden;
  transition: max-height 0.35s ease;
}
.module-lessons.open { max-height: 2000px; }

.lesson-row {
  display: flex; align-items: center; gap: 14px;
  padding: 13px 16px; cursor: pointer;
  border-bottom: 1px solid var(--border);
  transition: background 0.1s;
}
.lesson-row:last-child { border-bottom: none; }
.lesson-row:active { background: var(--surface-2); }
.lesson-icon {
  width: 38px; height: 38px; border-radius: var(--r-sm);
  background: var(--surface-2);
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; flex-shrink: 0;
}
.lesson-icon.done { background: var(--green-soft); }
.lesson-row-meta { flex: 1; min-width: 0; }
.lesson-row-title { font-size: 14px; font-weight: 700; }
.lesson-row-sub   { font-size: 12px; color: var(--muted); margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.lesson-row-dur   { font-size: 12px; color: var(--muted); font-weight: 600; flex-shrink: 0; }

/* ════════════════════════════════════════════════
   LEÇON PLAYER
════════════════════════════════════════════════ */
.lesson-topbar {
  display: flex; align-items: center; gap: 12px;
  width: 100%;
  max-width: 100vw;
  padding: calc(var(--safe-top) + 12px) 16px 12px;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  position: sticky; top: 0; z-index: 50;
}
.back-btn {
  width: 36px; height: 36px; border-radius: var(--r-sm);
  background: var(--surface-2);
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; flex-shrink: 0; color: var(--text);
  cursor: pointer; text-decoration: none;
}
.step-counter { font-size: 12px; font-weight: 700; color: var(--muted); white-space: nowrap; }

.concept-card {
  background: var(--surface); border-radius: var(--r-xl);
  border: 1px solid var(--border); padding: 20px;
  box-shadow: var(--sh-sm);
}
.concept-num {
  display: inline-flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; border-radius: 999px;
  background: var(--orange-soft); color: var(--orange-dark);
  font-size: 13px; font-weight: 800; margin-bottom: 12px;
}
.concept-title { font-size: 18px; font-weight: 800; line-height: 1.25; }
.concept-body  { font-size: 15px; line-height: 1.65; color: #2d2d3e; margin-top: 10px; }
.concept-tip {
  display: flex; gap: 8px; margin-top: 14px;
  padding: 12px; background: var(--orange-soft);
  border-radius: var(--r-md); font-size: 13px; line-height: 1.5; color: #7c3a00;
}

.go-further {
  background: var(--blue-soft);
  border: 1px solid rgba(37,99,235,0.15);
  border-radius: var(--r-xl); padding: 20px;
}
.go-further-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--blue); }
.go-further-title { font-size: 17px; font-weight: 800; margin-top: 4px; }
.go-further-body  { font-size: 14px; line-height: 1.65; color: #1e3a8a; margin-top: 10px; }

.lesson-nav {
  display: flex; gap: 10px;
}
.lesson-nav .btn { flex: 1; }
.lesson-nav .btn-secondary { flex: 0 0 auto; min-width: 100px; }

/* ─── Quiz ─── */
.quiz-section { padding-bottom: 12px; }
.quiz-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--orange); }
.quiz-q { font-size: 19px; font-weight: 800; line-height: 1.3; margin-top: 8px; }
.quiz-options { display: flex; flex-direction: column; gap: 10px; }
.quiz-opt {
  padding: 14px 16px;
  background: var(--surface);
  border: 1.5px solid var(--border-md);
  border-radius: var(--r-lg);
  font-size: 15px; font-weight: 600;
  text-align: left; line-height: 1.4;
  cursor: pointer; transition: border-color 0.15s, background 0.15s;
}
.quiz-opt:active:not(.disabled) { background: var(--surface-2); }
.quiz-opt.correct  { border-color: var(--green); background: var(--green-soft); color: #14532d; }
.quiz-opt.wrong    { border-color: var(--red);   background: var(--red-soft);   color: #7f1d1d; }
.quiz-opt.disabled { cursor: default; pointer-events: none; }

.quiz-explanation {
  padding: 14px; background: var(--surface-2);
  border-radius: var(--r-lg); border-left: 3px solid var(--orange);
  font-size: 14px; line-height: 1.55; margin-top: 12px;
}

/* ─── Leçon terminée ─── */
.lesson-complete { text-align: center; padding: 32px 20px 20px; }
.complete-emoji  { font-size: 64px; margin-bottom: 16px; }
.complete-title  { font-family: var(--font-display); font-size: 26px; font-weight: 800; }
.complete-sub    { font-size: 15px; color: var(--muted); margin-top: 8px; }

/* ════════════════════════════════════════════════
   RECETTES
════════════════════════════════════════════════ */
.search-bar {
  display: flex; align-items: center; gap: 10px;
  background: var(--surface); border: 1px solid var(--border-md);
  border-radius: var(--r-lg); padding: 0 14px; height: 44px;
  box-shadow: var(--sh-xs);
  margin: 0 16px;
}
.search-bar input {
  flex: 1; background: none; border: none;
  font-size: 15px; color: var(--text);
}
.search-bar input::placeholder { color: var(--muted); }
.search-icon { color: var(--muted); font-size: 16px; }

.filter-row {
  display: flex; gap: 8px; overflow-x: auto;
  padding: 2px 16px 8px; scrollbar-width: none;
}
.filter-row::-webkit-scrollbar { display: none; }
.filter-chip {
  flex-shrink: 0; padding: 7px 14px;
  background: var(--surface); border: 1.5px solid var(--border-md);
  border-radius: 999px; font-size: 13px; font-weight: 700;
  color: var(--muted); cursor: pointer; transition: all 0.15s;
}
.filter-chip.active { background: var(--text); color: white; border-color: var(--text); }

.recipe-filter-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 0 16px 8px;
}
.recipe-filter-control {
  min-width: 0;
  height: 42px;
  border: 1px solid var(--border-md);
  border-radius: var(--r-md);
  background: var(--surface);
  color: var(--text);
  padding: 0 12px;
  font-size: 13px;
  font-weight: 700;
}
#recipe-skill, #recipe-ingredient { grid-column: span 2; }
.recipes-count {
  padding: 0 16px 4px;
  font-size: 12px;
  font-weight: 700;
  color: var(--muted);
}

.recipes-grid { display: flex; flex-direction: column; gap: 12px; padding: 0 16px; }

.recipe-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--r-xl); box-shadow: var(--sh-sm);
  overflow: hidden; cursor: pointer;
  transition: transform 0.1s;
}
.recipe-card:active { transform: scale(0.99); }
.recipe-cover {
  height: 130px; display: flex; align-items: flex-end;
  padding: 12px; position: relative; overflow: hidden;
}
.recipe-cover-emoji {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -58%);
  font-size: 52px; opacity: 0.9;
}
.recipe-cover-badges { position: relative; z-index: 1; display: flex; gap: 6px; flex-wrap: wrap; }
.recipe-info { padding: 14px; }
.recipe-title { font-size: 16px; font-weight: 800; line-height: 1.25; }
.recipe-meta-row { display: flex; align-items: center; gap: 10px; margin-top: 8px; flex-wrap: wrap; }
.recipe-meta-item { display: flex; align-items: center; gap: 4px; font-size: 12px; color: var(--muted); font-weight: 600; }
.skill-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 10px 16px 0;
}
.recipe-info .skill-chips { margin: 10px 0 0; }
.skill-chip {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 3px 8px;
  border-radius: 999px;
  background: var(--blue-soft);
  color: var(--blue);
  font-size: 11px;
  font-weight: 800;
}
.skill-chip.more { background: var(--surface-2); color: var(--muted); }

/* ════════════════════════════════════════════════
   RECETTE DÉTAIL
════════════════════════════════════════════════ */
.recipe-detail-wrap { padding: 0 16px; }
.recipe-hero {
  height: 200px; border-radius: var(--r-2xl);
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
  margin: 0 16px;
}
.recipe-hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.25));
}
.recipe-done-banner {
  background: var(--green-soft); border: 1px solid rgba(22,163,74,0.2);
  border-radius: var(--r-lg); padding: 12px 14px;
  display: flex; align-items: center; gap: 10px;
  font-size: 14px; font-weight: 700; color: var(--green);
  margin: 0 16px;
}
.objectives-list { display: flex; flex-direction: column; gap: 8px; }
.objective-item { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; line-height: 1.5; }
.objective-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); flex-shrink: 0; margin-top: 7px; }
.ingredients-list { display: flex; flex-direction: column; }
.ingredient-row { display: flex; align-items: baseline; gap: 10px; padding: 10px 0; border-bottom: 1px solid var(--border); font-size: 14px; }
.ingredient-row:last-child { border-bottom: none; }
.ingredient-qty  { font-weight: 800; min-width: 60px; color: var(--orange-dark); font-size: 13px; }
.ingredient-name { flex: 1; }
.ingredient-note { font-size: 12px; color: var(--muted); }

/* Espacement dans la page détail recette */
.recipe-detail-card { margin: 12px 16px 0; }

/* ════════════════════════════════════════════════
   APPRENDRE — Bouton révision
════════════════════════════════════════════════ */
.lesson-row-wrap {
  display: flex; align-items: stretch;
  border-bottom: 1px solid var(--border);
}
.lesson-row-wrap:last-child { border-bottom: none; }
.lesson-row-wrap .lesson-row {
  flex: 1; border-bottom: none;
}
.btn-revise {
  display: flex; align-items: center;
  padding: 0 14px;
  font-size: 12px; font-weight: 700;
  color: var(--orange-dark);
  background: var(--orange-soft);
  border-left: 1px solid var(--border);
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;
}
.btn-revise:active { background: rgba(232,93,4,0.15); }

/* ════════════════════════════════════════════════
   ONBOARDING
════════════════════════════════════════════════ */
.onboarding-overlay {
  position: fixed; inset: 0; z-index: 2000;
  background: var(--bg);
  display: flex; align-items: center; justify-content: center;
  padding: 24px 20px;
  animation: obIn 0.3s ease both;
}
.onboarding-overlay.ob-leaving { animation: obOut 0.35s ease both; }
@keyframes obIn  { from { opacity:0; transform: scale(0.96); } to { opacity:1; transform: scale(1); } }
@keyframes obOut { from { opacity:1; transform: scale(1); } to { opacity:0; transform: scale(1.04); } }

.onboarding-card {
  width: 100%; max-width: 400px;
  background: var(--surface);
  border-radius: var(--r-2xl);
  border: 1px solid var(--border);
  box-shadow: var(--sh-lg);
  padding: 32px 24px;
}

.ob-dots { display: flex; gap: 8px; justify-content: center; margin-bottom: 28px; }
.ob-dot  { width: 8px; height: 8px; border-radius: 50%; background: var(--surface-3); transition: all 0.2s; }
.ob-dot.active { width: 24px; border-radius: 4px; background: var(--orange); }

.ob-content { display: flex; flex-direction: column; gap: 0; }
.ob-emoji { font-size: 64px; text-align: center; margin-bottom: 16px; }
.ob-title { font-family: var(--font-display); font-size: 24px; font-weight: 800; text-align: center; letter-spacing: -0.02em; margin-bottom: 10px; }
.ob-sub   { font-size: 15px; color: var(--muted); text-align: center; line-height: 1.55; margin-bottom: 0; }

.level-choices { display: flex; flex-direction: column; gap: 10px; }
.level-choice {
  display: flex; align-items: center; gap: 14px;
  padding: 14px 16px;
  background: var(--surface-2);
  border: 2px solid var(--border);
  border-radius: var(--r-lg);
  cursor: pointer; text-align: left;
  transition: all 0.15s; font-size: 15px;
  -webkit-tap-highlight-color: transparent;
}
.level-choice:active { transform: scale(0.99); }
.level-choice.selected { border-color: var(--orange); background: var(--orange-soft); }
.level-emoji { font-size: 28px; flex-shrink: 0; }
.level-info  { display: flex; flex-direction: column; gap: 2px; }
.level-info strong { font-size: 15px; font-weight: 800; }
.level-info span   { font-size: 13px; color: var(--muted); }
.level-choice.selected .level-info span { color: var(--orange-dark); }

/* ════════════════════════════════════════════════
   NOTES RECETTE
════════════════════════════════════════════════ */
.recipe-note-section { padding: 0 16px 24px; }
.recipe-note-empty {
  padding: 24px;
  background: var(--surface-2);
  border-radius: var(--r-xl);
  text-align: center;
  border: 2px dashed var(--border-md);
}
.recipe-note-display {
  overflow: hidden;
  padding: 0;
}
.recipe-note-display .card { padding: 0; }
.recipe-note-photo {
  width: 100%; aspect-ratio: 4/3;
  object-fit: cover; display: block;
  border-radius: var(--r-xl) var(--r-xl) 0 0;
}
.recipe-note-rating { font-size: 20px; padding: 12px 16px 0; }
.recipe-note-text   { font-size: 15px; line-height: 1.55; padding: 8px 16px; color: var(--text); }
.recipe-note-date   { font-size: 12px; color: var(--muted); padding: 4px 16px 14px; }

/* Dark mode onboarding */
@media (prefers-color-scheme: dark) {
  .onboarding-overlay { background: var(--bg); }
  .level-choice { background: var(--surface-2); }
  .level-choice.selected { background: var(--orange-soft); }
}

/* ════════════════════════════════════════════════
   MODE CUISINE
════════════════════════════════════════════════ */
.cooking-mode {
  position: fixed; inset: 0; z-index: 1000;
  background: var(--bg);
  display: flex; flex-direction: column; overflow: hidden;
}
.cooking-topbar {
  display: flex; align-items: center; gap: 12px;
  width: 100%;
  max-width: 100vw;
  padding: calc(var(--safe-top) + 12px) 16px 12px;
  background: var(--surface); border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}
.cooking-step-counter { font-size: 13px; font-weight: 800; color: var(--orange); white-space: nowrap; }

.cooking-body {
  flex: 1; overflow-y: auto;
  padding: 20px 16px 16px;
  max-width: 480px; margin: 0 auto; width: 100%;
}
.cooking-step-num    { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--orange); margin-bottom: 8px; }
.cooking-step-title  { font-family: var(--font-display); font-size: 26px; font-weight: 800; line-height: 1.15; letter-spacing: -0.02em; }
.cooking-step-action { font-size: 17px; line-height: 1.65; color: var(--text); margin-top: 14px; }

.cooking-ingredients {
  margin-top: 16px;
  padding: 14px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
}
.cooking-ingredients-label {
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--orange);
  margin-bottom: 8px;
}
.cooking-ingredient-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.cooking-ingredient {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 7px 10px;
  border-radius: 999px;
  background: var(--orange-soft);
  color: var(--orange-dark);
  font-size: 13px;
  font-weight: 700;
}
.cooking-ingredient strong { color: inherit; }

.cooking-why {
  padding: 14px; background: var(--blue-soft);
  border-radius: var(--r-lg); font-size: 14px; line-height: 1.55; color: #1e3a8a;
}
.cooking-why-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: var(--blue); margin-bottom: 6px; }
.cooking-mistake {
  margin-top: 10px; padding: 14px;
  background: var(--red-soft); border-radius: var(--r-lg);
  font-size: 14px; line-height: 1.55; color: #7f1d1d;
}
.cooking-mistake-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: var(--red); margin-bottom: 6px; }

.timer-card {
  display: flex; align-items: center; justify-content: space-between;
  margin-top: 16px; padding: 14px 16px;
  background: var(--yellow-soft); border: 1px solid rgba(217,119,6,0.2);
  border-radius: var(--r-lg);
}
.timer-label { font-size: 12px; font-weight: 600; color: var(--yellow); }
.timer-val   { font-family: var(--font-display); font-size: 28px; font-weight: 800; color: var(--yellow); letter-spacing: -0.02em; font-variant-numeric: tabular-nums; }
.timer-btn   { height: 40px; padding: 0 16px; background: var(--yellow); color: white; border-radius: var(--r-md); font-size: 13px; font-weight: 700; }

.cooking-footer {
  flex-shrink: 0;
  padding: 12px 16px calc(var(--safe-bot) + 12px);
  background: var(--surface); border-top: 1px solid var(--border);
  display: grid; grid-template-columns: 1fr 2fr; gap: 10px;
  max-width: min(480px, 100vw); margin: 0 auto; width: 100%;
}

/* ════════════════════════════════════════════════
   JOURNAL
════════════════════════════════════════════════ */
.journal-entry {
  background: var(--surface); border-radius: var(--r-xl);
  border: 1px solid var(--border); overflow: hidden; box-shadow: var(--sh-sm);
}
.journal-photo-img {
  width: 100%; aspect-ratio: 4/3; object-fit: cover;
  display: block; background: var(--surface-2);
}
.journal-photo-placeholder {
  width: 100%; aspect-ratio: 4/3; background: var(--surface-2);
  display: flex; align-items: center; justify-content: center; font-size: 56px;
}
.journal-body         { padding: 14px; }
.journal-date         { font-size: 12px; color: var(--muted); font-weight: 600; }
.journal-recipe-title { font-size: 16px; font-weight: 800; margin-top: 2px; }
.journal-note         { font-size: 14px; line-height: 1.55; color: #3d3d4e; margin-top: 8px; }
.journal-rating       { display: flex; gap: 2px; margin-top: 8px; font-size: 18px; }

/* ─── Formulaire journal ─── */
.add-form { display: flex; flex-direction: column; gap: 14px; }
.field { display: flex; flex-direction: column; gap: 6px; }
.field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); }
.field input, .field select, .field textarea {
  width: 100%; padding: 12px 14px;
  background: var(--surface); border: 1.5px solid var(--border-md);
  border-radius: var(--r-lg); font-size: 15px; color: var(--text);
  transition: border-color 0.15s;
}
.field input:focus, .field select:focus, .field textarea:focus { border-color: var(--orange); }
.field textarea { min-height: 88px; resize: none; }

.photo-placeholder {
  width: 100%; aspect-ratio: 4/3;
  background: var(--surface-2); border: 2px dashed var(--border-md);
  border-radius: var(--r-lg);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 8px; cursor: pointer; color: var(--muted); font-size: 14px; font-weight: 600;
}
.photo-icon    { font-size: 36px; }
.photo-preview { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: var(--r-lg); display: block; }

.stars-input { display: flex; gap: 8px; }
.star-btn { font-size: 28px; cursor: pointer; opacity: 0.3; transition: opacity 0.1s, transform 0.1s; }
.star-btn.active { opacity: 1; }
.star-btn:active { transform: scale(1.2); }

/* ════════════════════════════════════════════════
   PROFIL
════════════════════════════════════════════════ */
.profile-avatar {
  width: 72px; height: 72px; border-radius: 50%;
  background: linear-gradient(135deg, #e85d04, #facc15);
  display: flex; align-items: center; justify-content: center; font-size: 36px;
}
.stat-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 10px; }
.stat-tile { background: var(--surface-2); border-radius: var(--r-lg); padding: 14px; text-align: center; }
.stat-val  { font-family: var(--font-display); font-size: 28px; font-weight: 800; letter-spacing: -0.03em; }
.stat-lbl  { font-size: 12px; color: var(--muted); font-weight: 600; margin-top: 2px; }
.theme-choice {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  padding: 4px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
}
.theme-chip {
  height: 38px;
  border-radius: var(--r-md);
  color: var(--muted);
  font-size: 13px;
  font-weight: 800;
  transition: background 0.15s, color 0.15s, transform 0.1s;
}
.theme-chip:active { transform: scale(0.98); }
.theme-chip.active {
  background: var(--surface);
  color: var(--text);
  box-shadow: var(--sh-xs);
}

/* ════════════════════════════════════════════════
   FICHES TECHNIQUES
════════════════════════════════════════════════ */
.tech-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  box-shadow: var(--sh-xs);
  overflow: hidden;
}
.tech-summary {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  cursor: pointer;
  list-style: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}
.tech-summary::-webkit-details-marker { display: none; }
.tech-summary:active { background: var(--surface-2); }
.tech-emoji {
  width: 44px; height: 44px;
  border-radius: var(--r-md);
  display: flex; align-items: center; justify-content: center;
  font-size: 22px; flex-shrink: 0;
}
.tech-info  { flex: 1; min-width: 0; }
.tech-title { font-size: 15px; font-weight: 800; }
.tech-sub   { font-size: 12px; color: var(--muted); margin-top: 2px; }
.tech-chevron { font-size: 20px; color: var(--muted); transition: transform 0.25s; flex-shrink: 0; }
details[open] .tech-chevron { transform: rotate(90deg); }

.tech-content {
  border-top: 1px solid var(--border);
  padding: 4px 0 8px;
}
.tech-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 9px 16px;
  border-bottom: 1px solid var(--border);
}
.tech-row:last-child { border-bottom: none; }
.tech-label { font-size: 13px; font-weight: 700; flex: 1; min-width: 0; }
.tech-value {
  font-size: 13px; font-weight: 800; color: var(--orange-dark);
  white-space: nowrap; flex-shrink: 0;
}
.tech-note  { font-size: 11px; color: var(--muted); flex-shrink: 0; }

/* ── Leçons verrouillées ── */
.lesson-locked {
  cursor: default;
  opacity: 0.65;
}
.locked-icon { font-size: 16px !important; }
.locked-msg  { color: var(--red) !important; font-style: italic; }

/* ════════════════════════════════════════════════
   EXPORT / IMPORT MODAL
════════════════════════════════════════════════ */
.export-modal-backdrop {
  position: fixed; inset: 0; z-index: 3000;
  background: rgba(0,0,0,0.55);
  display: flex; align-items: flex-end; justify-content: center;
  padding: 16px;
  animation: obIn 0.2s ease both;
}
.export-modal {
  width: 100%; max-width: 480px;
  background: var(--bg);
  border-radius: var(--r-2xl) var(--r-2xl) var(--r-xl) var(--r-xl);
  padding: 24px 20px calc(20px + var(--safe-bot));
  box-shadow: var(--sh-lg);
}
.export-textarea {
  width: 100%; height: 160px;
  background: var(--surface-2); border: 1px solid var(--border-md);
  border-radius: var(--r-lg); padding: 12px; font-size: 12px;
  font-family: monospace; color: var(--muted); resize: none;
  line-height: 1.4; display: block;
}

/* ════════════════════════════════════════════════
   DARK MODE
════════════════════════════════════════════════ */
@media (prefers-color-scheme: dark) {
  :root {
    --bg:          #111118;
    --surface:     #1c1c24;
    --surface-2:   #26262f;
    --surface-3:   #31313c;
    --border:      rgba(255,255,255,0.07);
    --border-md:   rgba(255,255,255,0.13);
    --text:        #f0f0f5;
    --muted:       #8888a0;
    --orange-soft: #2d1600;
    --orange-dark: #fb8033;
    --green-soft:  #0a2018;
    --blue-soft:   #0c1a3d;
    --red-soft:    #2a0a0a;
    --yellow-soft: #1f1000;
  }
  .home-hero { background: linear-gradient(135deg, #0d0d1a, #12101e 55%, #1f1108); }
  .bottom-nav { background: rgba(17,17,24,0.96); }
  .lesson-topbar { background: var(--surface); }
  .cooking-topbar, .cooking-footer { background: var(--surface); }
  .concept-body  { color: #c8c8d8; }
  .go-further-body { color: #93c5fd; }
  .cooking-why { color: #93c5fd; background: rgba(37,99,235,0.12); }
  .cooking-mistake { color: #fca5a5; background: rgba(220,38,38,0.12); }
  .search-bar { background: var(--surface); }
  .filter-chip { background: var(--surface); color: var(--muted); }
  .filter-chip.active { background: var(--text); color: #111118; }
  .quiz-opt { background: var(--surface); color: var(--text); }
  .field input, .field select, .field textarea { background: var(--surface-2); color: var(--text); }
  .quick-tile { background: var(--surface); }
  .back-btn { background: var(--surface-2); color: var(--text); }
}

html[data-theme="light"] .home-hero { background: linear-gradient(135deg, #fff7ed 0%, #fffaf5 58%, #f0fdf4 100%); color: var(--text); }
html[data-theme="light"] .home-hero::before { background: radial-gradient(circle, rgba(232,93,4,0.18), transparent 70%); }
html[data-theme="light"] .hero-greeting,
html[data-theme="light"] .hero-sub,
html[data-theme="light"] .hero-stat-lbl { color: rgba(26,26,46,0.58); }
html[data-theme="light"] .hero-stat-val { color: var(--text); }
html[data-theme="light"] .hero-stat,
html[data-theme="light"] .streak-pill { background: rgba(255,255,255,0.72); border-color: rgba(0,0,0,0.07); color: var(--text); }
html[data-theme="light"] .bottom-nav { background: rgba(250,248,245,0.95); }
html[data-theme="light"] .filter-chip.active { background: var(--text); color: white; }
html[data-theme="light"] .concept-body { color: #2d2d3e; }
html[data-theme="light"] .go-further-body,
html[data-theme="light"] .cooking-why { color: #1e3a8a; }
html[data-theme="light"] .cooking-mistake { color: #7f1d1d; }

html[data-theme="dark"] .home-hero { background: linear-gradient(135deg, #0d0d1a, #12101e 55%, #1f1108); color: white; }
html[data-theme="dark"] .learn-hero { background: linear-gradient(135deg, #18141a, #111118 58%, #101b15); }
html[data-theme="dark"] .learn-progress { background: rgba(28,28,36,0.78); }
html[data-theme="dark"] .continue-card { background: #f0f0f5; color: #111118; }
html[data-theme="dark"] .continue-label,
html[data-theme="dark"] .continue-sub { color: rgba(17,17,24,0.62); }
html[data-theme="dark"] .continue-arrow { background: rgba(17,17,24,0.1); }
html[data-theme="dark"] .bottom-nav { background: rgba(17,17,24,0.96); }
html[data-theme="dark"] .lesson-topbar,
html[data-theme="dark"] .cooking-topbar,
html[data-theme="dark"] .cooking-footer { background: var(--surface); }
html[data-theme="dark"] .concept-body { color: #c8c8d8; }
html[data-theme="dark"] .go-further-body,
html[data-theme="dark"] .cooking-why { color: #93c5fd; }
html[data-theme="dark"] .cooking-why { background: rgba(37,99,235,0.12); }
html[data-theme="dark"] .cooking-mistake { color: #fca5a5; background: rgba(220,38,38,0.12); }
html[data-theme="dark"] .field input,
html[data-theme="dark"] .field select,
html[data-theme="dark"] .field textarea { background: var(--surface-2); color: var(--text); }
html[data-theme="dark"] .recipe-filter-control,
html[data-theme="dark"] .cooking-ingredients { background: var(--surface-2); color: var(--text); }
html[data-theme="dark"] .filter-chip.active { background: var(--text); color: #111118; }
html[data-theme="dark"] .back-btn { background: var(--surface-2); color: var(--text); }

/* ════════════════════════════════════════════════
   RESPONSIVE
════════════════════════════════════════════════ */
@media (min-width: 520px) {
  .home-hero {
    border-radius: var(--r-2xl);
    margin: 16px;
  }
  .home-hero + * { margin-top: 16px; }
  #current-page > *:not(.home-hero) { padding-left: 16px; padding-right: 16px; }
}

/* ════════════════════════════════════════════════
   ACCESSIBILITÉ ET MODE RECETTE — correctifs
════════════════════════════════════════════════ */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible,
[data-href]:focus-visible {
  outline: 3px solid var(--orange);
  outline-offset: 3px;
}

.recipe-card[role="button"] { cursor: pointer; }

.recipe-preflight-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--text);
}
.recipe-preflight-list strong { color: var(--text); }

.recipe-step-detail {
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 12px;
  background: var(--surface-2);
}
.recipe-step-head {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 10px;
}
.recipe-step-num {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--orange-soft);
  color: var(--orange-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 800;
  flex-shrink: 0;
}
.recipe-step-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  line-height: 1.5;
}
.recipe-step-label {
  display: block;
  margin-bottom: 2px;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--muted);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}

/* ════════════════════════════════════════════════
   LOT 2 — Aujourd'hui, choix contexte, préparation recette
════════════════════════════════════════════════ */
.today-card {
  margin-left: 16px;
  margin-right: 16px;
  padding: 16px;
  border-radius: var(--r-xl);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--sh-md);
}
.today-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
.today-kicker {
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: var(--orange);
}
.today-title { font-size: 18px; font-weight: 800; line-height: 1.2; margin-top: 2px; }
.today-goal {
  min-width: 58px;
  padding: 8px 10px;
  border-radius: var(--r-md);
  background: var(--orange-soft);
  color: var(--orange-dark);
  text-align: center;
  font-weight: 800;
}
.today-goal span { display: block; font-size: 16px; line-height: 1; }
.today-goal small { display: block; margin-top: 4px; font-size: 10px; text-transform: uppercase; letter-spacing: .05em; }
.today-list { display: flex; flex-direction: column; gap: 10px; }
.today-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: var(--r-lg);
  background: var(--surface-2);
  border: 1px solid var(--border);
}
.today-item:active { transform: scale(.99); }
.today-review { background: var(--blue-soft); }
.today-icon {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--r-md);
  background: var(--surface);
  font-size: 20px;
  flex-shrink: 0;
}
.today-item-title { font-size: 14px; font-weight: 800; color: var(--text); }
.today-item-sub { font-size: 13px; color: var(--muted); line-height: 1.35; margin-top: 2px; }
.today-arrow { color: var(--muted); font-weight: 800; }
.today-note { margin-top: 12px; font-size: 12px; line-height: 1.45; color: var(--muted); }

.cook-today-panel {
  margin-left: 16px;
  margin-right: 16px;
  padding: 14px;
  border-radius: var(--r-xl);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--sh-xs);
}
.context-row {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 2px;
  scrollbar-width: none;
}
.context-row::-webkit-scrollbar { display: none; }
.context-chip {
  flex-shrink: 0;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1.5px solid var(--border-md);
  background: var(--surface-2);
  color: var(--muted);
  font-size: 13px;
  font-weight: 800;
}
.context-chip.active {
  background: var(--orange);
  color: #fff;
  border-color: var(--orange);
}
.context-help {
  padding: 8px 10px;
  border-radius: var(--r-md);
  background: var(--orange-soft);
  color: var(--orange-dark);
  font-size: 12px;
  line-height: 1.4;
  font-weight: 700;
}

.prep-summary-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.prep-summary-item {
  padding: 10px;
  border-radius: var(--r-md);
  background: var(--surface-2);
  border: 1px solid var(--border);
}
.prep-summary-label {
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .05em;
  color: var(--muted);
}
.prep-summary-value {
  margin-top: 3px;
  font-size: 15px;
  font-weight: 800;
  color: var(--text);
}
.fix-list { display: flex; flex-direction: column; gap: 10px; }
.fix-item {
  padding: 12px;
  border-radius: var(--r-lg);
  background: var(--red-soft);
  border: 1px solid rgba(220,38,38,.16);
}
.fix-problem {
  font-size: 13px;
  font-weight: 800;
  color: var(--red);
}
.fix-solution {
  margin-top: 4px;
  font-size: 13px;
  line-height: 1.45;
  color: var(--text);
}

/* ════════════════════════════════════════════════
   LOT 3 — Corrélation cours → pratiques → recettes
════════════════════════════════════════════════ */
.pending-panel,
.practice-explainer,
.practice-context-banner {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  box-shadow: var(--sh-sm);
  padding: 16px;
}
.practice-added {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--green-soft);
  color: var(--green);
  font-size: 13px;
  font-weight: 700;
}
.practice-mini-card {
  position: relative;
  display: flex;
  align-items: stretch;
  gap: 8px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  overflow: hidden;
}
.practice-mini-main {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
}
.practice-mini-icon {
  width: 38px;
  height: 38px;
  border-radius: var(--r-md);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--orange-soft);
  flex: 0 0 auto;
}
.practice-mini-title {
  font-size: 14px;
  font-weight: 800;
  line-height: 1.25;
  color: var(--text);
}
.practice-mini-sub {
  margin-top: 3px;
  font-size: 12px;
  color: var(--muted);
  line-height: 1.35;
}
.practice-dismiss {
  width: 40px;
  min-height: 100%;
  color: var(--muted);
  font-size: 22px;
  border-left: 1px solid var(--border);
}
.practice-dismiss:active { transform: none; }
.practice-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  box-shadow: var(--sh-sm);
  padding: 16px;
}
.practice-card-head {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.practice-card-title {
  font-size: 17px;
  line-height: 1.25;
  font-weight: 800;
  color: var(--text);
}
.practice-card-reason,
.practice-context-reason {
  margin-top: 8px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
}
.practice-focus,
.practice-success {
  margin-top: 12px;
  padding: 12px;
  border-radius: var(--r-md);
  background: var(--surface-2);
}
.practice-success { background: var(--green-soft); }
.practice-focus-title {
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--muted);
  margin-bottom: 6px;
}
.practice-focus ul,
.practice-success ul {
  list-style: disc;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.practice-focus li,
.practice-success li {
  font-size: 13px;
  line-height: 1.4;
}
.practice-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}
.practice-context-banner {
  border-color: rgba(232,93,4,0.22);
  background: linear-gradient(135deg, var(--orange-soft), var(--surface));
}
.practice-context-kicker {
  color: var(--orange-dark);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.practice-context-title {
  margin-top: 3px;
  font-size: 18px;
  line-height: 1.25;
  font-weight: 900;
  color: var(--text);
}
.mt-10 { margin-top: 10px; }
@media (max-width: 360px) {
  .practice-actions .btn { width: 100%; }
}


/* ─── Lot 4 : cadence hebdomadaire ─── */
.weekly-card .today-goal.done { background: var(--green-soft); color: var(--green); }
.weekly-recipe-item { border-color: rgba(232,93,4,.22); background: linear-gradient(135deg,var(--orange-soft),var(--surface)); }
.weekly-reason { font-size: 13px; line-height: 1.45; color: var(--muted); padding: 10px 12px; background: var(--surface-2); border-radius: var(--r-md); }
.weekly-lessons { font-size: 13px; color: var(--muted); background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-md); padding: 12px; }
.weekly-lessons strong { color: var(--text); }
.weekly-push-panel, .weekly-recipe-banner { background: var(--surface); border: 1px solid rgba(232,93,4,.18); border-radius: var(--r-xl); padding: 16px; box-shadow: var(--sh-sm); }
.weekly-push-card { display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: var(--r-lg); background: var(--orange-soft); border: 1px solid rgba(232,93,4,.18); }
.weekly-push-card:active { transform: scale(.99); }
.weekly-recipe-banner { background: linear-gradient(135deg,var(--orange-soft),var(--surface)); }


/* ─── Lot 5 : maîtrise et débrief ─── */
.coach-panel { background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-xl); padding: 16px; box-shadow: var(--sh-sm); }
.skill-progress-row { padding: 12px; border-radius: var(--r-lg); background: var(--surface-2); }
.issue-chip-row { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 2px; }
.issue-chip { display: inline-flex; white-space: nowrap; padding: 6px 10px; border-radius: 999px; background: var(--red-soft); color: var(--red); font-size: 12px; font-weight: 700; }
.debrief-card { border-color: rgba(37,99,235,.18); }
.debrief-choice { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; }
.debrief-result-chip, .issue-btn { min-height: 42px; padding: 8px 10px; border-radius: var(--r-md); background: var(--surface-2); border: 1px solid var(--border); color: var(--text); font-size: 13px; font-weight: 700; text-align: center; }
.debrief-result-chip.active { background: var(--blue-soft); color: var(--blue); border-color: rgba(37,99,235,.25); }
.issue-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 8px; }
.issue-btn.active { background: var(--orange-soft); color: var(--orange-dark); border-color: rgba(232,93,4,.25); }
@media (max-width: 360px) { .debrief-choice, .issue-grid { grid-template-columns: 1fr; } }


/* ─── Lot 6 : révision et niveaux ─── */
.level-panel, .review-panel { background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-xl); padding: 16px; box-shadow: var(--sh-sm); }
.level-kicker { font-size: 11px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; color: var(--orange); }
.level-title { font-size: 18px; line-height: 1.2; font-weight: 850; margin-top: 2px; }
.level-score { width: 48px; height: 48px; border-radius: 50%; background: var(--orange-soft); color: var(--orange-dark); display: flex; align-items: center; justify-content: center; font-weight: 850; }
.learn-level-strip { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:14px; border-radius:var(--r-xl); background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.16); }
.learn-level-strip strong { font-size:18px; }
.review-card { display:flex; align-items:center; gap:8px; border-radius:var(--r-lg); background:var(--surface-2); border:1px solid var(--border); overflow:hidden; }
.review-card-main { display:flex; align-items:center; gap:12px; flex:1; min-width:0; padding:12px; }
.review-icon { width:36px; height:36px; border-radius:50%; background:var(--blue-soft); display:flex; align-items:center; justify-content:center; }
.review-title { font-size:14px; font-weight:850; }
.review-sub { font-size:12px; color:var(--muted); line-height:1.35; margin-top:2px; }
.review-done { align-self:stretch; padding:0 12px; background:var(--surface); border-left:1px solid var(--border); color:var(--muted); font-size:12px; font-weight:800; }
.review-done:active { transform:none; }
