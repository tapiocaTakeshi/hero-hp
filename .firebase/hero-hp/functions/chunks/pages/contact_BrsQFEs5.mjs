/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderHead, h as renderComponent } from '../astro_Bq-bemsL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                            */

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  Astro2.url;
  return renderTemplate`${maybeRenderHead()}<header id="main-header" class="header" data-astro-cid-3ef6ksr2> <div class="header-content" data-astro-cid-3ef6ksr2> <div class="logo" data-astro-cid-3ef6ksr2> <a href="/" aria-label="Hero HP ホームページ" data-astro-cid-3ef6ksr2> <img class="icon" src="/He-ro_icon_white.png" alt="Hero Logo" data-astro-cid-3ef6ksr2> </a> </div> <nav class="main-nav" id="main-nav" data-astro-cid-3ef6ksr2> <ul class="nav-list" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a href="/" class="nav-link <%= pathname === '/' ? 'active' : '' %>" data-page="home" data-astro-cid-3ef6ksr2>Home</a></li> <li data-astro-cid-3ef6ksr2><a href="/riddle" class="nav-link <%= pathname === '/riddle' ? 'active' : '' %>" data-page="riddle" data-astro-cid-3ef6ksr2>Riddle</a></li> <li data-astro-cid-3ef6ksr2><a href="/prompty" class="nav-link <%= pathname === '/prompty' ? 'active' : '' %>" data-page="prompty" data-astro-cid-3ef6ksr2>Prompty</a></li> <li data-astro-cid-3ef6ksr2><a href="/playhub" class="nav-link <%= pathname === '/playhub' ? 'active' : '' %>" data-page="playhub" data-astro-cid-3ef6ksr2>PlayHub</a></li> <li data-astro-cid-3ef6ksr2><a href="/summaries_app_description" class="nav-link <%= pathname === '/summaries_app_description' ? 'active' : '' %>" data-page="summaries" data-astro-cid-3ef6ksr2>Summaries</a></li> <li data-astro-cid-3ef6ksr2><a href="/contact" class="nav-link <%= pathname === '/contact' ? 'active' : '' %>" data-page="contact" data-astro-cid-3ef6ksr2>Contact</a></li> </ul> </nav> </div> </header>  `;
}, "/home/user/hero-hp/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = "He-ro",
    lang = "ja",
    variant = "light",
    bodyClass = "",
    headerClass = "",
    mainClass = "",
    bodyStyle = ""
  } = Astro2.props;
  const bodyClasses = ["layout-body", variant === "dark" ? "layout-body--dark" : "layout-body--light", bodyClass].filter(Boolean).join(" ");
  const headerClasses = ["layout-header", headerClass].filter(Boolean).join(" ");
  const mainClasses = ["layout-main", mainClass].filter(Boolean).join(" ");
  return renderTemplate`<html${addAttribute(lang, "lang")} data-astro-cid-ouamjn2i> <head><meta charset="utf-8"><link rel="icon" type="image/x-icon" href="/Hero/favicon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body${addAttribute(bodyClasses, "class")}${addAttribute(bodyStyle, "style")} data-astro-cid-ouamjn2i> <div class="layout-shell" data-astro-cid-ouamjn2i> <header${addAttribute(headerClasses, "class")} data-astro-cid-ouamjn2i> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-ouamjn2i": true })} </header> <div style="padding:1000 0;" data-astro-cid-ouamjn2i></div> <main${addAttribute(mainClasses, "class")} data-astro-cid-ouamjn2i> ${renderSlot($$result, $$slots["default"])} </main> </div> </body></html>`;
}, "/home/user/hero-hp/src/layouts/MainLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$MainCONTACT = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainCONTACT;
  return renderTemplate`${maybeRenderHead()}<main class="page-main" data-astro-cid-c6a52sb4> <section class="hero-section" data-astro-cid-c6a52sb4> <div class="hero-content" data-astro-cid-c6a52sb4> <h1 class="page-title" data-astro-cid-c6a52sb4>Contact Us</h1> <p class="page-description" data-astro-cid-c6a52sb4>ご質問やフィードバックがございましたら、お気軽にお問い合わせください。</p> </div> </section> <section class="contact-form-section" data-astro-cid-c6a52sb4> <form class="contact-form" data-astro-cid-c6a52sb4> <div class="form-group" data-astro-cid-c6a52sb4> <label for="name" class="form-label" data-astro-cid-c6a52sb4>お名前</label> <input type="text" id="name" name="name" class="form-input" required data-astro-cid-c6a52sb4> </div> <div class="form-group" data-astro-cid-c6a52sb4> <label for="email" class="form-label" data-astro-cid-c6a52sb4>メールアドレス</label> <input type="email" id="email" name="email" class="form-input" required data-astro-cid-c6a52sb4> </div> <div class="form-group" data-astro-cid-c6a52sb4> <label for="message" class="form-label" data-astro-cid-c6a52sb4>お問い合わせ内容</label> <textarea id="message" name="message" class="form-textarea" rows="6" required data-astro-cid-c6a52sb4></textarea> </div> <button type="submit" class="cta-button primary" data-astro-cid-c6a52sb4>送信</button> </form> </section> </main> `;
}, "/home/user/hero-hp/src/components/Main_CONTACT.astro", void 0);

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "He-ro", "lang": "en" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main_CONTACT", $$MainCONTACT, {})} ` })}`;
}, "/home/user/hero-hp/src/pages/contact.astro", void 0);

const $$file = "/home/user/hero-hp/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MainLayout as $, contact as c };
