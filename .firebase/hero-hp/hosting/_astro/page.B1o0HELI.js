function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/lottie.aXDALlIb.js","_astro/_commonjsHelpers.Cpj98o6Y.js","_astro/lottie_light.B_UoZgEC.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
const v="modulepreload",b=function(f){return"/"+f},p={},w=function(c,d,u){let m=Promise.resolve();if(d&&d.length>0){const o=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),t=r?.nonce||r?.getAttribute("nonce");m=Promise.all(d.map(e=>{if(e=b(e),e in p)return;p[e]=!0;const n=e.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(!!u)for(let l=o.length-1;l>=0;l--){const h=o[l];if(h.href===e&&(!n||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${a}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":v,n||(i.as="script",i.crossOrigin=""),i.href=e,t&&i.setAttribute("nonce",t),document.head.appendChild(i),n)return new Promise((l,h)=>{i.addEventListener("load",l),i.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${e}`)))})}))}return m.then(()=>c()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})};setTimeout(async()=>{const f={player:"light",loop:!0,autoplay:"visible",visibleThreshold:0},c=[...document.querySelectorAll("[data-lottie]")].map(t=>{try{return[t,{...f,...JSON.parse(t.getAttribute("data-lottie-data")||"")}]}catch{console.warn("Cannot parse lottie animation data",t)}}).filter(t=>!!t);if(c.length===0)return;const d=c.some(([,t])=>t.player==="full"),u=await w(d?()=>import("./lottie.aXDALlIb.js").then(t=>t.l):()=>import("./lottie_light.B_UoZgEC.js").then(t=>t.l),__vite__mapDeps([2,1])).then(t=>t.default).catch(t=>{console.warn("Cannot load lottie-web script",t)});if(!u)return;const m=new Map((await Promise.all([...new Set(c.map(([t,e])=>e.src))].map(async t=>{const e=await fetch(t).catch(()=>{});if(!e||e.status>=400){console.warn("Cannot load animation(%s)",t);return}const n=await e.json().catch(()=>{});if(!n){console.warn("Cannot load animation(%s)",t);return}return[t,n]}))).filter(t=>!!t)),o=c.map(([t,e])=>{const n=e.id||`A${Math.random().toFixed(6).substring(2)}`,a=m.get(e.src);let s;if(a){const{loop:i,autoplay:l}=e;s=u.loadAnimation({container:t,loop:i,autoplay:l==="visible"?!1:l,animationData:a,rendererSettings:{viewBoxOnly:!0}})}return Object.freeze({id:n,config:e,container:t,isLoaded:!!s,player:s})}),r=o.filter(t=>t.isLoaded&&t.config.autoplay==="visible");if(r.length>0){const t=r.reduce((n,a)=>Math.max(0,Math.min(a.config.visibleThreshold||0,n)),1),e=new IntersectionObserver(n=>{n.forEach(a=>{const s=o.find(i=>i.container===a.target);s&&s.isLoaded&&(a.isIntersecting&&a.intersectionRatio>=t?s.player.play():s.player.pause())})},{threshold:t});r.forEach(n=>{e.observe(n.container)})}window.lottie=u,window.astroLottie={getAllAnimations(){return o.slice()},getAnimation(t){if(typeof t=="string")return o.find(e=>e.id===t);if(typeof t=="object"){if("container"in t)return o.find(e=>e.container===t.container);if("elementId"in t)return o.find(e=>e.container.id===t.elementId)}throw new Error("Invalid LottieAnimation source: "+t)}},document.dispatchEvent(new CustomEvent("astro-lottie-loaded",{detail:window.astroLottie}))},0);