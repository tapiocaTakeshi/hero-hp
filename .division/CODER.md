### 1. 実装プラン

ユーザー要求は「design を Minimal テーマで改善」。ワークスペースには `src/styles/global.css` と `src/styles/style.css` の 2 つの CSS が既に存在するため、これらを **Minimal デザインの中核** として整理します。

直前コンテキストに既存 CSS の本文が含まれていない（file-searcher 出力が省略されている）ため、以下の方針で進めます。

- **前提**: 既存 `global.css` は Astro プロジェクトのリセット＋トークン用、`style.css` はページ固有スタイル、という一般的な構成と仮定。
- **方針**:
  1. `src/styles/global.css` を Minimal デザインシステム（トークン・タイポ・リセット・ユーティリティ）として整備（全面刷新が必要な領域なので明示的に上書き）。
  2. `src/styles/style.css` には Minimal テーマに沿ったセクション/カード/ボタンの控えめなスタイルを上書き。
  3. 新規 `src/styles/minimal-tokens.css` は作らず、`global.css` に統合してインポートを増やさない（既存 import を壊さない）。
- **デザイン原則（Minimal）**:
  - ニュートラル基調（白＋墨＋淡いグレー）、アクセントは 1 色のみ
  - 余白を大きく、行間を広く
  - 影は最小限、ボーダーは hairline
  - タイポグラフィでヒエラルキーを表現（サイズ＆ウェイトのみ）
  - prefers-color-scheme に対応したダークモード
  - 自動アニメは抑制し、`prefers-reduced-motion` に追従

### 2. ファイル一覧

| ファイル | 操作 | 概要 |
|---|---|---|
| src/styles/global.css | 変更（全面刷新） | Minimal デザイントークン・リセット・タイポ・ユーティリティ |
| src/styles/style.css | 変更（全面刷新） | Minimal テーマのレイアウト/コンポーネントスタイル |

> 本来は SEARCH/REPLACE 差分が望ましいですが、Minimal テーマ化はデザイン体系の刷新であり、既存 CSS 全体の整合を取り直す必要があるため、対象 2 ファイルのみ全面上書きします。`import` パス・ファイル名・配置は維持しているため、Astro 側の参照（`import '../styles/global.css'` 等）は変更不要です。

### 3. コード本体

