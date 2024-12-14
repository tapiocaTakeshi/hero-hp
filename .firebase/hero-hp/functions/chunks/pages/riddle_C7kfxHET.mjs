/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, g as renderHead, e as addAttribute } from '../astro_BjFoP488.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ViewTransitions, a as $$Header, b as $$Footer } from './index_BjSBO8QK.mjs';
/* empty css                           */

const $$Astro$1 = createAstro();
const $$MainRIDDLE = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainRIDDLE;
  return renderTemplate`<head>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-2jsvu2ph": true })}${renderHead()}</head> <main class="scroll" data-astro-cid-2jsvu2ph> <div style="position:absolute; left:0px; right:0px; top:120px;" data-astro-cid-2jsvu2ph> <div style="height:500px;" data-astro-cid-2jsvu2ph> <img src="RiddleLogo_casual.png" style="
      margin:auto;width:1000px;" data-astro-cid-2jsvu2ph> <div class="article" data-astro-cid-2jsvu2ph> <h1 data-astro-cid-2jsvu2ph>どんなアプリ？</h1> <h3 data-astro-cid-2jsvu2ph>
Riddleは、自分の作成したクイズを投稿し、世界中の人々に解いてもらうためのアプリです。<br data-astro-cid-2jsvu2ph>クイズの知識を広め、他のユーザーとの交流を楽しみましょう！<br data-astro-cid-2jsvu2ph>豊富なジャンルのクイズで、あなたの知識を試してみてください。
</h3> <h2 data-astro-cid-2jsvu2ph>
主要機能</h2> <ul style="list-style:none;" data-astro-cid-2jsvu2ph> <li data-astro-cid-2jsvu2ph>
クイズ投稿:
                        自分のオリジナルクイズを作成し、他のユーザーに挑戦してもらいましょう。
</li> <li data-astro-cid-2jsvu2ph>
いいね機能:
                        お気に入りのクイズや投稿に「いいね！」をつけて、クリエーターを応援しましょう。
</li> <li data-astro-cid-2jsvu2ph>
コメント機能:
                        クイズや投稿にコメントを残し、他のユーザーと意見や解答を交換しましょう。
</li> <li data-astro-cid-2jsvu2ph>
共有機能:
                        お気に入りのクイズを友人や家族と簡単に共有できます。
</li> <li data-astro-cid-2jsvu2ph>
このアプリが適している人:
<ul data-astro-cid-2jsvu2ph> <li data-astro-cid-2jsvu2ph>クイズを作成し、他の人に挑戦してもらいたい人</li> <li data-astro-cid-2jsvu2ph>
様々なジャンルのクイズで自分の知識を試したい人
</li> <li data-astro-cid-2jsvu2ph>知識を共有し、他のユーザーと交流したい人</li> </ul> </li> </ul> <h2 data-astro-cid-2jsvu2ph>利点</h2> <ul data-astro-cid-2jsvu2ph> <li data-astro-cid-2jsvu2ph>
シンプルで直感的なインターフェースで、クイズの作成や共有が簡単にできます。
</li> <li data-astro-cid-2jsvu2ph>
いいねやコメントを通じて、他のユーザーとのコミュニケーションが楽しめます。
</li> <li data-astro-cid-2jsvu2ph>
豊富なジャンルのクイズで、幅広い知識を身につけることができます。
</li> </ul> <h1 data-astro-cid-2jsvu2ph>
Riddleで、知識を広め、新しい発見をし、世界中のクイズ愛好者との友情を築きましょう！
</h1><h2 data-astro-cid-2jsvu2ph>
さあ、ダウンロードして、クイズの世界に飛び込みましょう！
</h2></div> <a href="https://riddle.app.link/3gWco6ifMMb" style="margin:20px;" data-astro-cid-2jsvu2ph> <p data-astro-cid-2jsvu2ph>インストール</p><img src="download-solid.svg" style="margin:auto;width:50px;" data-astro-cid-2jsvu2ph></a> <div style="display:flex;
   flex-flow: column;" data-astro-cid-2jsvu2ph> <a href="/privacypolicy_riddle" style="color:#5433FF;margin:10px;" data-astro-cid-2jsvu2ph>privacy policy</a> <a href="/specialcommercialtransactionlaw_riddle" style="color:#5433FF;margin:10px;" data-astro-cid-2jsvu2ph>special commercial transaction law</a> </div> </div> </div> </main>`;
}, "/home/user/hero-hp/src/components/Main_RIDDLE.astro", void 0);

const $$Astro = createAstro();
const $$Riddle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Riddle;
  return renderTemplate`<html lang="ja"> <head><link rel="icon" href="/Riddle/favicon.ico"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>riddle</title>${renderHead()}</head> <body style=" background-color:#ffff;text-align:center;overflow:scroll;"> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Main_RIDDLE", $$MainRIDDLE, {})} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/user/hero-hp/src/pages/riddle.astro", void 0);

const $$file = "/home/user/hero-hp/src/pages/riddle.astro";
const $$url = "/riddle";

export { $$Riddle as default, $$file as file, $$url as url };
