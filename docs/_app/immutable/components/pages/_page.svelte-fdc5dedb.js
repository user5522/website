import{I as $s,S as dt,i as mt,s as gt,B as ea,a as k,c as W,b as Y,J as Le,f as G,g as ct,t as q,d as ft,C as ta,D as na,E as ra,h as R,K as la,L as ia,o as oa,M as sa,k as r,v as Ne,l,m as p,w as Qe,n as m,N as Me,O as Ge,G as t,x as Je,P as ut,y as xe,Q as qs,R as Bt,T as aa,e as Rt,U as Ks,A as Ce,V as ba,q as i,F as Qs,r as o,W as ua,H as ca}from"../../chunks/index-eaa0e48f.js";import{N as fa}from"../../chunks/navbar-d4b009a9.js";import{W as da,F as ma}from"../../chunks/footer-40d6e1fa.js";import{w as ga}from"../../chunks/index-3a96d2ca.js";function Ba(b,{delay:s=0,duration:e=400,easing:c=$s}={}){const g=+getComputedStyle(b).opacity;return{delay:s,duration:e,easing:c,css:u=>`opacity: ${u*g}`}}const{window:Ra}=sa;function Ys(b){let s,e,c,g,u,f,B,d,h,y,w,O,T,S,A,M,ee,v=b[1].closeButton&&Zs(b);var V=b[2];function te(I){return{}}return V&&(f=new V(te())),{c(){s=r("div"),e=r("div"),c=r("div"),v&&v.c(),g=k(),u=r("div"),f&&Ne(f.$$.fragment),this.h()},l(I){s=l(I,"DIV",{class:!0,style:!0});var C=p(s);e=l(C,"DIV",{class:!0,style:!0});var L=p(e);c=l(L,"DIV",{class:!0,role:!0,"aria-modal":!0,"aria-label":!0,"aria-labelledby":!0,style:!0});var z=p(c);v&&v.l(z),g=W(z),u=l(z,"DIV",{class:!0,style:!0});var P=p(u);f&&Qe(f.$$.fragment,P),P.forEach(R),z.forEach(R),L.forEach(R),C.forEach(R),this.h()},h(){m(u,"class",B=Me(b[1].classContent)+" svelte-g4wg3a"),m(u,"style",b[9]),Ge(u,"content",!b[0]),m(c,"class",d=Me(b[1].classWindow)+" svelte-g4wg3a"),m(c,"role","dialog"),m(c,"aria-modal","true"),m(c,"aria-label",h=b[1].ariaLabelledBy?null:b[1].ariaLabel||null),m(c,"aria-labelledby",y=b[1].ariaLabelledBy||null),m(c,"style",b[8]),Ge(c,"window",!b[0]),m(e,"class",O=Me(b[1].classWindowWrap)+" svelte-g4wg3a"),m(e,"style",b[7]),Ge(e,"wrap",!b[0]),m(s,"class",T=Me(b[1].classBg)+" svelte-g4wg3a"),m(s,"style",b[6]),Ge(s,"bg",!b[0])},m(I,C){Y(I,s,C),t(s,e),t(e,c),v&&v.m(c,null),t(c,g),t(c,u),f&&Je(f,u,null),b[49](c),b[50](e),b[51](s),A=!0,M||(ee=[Le(c,"introstart",function(){ut(b[13])&&b[13].apply(this,arguments)}),Le(c,"outrostart",function(){ut(b[14])&&b[14].apply(this,arguments)}),Le(c,"introend",function(){ut(b[15])&&b[15].apply(this,arguments)}),Le(c,"outroend",function(){ut(b[16])&&b[16].apply(this,arguments)}),Le(s,"mousedown",b[20]),Le(s,"mouseup",b[21])],M=!0)},p(I,C){if(b=I,b[1].closeButton?v?(v.p(b,C),C[0]&2&&G(v,1)):(v=Zs(b),v.c(),G(v,1),v.m(c,g)):v&&(ct(),q(v,1,1,()=>{v=null}),ft()),V!==(V=b[2])){if(f){ct();const L=f;q(L.$$.fragment,1,0,()=>{xe(L,1)}),ft()}V?(f=new V(te()),Ne(f.$$.fragment),G(f.$$.fragment,1),Je(f,u,null)):f=null}(!A||C[0]&2&&B!==(B=Me(b[1].classContent)+" svelte-g4wg3a"))&&m(u,"class",B),(!A||C[0]&512)&&m(u,"style",b[9]),(!A||C[0]&3)&&Ge(u,"content",!b[0]),(!A||C[0]&2&&d!==(d=Me(b[1].classWindow)+" svelte-g4wg3a"))&&m(c,"class",d),(!A||C[0]&2&&h!==(h=b[1].ariaLabelledBy?null:b[1].ariaLabel||null))&&m(c,"aria-label",h),(!A||C[0]&2&&y!==(y=b[1].ariaLabelledBy||null))&&m(c,"aria-labelledby",y),(!A||C[0]&256)&&m(c,"style",b[8]),(!A||C[0]&3)&&Ge(c,"window",!b[0]),(!A||C[0]&2&&O!==(O=Me(b[1].classWindowWrap)+" svelte-g4wg3a"))&&m(e,"class",O),(!A||C[0]&128)&&m(e,"style",b[7]),(!A||C[0]&3)&&Ge(e,"wrap",!b[0]),(!A||C[0]&2&&T!==(T=Me(b[1].classBg)+" svelte-g4wg3a"))&&m(s,"class",T),(!A||C[0]&64)&&m(s,"style",b[6]),(!A||C[0]&3)&&Ge(s,"bg",!b[0])},i(I){A||(G(v),f&&G(f.$$.fragment,I),qs(()=>{w||(w=Bt(c,b[12],b[1].transitionWindowProps,!0)),w.run(1)}),qs(()=>{S||(S=Bt(s,b[11],b[1].transitionBgProps,!0)),S.run(1)}),A=!0)},o(I){q(v),f&&q(f.$$.fragment,I),w||(w=Bt(c,b[12],b[1].transitionWindowProps,!1)),w.run(0),S||(S=Bt(s,b[11],b[1].transitionBgProps,!1)),S.run(0),A=!1},d(I){I&&R(s),v&&v.d(),f&&xe(f),b[49](null),I&&w&&w.end(),b[50](null),b[51](null),I&&S&&S.end(),M=!1,aa(ee)}}}function Zs(b){let s,e,c,g,u;const f=[ya,ha],B=[];function d(h,y){return y[0]&2&&(s=null),s==null&&(s=!!h[17](h[1].closeButton)),s?0:1}return e=d(b,[-1,-1,-1]),c=B[e]=f[e](b),{c(){c.c(),g=Rt()},l(h){c.l(h),g=Rt()},m(h,y){B[e].m(h,y),Y(h,g,y),u=!0},p(h,y){let w=e;e=d(h,y),e===w?B[e].p(h,y):(ct(),q(B[w],1,1,()=>{B[w]=null}),ft(),c=B[e],c?c.p(h,y):(c=B[e]=f[e](h),c.c()),G(c,1),c.m(g.parentNode,g))},i(h){u||(G(c),u=!0)},o(h){q(c),u=!1},d(h){B[e].d(h),h&&R(g)}}}function ha(b){let s,e,c,g;return{c(){s=r("button"),this.h()},l(u){s=l(u,"BUTTON",{class:!0,"aria-label":!0,style:!0,type:!0}),p(s).forEach(R),this.h()},h(){m(s,"class",e=Me(b[1].classCloseButton)+" svelte-g4wg3a"),m(s,"aria-label","Close modal"),m(s,"style",b[10]),m(s,"type","button"),Ge(s,"close",!b[0])},m(u,f){Y(u,s,f),c||(g=Le(s,"click",b[18]),c=!0)},p(u,f){f[0]&2&&e!==(e=Me(u[1].classCloseButton)+" svelte-g4wg3a")&&m(s,"class",e),f[0]&1024&&m(s,"style",u[10]),f[0]&3&&Ge(s,"close",!u[0])},i:Ce,o:Ce,d(u){u&&R(s),c=!1,g()}}}function ya(b){let s,e,c;var g=b[1].closeButton;function u(f){return{props:{onClose:f[18]}}}return g&&(s=new g(u(b))),{c(){s&&Ne(s.$$.fragment),e=Rt()},l(f){s&&Qe(s.$$.fragment,f),e=Rt()},m(f,B){s&&Je(s,f,B),Y(f,e,B),c=!0},p(f,B){if(g!==(g=f[1].closeButton)){if(s){ct();const d=s;q(d.$$.fragment,1,0,()=>{xe(d,1)}),ft()}g?(s=new g(u(f)),Ne(s.$$.fragment),G(s.$$.fragment,1),Je(s,e.parentNode,e)):s=null}},i(f){c||(s&&G(s.$$.fragment,f),c=!0)},o(f){s&&q(s.$$.fragment,f),c=!1},d(f){f&&R(e),s&&xe(s,f)}}}function va(b){let s,e,c,g,u=b[2]&&Ys(b);const f=b[48].default,B=ea(f,b,b[47],null);return{c(){u&&u.c(),s=k(),B&&B.c()},l(d){u&&u.l(d),s=W(d),B&&B.l(d)},m(d,h){u&&u.m(d,h),Y(d,s,h),B&&B.m(d,h),e=!0,c||(g=Le(Ra,"keydown",b[19]),c=!0)},p(d,h){d[2]?u?(u.p(d,h),h[0]&4&&G(u,1)):(u=Ys(d),u.c(),G(u,1),u.m(s.parentNode,s)):u&&(ct(),q(u,1,1,()=>{u=null}),ft()),B&&B.p&&(!e||h[1]&65536)&&ta(B,f,d,d[47],e?ra(f,d[47],h,null):na(d[47]),null)},i(d){e||(G(u),G(B,d),e=!0)},o(d){q(u),q(B,d),e=!1},d(d){u&&u.d(d),d&&R(s),B&&B.d(d),c=!1,g()}}}function Xs(b,s={}){return function(c){return new b({...c,props:{...s,...c.props}})}}function Ca(b,s,e){let{$$slots:c={},$$scope:g}=s;const u=la(),f=ba,B=a=>a.tabIndex>=0&&!a.hidden&&!a.disabled&&a.style.display!=="none"&&a.type!=="hidden"&&Boolean(a.offsetWidth||a.offsetHeight||a.getClientRects().length);let{isTabbable:d=B}=s,{show:h=null}=s,{key:y="simple-modal"}=s,{ariaLabel:w=null}=s,{ariaLabelledBy:O=null}=s,{closeButton:T=!0}=s,{closeOnEsc:S=!0}=s,{closeOnOuterClick:A=!0}=s,{styleBg:M={}}=s,{styleWindowWrap:ee={}}=s,{styleWindow:v={}}=s,{styleContent:V={}}=s,{styleCloseButton:te={}}=s,{classBg:I=null}=s,{classWindowWrap:C=null}=s,{classWindow:L=null}=s,{classContent:z=null}=s,{classCloseButton:P=null}=s,{unstyled:H=!1}=s,{setContext:Be=f}=s,{transitionBg:j=Ba}=s,{transitionBgProps:se={duration:250}}=s,{transitionWindow:Re=j}=s,{transitionWindowProps:Z=se}=s,{disableFocusTrap:he=!1}=s;const pe={ariaLabel:w,ariaLabelledBy:O,closeButton:T,closeOnEsc:S,closeOnOuterClick:A,styleBg:M,styleWindowWrap:ee,styleWindow:v,styleContent:V,styleCloseButton:te,classBg:I,classWindowWrap:C,classWindow:L,classContent:z,classCloseButton:P,transitionBg:j,transitionBgProps:se,transitionWindow:Re,transitionWindowProps:Z,disableFocusTrap:he,isTabbable:d,unstyled:H};let D={...pe},ne=null,ye,ae,be,Q,_e,re,we,Ae,Ie,ue,Pe,De,ce,Fe,Se;const ve=a=>a.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase(),oe=a=>a?Object.keys(a).reduce((ie,F)=>`${ie}; ${ve(F)}: ${a[F]}`,""):"",Ee=a=>!!(a&&a.constructor&&a.call&&a.apply),N=()=>{e(6,_e=oe(Object.assign({},{width:window.innerWidth,height:window.innerHeight},D.styleBg))),e(7,re=oe(D.styleWindowWrap)),e(8,we=oe(D.styleWindow)),e(9,Ae=oe(D.styleContent)),e(10,Ie=oe(D.styleCloseButton)),e(11,ue=D.transitionBg),e(12,Pe=D.transitionWindow)},X=()=>{};let Te=X,fe=X,de=X,me=X;const ke=(a,ie={},F={},E={})=>{e(2,ne=Xs(a,ie)),e(1,D={...pe,...F}),N(),le(),e(13,Te=x=>{E.onOpen&&E.onOpen(x),u("open"),u("opening")}),e(14,fe=x=>{E.onClose&&E.onClose(x),u("close"),u("closing")}),e(15,de=x=>{E.onOpened&&E.onOpened(x),u("opened")}),e(16,me=x=>{E.onClosed&&E.onClosed(x),u("closed")})},U=(a={})=>{!ne||(e(14,fe=a.onClose||fe),e(16,me=a.onClosed||me),e(2,ne=null),He())},Ue=a=>{if(D.closeOnEsc&&ne&&a.key==="Escape"&&(a.preventDefault(),U()),ne&&a.key==="Tab"&&!D.disableFocusTrap){const ie=be.querySelectorAll("*"),F=Array.from(ie).filter(D.isTabbable).sort((x,Ke)=>x.tabIndex-Ke.tabIndex);let E=F.indexOf(document.activeElement);E===-1&&a.shiftKey&&(E=0),E+=F.length+(a.shiftKey?-1:1),E%=F.length,F[E].focus(),a.preventDefault()}},ze=a=>{D.closeOnOuterClick&&(a.target===ye||a.target===ae)&&(Se=a.target)},ge=a=>{D.closeOnOuterClick&&a.target===Se&&(a.preventDefault(),U())},le=()=>{Q=window.scrollY,De=document.body.style.position,ce=document.body.style.overflow,Fe=document.body.style.width,document.body.style.position="fixed",document.body.style.top=`-${Q}px`,document.body.style.overflow="hidden",document.body.style.width="100%"},He=()=>{document.body.style.position=De||"",document.body.style.top="",document.body.style.overflow=ce||"",document.body.style.width=Fe||"",window.scrollTo(0,Q)};Be(y,{open:ke,close:U});let J=!1;ia(()=>{J&&U()}),oa(()=>{e(46,J=!0)});function We(a){Ks[a?"unshift":"push"](()=>{be=a,e(5,be)})}function _(a){Ks[a?"unshift":"push"](()=>{ae=a,e(4,ae)})}function $(a){Ks[a?"unshift":"push"](()=>{ye=a,e(3,ye)})}return b.$$set=a=>{"isTabbable"in a&&e(22,d=a.isTabbable),"show"in a&&e(23,h=a.show),"key"in a&&e(24,y=a.key),"ariaLabel"in a&&e(25,w=a.ariaLabel),"ariaLabelledBy"in a&&e(26,O=a.ariaLabelledBy),"closeButton"in a&&e(27,T=a.closeButton),"closeOnEsc"in a&&e(28,S=a.closeOnEsc),"closeOnOuterClick"in a&&e(29,A=a.closeOnOuterClick),"styleBg"in a&&e(30,M=a.styleBg),"styleWindowWrap"in a&&e(31,ee=a.styleWindowWrap),"styleWindow"in a&&e(32,v=a.styleWindow),"styleContent"in a&&e(33,V=a.styleContent),"styleCloseButton"in a&&e(34,te=a.styleCloseButton),"classBg"in a&&e(35,I=a.classBg),"classWindowWrap"in a&&e(36,C=a.classWindowWrap),"classWindow"in a&&e(37,L=a.classWindow),"classContent"in a&&e(38,z=a.classContent),"classCloseButton"in a&&e(39,P=a.classCloseButton),"unstyled"in a&&e(0,H=a.unstyled),"setContext"in a&&e(40,Be=a.setContext),"transitionBg"in a&&e(41,j=a.transitionBg),"transitionBgProps"in a&&e(42,se=a.transitionBgProps),"transitionWindow"in a&&e(43,Re=a.transitionWindow),"transitionWindowProps"in a&&e(44,Z=a.transitionWindowProps),"disableFocusTrap"in a&&e(45,he=a.disableFocusTrap),"$$scope"in a&&e(47,g=a.$$scope)},b.$$.update=()=>{b.$$.dirty[0]&8388608|b.$$.dirty[1]&32768&&J&&(Ee(h)?ke(h):U())},[H,D,ne,ye,ae,be,_e,re,we,Ae,Ie,ue,Pe,Te,fe,de,me,Ee,U,Ue,ze,ge,d,h,y,w,O,T,S,A,M,ee,v,V,te,I,C,L,z,P,Be,j,se,Re,Z,he,J,g,c,We,_,$]}class pa extends dt{constructor(s){super(),mt(this,s,Ca,va,gt,{isTabbable:22,show:23,key:24,ariaLabel:25,ariaLabelledBy:26,closeButton:27,closeOnEsc:28,closeOnOuterClick:29,styleBg:30,styleWindowWrap:31,styleWindow:32,styleContent:33,styleCloseButton:34,classBg:35,classWindowWrap:36,classWindow:37,classContent:38,classCloseButton:39,unstyled:0,setContext:40,transitionBg:41,transitionBgProps:42,transitionWindow:43,transitionWindowProps:44,disableFocusTrap:45},null,[-1,-1,-1])}}function _a(b){let s,e,c,g,u,f,B,d,h,y,w,O,T,S,A,M,ee,v,V,te,I,C,L,z,P,H,Be,j,se,Re,Z,he,pe,D,ne,ye,ae,be,Q,_e,re,we,Ae,Ie,ue,Pe,De,ce,Fe,Se,ve,oe,Ee,N,X,Te,fe,de,me,ke,U,Ue,ze,ge,le,He,J,We,_,$,a,ie,F,E,x,Ke,Ve,Xe,$e,K,je,et,tt,Ze,qe,nt,rt,lt,it,Oe,ot,st,at,bt,ht,yt,vt,Ct,pt,_t,wt,At,It,Pt,Dt,Ft,St,Et,Tt,kt,Wt,Vt,Ot,Mt,Gt,Lt,Ut,zt,Ht,jt,Nt,Jt,xt,Kt,qt,Yt,Zt,Qt,Xt,$t,en,tn,nn,rn,ln,on,sn,an,bn,un,cn,fn,dn,mn,gn,Bn,Rn,hn,yn,vn,Cn,pn,_n,wn,An,In,Pn,Dn,Fn,Sn,En,Tn,kn,Wn,Vn,On,Mn,Gn,Ln,Un,zn,Hn,jn,Nn,Jn,xn,Kn,qn,Yn,Zn,Qn,Xn,$n,er,tr,nr,rr,lr,ir,or,sr,ar,br,ur,cr,fr,dr,mr,gr,Br,Rr,hr,yr,vr,Cr,pr,_r,wr,Ar,Ir,Pr,Dr,Fr,Sr,Er,Tr,kr,Wr,Vr,Or,Mr,Gr,Lr,Ur,zr,Hr,jr,Nr,Jr,xr,Kr,qr,Yr,Zr,Qr,Xr,$r,el,tl,nl,rl,ll,il,ol,sl,al,bl,ul,cl,fl,dl,ml,gl,Bl,Rl,hl,yl,vl,Cl,pl,_l,wl,Al,Il,Pl,Dl,Fl,Sl,El,Tl,kl,Wl,Vl,Ol,Ml,Gl,Ll,Ul,zl,Hl,jl,Nl,Jl,xl,Kl,ql,Yl,Zl,Ql,Xl,$l,ei,ti,ni,ri,li,ii,oi,si,ai,bi,ui,ci,fi,di,mi,gi,Bi,Ri,hi,yi,vi,Ci,pi,_i,wi,Ai,Ii,Pi,Di,Fi,Si,Ei,Ti,ki,Wi,Vi,Oi,Mi,Gi,Li,Ui,zi,Hi,ji,Ni,Ji,xi,Ki,qi,Yi,Zi,Qi,Xi,$i,eo,to,no,ro,lo,io,oo,so,ao,bo,uo,co,fo,mo,go,Bo,Ro,ho,yo,vo,Co,po,_o,wo,Ao,Io,Po,Do,Fo,So,Eo,To,ko,Wo,Vo,Oo,Mo,Go,Lo,Uo,zo,Ho,jo,No,Jo,xo,Ko,qo,Yo,Zo,Qo,Xo,$o,es,ts,ns,rs,ls,is,os,ss,as,bs,us,cs,fs,ds,ms,gs,Bs,Rs,hs,ys,vs,Cs,ps,_s,ws,As,Is,Ps,Ds,Fs,Ss,Es,Ts,ks,Ws,Vs,Os,Ms,Gs,Ls,Us,zs,Hs,js,Ns,Js;return{c(){s=k(),e=r("div"),c=r("br"),g=i(`
  Abusive Sexual Contact`),u=r("br"),f=i(`
  Advocating Overthrow of Government`),B=r("br"),d=i(`
  Aggravated Assault/Battery`),h=r("br"),y=i(`
  Aggravated Identity Theft`),w=r("br"),O=i(`
  Aggravated Sexual Abuse`),T=r("br"),S=i(`
  Aiming a Laser Pointer at an Aircraft`),A=r("br"),M=i(`
  Airplane Hijacking`),ee=r("br"),v=i(`
  Anti-racketeering`),V=r("br"),te=i(`
  Antitrust`),I=r("br"),C=i(`
  Armed Robbery`),L=r("br"),z=i(`
  Arson`),P=r("br"),H=i(`
  Assassination`),Be=r("br"),j=i(`
  Assault with a Deadly Weapon`),se=r("br"),Re=i(`
  Assaulting or Killing Federal Officer`),Z=r("br"),he=i(`
  Assisting or Instigating Escape`),pe=r("br"),D=i(`
  Attempt to commit Murder/Manslaughter`),ne=r("br"),ye=i(`
  Bank Burglary`),ae=r("br"),be=i(`
  Bankruptcy Fraud/Embezzlement`),Q=r("br"),_e=i(`
  Bank Larceny`),re=r("br"),we=i(`
  Bank Robbery`),Ae=r("br"),Ie=i(`
  Blackmail`),ue=r("br"),Pe=i(`
  Bombing Matters`),De=r("br"),ce=i(`
  Bond Default`),Fe=r("br"),Se=i(`
  Breaking and/or Entering Carrier Facilities`),ve=r("br"),oe=i(`
  Bribery Crimes`),Ee=r("br"),N=i(`
  Certification of Checks (Fraud)`),X=r("br"),Te=i(`
  Child Abuse`),fe=r("br"),de=i(`
  Child Exploitation`),me=r("br"),ke=i(`
  Child Pornography`),U=r("br"),Ue=i(`
  Civil Action to Restrain Harassment of a Victim or Witness`),ze=r("br"),ge=i(`
  Coercion`),le=r("br"),He=i(`
  Commodities Price Fixing`),J=r("br"),We=i(`
  Computer Crime`),_=r("br"),$=i(`
  Concealing Escaped Prisoner`),a=r("br"),ie=i(`
  Concealing Person from Arrest`),F=r("br"),E=i(`
  Concealment of Assets`),x=r("br"),Ke=i(`
  Conspiracy (in matters under FBI jurisdiction)`),Ve=r("br"),Xe=i(`
  Conspiracy to Impede or Injure an Officer`),$e=r("br"),K=i(`
  Contempt of Court`),je=r("br"),et=i(`
  Continuing Criminal Enterprise`),tt=r("br"),Ze=i(`
  Conveying False Information`),qe=r("br"),nt=i(`
  Copyright Matters`),rt=r("br"),lt=i(`
  Counterfeiting`),it=r("br"),Oe=i(`
  Counterintelligence Crimes`),ot=r("br"),st=i(`
  Credit/Debit Card Fraud`),at=r("br"),bt=i(`
  Crime Aboard Aircraft`),ht=r("br"),yt=i(`
  Crimes on Government Reservations`),vt=r("br"),Ct=i(`
  Crimes on Indian Reservations`),pt=r("br"),_t=i(`
  Criminal Contempt of Court`),wt=r("br"),At=i(`
  Criminal Forfeiture`),It=r("br"),Pt=i(`
  Criminal Infringement of a Copyright`),Dt=r("br"),Ft=i(`
  Cyber Crimes`),St=r("br"),Et=i(`
  Damage to Religious Property`),Tt=r("br"),kt=i(`
  Delivery to Consignee`),Wt=r("br"),Vt=i(`
  Demands Against the U.S.`),Ot=r("br"),Mt=i(`
  Destruction of Aircraft or Motor Vehicles Used in Foreign Commerce`),Gt=r("br"),Lt=i(`
  Destruction of an Energy Facility`),Ut=r("br"),zt=i(`
  Destruction of Property to Prevent Seizure`),Ht=r("br"),jt=i(`
  Destruction of Records in Federal Investigations and Bankruptcy`),Nt=r("br"),Jt=i(`
  Destruction of Corporate Audit Records`),xt=r("br"),Kt=i(`
  Destruction of Veterans\u2019 Memorials`),qt=r("br"),Yt=i(`
  Detention of Armed Vessel`),Zt=r("br"),Qt=i(`
  Disclosure of Confidential Information`),Xt=r("br"),$t=i(`
  Domestic Security`),en=r("br"),tn=i(`
  Domestic Terrorism`),nn=r("br"),rn=i(`
  Domestic Violence`),ln=r("br"),on=i(`
  Drive-by Shooting`),sn=r("br"),an=i(`
  Drug Abuse Violations`),bn=r("br"),un=i(`
  Drug Smuggling`),cn=r("br"),fn=i(`
  Drug Trafficking`),dn=r("br"),mn=i(`
  DUI/DWI on Federal Property`),gn=r("br"),Bn=i(`
  Economic Espionage`),Rn=r("br"),hn=i(`
  Election Law Crimes`),yn=r("br"),vn=i(`
  Embezzlement`),Cn=r("br"),pn=i(`
  Embezzlement Against Estate`),_n=r("br"),wn=i(`
  Entering Train to Commit Crime`),An=r("br"),In=i(`
  Enlistment to Serve Against the U.S.`),Pn=r("br"),Dn=i(`
  Environmental Scheme Crimes`),Fn=r("br"),Sn=i(`
  Escaping Custody/Escaped Federal Prisoners`),En=r("br"),Tn=i(`
  Examiner Performing Other Services`),kn=r("br"),Wn=i(`
  Exportation of Drugs`),Vn=r("br"),On=i(`
  Extortion`),Mn=r("br"),Gn=i(`
  Failure to Appear on Felony Offense`),Ln=r("br"),Un=i(`
  Failure to Pay Legal Child Support Obligations`),zn=r("br"),Hn=i(`
  False Bail`),jn=r("br"),Nn=i(`
  False Pretenses`),Jn=r("br"),xn=i(`
  False Statements Relating to Health Care Matters`),Kn=r("br"),qn=i(`
  Falsely Claiming Citizenship`),Yn=r("br"),Zn=i(`
  False Declarations before Grand Jury or Court`),Qn=r("br"),Xn=i(`
  False Entries in Records of Interstate Carriers`),$n=r("br"),er=i(`
  False Information and Hoaxes`),tr=r("br"),nr=i(`
  False Statement to Obtain Unemployment Compensation`),rr=r("br"),lr=i(`
  Federal Aviation Act`),ir=r("br"),or=i(`
  Federal Civil Rights Violations (hate crimes, police misconduct)`),sr=r("br"),ar=i(`
  Female Genital Mutilation`),br=r("br"),ur=i(`
  Financial Transactions with Foreign Government`),cr=r("br"),fr=i(`
  First Degree Murder`),dr=r("br"),mr=i(`
  Flight to Avoid Prosecution or Giving Testimony`),gr=r("br"),Br=i(`
  Forced Labor`),Rr=r("br"),hr=i(`
  Forcible Rape`),yr=r("br"),vr=i(`
  Forgery`),Cr=r("br"),pr=i(`
  Fraud Activity in Connection with Electronic Mail`),_r=r("br"),wr=i(`
  Fraud Against the Government`),Ar=r("br"),Ir=i(`
  Genocide`),Pr=r("br"),Dr=i(`
  Hacking Crimes`),Fr=r("br"),Sr=i(`
  Harboring Terrorists`),Er=r("br"),Tr=i(`
  Harming Animals Used in Law Enforcement`),kr=r("br"),Wr=i(`
  Hate Crime Acts`),Vr=r("br"),Or=i(`
  Homicide`),Mr=r("br"),Gr=i(`
  Hostage Taking`),Lr=r("br"),Ur=i(`
  Identity Theft`),zr=r("br"),Hr=i(`
  Illegal Possession of Firearms`),jr=r("br"),Nr=i(`
  Immigration Offenses`),Jr=r("br"),xr=i(`
  Impersonator Making Arrest or Search`),Kr=r("br"),qr=i(`
  Importation of Drugs`),Yr=r("br"),Zr=i(`
  Influencing Juror by Writing`),Qr=r("br"),Xr=i(`
  Injuring Officer`),$r=r("br"),el=i(`
  Insider Trading Crimes`),tl=r("br"),nl=i(`
  Insurance Fraud`),rl=r("br"),ll=i(`
  Interference with the Operation of a Satellite`),il=r("br"),ol=i(`
  International Parental Kidnapping`),sl=r("br"),al=i(`
  International Terrorism`),bl=r("br"),ul=i(`
  Interstate Domestic Violence`),cl=r("br"),fl=i(`
  Interstate Violation of Protection Order`),dl=r("br"),ml=i(`
  Larceny`),gl=r("br"),Bl=i(`
  Lobbying with Appropriated Moneys`),Rl=r("br"),hl=i(`
  Mailing Threatening Communications`),yl=r("br"),vl=i(`
  Major Fraud Against the U.S.`),Cl=r("br"),pl=i(`
  Manslaughter`),_l=r("br"),wl=i(`
  Medical/Health Care Fraud`),Al=r("br"),Il=i(`
  Missile Systems Designed to Destroy Aircraft`),Pl=r("br"),Dl=i(`
  Misuse of Passport`),Fl=r("br"),Sl=i(`
  Misuse of Visas, Permits, or Other Documents`),El=r("br"),Tl=i(`
  Molestation`),kl=r("br"),Wl=i(`
  Money Laundering`),Vl=r("br"),Ol=i(`
  Motor Vehicle Theft`),Ml=r("br"),Gl=i(`
  Murder by a Federal Prisoner`),Ll=r("br"),Ul=i(`
  Murder Committed During Drug-related Drive-by shooting`),zl=r("br"),Hl=i(`
  Murder Committed in Federal Government Facility`),jl=r("br"),Nl=i(`
  Narcotics Violations`),Jl=r("br"),xl=i(`
  Obstructing Examination of Financial Institution`),Kl=r("br"),ql=i(`
  Obstruction of Court Orders`),Yl=r("br"),Zl=i(`
  Obstruction of Federal audit`),Ql=r("br"),Xl=i(`
  Obstruction of Justice`),$l=r("br"),ei=i(`
  Obstruction of Criminal Investigations`),ti=r("br"),ni=i(`
  Officer Failing to Make Reports`),ri=r("br"),li=i(`
  Partial Birth Abortion`),ii=r("br"),oi=i(`
  Penalties for Neglect or Refusal to Answer Subpoena`),si=r("br"),ai=i(`
  Peonage`),bi=r("br"),ui=i(`
  Perjury`),ci=r("br"),fi=i(`
  Picketing or Parading`),di=r("br"),mi=i(`
  Pirating`),gi=r("br"),Bi=i(`
  Possession by Restricted Persons`),Ri=r("br"),hi=i(`
  Possession of False Papers to Defraud the U.S.`),yi=r("br"),vi=i(`
  Possession of Narcotics`),Ci=r("br"),pi=i(`
  Possession of Child Pornography`),_i=r("br"),wi=i(`
  Private Correspondence with Foreign Government`),Ai=r("br"),Ii=i(`
  Probation Violation`),Pi=r("br"),Di=i(`
  Product Tampering`),Fi=r("br"),Si=i(`
  Prohibition of Illegal Gambling Businesses`),Ei=r("br"),Ti=i(`
  Prostitution`),ki=r("br"),Wi=i(`
  Protection of Foreign Officials`),Vi=r("br"),Oi=i(`
  Public Corruption Crimes`),Mi=r("br"),Gi=i(`
  Racketeering`),Li=r("br"),Ui=i(`
  Radiological Dispersal Devices`),zi=r("br"),Hi=i(`
  Ransom Money`),ji=r("br"),Ni=i(`
  Rape`),Ji=r("br"),xi=i(`
  Receiving the Proceeds of Extortion`),Ki=r("br"),qi=i(`
  Recording or Listening to Grand or Petit Juries While Deliberating`),Yi=r("br"),Zi=i(`
  Reentry of an Alien Removed on National Security Grounds`),Qi=r("br"),Xi=i(`
  Registration of Certain Organizations`),$i=r("br"),eo=i(`
  Reproduction of Citizenship Papers`),to=r("br"),no=i(`
  Resistance to Extradition Agent`),ro=r("br"),lo=i(`
  Rescue of Seized Property`),io=r("br"),oo=i(`
  Retaliating Against a Federal Judge by False Claim or Slander of Title`),so=r("br"),ao=i(`
  Retaliating Against a Witness, Victim, or an Informant`),bo=r("br"),uo=i(`
  Robbery`),co=r("br"),fo=i(`
  Robberies and Burglaries Involving Controlled Substances`),mo=r("br"),go=i(`
  Sabotage`),Bo=r("br"),Ro=i(`
  Sale of Citizenship Papers`),ho=r("br"),yo=i(`
  Sale of Stolen Vehicles`),vo=r("br"),Co=i(`
  Searches Without Warrant`),po=r("br"),_o=i(`
  Second Degree Murder`),wo=r("br"),Ao=i(`
  Serial Murders`),Io=r("br"),Po=i(`
  Sexual Abuse`),Do=r("br"),Fo=i(`
  Sexual Abuse of a Minor`),So=r("br"),Eo=i(`
  Sexual Assault`),To=r("br"),ko=i(`
  Sexual Battery`),Wo=r("br"),Vo=i(`
  Sexual Conduct with a Minor`),Oo=r("br"),Mo=i(`
  Sexual Exploitation`),Go=r("br"),Lo=i(`
  Sex Trafficking`),Uo=r("br"),zo=i(`
  Shoplifting`),Ho=r("br"),jo=i(`
  Smuggling`),No=r("br"),Jo=i(`
  Solicitation to Commit a Crime of Violence`),xo=r("br"),Ko=i(`
  Stalking (In Violation of Restraining Order)`),qo=r("br"),Yo=i(`
  Stolen Property; Buying, Receiving, or Possessing`),Zo=r("br"),Qo=i(`
  Subornation of Perjury`),Xo=r("br"),$o=i(`
  Suits Against Government Officials`),es=r("br"),ts=i(`
  Tampering with a Witness, Victim, or Informant`),ns=r("br"),rs=i(`
  Tampering with Consumer Products`),ls=r("br"),is=i(`
  Tampering with Vessels`),os=r("br"),ss=i(`
  Theft of Trade Secrets`),as=r("br"),bs=i(`
  Torture`),us=r("br"),cs=i(`
  Trafficking in Counterfeit Goods or Services`),fs=r("br"),ds=i(`
  Transmission of Wagering Information (Gambling)`),ms=r("br"),gs=i(`
  Transportation into State Prohibiting Sale`),Bs=r("br"),Rs=i(`
  Transportation of Slaves from U.S.`),hs=r("br"),ys=i(`
  Transportation of Stolen Vehicles`),vs=r("br"),Cs=i(`
  Transportation of Terrorists`),ps=r("br"),_s=i(`
  Trespassing`),ws=r("br"),As=i(`
  Treason`),Is=r("br"),Ps=i(`
  Unauthorized Removal of Classified Documents`),Ds=r("br"),Fs=i(`
  Use of Fire or Explosives to Destroy Property`),Ss=r("br"),Es=i(`
  Use of Weapons of Mass Destruction`),Ts=r("br"),ks=i(`
  Vandalism`),Ws=r("br"),Vs=i(`
  Video Voyeurism`),Os=r("br"),Ms=i(`
  Violation of Prohibitions Governing Atomic Weapons`),Gs=r("br"),Ls=i(`
  Violence at International airports`),Us=r("br"),zs=i(`
  Violent Crimes in Aid of Racketeering Activity`),Hs=r("br"),js=i(`
  Willful Wrecking of a Train Resulting in Death`),Ns=r("br"),Js=i(`
  Wire Fraud`),this.h()},l(Ye){Qs('[data-svelte="svelte-1h2ozwp"]',document.head).forEach(R),s=W(Ye),e=l(Ye,"DIV",{class:!0});var n=p(e);c=l(n,"BR",{}),g=o(n,`
  Abusive Sexual Contact`),u=l(n,"BR",{}),f=o(n,`
  Advocating Overthrow of Government`),B=l(n,"BR",{}),d=o(n,`
  Aggravated Assault/Battery`),h=l(n,"BR",{}),y=o(n,`
  Aggravated Identity Theft`),w=l(n,"BR",{}),O=o(n,`
  Aggravated Sexual Abuse`),T=l(n,"BR",{}),S=o(n,`
  Aiming a Laser Pointer at an Aircraft`),A=l(n,"BR",{}),M=o(n,`
  Airplane Hijacking`),ee=l(n,"BR",{}),v=o(n,`
  Anti-racketeering`),V=l(n,"BR",{}),te=o(n,`
  Antitrust`),I=l(n,"BR",{}),C=o(n,`
  Armed Robbery`),L=l(n,"BR",{}),z=o(n,`
  Arson`),P=l(n,"BR",{}),H=o(n,`
  Assassination`),Be=l(n,"BR",{}),j=o(n,`
  Assault with a Deadly Weapon`),se=l(n,"BR",{}),Re=o(n,`
  Assaulting or Killing Federal Officer`),Z=l(n,"BR",{}),he=o(n,`
  Assisting or Instigating Escape`),pe=l(n,"BR",{}),D=o(n,`
  Attempt to commit Murder/Manslaughter`),ne=l(n,"BR",{}),ye=o(n,`
  Bank Burglary`),ae=l(n,"BR",{}),be=o(n,`
  Bankruptcy Fraud/Embezzlement`),Q=l(n,"BR",{}),_e=o(n,`
  Bank Larceny`),re=l(n,"BR",{}),we=o(n,`
  Bank Robbery`),Ae=l(n,"BR",{}),Ie=o(n,`
  Blackmail`),ue=l(n,"BR",{}),Pe=o(n,`
  Bombing Matters`),De=l(n,"BR",{}),ce=o(n,`
  Bond Default`),Fe=l(n,"BR",{}),Se=o(n,`
  Breaking and/or Entering Carrier Facilities`),ve=l(n,"BR",{}),oe=o(n,`
  Bribery Crimes`),Ee=l(n,"BR",{}),N=o(n,`
  Certification of Checks (Fraud)`),X=l(n,"BR",{}),Te=o(n,`
  Child Abuse`),fe=l(n,"BR",{}),de=o(n,`
  Child Exploitation`),me=l(n,"BR",{}),ke=o(n,`
  Child Pornography`),U=l(n,"BR",{}),Ue=o(n,`
  Civil Action to Restrain Harassment of a Victim or Witness`),ze=l(n,"BR",{}),ge=o(n,`
  Coercion`),le=l(n,"BR",{}),He=o(n,`
  Commodities Price Fixing`),J=l(n,"BR",{}),We=o(n,`
  Computer Crime`),_=l(n,"BR",{}),$=o(n,`
  Concealing Escaped Prisoner`),a=l(n,"BR",{}),ie=o(n,`
  Concealing Person from Arrest`),F=l(n,"BR",{}),E=o(n,`
  Concealment of Assets`),x=l(n,"BR",{}),Ke=o(n,`
  Conspiracy (in matters under FBI jurisdiction)`),Ve=l(n,"BR",{}),Xe=o(n,`
  Conspiracy to Impede or Injure an Officer`),$e=l(n,"BR",{}),K=o(n,`
  Contempt of Court`),je=l(n,"BR",{}),et=o(n,`
  Continuing Criminal Enterprise`),tt=l(n,"BR",{}),Ze=o(n,`
  Conveying False Information`),qe=l(n,"BR",{}),nt=o(n,`
  Copyright Matters`),rt=l(n,"BR",{}),lt=o(n,`
  Counterfeiting`),it=l(n,"BR",{}),Oe=o(n,`
  Counterintelligence Crimes`),ot=l(n,"BR",{}),st=o(n,`
  Credit/Debit Card Fraud`),at=l(n,"BR",{}),bt=o(n,`
  Crime Aboard Aircraft`),ht=l(n,"BR",{}),yt=o(n,`
  Crimes on Government Reservations`),vt=l(n,"BR",{}),Ct=o(n,`
  Crimes on Indian Reservations`),pt=l(n,"BR",{}),_t=o(n,`
  Criminal Contempt of Court`),wt=l(n,"BR",{}),At=o(n,`
  Criminal Forfeiture`),It=l(n,"BR",{}),Pt=o(n,`
  Criminal Infringement of a Copyright`),Dt=l(n,"BR",{}),Ft=o(n,`
  Cyber Crimes`),St=l(n,"BR",{}),Et=o(n,`
  Damage to Religious Property`),Tt=l(n,"BR",{}),kt=o(n,`
  Delivery to Consignee`),Wt=l(n,"BR",{}),Vt=o(n,`
  Demands Against the U.S.`),Ot=l(n,"BR",{}),Mt=o(n,`
  Destruction of Aircraft or Motor Vehicles Used in Foreign Commerce`),Gt=l(n,"BR",{}),Lt=o(n,`
  Destruction of an Energy Facility`),Ut=l(n,"BR",{}),zt=o(n,`
  Destruction of Property to Prevent Seizure`),Ht=l(n,"BR",{}),jt=o(n,`
  Destruction of Records in Federal Investigations and Bankruptcy`),Nt=l(n,"BR",{}),Jt=o(n,`
  Destruction of Corporate Audit Records`),xt=l(n,"BR",{}),Kt=o(n,`
  Destruction of Veterans\u2019 Memorials`),qt=l(n,"BR",{}),Yt=o(n,`
  Detention of Armed Vessel`),Zt=l(n,"BR",{}),Qt=o(n,`
  Disclosure of Confidential Information`),Xt=l(n,"BR",{}),$t=o(n,`
  Domestic Security`),en=l(n,"BR",{}),tn=o(n,`
  Domestic Terrorism`),nn=l(n,"BR",{}),rn=o(n,`
  Domestic Violence`),ln=l(n,"BR",{}),on=o(n,`
  Drive-by Shooting`),sn=l(n,"BR",{}),an=o(n,`
  Drug Abuse Violations`),bn=l(n,"BR",{}),un=o(n,`
  Drug Smuggling`),cn=l(n,"BR",{}),fn=o(n,`
  Drug Trafficking`),dn=l(n,"BR",{}),mn=o(n,`
  DUI/DWI on Federal Property`),gn=l(n,"BR",{}),Bn=o(n,`
  Economic Espionage`),Rn=l(n,"BR",{}),hn=o(n,`
  Election Law Crimes`),yn=l(n,"BR",{}),vn=o(n,`
  Embezzlement`),Cn=l(n,"BR",{}),pn=o(n,`
  Embezzlement Against Estate`),_n=l(n,"BR",{}),wn=o(n,`
  Entering Train to Commit Crime`),An=l(n,"BR",{}),In=o(n,`
  Enlistment to Serve Against the U.S.`),Pn=l(n,"BR",{}),Dn=o(n,`
  Environmental Scheme Crimes`),Fn=l(n,"BR",{}),Sn=o(n,`
  Escaping Custody/Escaped Federal Prisoners`),En=l(n,"BR",{}),Tn=o(n,`
  Examiner Performing Other Services`),kn=l(n,"BR",{}),Wn=o(n,`
  Exportation of Drugs`),Vn=l(n,"BR",{}),On=o(n,`
  Extortion`),Mn=l(n,"BR",{}),Gn=o(n,`
  Failure to Appear on Felony Offense`),Ln=l(n,"BR",{}),Un=o(n,`
  Failure to Pay Legal Child Support Obligations`),zn=l(n,"BR",{}),Hn=o(n,`
  False Bail`),jn=l(n,"BR",{}),Nn=o(n,`
  False Pretenses`),Jn=l(n,"BR",{}),xn=o(n,`
  False Statements Relating to Health Care Matters`),Kn=l(n,"BR",{}),qn=o(n,`
  Falsely Claiming Citizenship`),Yn=l(n,"BR",{}),Zn=o(n,`
  False Declarations before Grand Jury or Court`),Qn=l(n,"BR",{}),Xn=o(n,`
  False Entries in Records of Interstate Carriers`),$n=l(n,"BR",{}),er=o(n,`
  False Information and Hoaxes`),tr=l(n,"BR",{}),nr=o(n,`
  False Statement to Obtain Unemployment Compensation`),rr=l(n,"BR",{}),lr=o(n,`
  Federal Aviation Act`),ir=l(n,"BR",{}),or=o(n,`
  Federal Civil Rights Violations (hate crimes, police misconduct)`),sr=l(n,"BR",{}),ar=o(n,`
  Female Genital Mutilation`),br=l(n,"BR",{}),ur=o(n,`
  Financial Transactions with Foreign Government`),cr=l(n,"BR",{}),fr=o(n,`
  First Degree Murder`),dr=l(n,"BR",{}),mr=o(n,`
  Flight to Avoid Prosecution or Giving Testimony`),gr=l(n,"BR",{}),Br=o(n,`
  Forced Labor`),Rr=l(n,"BR",{}),hr=o(n,`
  Forcible Rape`),yr=l(n,"BR",{}),vr=o(n,`
  Forgery`),Cr=l(n,"BR",{}),pr=o(n,`
  Fraud Activity in Connection with Electronic Mail`),_r=l(n,"BR",{}),wr=o(n,`
  Fraud Against the Government`),Ar=l(n,"BR",{}),Ir=o(n,`
  Genocide`),Pr=l(n,"BR",{}),Dr=o(n,`
  Hacking Crimes`),Fr=l(n,"BR",{}),Sr=o(n,`
  Harboring Terrorists`),Er=l(n,"BR",{}),Tr=o(n,`
  Harming Animals Used in Law Enforcement`),kr=l(n,"BR",{}),Wr=o(n,`
  Hate Crime Acts`),Vr=l(n,"BR",{}),Or=o(n,`
  Homicide`),Mr=l(n,"BR",{}),Gr=o(n,`
  Hostage Taking`),Lr=l(n,"BR",{}),Ur=o(n,`
  Identity Theft`),zr=l(n,"BR",{}),Hr=o(n,`
  Illegal Possession of Firearms`),jr=l(n,"BR",{}),Nr=o(n,`
  Immigration Offenses`),Jr=l(n,"BR",{}),xr=o(n,`
  Impersonator Making Arrest or Search`),Kr=l(n,"BR",{}),qr=o(n,`
  Importation of Drugs`),Yr=l(n,"BR",{}),Zr=o(n,`
  Influencing Juror by Writing`),Qr=l(n,"BR",{}),Xr=o(n,`
  Injuring Officer`),$r=l(n,"BR",{}),el=o(n,`
  Insider Trading Crimes`),tl=l(n,"BR",{}),nl=o(n,`
  Insurance Fraud`),rl=l(n,"BR",{}),ll=o(n,`
  Interference with the Operation of a Satellite`),il=l(n,"BR",{}),ol=o(n,`
  International Parental Kidnapping`),sl=l(n,"BR",{}),al=o(n,`
  International Terrorism`),bl=l(n,"BR",{}),ul=o(n,`
  Interstate Domestic Violence`),cl=l(n,"BR",{}),fl=o(n,`
  Interstate Violation of Protection Order`),dl=l(n,"BR",{}),ml=o(n,`
  Larceny`),gl=l(n,"BR",{}),Bl=o(n,`
  Lobbying with Appropriated Moneys`),Rl=l(n,"BR",{}),hl=o(n,`
  Mailing Threatening Communications`),yl=l(n,"BR",{}),vl=o(n,`
  Major Fraud Against the U.S.`),Cl=l(n,"BR",{}),pl=o(n,`
  Manslaughter`),_l=l(n,"BR",{}),wl=o(n,`
  Medical/Health Care Fraud`),Al=l(n,"BR",{}),Il=o(n,`
  Missile Systems Designed to Destroy Aircraft`),Pl=l(n,"BR",{}),Dl=o(n,`
  Misuse of Passport`),Fl=l(n,"BR",{}),Sl=o(n,`
  Misuse of Visas, Permits, or Other Documents`),El=l(n,"BR",{}),Tl=o(n,`
  Molestation`),kl=l(n,"BR",{}),Wl=o(n,`
  Money Laundering`),Vl=l(n,"BR",{}),Ol=o(n,`
  Motor Vehicle Theft`),Ml=l(n,"BR",{}),Gl=o(n,`
  Murder by a Federal Prisoner`),Ll=l(n,"BR",{}),Ul=o(n,`
  Murder Committed During Drug-related Drive-by shooting`),zl=l(n,"BR",{}),Hl=o(n,`
  Murder Committed in Federal Government Facility`),jl=l(n,"BR",{}),Nl=o(n,`
  Narcotics Violations`),Jl=l(n,"BR",{}),xl=o(n,`
  Obstructing Examination of Financial Institution`),Kl=l(n,"BR",{}),ql=o(n,`
  Obstruction of Court Orders`),Yl=l(n,"BR",{}),Zl=o(n,`
  Obstruction of Federal audit`),Ql=l(n,"BR",{}),Xl=o(n,`
  Obstruction of Justice`),$l=l(n,"BR",{}),ei=o(n,`
  Obstruction of Criminal Investigations`),ti=l(n,"BR",{}),ni=o(n,`
  Officer Failing to Make Reports`),ri=l(n,"BR",{}),li=o(n,`
  Partial Birth Abortion`),ii=l(n,"BR",{}),oi=o(n,`
  Penalties for Neglect or Refusal to Answer Subpoena`),si=l(n,"BR",{}),ai=o(n,`
  Peonage`),bi=l(n,"BR",{}),ui=o(n,`
  Perjury`),ci=l(n,"BR",{}),fi=o(n,`
  Picketing or Parading`),di=l(n,"BR",{}),mi=o(n,`
  Pirating`),gi=l(n,"BR",{}),Bi=o(n,`
  Possession by Restricted Persons`),Ri=l(n,"BR",{}),hi=o(n,`
  Possession of False Papers to Defraud the U.S.`),yi=l(n,"BR",{}),vi=o(n,`
  Possession of Narcotics`),Ci=l(n,"BR",{}),pi=o(n,`
  Possession of Child Pornography`),_i=l(n,"BR",{}),wi=o(n,`
  Private Correspondence with Foreign Government`),Ai=l(n,"BR",{}),Ii=o(n,`
  Probation Violation`),Pi=l(n,"BR",{}),Di=o(n,`
  Product Tampering`),Fi=l(n,"BR",{}),Si=o(n,`
  Prohibition of Illegal Gambling Businesses`),Ei=l(n,"BR",{}),Ti=o(n,`
  Prostitution`),ki=l(n,"BR",{}),Wi=o(n,`
  Protection of Foreign Officials`),Vi=l(n,"BR",{}),Oi=o(n,`
  Public Corruption Crimes`),Mi=l(n,"BR",{}),Gi=o(n,`
  Racketeering`),Li=l(n,"BR",{}),Ui=o(n,`
  Radiological Dispersal Devices`),zi=l(n,"BR",{}),Hi=o(n,`
  Ransom Money`),ji=l(n,"BR",{}),Ni=o(n,`
  Rape`),Ji=l(n,"BR",{}),xi=o(n,`
  Receiving the Proceeds of Extortion`),Ki=l(n,"BR",{}),qi=o(n,`
  Recording or Listening to Grand or Petit Juries While Deliberating`),Yi=l(n,"BR",{}),Zi=o(n,`
  Reentry of an Alien Removed on National Security Grounds`),Qi=l(n,"BR",{}),Xi=o(n,`
  Registration of Certain Organizations`),$i=l(n,"BR",{}),eo=o(n,`
  Reproduction of Citizenship Papers`),to=l(n,"BR",{}),no=o(n,`
  Resistance to Extradition Agent`),ro=l(n,"BR",{}),lo=o(n,`
  Rescue of Seized Property`),io=l(n,"BR",{}),oo=o(n,`
  Retaliating Against a Federal Judge by False Claim or Slander of Title`),so=l(n,"BR",{}),ao=o(n,`
  Retaliating Against a Witness, Victim, or an Informant`),bo=l(n,"BR",{}),uo=o(n,`
  Robbery`),co=l(n,"BR",{}),fo=o(n,`
  Robberies and Burglaries Involving Controlled Substances`),mo=l(n,"BR",{}),go=o(n,`
  Sabotage`),Bo=l(n,"BR",{}),Ro=o(n,`
  Sale of Citizenship Papers`),ho=l(n,"BR",{}),yo=o(n,`
  Sale of Stolen Vehicles`),vo=l(n,"BR",{}),Co=o(n,`
  Searches Without Warrant`),po=l(n,"BR",{}),_o=o(n,`
  Second Degree Murder`),wo=l(n,"BR",{}),Ao=o(n,`
  Serial Murders`),Io=l(n,"BR",{}),Po=o(n,`
  Sexual Abuse`),Do=l(n,"BR",{}),Fo=o(n,`
  Sexual Abuse of a Minor`),So=l(n,"BR",{}),Eo=o(n,`
  Sexual Assault`),To=l(n,"BR",{}),ko=o(n,`
  Sexual Battery`),Wo=l(n,"BR",{}),Vo=o(n,`
  Sexual Conduct with a Minor`),Oo=l(n,"BR",{}),Mo=o(n,`
  Sexual Exploitation`),Go=l(n,"BR",{}),Lo=o(n,`
  Sex Trafficking`),Uo=l(n,"BR",{}),zo=o(n,`
  Shoplifting`),Ho=l(n,"BR",{}),jo=o(n,`
  Smuggling`),No=l(n,"BR",{}),Jo=o(n,`
  Solicitation to Commit a Crime of Violence`),xo=l(n,"BR",{}),Ko=o(n,`
  Stalking (In Violation of Restraining Order)`),qo=l(n,"BR",{}),Yo=o(n,`
  Stolen Property; Buying, Receiving, or Possessing`),Zo=l(n,"BR",{}),Qo=o(n,`
  Subornation of Perjury`),Xo=l(n,"BR",{}),$o=o(n,`
  Suits Against Government Officials`),es=l(n,"BR",{}),ts=o(n,`
  Tampering with a Witness, Victim, or Informant`),ns=l(n,"BR",{}),rs=o(n,`
  Tampering with Consumer Products`),ls=l(n,"BR",{}),is=o(n,`
  Tampering with Vessels`),os=l(n,"BR",{}),ss=o(n,`
  Theft of Trade Secrets`),as=l(n,"BR",{}),bs=o(n,`
  Torture`),us=l(n,"BR",{}),cs=o(n,`
  Trafficking in Counterfeit Goods or Services`),fs=l(n,"BR",{}),ds=o(n,`
  Transmission of Wagering Information (Gambling)`),ms=l(n,"BR",{}),gs=o(n,`
  Transportation into State Prohibiting Sale`),Bs=l(n,"BR",{}),Rs=o(n,`
  Transportation of Slaves from U.S.`),hs=l(n,"BR",{}),ys=o(n,`
  Transportation of Stolen Vehicles`),vs=l(n,"BR",{}),Cs=o(n,`
  Transportation of Terrorists`),ps=l(n,"BR",{}),_s=o(n,`
  Trespassing`),ws=l(n,"BR",{}),As=o(n,`
  Treason`),Is=l(n,"BR",{}),Ps=o(n,`
  Unauthorized Removal of Classified Documents`),Ds=l(n,"BR",{}),Fs=o(n,`
  Use of Fire or Explosives to Destroy Property`),Ss=l(n,"BR",{}),Es=o(n,`
  Use of Weapons of Mass Destruction`),Ts=l(n,"BR",{}),ks=o(n,`
  Vandalism`),Ws=l(n,"BR",{}),Vs=o(n,`
  Video Voyeurism`),Os=l(n,"BR",{}),Ms=o(n,`
  Violation of Prohibitions Governing Atomic Weapons`),Gs=l(n,"BR",{}),Ls=o(n,`
  Violence at International airports`),Us=l(n,"BR",{}),zs=o(n,`
  Violent Crimes in Aid of Racketeering Activity`),Hs=l(n,"BR",{}),js=o(n,`
  Willful Wrecking of a Train Resulting in Death`),Ns=l(n,"BR",{}),Js=o(n,`
  Wire Fraud`),n.forEach(R),this.h()},h(){document.title="/accusations",m(e,"class","flex flex-col items-center justify-center text-white")},m(Ye,xs){Y(Ye,s,xs),Y(Ye,e,xs),t(e,c),t(e,g),t(e,u),t(e,f),t(e,B),t(e,d),t(e,h),t(e,y),t(e,w),t(e,O),t(e,T),t(e,S),t(e,A),t(e,M),t(e,ee),t(e,v),t(e,V),t(e,te),t(e,I),t(e,C),t(e,L),t(e,z),t(e,P),t(e,H),t(e,Be),t(e,j),t(e,se),t(e,Re),t(e,Z),t(e,he),t(e,pe),t(e,D),t(e,ne),t(e,ye),t(e,ae),t(e,be),t(e,Q),t(e,_e),t(e,re),t(e,we),t(e,Ae),t(e,Ie),t(e,ue),t(e,Pe),t(e,De),t(e,ce),t(e,Fe),t(e,Se),t(e,ve),t(e,oe),t(e,Ee),t(e,N),t(e,X),t(e,Te),t(e,fe),t(e,de),t(e,me),t(e,ke),t(e,U),t(e,Ue),t(e,ze),t(e,ge),t(e,le),t(e,He),t(e,J),t(e,We),t(e,_),t(e,$),t(e,a),t(e,ie),t(e,F),t(e,E),t(e,x),t(e,Ke),t(e,Ve),t(e,Xe),t(e,$e),t(e,K),t(e,je),t(e,et),t(e,tt),t(e,Ze),t(e,qe),t(e,nt),t(e,rt),t(e,lt),t(e,it),t(e,Oe),t(e,ot),t(e,st),t(e,at),t(e,bt),t(e,ht),t(e,yt),t(e,vt),t(e,Ct),t(e,pt),t(e,_t),t(e,wt),t(e,At),t(e,It),t(e,Pt),t(e,Dt),t(e,Ft),t(e,St),t(e,Et),t(e,Tt),t(e,kt),t(e,Wt),t(e,Vt),t(e,Ot),t(e,Mt),t(e,Gt),t(e,Lt),t(e,Ut),t(e,zt),t(e,Ht),t(e,jt),t(e,Nt),t(e,Jt),t(e,xt),t(e,Kt),t(e,qt),t(e,Yt),t(e,Zt),t(e,Qt),t(e,Xt),t(e,$t),t(e,en),t(e,tn),t(e,nn),t(e,rn),t(e,ln),t(e,on),t(e,sn),t(e,an),t(e,bn),t(e,un),t(e,cn),t(e,fn),t(e,dn),t(e,mn),t(e,gn),t(e,Bn),t(e,Rn),t(e,hn),t(e,yn),t(e,vn),t(e,Cn),t(e,pn),t(e,_n),t(e,wn),t(e,An),t(e,In),t(e,Pn),t(e,Dn),t(e,Fn),t(e,Sn),t(e,En),t(e,Tn),t(e,kn),t(e,Wn),t(e,Vn),t(e,On),t(e,Mn),t(e,Gn),t(e,Ln),t(e,Un),t(e,zn),t(e,Hn),t(e,jn),t(e,Nn),t(e,Jn),t(e,xn),t(e,Kn),t(e,qn),t(e,Yn),t(e,Zn),t(e,Qn),t(e,Xn),t(e,$n),t(e,er),t(e,tr),t(e,nr),t(e,rr),t(e,lr),t(e,ir),t(e,or),t(e,sr),t(e,ar),t(e,br),t(e,ur),t(e,cr),t(e,fr),t(e,dr),t(e,mr),t(e,gr),t(e,Br),t(e,Rr),t(e,hr),t(e,yr),t(e,vr),t(e,Cr),t(e,pr),t(e,_r),t(e,wr),t(e,Ar),t(e,Ir),t(e,Pr),t(e,Dr),t(e,Fr),t(e,Sr),t(e,Er),t(e,Tr),t(e,kr),t(e,Wr),t(e,Vr),t(e,Or),t(e,Mr),t(e,Gr),t(e,Lr),t(e,Ur),t(e,zr),t(e,Hr),t(e,jr),t(e,Nr),t(e,Jr),t(e,xr),t(e,Kr),t(e,qr),t(e,Yr),t(e,Zr),t(e,Qr),t(e,Xr),t(e,$r),t(e,el),t(e,tl),t(e,nl),t(e,rl),t(e,ll),t(e,il),t(e,ol),t(e,sl),t(e,al),t(e,bl),t(e,ul),t(e,cl),t(e,fl),t(e,dl),t(e,ml),t(e,gl),t(e,Bl),t(e,Rl),t(e,hl),t(e,yl),t(e,vl),t(e,Cl),t(e,pl),t(e,_l),t(e,wl),t(e,Al),t(e,Il),t(e,Pl),t(e,Dl),t(e,Fl),t(e,Sl),t(e,El),t(e,Tl),t(e,kl),t(e,Wl),t(e,Vl),t(e,Ol),t(e,Ml),t(e,Gl),t(e,Ll),t(e,Ul),t(e,zl),t(e,Hl),t(e,jl),t(e,Nl),t(e,Jl),t(e,xl),t(e,Kl),t(e,ql),t(e,Yl),t(e,Zl),t(e,Ql),t(e,Xl),t(e,$l),t(e,ei),t(e,ti),t(e,ni),t(e,ri),t(e,li),t(e,ii),t(e,oi),t(e,si),t(e,ai),t(e,bi),t(e,ui),t(e,ci),t(e,fi),t(e,di),t(e,mi),t(e,gi),t(e,Bi),t(e,Ri),t(e,hi),t(e,yi),t(e,vi),t(e,Ci),t(e,pi),t(e,_i),t(e,wi),t(e,Ai),t(e,Ii),t(e,Pi),t(e,Di),t(e,Fi),t(e,Si),t(e,Ei),t(e,Ti),t(e,ki),t(e,Wi),t(e,Vi),t(e,Oi),t(e,Mi),t(e,Gi),t(e,Li),t(e,Ui),t(e,zi),t(e,Hi),t(e,ji),t(e,Ni),t(e,Ji),t(e,xi),t(e,Ki),t(e,qi),t(e,Yi),t(e,Zi),t(e,Qi),t(e,Xi),t(e,$i),t(e,eo),t(e,to),t(e,no),t(e,ro),t(e,lo),t(e,io),t(e,oo),t(e,so),t(e,ao),t(e,bo),t(e,uo),t(e,co),t(e,fo),t(e,mo),t(e,go),t(e,Bo),t(e,Ro),t(e,ho),t(e,yo),t(e,vo),t(e,Co),t(e,po),t(e,_o),t(e,wo),t(e,Ao),t(e,Io),t(e,Po),t(e,Do),t(e,Fo),t(e,So),t(e,Eo),t(e,To),t(e,ko),t(e,Wo),t(e,Vo),t(e,Oo),t(e,Mo),t(e,Go),t(e,Lo),t(e,Uo),t(e,zo),t(e,Ho),t(e,jo),t(e,No),t(e,Jo),t(e,xo),t(e,Ko),t(e,qo),t(e,Yo),t(e,Zo),t(e,Qo),t(e,Xo),t(e,$o),t(e,es),t(e,ts),t(e,ns),t(e,rs),t(e,ls),t(e,is),t(e,os),t(e,ss),t(e,as),t(e,bs),t(e,us),t(e,cs),t(e,fs),t(e,ds),t(e,ms),t(e,gs),t(e,Bs),t(e,Rs),t(e,hs),t(e,ys),t(e,vs),t(e,Cs),t(e,ps),t(e,_s),t(e,ws),t(e,As),t(e,Is),t(e,Ps),t(e,Ds),t(e,Fs),t(e,Ss),t(e,Es),t(e,Ts),t(e,ks),t(e,Ws),t(e,Vs),t(e,Os),t(e,Ms),t(e,Gs),t(e,Ls),t(e,Us),t(e,zs),t(e,Hs),t(e,js),t(e,Ns),t(e,Js)},p:Ce,i:Ce,o:Ce,d(Ye){Ye&&R(s),Ye&&R(e)}}}class wa extends dt{constructor(s){super(),mt(this,s,null,_a,gt,{})}}function Aa(b){let s,e,c,g,u;return{c(){s=r("button"),e=r("img"),this.h()},l(f){s=l(f,"BUTTON",{class:!0});var B=p(s);e=l(B,"IMG",{src:!0,alt:!0,class:!0}),B.forEach(R),this.h()},h(){ua(e.src,c="/icons/close.svg")||m(e,"src",c),m(e,"alt","Close popup"),m(e,"class","rounded-full bg-dark_light p-2 duration-200 hover:scale-110 hover:bg-red-900 active:scale-90"),m(s,"class","absolute top-2 right-10 z-50")},m(f,B){Y(f,s,B),t(s,e),g||(u=Le(s,"click",function(){ut(b[0])&&b[0].apply(this,arguments)}),g=!0)},p(f,[B]){b=f},i:Ce,o:Ce,d(f){f&&R(s),g=!1,u()}}}function Ia(b,s,e){let{onClose:c}=s;return b.$$set=g=>{"onClose"in g&&e(0,c=g.onClose)},[c]}class Pa extends dt{constructor(s){super(),mt(this,s,Ia,Aa,gt,{onClose:0})}}function Da(b){let s,e,c,g;return{c(){s=r("div"),e=i("A professional"),c=i(b[0]),g=i("."),this.h()},l(u){s=l(u,"DIV",{class:!0});var f=p(s);e=o(f,"A professional"),c=o(f,b[0]),g=o(f,"."),f.forEach(R),this.h()},h(){m(s,"class","pb-10 text-xl")},m(u,f){Y(u,s,f),t(s,e),t(s,c),t(s,g)},p:Ce,i:Ce,o:Ce,d(u){u&&R(s)}}}function Fa(b){var s=[" peepeepoopoo master"," failure"," dumbass"," h lover"," h enjoyer","ly idot idot","ly dumb developer"," rock eater"],e=s[Math.floor(Math.random()*s.length)];return[e]}class Sa extends dt{constructor(s){super(),mt(this,s,Fa,Da,gt,{})}}function Ea(b){let s,e,c,g,u,f,B,d,h;return{c(){s=r("a"),e=r("button"),c=i("View false Accusations"),g=k(),u=r("a"),f=r("button"),B=i("View in a different page"),this.h()},l(y){s=l(y,"A",{class:!0});var w=p(s);e=l(w,"BUTTON",{class:!0});var O=p(e);c=o(O,"View false Accusations"),O.forEach(R),w.forEach(R),g=W(y),u=l(y,"A",{href:!0,class:!0});var T=p(u);f=l(T,"BUTTON",{class:!0});var S=p(f);B=o(S,"View in a different page"),S.forEach(R),T.forEach(R),this.h()},h(){m(e,"class","rounded-xl bg-blue-800 p-4 text-sm text-blue-200 duration-200 hover:scale-110 active:scale-90 sm:p-5 sm:text-base"),m(s,"class",""),m(f,"class","rounded-xl p-4 text-sm duration-200 hover:scale-110 hover:bg-dark_darker active:scale-90 sm:p-5 sm:text-base"),m(u,"href","/accusations"),m(u,"class","text-white")},m(y,w){Y(y,s,w),t(s,e),t(e,c),Y(y,g,w),Y(y,u,w),t(u,f),t(f,B),d||(h=Le(e,"click",b[2]),d=!0)},p:Ce,d(y){y&&R(s),y&&R(g),y&&R(u),d=!1,h()}}}function Ta(b){let s,e,c,g,u,f,B,d,h,y,w,O,T,S,A,M,ee,v,V,te,I,C,L,z,P,H,Be,j,se,Re,Z,he,pe,D,ne,ye=")",ae,be,Q,_e,re,we,Ae,Ie,ue,Pe,De,ce,Fe,Se,ve,oe,Ee,N,X,Te,fe,de,me,ke,U,Ue,ze,ge,le,He,J,We;return c=new fa({}),u=new da({}),M=new Sa({}),le=new pa({props:{show:b[0],unstyled:!1,closeButton:Pa,styleContent:{backgroundColor:"#121212",borderRadius:"0.75rem"},$$slots:{default:[Ea]},$$scope:{ctx:b}}}),J=new ma({}),{c(){s=k(),e=r("div"),Ne(c.$$.fragment),g=k(),Ne(u.$$.fragment),f=k(),B=r("div"),d=r("div"),h=r("div"),y=r("div"),w=i("User5522"),O=k(),T=r("div"),S=i("/Username5522"),A=k(),Ne(M.$$.fragment),ee=k(),v=r("div"),V=r("div"),te=i("Welcome to user5522.tk!"),I=k(),C=r("div"),L=i("It's a good website, because"),z=k(),P=r("div"),H=r("div"),Be=i("- It is made using "),j=r("a"),se=i("svelte"),Re=i(`\r
          &\r
          `),Z=r("a"),he=i("sveltekit"),pe=k(),D=r("div"),ne=i("- I made it :"),ae=i(ye),be=k(),Q=r("div"),_e=i(`- It's fully opensource on\r
          `),re=r("a"),we=i("github"),Ae=i(" (just like most of my projects)"),Ie=k(),ue=r("div"),Pe=i("- It's good looking (real)"),De=k(),ce=r("div"),Fe=i("- It'll support more languages soon\u2122"),Se=k(),ve=r("div"),oe=i("- I have nothing else to compliment, but maybe you do"),Ee=k(),N=r("div"),X=r("div"),Te=i("Note:"),fe=k(),de=r("div"),me=i(`I am NOT wanted in several countries for commiting any sort of federal\r
        crime.`),ke=k(),U=r("div"),Ue=i(`I am an innocent individual, and I definitely didn't commit any of these\r
        crimes:`),ze=k(),ge=r("div"),Ne(le.$$.fragment),He=k(),Ne(J.$$.fragment),this.h()},l(_){Qs('[data-svelte="svelte-1pdzvml"]',document.head).forEach(R),s=W(_),e=l(_,"DIV",{class:!0});var a=p(e);Qe(c.$$.fragment,a),g=W(a),Qe(u.$$.fragment,a),a.forEach(R),f=W(_),B=l(_,"DIV",{class:!0});var ie=p(B);d=l(ie,"DIV",{class:!0});var F=p(d);h=l(F,"DIV",{class:!0});var E=p(h);y=l(E,"DIV",{class:!0});var x=p(y);w=o(x,"User5522"),x.forEach(R),O=W(E),T=l(E,"DIV",{class:!0});var Ke=p(T);S=o(Ke,"/Username5522"),Ke.forEach(R),E.forEach(R),A=W(F),Qe(M.$$.fragment,F),ee=W(F),v=l(F,"DIV",{class:!0});var Ve=p(v);V=l(Ve,"DIV",{class:!0});var Xe=p(V);te=o(Xe,"Welcome to user5522.tk!"),Xe.forEach(R),I=W(Ve),C=l(Ve,"DIV",{class:!0});var $e=p(C);L=o($e,"It's a good website, because"),$e.forEach(R),z=W(Ve),P=l(Ve,"DIV",{});var K=p(P);H=l(K,"DIV",{});var je=p(H);Be=o(je,"- It is made using "),j=l(je,"A",{target:!0,href:!0});var et=p(j);se=o(et,"svelte"),et.forEach(R),Re=o(je,`\r
          &\r
          `),Z=l(je,"A",{target:!0,href:!0});var tt=p(Z);he=o(tt,"sveltekit"),tt.forEach(R),je.forEach(R),pe=W(K),D=l(K,"DIV",{});var Ze=p(D);ne=o(Ze,"- I made it :"),ae=o(Ze,ye),Ze.forEach(R),be=W(K),Q=l(K,"DIV",{});var qe=p(Q);_e=o(qe,`- It's fully opensource on\r
          `),re=l(qe,"A",{target:!0,href:!0});var nt=p(re);we=o(nt,"github"),nt.forEach(R),Ae=o(qe," (just like most of my projects)"),qe.forEach(R),Ie=W(K),ue=l(K,"DIV",{});var rt=p(ue);Pe=o(rt,"- It's good looking (real)"),rt.forEach(R),De=W(K),ce=l(K,"DIV",{});var lt=p(ce);Fe=o(lt,"- It'll support more languages soon\u2122"),lt.forEach(R),Se=W(K),ve=l(K,"DIV",{});var it=p(ve);oe=o(it,"- I have nothing else to compliment, but maybe you do"),it.forEach(R),K.forEach(R),Ve.forEach(R),Ee=W(F),N=l(F,"DIV",{class:!0});var Oe=p(N);X=l(Oe,"DIV",{class:!0});var ot=p(X);Te=o(ot,"Note:"),ot.forEach(R),fe=W(Oe),de=l(Oe,"DIV",{});var st=p(de);me=o(st,`I am NOT wanted in several countries for commiting any sort of federal\r
        crime.`),st.forEach(R),ke=W(Oe),U=l(Oe,"DIV",{class:!0});var at=p(U);Ue=o(at,`I am an innocent individual, and I definitely didn't commit any of these\r
        crimes:`),at.forEach(R),Oe.forEach(R),ze=W(F),ge=l(F,"DIV",{class:!0});var bt=p(ge);Qe(le.$$.fragment,bt),bt.forEach(R),F.forEach(R),He=W(ie),Qe(J.$$.fragment,ie),ie.forEach(R),this.h()},h(){document.title="Welcome",m(e,"class","bg-white"),m(y,"class","text-4xl"),m(T,"class","text-base"),m(h,"class","flex flex-row items-baseline"),m(V,"class","text-2xl"),m(C,"class","my-5 text-lg"),m(j,"target","_blank"),m(j,"href","https://svelte.dev/"),m(Z,"target","_blank"),m(Z,"href","https://kit.svelte.dev"),m(re,"target","_blank"),m(re,"href","https://github.com/user5522/user5522.github.io"),m(v,"class","flex flex-col items-center justify-center px-10"),m(X,"class","pt-10 text-xl"),m(U,"class","pb-10"),m(N,"class","px-10"),m(ge,"class","flex flex-row gap-4"),m(d,"class","flex flex-col items-center justify-center pb-20"),m(B,"class","bg-black pt-28")},m(_,$){Y(_,s,$),Y(_,e,$),Je(c,e,null),t(e,g),Je(u,e,null),Y(_,f,$),Y(_,B,$),t(B,d),t(d,h),t(h,y),t(y,w),t(h,O),t(h,T),t(T,S),t(d,A),Je(M,d,null),t(d,ee),t(d,v),t(v,V),t(V,te),t(v,I),t(v,C),t(C,L),t(v,z),t(v,P),t(P,H),t(H,Be),t(H,j),t(j,se),t(H,Re),t(H,Z),t(Z,he),t(P,pe),t(P,D),t(D,ne),t(D,ae),t(P,be),t(P,Q),t(Q,_e),t(Q,re),t(re,we),t(Q,Ae),t(P,Ie),t(P,ue),t(ue,Pe),t(P,De),t(P,ce),t(ce,Fe),t(P,Se),t(P,ve),t(ve,oe),t(d,Ee),t(d,N),t(N,X),t(X,Te),t(N,fe),t(N,de),t(de,me),t(N,ke),t(N,U),t(U,Ue),t(d,ze),t(d,ge),Je(le,ge,null),t(B,He),Je(J,B,null),We=!0},p(_,[$]){const a={};$&1&&(a.show=_[0]),$&8&&(a.$$scope={dirty:$,ctx:_}),le.$set(a)},i(_){We||(G(c.$$.fragment,_),G(u.$$.fragment,_),G(M.$$.fragment,_),G(le.$$.fragment,_),G(J.$$.fragment,_),We=!0)},o(_){q(c.$$.fragment,_),q(u.$$.fragment,_),q(M.$$.fragment,_),q(le.$$.fragment,_),q(J.$$.fragment,_),We=!1},d(_){_&&R(s),_&&R(e),xe(c),xe(u),_&&R(f),_&&R(B),xe(M),xe(le),xe(J)}}}function ka(b,s,e){let c;const g=ga(null);return ca(b,g,f=>e(0,c=f)),[c,g,()=>g.set(Xs(wa))]}class Ga extends dt{constructor(s){super(),mt(this,s,ka,Ta,gt,{})}}export{Ga as default};