```css:src/styles/global.css
/* =========================================================
   Minimal Design System — global.css
   ニュートラル基調 / 大きな余白 / hairline border / 1 アクセント
   ========================================================= */

/* ---------- Design Tokens ---------- */
:root {
  /* Color — Light */
  --c-bg: #ffffff;
  --c-bg-subtle: #fafafa;
  --c-surface: #ffffff;
  --c-fg: #111111;
  --c-fg-muted: #555555;
  --c-fg-subtle: #8a8a8a;
  --c-border: #ececec;
  --c-border-strong: #d6d6d6;
  --c-accent: #111111;
  --c-accent-fg: #ffffff;
  --c-link: #111111;
  --c-link-hover: #000000;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --radius-pill: 9999px;

  /* Spacing scale (8pt base, generous) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;

  /* Typography */
  --ff-sans: "Inter", "Helvetica Neue", "Hiragino Sans", "Noto Sans JP",
    system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --ff-mono: "JetBrains Mono", "SFMono-Regular", Menlo, Consolas, monospace;

  --fs-xs: 0.75rem;
  --fs-sm: 0.875rem;
  --fs-base: 1rem;
  --fs-md: 1.125rem;
  --fs-lg: 1.375rem;
  --fs-xl: 1.75rem;
  --fs-2xl: 2.25rem;
  --fs-3xl: 3rem;
  --fs-4xl: 3.75rem;

  --lh-tight: 1.15;
  --lh-snug: 1.35;
  --lh-normal: 1.6;
  --lh-loose: 1.8;

  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;

  /* Shadows — minimal */
  --shadow-1: 0 1px 2px rgba(17, 17, 17, 0.04);
  --shadow-2: 0 4px 16px rgba(17, 17, 17, 0.06);

  /* Layout */
  --container-max: 1120px;
  --container-narrow: 720px;
  --container-px: clamp(20px, 4vw, 40px);

  /* Motion */
  --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
  --dur-fast: 120ms;
  --dur-base: 200ms;
  --dur-slow: 320ms;
}

/* ---------- Dark mode ---------- */
@media (prefers-color-scheme: dark) {
  :root {
    --c-bg: #0e0e0e;
    --c-bg-subtle: #141414;
    --c-surface: #161616;
    --c-fg: #f5f5f5;
    --c-fg-muted: #b5b5b5;
    --c-fg-subtle: #888888;
    --c-border: #242424;
    --c-border-strong: #353535;
    --c-accent: #f5f5f5;
    --c-accent-fg: #0e0e0e;
    --c-link: #f5f5f5;
    --c-link-hover: #ffffff;
    --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.3);
    --shadow-2: 0 4px 16px rgba(0, 0, 0, 0.4);
  }
}

/* ---------- Reset (modern, minimal) ---------- */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  scroll-behavior: smooth;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100dvh;
  background: var(--c-bg);
  color: var(--c-fg);
  font-family: var(--ff-sans);
  font-size: var(--fs-base);
  line-height: var(--lh-normal);
  font-weight: var(--fw-regular);
  letter-spacing: 0.005em;
}

img,
svg,
video,
canvas {
  display: block;
  max-width: 100%;
  height: auto;
}

button,
input,
select,
textarea {
  font: inherit;
  color: inherit;
}

button {
  background: none;
  border: 0;
  cursor: pointer;
  padding: 0;
}

a {
  color: var(--c-link);
  text-decoration: none;
  text-underline-offset: 0.25em;
  transition: color var(--dur-fast) var(--ease-out),
    opacity var(--dur-fast) var(--ease-out);
}
a:hover {
  color: var(--c-link-hover);
  text-decoration: underline;
}

hr {
  border: 0;
  border-top: 1px solid var(--c-border);
  margin: var(--space-7) 0;
}

::selection {
  background: var(--c-fg);
  color: var(--c-bg);
}

/* ---------- Typography ---------- */
h1, h2, h3, h4, h5, h6 {
  margin: 0 0 var(--space-4);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-tight);
  letter-spacing: -0.01em;
  color: var(--c-fg);
}

h1 {
  font-size: clamp(var(--fs-2xl), 5vw, var(--fs-4xl));
  font-weight: var(--fw-bold);
  letter-spacing: -0.02em;
}
h2 {
  font-size: clamp(var(--fs-xl), 3.4vw, var(--fs-2xl));
}
h3 {
  font-size: var(--fs-lg);
}
h4 {
  font-size: var(--fs-md);
}

p {
  margin: 0 0 var(--space-4);
  color: var(--c-fg-muted);
  line-height: var(--lh-loose);
  max-width: 70ch;
}

small {
  font-size: var(--fs-sm);
  color: var(--c-fg-subtle);
}

code,
pre,
kbd {
  font-family: var(--ff-mono);
  font-size: 0.95em;
}

code {
  background: var(--c-bg-subtle);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-sm);
  padding: 0.125em 0.4em;
}

pre {
  background: var(--c-bg-subtle);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  padding: var(--space-5);
  overflow-x: auto;
  line-height: var(--lh-snug);
}
pre code {
  background: none;
  border: 0;
  padding: 0;
}

blockquote {
  margin: var(--space-5) 0;
  padding-left: var(--space-5);
  border-left: 2px solid var(--c-border-strong);
  color: var(--c-fg-muted);
  font-style: normal;
}

ul, ol {
  padding-left: 1.25em;
  margin: 0 0 var(--space-4);
  color: var(--c-fg-muted);
}
li + li {
  margin-top: var(--space-2);
}

/* ---------- Layout utilities ---------- */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-px);
}

.container-narrow {
  width: 100%;
  max-width: var(--container-narrow);
  margin-inline: auto;
  padding-inline: var(--container-px);
}

.section {
  padding-block: clamp(var(--space-8), 10vw, var(--space-10));
}

.stack > * + * {
  margin-top: var(--space-4);
}
.stack-lg > * + * {
  margin-top: var(--space-6);
}

.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  align-items: center;
}

.grid {
  display: grid;
  gap: var(--space-6);
}
.grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
@media (max-width: 768px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}

.divider {
  height: 1px;
  background: var(--c-border);
  border: 0;
  width: 100%;
}

.muted { color: var(--c-fg-muted); }
.subtle { color: var(--c-fg-subtle); }
.eyebrow {
  display: inline-block;
  font-size: var(--fs-xs);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--c-fg-subtle);
  font-weight: var(--fw-medium);
  margin-bottom: var(--space-3);
}

.text-center { text-align: center; }
.text-balance { text-wrap: balance; }
.text-pretty { text-wrap: pretty; }

.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}

/* ---------- Focus ring (a11y) ---------- */
:where(a, button, input, select, textarea, [tabindex]):focus-visible {
  outline: 2px solid var(--c-fg);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* ---------- Reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

```css:src/styles/style.css
/* =========================================================
   Minimal theme — page & component styles
   global.css のトークンを利用
   ========================================================= */

