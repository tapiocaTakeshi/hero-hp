/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderComponent, g as renderHead, h as renderTransition } from '../astro_BjFoP488.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$4 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/user/hero-hp/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate``;
}, "/home/user/hero-hp/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="header"> <div class="logo"> <img class="icon" style="margin:auto;padding:10px" src="He-ro_icon.png"> </div> <nav class="navbar"> <ul> <li> <a href="/">Home</a> </li> <li> <a href="/news">News</a> </li> <li> <a href="/about">About</a> </li> <li> <a href="/contact">Contact</a> </li> </ul> </nav> </header>`;
}, "/home/user/hero-hp/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$MainHOME = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainHOME;
  return renderTemplate`<head>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <main class="scroll"> <section> <div style="height: 3000px;"> <div style="position:sticky;top:150px;"> <div style="height:500px;"> <p style=" position: relative;
               top: 50%;
               transform: translateY(-50%);font-family: cursive;font-size: 30px;margin:10px;">
Believe in Yourself.<br> <br>
Change Yourself.
</p> </div> </div> </div> <div style="height: 3000px;"> <div style="position:sticky;top:150px;"> <div class="apps"> <a href="/riddle" style="margin: 10px;"><img data-astro-transition-persist="true" src="RiddleIcon_splash.png" class="tappable"${addAttribute(renderTransition($$result, "zqt2q4s2", "", "riddle"), "data-astro-transition-scope")}></a> </div> </div> </div> </section> </main>`;
}, "/home/user/hero-hp/src/components/Main_HOME.astro", "self");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="ja"> <head><link rel="icon" href="/Hero/favicon.ico"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>home</title>${renderHead()}</head> <body style="background-color:#ffff;text-align:center;overflow:scroll;"> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Main_HOME", $$MainHOME, {})} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/user/hero-hp/src/pages/index.astro", void 0);

const $$file = "/home/user/hero-hp/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ViewTransitions as $, $$Header as a, $$Footer as b, index as i };
