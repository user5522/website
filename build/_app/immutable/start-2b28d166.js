var xe=Object.defineProperty;var Je=(a,e,t)=>e in a?xe(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var ue=(a,e,t)=>(Je(a,typeof e!="symbol"?e+"":e,t),t);import{S as Ke,i as We,s as He,a as Fe,e as q,c as Ge,b as W,g as ne,t as z,d as re,f as B,h as x,j as Me,o as me,k as Ye,l as Xe,m as Qe,n as pe,p as T,q as Ze,r as et,u as tt,v as F,w as be,x as G,y as M,z as Ue}from"./chunks/index-46a18418.js";import{g as Ie,f as Ce,a as De,s as J,b as _e,i as nt,c as rt}from"./chunks/singletons-b06c1f42.js";import"./chunks/index-8f8378af.js";class ee{constructor(e,t){ue(this,"name","HttpError");ue(this,"stack");this.status=e,this.message=t!=null?t:`Error: ${e}`}toString(){return this.message}}class Te{constructor(e,t){this.status=e,this.location=t}}function at(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function st(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}const it=["href","pathname","search","searchParams","toString","toJSON"];function ot(a,e){const t=new URL(a);for(const o of it){let s=t[o];Object.defineProperty(t,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(o,s,u)=>u(a,s),lt(t),t}function lt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function ct(a){let e=5381,t=a.length;if(typeof a=="string")for(;t;)e=e*33^a.charCodeAt(--t);else for(;t;)e=e*33^a[--t];return(e>>>0).toString(36)}const te=window.fetch;function ft(a,e){let o=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof a=="string"?a:a.url)}]`;e&&typeof e.body=="string"&&(o+=`[sveltekit\\:data-body="${ct(e.body)}"]`);const s=document.querySelector(o);if(s&&s.textContent){const{body:u,...n}=JSON.parse(s.textContent);return Promise.resolve(new Response(u,n))}return te(a,e)}const ut=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function pt(a){const e=[],t=[];let o=!0;if(/\]\[/.test(a))throw new Error(`Invalid route ${a} \u2014 parameters must be separated`);if(Ne("[",a)!==Ne("]",a))throw new Error(`Invalid route ${a} \u2014 brackets are unbalanced`);return{pattern:a===""?/^\/$/:new RegExp(`^${a.split(/(?:\/|$)/).filter(dt).map((u,n,f)=>{const b=decodeURIComponent(u),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(b);if(h)return e.push(h[1]),t.push(h[2]),"(?:/(.*))?";const g=n===f.length-1;return b&&"/"+b.split(/\[(.+?)\]/).map(($,R)=>{if(R%2){const I=ut.exec($);if(!I)throw new Error(`Invalid param: ${$}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,U,Y,X]=I;return e.push(Y),t.push(X),U?"(.*?)":"([^/]+?)"}return g&&$.includes(".")&&(o=!1),$.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function dt(a){return!/^\([^)]+\)$/.test(a)}function ht(a,e,t,o){const s={};for(let u=0;u<e.length;u+=1){const n=e[u],f=t[u],b=a[u+1]||"";if(f){const h=o[f];if(!h)throw new Error(`Missing "${f}" param matcher`);if(!h(b))return}s[n]=b}return s}function Ne(a,e){let t=0;for(let o=0;o<e.length;o+=1)e[o]===a&&(t+=1);return t}function mt(a,e,t){return Object.entries(e).map(([s,[u,n,f]])=>{const{pattern:b,names:h,types:g}=pt(s),$={id:s,exec:R=>{const I=b.exec(R);if(I)return ht(I,h,g,t)},errors:[1,...f||[]].map(R=>a[R]),layouts:[0,...n||[]].map(o),leaf:o(u)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function o(s){const u=s<0;return u&&(s=~s),[u,a[s]]}}function _t(a,e){return new ee(a,e)}function gt(a){let e,t,o;var s=a[0][0];function u(n){return{props:{data:n[1],errors:n[3]}}}return s&&(e=new s(u(a))),{c(){e&&F(e.$$.fragment),t=q()},l(n){e&&be(e.$$.fragment,n),t=q()},m(n,f){e&&G(e,n,f),W(n,t,f),o=!0},p(n,f){const b={};if(f&2&&(b.data=n[1]),f&8&&(b.errors=n[3]),s!==(s=n[0][0])){if(e){ne();const h=e;z(h.$$.fragment,1,0,()=>{M(h,1)}),re()}s?(e=new s(u(n)),F(e.$$.fragment),B(e.$$.fragment,1),G(e,t.parentNode,t)):e=null}else s&&e.$set(b)},i(n){o||(e&&B(e.$$.fragment,n),o=!0)},o(n){e&&z(e.$$.fragment,n),o=!1},d(n){n&&x(t),e&&M(e,n)}}}function wt(a){let e,t,o;var s=a[0][0];function u(n){return{props:{data:n[1],errors:n[3],$$slots:{default:[bt]},$$scope:{ctx:n}}}}return s&&(e=new s(u(a))),{c(){e&&F(e.$$.fragment),t=q()},l(n){e&&be(e.$$.fragment,n),t=q()},m(n,f){e&&G(e,n,f),W(n,t,f),o=!0},p(n,f){const b={};if(f&2&&(b.data=n[1]),f&8&&(b.errors=n[3]),f&525&&(b.$$scope={dirty:f,ctx:n}),s!==(s=n[0][0])){if(e){ne();const h=e;z(h.$$.fragment,1,0,()=>{M(h,1)}),re()}s?(e=new s(u(n)),F(e.$$.fragment),B(e.$$.fragment,1),G(e,t.parentNode,t)):e=null}else s&&e.$set(b)},i(n){o||(e&&B(e.$$.fragment,n),o=!0)},o(n){e&&z(e.$$.fragment,n),o=!1},d(n){n&&x(t),e&&M(e,n)}}}function bt(a){let e,t,o;var s=a[0][1];function u(n){return{props:{data:n[2],errors:n[3]}}}return s&&(e=new s(u(a))),{c(){e&&F(e.$$.fragment),t=q()},l(n){e&&be(e.$$.fragment,n),t=q()},m(n,f){e&&G(e,n,f),W(n,t,f),o=!0},p(n,f){const b={};if(f&4&&(b.data=n[2]),f&8&&(b.errors=n[3]),s!==(s=n[0][1])){if(e){ne();const h=e;z(h.$$.fragment,1,0,()=>{M(h,1)}),re()}s?(e=new s(u(n)),F(e.$$.fragment),B(e.$$.fragment,1),G(e,t.parentNode,t)):e=null}else s&&e.$set(b)},i(n){o||(e&&B(e.$$.fragment,n),o=!0)},o(n){e&&z(e.$$.fragment,n),o=!1},d(n){n&&x(t),e&&M(e,n)}}}function Ve(a){let e,t=a[5]&&qe(a);return{c(){e=Ye("div"),t&&t.c(),this.h()},l(o){e=Xe(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=Qe(e);t&&t.l(s),s.forEach(x),this.h()},h(){pe(e,"id","svelte-announcer"),pe(e,"aria-live","assertive"),pe(e,"aria-atomic","true"),T(e,"position","absolute"),T(e,"left","0"),T(e,"top","0"),T(e,"clip","rect(0 0 0 0)"),T(e,"clip-path","inset(50%)"),T(e,"overflow","hidden"),T(e,"white-space","nowrap"),T(e,"width","1px"),T(e,"height","1px")},m(o,s){W(o,e,s),t&&t.m(e,null)},p(o,s){o[5]?t?t.p(o,s):(t=qe(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&x(e),t&&t.d()}}}function qe(a){let e;return{c(){e=Ze(a[6])},l(t){e=et(t,a[6])},m(t,o){W(t,e,o)},p(t,o){o&64&&tt(e,t[6])},d(t){t&&x(e)}}}function yt(a){let e,t,o,s,u;const n=[wt,gt],f=[];function b(g,$){return g[0][1]?0:1}e=b(a),t=f[e]=n[e](a);let h=a[4]&&Ve(a);return{c(){t.c(),o=Fe(),h&&h.c(),s=q()},l(g){t.l(g),o=Ge(g),h&&h.l(g),s=q()},m(g,$){f[e].m(g,$),W(g,o,$),h&&h.m(g,$),W(g,s,$),u=!0},p(g,[$]){let R=e;e=b(g),e===R?f[e].p(g,$):(ne(),z(f[R],1,1,()=>{f[R]=null}),re(),t=f[e],t?t.p(g,$):(t=f[e]=n[e](g),t.c()),B(t,1),t.m(o.parentNode,o)),g[4]?h?h.p(g,$):(h=Ve(g),h.c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i(g){u||(B(t),u=!0)},o(g){z(t),u=!1},d(g){f[e].d(g),g&&x(o),h&&h.d(g),g&&x(s)}}}function vt(a,e,t){let{stores:o}=e,{page:s}=e,{components:u}=e,{data_0:n=null}=e,{data_1:f=null}=e,{errors:b}=e;Me(o.page.notify);let h=!1,g=!1,$=null;return me(()=>{const R=o.page.subscribe(()=>{h&&(t(5,g=!0),t(6,$=document.title||"untitled page"))});return t(4,h=!0),R}),a.$$set=R=>{"stores"in R&&t(7,o=R.stores),"page"in R&&t(8,s=R.page),"components"in R&&t(0,u=R.components),"data_0"in R&&t(1,n=R.data_0),"data_1"in R&&t(2,f=R.data_1),"errors"in R&&t(3,b=R.errors)},a.$$.update=()=>{a.$$.dirty&384&&o.page.set(s)},[u,n,f,b,h,g,$,o,s]}class kt extends Ke{constructor(e){super(),We(this,e,vt,yt,He,{stores:7,page:8,components:0,data_0:1,data_1:2,errors:3})}}const Et=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),$t=function(a,e){return new URL(a,e).href},ze={},K=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=$t(s,o),s in ze)return;ze[s]=!0;const u=s.endsWith(".css"),n=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Et,u||(f.as="script",f.crossOrigin=""),f.href=s,document.head.appendChild(f),u)return new Promise((b,h)=>{f.addEventListener("load",b),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},St={},ae=[()=>K(()=>import("./chunks/0-73a39d97.js"),["chunks\\0-73a39d97.js","components\\pages\\_layout.svelte-db961814.js","assets\\+layout-bc1a0903.css","chunks\\index-46a18418.js"],import.meta.url),()=>K(()=>import("./chunks/1-814a7ffd.js"),["chunks\\1-814a7ffd.js","components\\pages\\_error.svelte-062f5a66.js","chunks\\index-46a18418.js","chunks\\singletons-b06c1f42.js","chunks\\index-8f8378af.js"],import.meta.url),()=>K(()=>import("./chunks/2-9de4b131.js"),["chunks\\2-9de4b131.js","components\\pages\\_page.svelte-19b20fc8.js","assets\\+page-bd054a2f.css","chunks\\index-46a18418.js","chunks\\footer-174f893a.js","chunks\\index-8f8378af.js","components\\pages\\Accusations\\_page.svelte-4108f145.js"],import.meta.url),()=>K(()=>import("./chunks/3-85ccba3f.js"),["chunks\\3-85ccba3f.js","components\\pages\\About\\_page.svelte-a1b53e3b.js","chunks\\index-46a18418.js"],import.meta.url),()=>K(()=>import("./chunks/4-8542cf49.js"),["chunks\\4-8542cf49.js","components\\pages\\Accusations\\_page.svelte-4108f145.js","chunks\\index-46a18418.js"],import.meta.url),()=>K(()=>import("./chunks/5-183654d1.js"),["chunks\\5-183654d1.js","components\\pages\\Projects\\_page.svelte-43b0434a.js","chunks\\index-46a18418.js","chunks\\footer-174f893a.js"],import.meta.url),()=>K(()=>import("./chunks/6-f55e6fe9.js"),["chunks\\6-f55e6fe9.js","components\\pages\\Vbot\\_page.svelte-c194e155.js","chunks\\index-46a18418.js"],import.meta.url)],Rt={"":[2],About:[3],Accusations:[4],Projects:[5],Vbot:[6]},Be="sveltekit:scroll",V="sveltekit:index",de=mt(ae,Rt,St),ge=ae[0],we=ae[1];ge();we();let Q={};try{Q=JSON.parse(sessionStorage[Be])}catch{}function he(a){Q[a]=_e()}function Lt({target:a,base:e,trailing_slash:t}){var Oe;const o=[],s={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},f=!1,b=!0,h=!1,g=1,$=null,R,I=!0,U=(Oe=history.state)==null?void 0:Oe[V];U||(U=Date.now(),history.replaceState({...history.state,[V]:U},"",location.href));const Y=Q[U];Y&&(history.scrollRestoration="manual",scrollTo(Y.x,Y.y));let X=!1,H,ye;async function ve(r,{noscroll:c=!1,replaceState:p=!1,keepfocus:i=!1,state:l={}},k){if(typeof r=="string"&&(r=new URL(r,Ie(document))),I)return le({url:r,scroll:c?_e():null,keepfocus:i,redirect_chain:k,details:{state:l,replaceState:p},accepted:()=>{},blocked:()=>{}});await N(r)}async function ke(r){const c=Le(r);if(!c)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s.promise=Re(c),s.id=c.id,s.promise}async function Ee(r,c,p,i){var y,S,L;const l=Le(r),k=ye={};let d=l&&await Re(l);if(!d&&r.origin===location.origin&&r.pathname===location.pathname&&(d=await oe({status:404,error:new Error(`Not found: ${r.pathname}`),url:r,routeId:null})),!d)return await N(r),!1;if(r=(l==null?void 0:l.url)||r,ye!==k)return!1;if(o.length=0,d.type==="redirect")if(c.length>10||c.includes(r.pathname))d=await oe({status:500,error:new Error("Redirect loop"),url:r,routeId:null});else return I?ve(new URL(d.location,r).href,{},[...c,r.pathname]):await N(new URL(d.location,location.href)),!1;else((S=(y=d.props)==null?void 0:y.page)==null?void 0:S.status)>=400&&await J.updated.check()&&await N(r);if(h=!0,p&&p.details){const{details:v}=p,j=v.replaceState?0:1;v.state[V]=U+=j,history[v.replaceState?"replaceState":"pushState"](v.state,"",r)}if(f?(n=d.state,d.props.page&&(d.props.page.url=r),R.$set(d.props)):$e(d),p){const{scroll:v,keepfocus:j}=p;if(!j){const w=document.body,P=w.getAttribute("tabindex");w.tabIndex=-1,w.focus({preventScroll:!0}),setTimeout(()=>{var m;(m=getSelection())==null||m.removeAllRanges()}),P!==null?w.setAttribute("tabindex",P):w.removeAttribute("tabindex")}if(await Ue(),b){const w=r.hash&&document.getElementById(r.hash.slice(1));v?scrollTo(v.x,v.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Ue();s.promise=null,s.id=null,b=!0,d.props.page&&(H=d.props.page);const E=d.state.branch[d.state.branch.length-1];I=((L=E==null?void 0:E.node.shared)==null?void 0:L.router)!==!1,i&&i(),h=!1}function $e(r){n=r.state;const c=document.querySelector("style[data-sveltekit]");if(c&&c.remove(),H=r.props.page,R=new kt({target:a,props:{...r.props,stores:J},hydrate:!0}),I){const p={from:null,to:new URL(location.href)};u.after_navigate.forEach(i=>i(p))}f=!0}async function Z({url:r,params:c,branch:p,status:i,error:l,routeId:k,validation_errors:d}){var j;const E=p.filter(Boolean),y={type:"loaded",state:{url:r,params:c,branch:p,error:l,session_id:g},props:{components:E.map(w=>w.node.component),errors:d}};let S={},L=!H;for(let w=0;w<E.length;w+=1){const P=E[w];S={...S,...P.data},(L||!n.branch.some(m=>m===P))&&(y.props[`data_${w}`]=S,L=L||Object.keys((j=P.data)!=null?j:{}).length>0)}if(L||(L=Object.keys(H.data).length!==Object.keys(S).length),!n.url||r.href!==n.url.href||n.error!==l||L){y.props.page={error:l,params:c,routeId:k,status:i,url:r,data:L?S:H.data};const w=(P,m)=>{Object.defineProperty(y.props.page,P,{get:()=>{throw new Error(`$page.${P} has been replaced by $page.url.${m}`)}})};w("origin","origin"),w("path","pathname"),w("query","searchParams")}return y}async function se({loader:r,parent:c,url:p,params:i,routeId:l,server_data_node:k}){var S,L,v,j,w;let d=null;const E={dependencies:new Set,params:new Set,parent:!1,url:!1},y=await r();if((S=y.shared)!=null&&S.load){let P=function(..._){for(const O of _){const{href:C}=new URL(O,p);E.dependencies.add(C)}};const m={};for(const _ in i)Object.defineProperty(m,_,{get(){return E.params.add(_),i[_]},enumerable:!0});const A={routeId:l,params:m,data:(L=k==null?void 0:k.data)!=null?L:null,url:ot(p,()=>{E.url=!0}),async fetch(_,O){let C;typeof _=="string"?C=_:(C=_.url,O={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...O});const D=new URL(C,p).href;return P(D),f?te(D,O):ft(C,O)},setHeaders:()=>{},depends:P,parent(){return E.parent=!0,c()}};Object.defineProperties(A,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),d=(v=await y.shared.load.call(null,A))!=null?v:null}return{node:y,loader:r,server:k,shared:(j=y.shared)!=null&&j.load?{type:"data",data:d,uses:E}:null,data:(w=d!=null?d:k==null?void 0:k.data)!=null?w:null}}function Se(r,c,p){if(!p)return!1;if(p.parent&&c||r.url&&p.url)return!0;for(const i of r.params)if(p.params.has(i))return!0;for(const i of p.dependencies)if(o.some(l=>l(i)))return!0;return!1}function ie(r,c){var p,i;return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set((p=r.uses.dependencies)!=null?p:[]),params:new Set((i=r.uses.params)!=null?i:[]),parent:!!r.uses.parent,url:!!r.uses.url}}:(r==null?void 0:r.type)==="skip"&&c!=null?c:null}async function Re({id:r,url:c,params:p,route:i}){if(s.id===r&&s.promise)return s.promise;const{errors:l,layouts:k,leaf:d}=i,E=n.url&&{url:r!==n.url.pathname+n.url.search,params:Object.keys(p).filter(m=>n.params[m]!==p[m])},y=[...k,d];l.forEach(m=>m==null?void 0:m().catch(()=>{})),y.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let S=null;const L=y.reduce((m,A,_)=>{var D;const O=n.branch[_],C=!!(A!=null&&A[0])&&((O==null?void 0:O.loader)!==A[1]||Se(E,m.some(Boolean),(D=O.server)==null?void 0:D.uses));return m.push(C),m},[]);if(L.some(Boolean)){try{const m=await te(`${c.pathname}${c.pathname.endsWith("/")?"":"/"}__data.json${c.search}`,{headers:{"x-sveltekit-invalidated":L.map(A=>A?"1":"").join(",")}});if(S=await m.json(),!m.ok)throw S}catch{N(c);return}if(S.type==="redirect")return S}const v=S==null?void 0:S.nodes;let j=!1;const w=y.map(async(m,A)=>{var ce,Pe;if(!m)return;const _=n.branch[A],O=(ce=v==null?void 0:v[A])!=null?ce:null;if((!O||O.type==="skip")&&m[1]===(_==null?void 0:_.loader)&&!Se(E,j,(Pe=_.shared)==null?void 0:Pe.uses))return _;if(j=!0,(O==null?void 0:O.type)==="error")throw O.httperror?_t(O.httperror.status,O.httperror.message):O.error;return se({loader:m[1],url:c,params:p,routeId:i.id,parent:async()=>{var Ae;const je={};for(let fe=0;fe<A;fe+=1)Object.assign(je,(Ae=await w[fe])==null?void 0:Ae.data);return je},server_data_node:ie(O,_==null?void 0:_.server)})});for(const m of w)m.catch(()=>{});const P=[];for(let m=0;m<y.length;m+=1)if(y[m])try{P.push(await w[m])}catch(A){const _=A;if(_ instanceof Te)return{type:"redirect",location:_.location};const O=A instanceof ee?A.status:500;for(;m--;)if(l[m]){let C,D=m;for(;!P[D];)D-=1;try{return C={node:await l[m](),loader:l[m],data:{},server:null,shared:null},await Z({url:c,params:p,branch:P.slice(0,D+1).concat(C),status:O,error:_,routeId:i.id})}catch{continue}}N(c);return}else P.push(void 0);return await Z({url:c,params:p,branch:P,status:200,error:null,routeId:i.id})}async function oe({status:r,error:c,url:p,routeId:i}){var S;const l={},k=await ge();let d=null;if(k.server){const L=await te(`${p.pathname}${p.pathname.endsWith("/")?"":"/"}__data.json${p.search}`,{headers:{"x-sveltekit-invalidated":"1"}}),v=await L.json();if(d=(S=v==null?void 0:v[0])!=null?S:null,!L.ok||(v==null?void 0:v.type)!=="data"){N(p);return}}const E=await se({loader:ge,url:p,params:l,routeId:i,parent:()=>Promise.resolve({}),server_data_node:ie(d)}),y={node:await we(),loader:we,shared:null,server:null,data:null};return await Z({url:p,params:l,branch:[E,y],status:r,error:c,routeId:i})}function Le(r){if(r.origin!==location.origin||!r.pathname.startsWith(e))return;const c=decodeURI(r.pathname.slice(e.length)||"/");for(const p of de){const i=p.exec(c);if(i){const l=new URL(r.origin+at(r.pathname,t)+r.search+r.hash);return{id:l.pathname+l.search,route:p,params:st(i),url:l}}}}async function le({url:r,scroll:c,keepfocus:p,redirect_chain:i,details:l,accepted:k,blocked:d}){const E=n.url;let y=!1;const S={from:E,to:r,cancel:()=>y=!0};if(u.before_navigate.forEach(L=>L(S)),y){d();return}he(U),k(),f&&J.navigating.set({from:n.url,to:r}),await Ee(r,i,{scroll:c,keepfocus:p,details:l},()=>{const L={from:E,to:r};u.after_navigate.forEach(v=>v(L)),J.navigating.set(null)})}function N(r){return location.href=r.href,new Promise(()=>{})}return{after_navigate:r=>{me(()=>(u.after_navigate.push(r),()=>{const c=u.after_navigate.indexOf(r);u.after_navigate.splice(c,1)}))},before_navigate:r=>{me(()=>(u.before_navigate.push(r),()=>{const c=u.before_navigate.indexOf(r);u.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(h||!f)&&(b=!1)},goto:(r,c={})=>ve(r,c,[]),invalidate:r=>{var c,p;if(r===void 0){for(const i of n.branch)(c=i==null?void 0:i.server)==null||c.uses.dependencies.add(""),(p=i==null?void 0:i.shared)==null||p.uses.dependencies.add("");o.push(()=>!0)}else if(typeof r=="function")o.push(r);else{const{href:i}=new URL(r,location.href);o.push(l=>l===i)}return $||($=Promise.resolve().then(async()=>{await Ee(new URL(location.href),[]),$=null})),$},prefetch:async r=>{const c=new URL(r,Ie(document));await ke(c)},prefetch_routes:async r=>{const p=(r?de.filter(i=>r.some(l=>i.exec(l))):de).map(i=>Promise.all([...i.layouts,i.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(p)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{let l=!1;const k={from:n.url,to:null,cancel:()=>l=!0};u.before_navigate.forEach(d=>d(k)),l?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){he(U);try{sessionStorage[Be]=JSON.stringify(Q)}catch{}}});const r=i=>{const l=Ce(i);l&&l.href&&l.hasAttribute("sveltekit:prefetch")&&ke(De(l))};let c;const p=i=>{clearTimeout(c),c=setTimeout(()=>{var l;(l=i.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",r),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",r),addEventListener("click",i=>{if(!I||i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const l=Ce(i);if(!l||!l.href)return;const k=l instanceof SVGAElement,d=De(l);if(!k&&!(d.protocol==="https:"||d.protocol==="http:"))return;const E=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||E.includes("external")||l.hasAttribute("sveltekit:reload")||(k?l.target.baseVal:l.target))return;const[y,S]=d.href.split("#");if(S!==void 0&&y===location.href.split("#")[0]){X=!0,he(U),J.page.set({...H,url:d}),J.page.notify();return}le({url:d,scroll:l.hasAttribute("sveltekit:noscroll")?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:d.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault()})}),addEventListener("popstate",i=>{if(i.state&&I){if(i.state[V]===U)return;le({url:new URL(location.href),scroll:Q[i.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=i.state[V]},blocked:()=>{const l=U-i.state[V];history.go(l)}})}}),addEventListener("hashchange",()=>{X&&(X=!1,history.replaceState({...history.state,[V]:++U},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&J.navigating.set(null)})},_hydrate:async({status:r,error:c,node_ids:p,params:i,routeId:l})=>{const k=new URL(location.href);let d;try{const E=(v,j)=>{const w=document.querySelector(`script[sveltekit\\:data-type="${v}"]`);return w!=null&&w.textContent?JSON.parse(w.textContent):j},y=E("server_data",[]),S=E("validation_errors",void 0),L=p.map(async(v,j)=>se({loader:ae[v],url:k,params:i,routeId:l,parent:async()=>{const w={};for(let P=0;P<j;P+=1)Object.assign(w,(await L[P]).data);return w},server_data_node:ie(y[j])}));d=await Z({url:k,params:i,branch:await Promise.all(L),status:r,error:c!=null&&c.__is_http_error?new ee(c.status,c.message):c,validation_errors:S,routeId:l})}catch(E){const y=E;if(y instanceof Te){await N(new URL(E.location,location.href));return}d=await oe({status:y instanceof ee?y.status:500,error:y,url:k,routeId:l})}$e(d)}}}function Ut(a){}async function It({paths:a,target:e,route:t,spa:o,trailing_slash:s,hydrate:u}){const n=Lt({target:e,base:a.base,trailing_slash:s});nt({client:n}),rt(a),u&&await n._hydrate(u),t&&(o&&n.goto(location.href,{replaceState:!0}),n._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Ut as set_public_env,It as start};