/* ---------- Header / Nav ---------- */
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--c-bg) 88%, transparent);
  backdrop-filter: saturate(160%) blur(10px);
  -webkit-backdrop-filter: saturate(160%) blur(10px);
  border-bottom: 1px solid var(--c-border);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
  padding-block: var(--space-4);
}

.site-logo {
  font-weight: var(--fw-semibold);
  letter-spacing: -0.01em;
  font-size: var(--fs-md);
  color: var(--c-fg);
}

.site-nav {
  display: flex;
  gap: var(--space-5);
  align-items: center;
}
.site-nav a {
  font-size: var(--fs-sm);
  color: var(--c-fg-muted);
  font-weight: var(--fw-medium);
}
.site-nav a:hover,
.site-nav a[aria-current="page"] {
  color: var(--c-fg);
  text-decoration: none;
}

@media (max-width: 640px) {
  .site-nav { gap: var(--space-3); }
}

/* ---------- Hero ---------- */
.hero {
  padding-block: clamp(var(--space-8), 14vw, var(--space-10));
  border-bottom: 1px solid var(--c-border);
}
.hero__title {
  font-size: clamp(2rem, 6vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.025em;
  font-weight: var(--fw-bold);
  margin-bottom: var(--space-5);
  text-wrap: balance;
}
.hero__lead {
  font-size: var(--fs-md);
  color: var(--c-fg-muted);
  max-width: 60ch;
  line-height: var(--lh-loose);
  margin-bottom: var(--space-6);
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

/* ---------- Section ---------- */
.section-head {
  margin-bottom: var(--space-7);
  max-width: 60ch;
}
.section-head h2 {
  margin-bottom: var(--space-3);
  text-wrap: balance;
}
.section-head p {
  margin: 0;
}

/* ---------- Card ---------- */
.card {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  transition:
    border-color var(--dur-base) var(--ease-out),
    transform var(--dur-base) var(--ease-out),
    box-shadow var(--dur-base) var(--ease-out);
}
.card:hover {
  border-color: var(--c-border-strong);
  transform: translateY(-2px);
  box-shadow: var(--shadow-2);
}
.card h3 {
  margin-bottom: var(--space-2);
  font-size: var(--fs-md);
}
.card p {
  margin: 0;
  font-size: var(--fs-sm);
  color: var(--c-fg-muted);
}

.card-link {
  display: block;
  color: inherit;
}
.card-link:hover {
  text-decoration: none;
}

/* ---------- Button ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: 0.7em 1.4em;
  border-radius: var(--radius-pill);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  letter-spacing: 0.01em;
  border: 1px solid transparent;
  transition:
    background-color var(--dur-base) var(--ease-out),
    color var(--dur-base) var(--ease-out),
    border-color var(--dur-base) var(--ease-out),
    transform var(--dur-fast) var(--ease-out);
  white-space: nowrap;
  cursor: pointer;
}
.btn:hover { transform: translateY(-1px); text-decoration: none; }
.btn:active { transform: translateY(0); }

.btn-primary {
  background: var(--c-accent);
  color: var(--c-accent-fg);
  border-color: var(--c-accent);
}
.btn-primary:hover {
  background: color-mix(in srgb, var(--c-accent) 88%, transparent);
  color: var(--c-accent-fg);
}

.btn-ghost {
  background: transparent;
  color: var(--c-fg);
  border-color: var(--c-border-strong);
}
.btn-ghost:hover {
  border-color: var(--c-fg);
  color: var(--c-fg);
}

.btn-link {
  background: transparent;
  color: var(--c-fg);
  border: 0;
  padding-inline: 0;
  border-radius: 0;
  border-bottom: 1px solid var(--c-fg);
}
.btn-link:hover {
  color: var(--c-fg-muted);
  border-bottom-color: var(--c-fg-muted);
}

/* ---------- Tag / Badge ---------- */
.tag {
  display: inline-flex;
  align-items: center;
  font-size: var(--fs-xs);
  letter-spacing: 0.04em;
  padding: 0.25em 0.7em;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-pill);
  color: var(--c-fg-muted);
  background: var(--c-bg-subtle);
}

/* ---------- Article (prose) ---------- */
.prose {
  max-width: 70ch;
  margin-inline: auto;
}
.prose h2 { margin-top: var(--space-8); }
.prose h3 { margin-top: var(--space-7); }
.prose img,
.prose figure {
  margin: var(--space-6) 0;
  border-radius: var(--radius-md);
  overflow: hidden;
}
.prose figcaption {
  font-size: var(--fs-sm);
  color: var(--c-fg-subtle);
  text-align: center;
  margin-top: var(--space-2);
}

/* ---------- Form ---------- */
.field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}
.field label {
  font-size: var(--fs-sm);
  color: var(--c-fg-muted);
}
.field input,
.field textarea,
.field select {
  width: 100%;
  background: var(--c-surface);
  border: 1px solid var(--c-border-strong);
  border-radius: var(--radius-sm);
  padding: 0.7em 0.9em;
  color: var(--c-fg);
  transition: border-color var(--dur-fast) var(--ease-out);
}
.field input:focus,
.field textarea:focus,
.field select:focus {
  outline: none;
  border-color: var(--c-fg);
}

