import{S as K,i as N,s as Q,a as D,k as n,q as l,F as W,h as c,c as I,l as u,m as k,r as d,n as b,b as P,G as e,u as z,A as J,H as X}from"../../chunks/index-46a18418.js";import{s as Y}from"../../chunks/singletons-b06c1f42.js";import"../../chunks/index-8f8378af.js";const Z=()=>{const t=Y,o={page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated};return Object.defineProperties(o,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},enumerable:!1},session:{get(){return se(),{}},enumerable:!1}}),o},ee={subscribe(t){return Z().page.subscribe(t)}};function se(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function te(t){let o,p,s,i,x=t[0].status+"",E,V,y=t[0].error.message+"",R,$,m,w,L,a,S,T,q,B,H,j,A,M,_,v,U;return document.title=o=t[0].status+": "+t[0].error.message,{c(){p=D(),s=n("div"),i=n("div"),E=l(x),V=l(": "),R=l(y),$=D(),m=n("div"),w=l("That looks like an error.. Try one of these solutions:"),L=D(),a=n("div"),S=l("- Checking if the URL/Link you got is valid"),T=n("br"),q=l(`\r
    - Checking if you have permission to access this page`),B=n("br"),H=l(`\r
    - Refreshing the page`),j=n("br"),A=l(`\r
    - Making sure the website is online (soon)`),M=D(),_=n("div"),v=n("a"),U=l("Home"),this.h()},l(r){W('[data-svelte="svelte-6xcfyu"]',document.head).forEach(c),p=I(r),s=u(r,"DIV",{class:!0});var h=k(s);i=u(h,"DIV",{class:!0});var C=k(i);E=d(C,x),V=d(C,": "),R=d(C,y),C.forEach(c),$=I(h),m=u(h,"DIV",{class:!0});var F=k(m);w=d(F,"That looks like an error.. Try one of these solutions:"),F.forEach(c),L=I(h),a=u(h,"DIV",{class:!0});var f=k(a);S=d(f,"- Checking if the URL/Link you got is valid"),T=u(f,"BR",{}),q=d(f,`\r
    - Checking if you have permission to access this page`),B=u(f,"BR",{}),H=d(f,`\r
    - Refreshing the page`),j=u(f,"BR",{}),A=d(f,`\r
    - Making sure the website is online (soon)`),f.forEach(c),M=I(h),_=u(h,"DIV",{class:!0});var G=k(_);v=u(G,"A",{href:!0,class:!0});var O=k(v);U=d(O,"Home"),O.forEach(c),G.forEach(c),h.forEach(c),this.h()},h(){b(i,"class","self-center text-3xl"),b(m,"class","self-center text-2xl"),b(a,"class","self-center mt-5 text-xl"),b(v,"href","/"),b(v,"class","p-3 text-xl text-blue-300 bg-blue-900 rounded-xl"),b(_,"class","self-center mt-10 duration-200 hover:scale-110 active:scale-90"),b(s,"class","fixed flex flex-col -translate-x-1/2 -translate-y-1/3 top-1/3 left-1/2")},m(r,g){P(r,p,g),P(r,s,g),e(s,i),e(i,E),e(i,V),e(i,R),e(s,$),e(s,m),e(m,w),e(s,L),e(s,a),e(a,S),e(a,T),e(a,q),e(a,B),e(a,H),e(a,j),e(a,A),e(s,M),e(s,_),e(_,v),e(v,U)},p(r,[g]){g&1&&o!==(o=r[0].status+": "+r[0].error.message)&&(document.title=o),g&1&&x!==(x=r[0].status+"")&&z(E,x),g&1&&y!==(y=r[0].error.message+"")&&z(R,y)},i:J,o:J,d(r){r&&c(p),r&&c(s)}}}function re(t,o,p){let s;return X(t,ee,i=>p(0,s=i)),[s]}class ne extends K{constructor(o){super(),N(this,o,re,te,Q,{})}}export{ne as default};
