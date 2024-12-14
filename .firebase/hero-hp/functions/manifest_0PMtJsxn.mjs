import '@astrojs/internal-helpers/path';
import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_BjFoP488.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.B1o0HELI.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bub2xwCO.js"},{"type":"external","value":"/_astro/page.B1o0HELI.js"}],"styles":[{"type":"external","src":"/_astro/index.DrBAveLi.css"}],"routeData":{"route":"/news","isIndex":false,"type":"page","pattern":"^\\/news\\/?$","segments":[[{"content":"news","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/news.astro","pathname":"/news","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bub2xwCO.js"},{"type":"external","value":"/_astro/page.B1o0HELI.js"}],"styles":[{"type":"external","src":"/_astro/index.DrBAveLi.css"},{"type":"inline","content":"div[data-astro-cid-oyvgfna3]{font-family:Arial,sans-serif;line-height:1.6;color:#333;margin:20px}div[data-astro-cid-oyvgfna3] h1[data-astro-cid-oyvgfna3]{font-size:2em;margin-bottom:10px;color:#0073e6}div[data-astro-cid-oyvgfna3] h2[data-astro-cid-oyvgfna3]{font-size:1.5em;margin-top:20px;margin-bottom:10px;color:#005bb5;text-align:left}div[data-astro-cid-oyvgfna3] p[data-astro-cid-oyvgfna3]{margin-bottom:10px;text-align:left}div[data-astro-cid-oyvgfna3] ul[data-astro-cid-oyvgfna3]{list-style-type:disc;margin-left:20px}div[data-astro-cid-oyvgfna3] ul[data-astro-cid-oyvgfna3] li[data-astro-cid-oyvgfna3]{margin-bottom:5px;text-align:left}\n"}],"routeData":{"route":"/privacypolicy_riddle","isIndex":false,"type":"page","pattern":"^\\/privacypolicy_riddle\\/?$","segments":[[{"content":"privacypolicy_riddle","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacypolicy_riddle.astro","pathname":"/privacypolicy_riddle","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bub2xwCO.js"},{"type":"external","value":"/_astro/page.B1o0HELI.js"}],"styles":[{"type":"external","src":"/_astro/index.DrBAveLi.css"},{"type":"inline","content":".article[data-astro-cid-2jsvu2ph]{font-family:Arial,sans-serif;background-color:snow;padding:10px;margin:10px}.article[data-astro-cid-2jsvu2ph] h1[data-astro-cid-2jsvu2ph],.article[data-astro-cid-2jsvu2ph] h2[data-astro-cid-2jsvu2ph],.article[data-astro-cid-2jsvu2ph] h3[data-astro-cid-2jsvu2ph]{text-align:left;margin:20px}.article[data-astro-cid-2jsvu2ph] ul[data-astro-cid-2jsvu2ph]{text-align:left;list-style:inside;margin:20px}.article[data-astro-cid-2jsvu2ph] ul[data-astro-cid-2jsvu2ph] li[data-astro-cid-2jsvu2ph]{text-align:left;margin:10px}\n"}],"routeData":{"route":"/riddle","isIndex":false,"type":"page","pattern":"^\\/riddle\\/?$","segments":[[{"content":"riddle","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/riddle.astro","pathname":"/riddle","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bub2xwCO.js"},{"type":"external","value":"/_astro/page.B1o0HELI.js"}],"styles":[{"type":"external","src":"/_astro/index.DrBAveLi.css"},{"type":"inline","content":"div[data-astro-cid-nacqcdnn]{font-family:Arial,sans-serif;line-height:1.6;color:#333;margin:20px}div[data-astro-cid-nacqcdnn] h1[data-astro-cid-nacqcdnn]{font-size:2em;margin-bottom:10px;color:#0073e6}div[data-astro-cid-nacqcdnn] h2[data-astro-cid-nacqcdnn]{font-size:1.5em;margin-top:20px;margin-bottom:10px;color:#005bb5;text-align:left}div[data-astro-cid-nacqcdnn] p[data-astro-cid-nacqcdnn]{margin-bottom:10px;text-align:left}div[data-astro-cid-nacqcdnn] ul[data-astro-cid-nacqcdnn]{list-style-type:disc;margin-left:20px}div[data-astro-cid-nacqcdnn] ul[data-astro-cid-nacqcdnn] li[data-astro-cid-nacqcdnn]{margin-bottom:5px;text-align:left}\n"}],"routeData":{"route":"/specialcommercialtransactionlaw_riddle","isIndex":false,"type":"page","pattern":"^\\/specialcommercialtransactionlaw_riddle\\/?$","segments":[[{"content":"specialcommercialtransactionlaw_riddle","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/specialcommercialtransactionlaw_riddle.astro","pathname":"/specialcommercialtransactionlaw_riddle","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bub2xwCO.js"},{"type":"external","value":"/_astro/page.B1o0HELI.js"}],"styles":[{"type":"external","src":"/_astro/index.DrBAveLi.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/user/hero-hp/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/user/hero-hp/src/components/Main_HOME.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/user/hero-hp/src/pages/news.astro",{"propagation":"none","containsHead":true}],["/home/user/hero-hp/src/pages/privacypolicy_riddle.astro",{"propagation":"none","containsHead":true}],["/home/user/hero-hp/src/pages/riddle.astro",{"propagation":"none","containsHead":true}],["/home/user/hero-hp/src/pages/specialcommercialtransactionlaw_riddle.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/news.astro":"chunks/pages/news_B71TtwbC.mjs","/node_modules/astro/dist/assets/endpoint/node.js":"chunks/pages/node_BVOiXOeZ.mjs","/src/pages/privacypolicy_riddle.astro":"chunks/pages/privacypolicy_riddle_D847xqx0.mjs","/src/pages/riddle.astro":"chunks/pages/riddle_C7kfxHET.mjs","/src/pages/specialcommercialtransactionlaw_riddle.astro":"chunks/pages/specialcommercialtransactionlaw_riddle_DvS04_Su.mjs","\u0000@astrojs-manifest":"manifest_0PMtJsxn.mjs","/home/user/hero-hp/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"chunks/node_Cm5yykfD.mjs","\u0000@astro-page:src/pages/news@_@astro":"chunks/news_BPDkEn8u.mjs","\u0000@astro-page:src/pages/privacypolicy_riddle@_@astro":"chunks/privacypolicy_riddle_DFV7Swfq.mjs","\u0000@astro-page:src/pages/riddle@_@astro":"chunks/riddle_D67Z-IOX.mjs","\u0000@astro-page:src/pages/specialcommercialtransactionlaw_riddle@_@astro":"chunks/specialcommercialtransactionlaw_riddle_ivrqHIvr.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BMUt95Sh.mjs","astro:scripts/page.js":"_astro/page.B1o0HELI.js","/astro/hoisted.js?q=0":"_astro/hoisted.Bub2xwCO.js","@astrojs/react/client.js":"_astro/client.sKOeP2hf.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DrBAveLi.css","/He-ro_icon.png","/RiddleIcon_splash.png","/RiddleLogo.png","/RiddleLogo_casual.png","/android-chrome-128x128.png","/android-chrome-144x144.png","/android-chrome-152x152.png","/android-chrome-192x192.png","/android-chrome-256x256.png","/android-chrome-36x36.png","/android-chrome-384x384.png","/android-chrome-48x48.png","/android-chrome-512x512.png","/android-chrome-72x72.png","/android-chrome-96x96.png","/app-ads.txt","/apple-touch-icon-114x114-precomposed.png","/apple-touch-icon-114x114.png","/apple-touch-icon-120x120-precomposed.png","/apple-touch-icon-120x120.png","/apple-touch-icon-144x144-precomposed.png","/apple-touch-icon-144x144.png","/apple-touch-icon-152x152-precomposed.png","/apple-touch-icon-152x152.png","/apple-touch-icon-180x180-precomposed.png","/apple-touch-icon-180x180.png","/apple-touch-icon-57x57-precomposed.png","/apple-touch-icon-57x57.png","/apple-touch-icon-60x60-precomposed.png","/apple-touch-icon-60x60.png","/apple-touch-icon-72x72-precomposed.png","/apple-touch-icon-72x72.png","/apple-touch-icon-76x76-precomposed.png","/apple-touch-icon-76x76.png","/apple-touch-icon-precomposed.png","/apple-touch-icon.png","/download-solid.svg","/favicon.svg","/icon-128x128.png","/icon-144x144.png","/icon-152x152.png","/icon-160x160.png","/icon-16x16.png","/icon-192x192.png","/icon-196x196.png","/icon-24x24.png","/icon-256x256.png","/icon-32x32.png","/icon-36x36.png","/icon-384x384.png","/icon-48x48.png","/icon-512x512.png","/icon-72x72.png","/icon-96x96.png","/manifest.json","/site-tile-150x150.png","/site-tile-310x150.png","/site-tile-310x310.png","/site-tile-70x70.png","/Hero/favicon.ico","/Riddle/favicon.ico","/_astro/_commonjsHelpers.Cpj98o6Y.js","/_astro/client.sKOeP2hf.js","/_astro/hoisted.Bub2xwCO.js","/_astro/lottie.aXDALlIb.js","/_astro/lottie_light.B_UoZgEC.js","/_astro/page.B1o0HELI.js","/_astro/page.B1o0HELI.js"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
