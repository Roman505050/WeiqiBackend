(()=>{"use strict";var e,a,t,r,o,d={},n={};function c(e){var a=n[e];if(void 0!==a)return a.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=d,c.c=n,e=[],c.O=(a,t,r,o)=>{if(!t){var d=1/0;for(b=0;b<e.length;b++){t=e[b][0],r=e[b][1],o=e[b][2];for(var n=!0,f=0;f<t.length;f++)(!1&o||d>=o)&&Object.keys(c.O).every((e=>c.O[e](t[f])))?t.splice(f--,1):(n=!1,o<d&&(d=o));if(n){e.splice(b--,1);var i=r();void 0!==i&&(a=i)}}return a}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[t,r,o]},c.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return c.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var d={};a=a||[null,t({}),t([]),t(t)];for(var n=2&r&&e;"object"==typeof n&&!~a.indexOf(n);n=t(n))Object.getOwnPropertyNames(n).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,c.d(o,d),o},c.d=(e,a)=>{for(var t in a)c.o(a,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((a,t)=>(c.f[t](e,a),a)),[])),c.u=e=>"assets/js/"+({48:"a94703ab",61:"1f391b9e",69:"6a71a873",98:"a7bd4aaa",112:"d2bbd7df",130:"6ba57622",134:"393be207",162:"8dd35a35",234:"8dad23cb",235:"a7456010",350:"f0ad3fbb",396:"9972cad6",401:"17896441",511:"fa382211",546:"462a47a0",583:"1df93b7f",621:"09ad5fc4",647:"5e95c892",692:"1eb0b997",742:"aba21aa0",855:"9054fcef",866:"29347da9",969:"14eb3368"}[e]||e)+"."+{48:"be5e0574",61:"263c413a",69:"74ed348c",98:"656def23",112:"31ecbf37",130:"e6259a63",134:"6d532c1e",162:"a65ea323",234:"493d8786",235:"47cad1bc",237:"7663bed8",350:"7474b082",396:"3d6af107",401:"2ea1d3b4",408:"0cae011d",511:"eca24438",546:"f12c1380",583:"ae379c24",621:"2660cf13",647:"1dd55255",692:"bc648ef3",742:"eb7bf6f2",855:"e2cb37d0",866:"d493f159",911:"e3b3fe87",969:"3c24742d"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},o="docs:",c.l=(e,a,t,d)=>{if(r[e])r[e].push(a);else{var n,f;if(void 0!==t)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var l=i[b];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+t){n=l;break}}n||(f=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,c.nc&&n.setAttribute("nonce",c.nc),n.setAttribute("data-webpack",o+t),n.src=e),r[e]=[a];var u=(a,t)=>{n.onerror=n.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),a)return a(t)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=u.bind(null,n.onerror),n.onload=u.bind(null,n.onload),f&&document.head.appendChild(n)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),c.p="/weiqi-backend/",c.gca=function(e){return e={17896441:"401",a94703ab:"48","1f391b9e":"61","6a71a873":"69",a7bd4aaa:"98",d2bbd7df:"112","6ba57622":"130","393be207":"134","8dd35a35":"162","8dad23cb":"234",a7456010:"235",f0ad3fbb:"350","9972cad6":"396",fa382211:"511","462a47a0":"546","1df93b7f":"583","09ad5fc4":"621","5e95c892":"647","1eb0b997":"692",aba21aa0:"742","9054fcef":"855","29347da9":"866","14eb3368":"969"}[e]||e,c.p+c.u(e)},(()=>{var e={354:0,869:0};c.f.j=(a,t)=>{var r=c.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(354|869)$/.test(a))e[a]=0;else{var o=new Promise(((t,o)=>r=e[a]=[t,o]));t.push(r[2]=o);var d=c.p+c.u(a),n=new Error;c.l(d,(t=>{if(c.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;n.message="Loading chunk "+a+" failed.\n("+o+": "+d+")",n.name="ChunkLoadError",n.type=o,n.request=d,r[1](n)}}),"chunk-"+a,a)}},c.O.j=a=>0===e[a];var a=(a,t)=>{var r,o,d=t[0],n=t[1],f=t[2],i=0;if(d.some((a=>0!==e[a]))){for(r in n)c.o(n,r)&&(c.m[r]=n[r]);if(f)var b=f(c)}for(a&&a(t);i<d.length;i++)o=d[i],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(b)},t=self.webpackChunkdocs=self.webpackChunkdocs||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})(),c.nc=void 0})();