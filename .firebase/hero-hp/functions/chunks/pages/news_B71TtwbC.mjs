/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, g as renderHead, F as Fragment, e as addAttribute } from '../astro_BjFoP488.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ViewTransitions, a as $$Header, b as $$Footer } from './index_BjSBO8QK.mjs';

const $$Astro$1 = createAstro();
const $$MainNEWS = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainNEWS;
  return renderTemplate`<head>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <main> <div class="untappable-card" style="position:absolute; left:0px; right:0px; top:150px;"> ${renderComponent($$result, "Fragment", Fragment, {})}</div> </main>`;
}, "/home/user/hero-hp/src/components/Main_NEWS.astro", void 0);

const $$Astro = createAstro();
const $$News = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$News;
  return renderTemplate`<html lang="ja"> <head><link rel="icon" href="/Hero/favicon.ico"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>news</title>${renderHead()}</head> <body style=" background-color:#ffff;text-align:center;overflow:scroll;"> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Main_NEWS", $$MainNEWS, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}</body></html>`;
}, "/home/user/hero-hp/src/pages/news.astro", void 0);

const $$file = "/home/user/hero-hp/src/pages/news.astro";
const $$url = "/news";

export { $$News as default, $$file as file, $$url as url };