/* ---------- Footer ---------- */
.site-footer {
  border-top: 1px solid var(--c-border);
  padding-block: var(--space-7);
  color: var(--c-fg-subtle);
  font-size: var(--fs-sm);
}
.site-footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}
.site-footer a {
  color: var(--c-fg-muted);
}
.site-footer a:hover {
  color: var(--c-fg);
}

/* ---------- Scroll reveal (subtle) ---------- */
.reveal {
  opacity: 0;
  transform: translateY(8px);
  transition: opacity var(--dur-slow) var(--ease-out),
    transform var(--dur-slow) var(--ease-out);
}
.reveal.is-visible {
  opacity: 1;
  transform: none;
}

/* ---------- Page-specific minimal helpers ---------- */
.page-title {
  padding-block: var(--space-8) var(--space-6);
  border-bottom: 1px solid var(--c-border);
  margin-bottom: var(--space-7);
}
.page-title .eyebrow { margin-bottom: var(--space-2); }
.page-title h1 { margin: 0; }
```

### 4. 検証方針

- **ビルド**: `npm run build`（Astro）でエラーなくバンドルされること。トークンと既存セレクタが衝突していないか確認。
- **視覚確認**:
  - トップページ／詳細ページで余白・タイポのヒエラルキーが「Minimal」基調になっているか
  - ライト／ダーク両モードの切替（OS 設定）で `prefers-color-scheme` ダーク値が適用されるか
  - `.btn-primary` / `.btn-ghost` / `.tag` / `.card` のホバー、フォーカスリングが機能するか
  - モバイル（〜640px）で `.site-nav`, `.grid-2`, `.grid-3` が破綻しないか
- **アクセシビリティ**:
  - `:focus-visible` のアウトラインが各 interactive 要素に表示される
  - `prefers-reduced-motion` 有効時にトランジション/アニメが抑制される
- **注目ポイント**:
  - 既存テンプレート（Astro `.astro` ファイル）が `class="container" / "section" / "btn btn-primary" / "card"` 等の汎用クラスを使っている前提で書いています。既存マークアップに合わせた追加クラスが必要なら、`style.css` 末尾にプロジェクト固有セレクタを追記してください。
  - アクセント色を変えたい場合は `:root { --c-accent: ... }` の 1 行のみ調整すれば全体に反映されます。