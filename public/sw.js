if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),u={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>u[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/309-0964392de684e4b5.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/3d47b92a-e4fd7f974e68cac5.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/468-b5f9f105ba08cea8.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/53c13509-ff4111d6923e5b2e.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/542-94e89a3aef10107f.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/703-f9c2072c262b078c.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/795d4814-c691840fb4c5c814.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/8e1d74a4-ba30117d967a238d.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/970-f51484988fdf503d.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/app/_not-found-fe2c312534117f92.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/app/article/page-4d45715ab79f17a2.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/app/culture/page-9dfb6c17b8dab3d6.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/app/gallery/page-79b557392039d9e1.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/app/layout-fea979f3467641de.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/app/loading-61c47082256ad6a4.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/app/page-51c6cf4a80794576.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/app/tour/page-9265538bb6e06838.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/fd9d1056-f898535ba37b63c1.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/main-927105ee3e2b144b.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/main-app-5c78e46650a4e2fa.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-00cbf4ffc00e1513.js",revision:"p0lMw_MK9fvSNkuem9pln"},{url:"/_next/static/css/f1aa9fb1314c1ec0.css",revision:"f1aa9fb1314c1ec0"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/p0lMw_MK9fvSNkuem9pln/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/p0lMw_MK9fvSNkuem9pln/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/Culture/hero.svg",revision:"1418fa1eb72757a41efc26e1590a7e55"},{url:"/assets/Culture/list-culture/image-1.png",revision:"c5add9cf0b0c270eba7debaca6b669c2"},{url:"/assets/Culture/list-culture/image-2.png",revision:"932e508595c2deca17cfd69d46a73f3c"},{url:"/assets/Culture/list-culture/image-3.png",revision:"ce698f475fb8b1467d00c853d9016072"},{url:"/assets/Culture/list-culture/image-4.png",revision:"0b3b231321de4afe532d655d7a0c8057"},{url:"/assets/Culture/list-culture/image-5.png",revision:"6ad95aa03c00441c843023bcb7f21ea4"},{url:"/assets/Culture/list-culture/image-6.png",revision:"cf1a24ed2b91e0450b0a073fb5c1f676"},{url:"/assets/Culture/list-culture/image-7.png",revision:"5f9eafc588b68b2f048039dae8581eab"},{url:"/assets/Culture/list-culture/image-8.png",revision:"f8347bd08641d5e3b9d2f8eb26621502"},{url:"/assets/Culture/shape.svg",revision:"071734471bb772b0013a549b68598266"},{url:"/assets/indonesia.png",revision:"a1929e9287c5a9f4efb36ccb04363380"},{url:"/assets/logo.png",revision:"3a91d25d1f877229212701295a553e21"},{url:"/assets/short-logo.png",revision:"e8dc6c73408d2607cfa1eab9633565b3"},{url:"/assets/uk.png",revision:"e667999048e9c8c5c5610d1d33908e52"},{url:"/assets/video/homepage-dark.mp4",revision:"12400e4e1a5b1aeae13c6ae9d60827a4"},{url:"/assets/video/homepage.mp4",revision:"071adb4f354d1d180caad5ff4127337c"},{url:"/icon-192x192.png",revision:"9e931d6d3056672c2b89b1ca5a4a490b"},{url:"/icon-256x256.png",revision:"145d5cf4ca3a9a60156cd4acb331636d"},{url:"/icon-384x384.png",revision:"1733ead4da1e42fad65eb871369239be"},{url:"/icon-512x512.png",revision:"fd200e7cc872107d4364e976dd63b4d9"},{url:"/manifest.json",revision:"0c8c248d6d6cbd05722523e5d36bc94b"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
