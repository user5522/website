import {
  S as $a,
  i as Va,
  s as wa,
  o as Ma,
  a as i,
  k as a,
  w as Ge,
  q as o,
  W as La,
  h as r,
  c,
  l as s,
  m as l,
  x as Se,
  r as d,
  n as t,
  X as R,
  b as ye,
  y as Ce,
  G as e,
  _ as Ta,
  B as Aa,
  f as He,
  t as We,
  z as Re,
} from "../../../chunks/index-f851be7c.js";
import { N as Ga, F as Sa } from "../../../chunks/footer-2ac09e6b.js";
import { W as Ca } from "../../../chunks/waves_start-d68030a7.js";
function Ha(b, _) {
  async function h() {
    let k = _ ? document.querySelector(_).innerText : b.innerText;
    try {
      await navigator.clipboard.writeText(k),
        b.dispatchEvent(new CustomEvent("copysuccess", { bubbles: !0 }));
    } catch (ue) {
      b.dispatchEvent(
        new CustomEvent("copyerror", { bubbles: !0, detail: ue })
      );
    }
  }
  return (
    b.addEventListener("click", h),
    {
      destroy() {
        b.removeEventListener("click", h);
      },
    }
  );
}
function Wa(b) {
  return (
    Ma(() => {
      function _() {
        var h = new Date() - new Date(2006, 11, 24);
        (h /= 1e3 * 60 * 60 * 24 * 365),
          (document.getElementById("age").innerHTML =
            "<span>" +
            Math.floor(h) +
            "</span>." +
            (h % 1).toFixed(3).substring(2));
      }
      setInterval(_, 300);
    }),
    []
  );
}
class Ra extends $a {
  constructor(_) {
    super(), Va(this, _, Wa, null, wa, {});
  }
}
function Ua(b) {
  let _,
    h,
    k,
    ue,
    U,
    De,
    j,
    v,
    D,
    te,
    Ue,
    je,
    ae,
    qe,
    Be,
    $,
    V,
    Ne,
    q,
    qt,
    Fe,
    Pe,
    I,
    Je,
    B,
    Oe,
    se,
    ze,
    y,
    Xe,
    Ke,
    Qe,
    re,
    Ye,
    Ze,
    le,
    g,
    fe,
    et,
    tt,
    he,
    at,
    st,
    ge,
    rt,
    lt,
    me,
    it,
    ct,
    _e,
    nt,
    ot,
    ie,
    dt,
    vt,
    ce,
    u,
    Ie,
    ut,
    ft,
    pe,
    ht,
    gt,
    xe,
    mt,
    _t,
    Ee,
    It,
    pt,
    be,
    xt,
    Et,
    ke,
    bt,
    kt,
    ne,
    yt,
    oe,
    Dt,
    $t,
    N,
    Vt,
    wt,
    w,
    x,
    M,
    F,
    Bt,
    Mt,
    L,
    P,
    Nt,
    Lt,
    T,
    J,
    Ft,
    Tt,
    p,
    A,
    O,
    Pt,
    At,
    G,
    z,
    Jt,
    Gt,
    S,
    X,
    Ot,
    St,
    C,
    K,
    zt,
    Ct,
    de,
    Q,
    Ht,
    Y,
    Wt,
    $e,
    Z,
    Ve,
    Rt,
    Xt;
  return (
    (k = new Ga({})),
    (U = new Ca({})),
    (B = new Ra({})),
    (Z = new Sa({})),
    {
      c() {
        (_ = i()),
          (h = a("div")),
          Ge(k.$$.fragment),
          (ue = i()),
          Ge(U.$$.fragment),
          (De = i()),
          (j = a("div")),
          (v = a("div")),
          (D = a("div")),
          (te = a("p")),
          (Ue = o("User5522")),
          (je = i()),
          (ae = a("p")),
          (qe = o("/Username5522")),
          (Be = i()),
          ($ = a("div")),
          (V = a("div")),
          (Ne = o("Hi ")),
          (q = a("img")),
          (Fe = o(",")),
          (Pe = i()),
          (I = a("div")),
          (Je = o(`I'm Oueslati, a
        `)),
          Ge(B.$$.fragment),
          (Oe = i()),
          (se = a("div")),
          (ze = o(`
        year old`)),
          (y = a("a")),
          (Xe = o("Tunisian")),
          (Ke = o(" guy & I like coding")),
          (Qe = i()),
          (re = a("div")),
          (Ye = o("What I like doing:")),
          (Ze = i()),
          (le = a("div")),
          (g = a("div")),
          (fe = a("div")),
          (et = o("- Uhhhhhhhhhhhhh")),
          (tt = i()),
          (he = a("div")),
          (at = o("- Literally nothing (for a fair amount of time)")),
          (st = i()),
          (ge = a("div")),
          (rt = o("- Breathing air (abnormal capability)")),
          (lt = i()),
          (me = a("div")),
          (it = o("- Learning stuff")),
          (ct = i()),
          (_e = a("div")),
          (nt = o("- Making useless lists")),
          (ot = i()),
          (ie = a("div")),
          (dt = o("What I learnt so far:")),
          (vt = i()),
          (ce = a("div")),
          (u = a("div")),
          (Ie = a("div")),
          (ut = o("- HTML, CSS & Javascript")),
          (ft = i()),
          (pe = a("div")),
          (ht = o("- Svelte, I think")),
          (gt = i()),
          (xe = a("div")),
          (mt = o("- React, a little")),
          (_t = i()),
          (Ee = a("div")),
          (It = o("- React Native, also a little")),
          (pt = i()),
          (be = a("div")),
          (xt = o("- Rust, very basic knowledge")),
          (Et = i()),
          (ke = a("div")),
          (bt = o("- How to be funny (I'm lying)")),
          (kt = i()),
          (ne = a("div")),
          (yt = o("- Making logos, I think (maybe) ")),
          (oe = a("a")),
          (Dt = o("(did u check these ?)")),
          ($t = i()),
          (N = a("div")),
          (Vt = o("Links")),
          (wt = i()),
          (w = a("div")),
          (x = a("div")),
          (M = a("a")),
          (F = a("img")),
          (Mt = i()),
          (L = a("a")),
          (P = a("img")),
          (Lt = i()),
          (T = a("a")),
          (J = a("img")),
          (Tt = i()),
          (p = a("div")),
          (A = a("a")),
          (O = a("img")),
          (At = i()),
          (G = a("a")),
          (z = a("img")),
          (Gt = i()),
          (S = a("a")),
          (X = a("img")),
          (St = i()),
          (C = a("a")),
          (K = a("img")),
          (Ct = i()),
          (de = a("div")),
          (Q = a("div")),
          (Ht = o(`for any suggestions/reports email me @
        `)),
          (Y = a("div")),
          (Wt = o("oueslatim268@gmail.com")),
          ($e = i()),
          Ge(Z.$$.fragment),
          this.h();
      },
      l(n) {
        La("svelte-17r7ob3", document.head).forEach(r),
          (_ = c(n)),
          (h = s(n, "DIV", { class: !0 }));
        var we = l(h);
        Se(k.$$.fragment, we),
          (ue = c(we)),
          Se(U.$$.fragment, we),
          we.forEach(r),
          (De = c(n)),
          (j = s(n, "DIV", { class: !0 }));
        var Kt = l(j);
        v = s(Kt, "DIV", { class: !0 });
        var f = l(v);
        D = s(f, "DIV", { class: !0 });
        var Me = l(D);
        te = s(Me, "P", { class: !0 });
        var Qt = l(te);
        (Ue = d(Qt, "User5522")),
          Qt.forEach(r),
          (je = c(Me)),
          (ae = s(Me, "P", { class: !0 }));
        var Yt = l(ae);
        (qe = d(Yt, "/Username5522")),
          Yt.forEach(r),
          Me.forEach(r),
          (Be = c(f)),
          ($ = s(f, "DIV", { class: !0 }));
        var Le = l($);
        V = s(Le, "DIV", { class: !0 });
        var Te = l(V);
        (Ne = d(Te, "Hi ")),
          (q = s(Te, "IMG", { src: !0, alt: !0, class: !0 })),
          (Fe = d(Te, ",")),
          Te.forEach(r),
          (Pe = c(Le)),
          (I = s(Le, "DIV", { class: !0 }));
        var H = l(I);
        (Je = d(
          H,
          `I'm Oueslati, a
        `
        )),
          Se(B.$$.fragment, H),
          (Oe = c(H)),
          (se = s(H, "DIV", { id: !0, class: !0 })),
          l(se).forEach(r),
          (ze = d(
            H,
            `
        year old`
          )),
          (y = s(H, "A", { href: !0, target: !0, rel: !0, class: !0 }));
        var Zt = l(y);
        (Xe = d(Zt, "Tunisian")),
          Zt.forEach(r),
          (Ke = d(H, " guy & I like coding")),
          H.forEach(r),
          Le.forEach(r),
          (Qe = c(f)),
          (re = s(f, "DIV", { class: !0 }));
        var ea = l(re);
        (Ye = d(ea, "What I like doing:")),
          ea.forEach(r),
          (Ze = c(f)),
          (le = s(f, "DIV", { class: !0 }));
        var ta = l(le);
        g = s(ta, "DIV", { class: !0 });
        var E = l(g);
        fe = s(E, "DIV", {});
        var aa = l(fe);
        (et = d(aa, "- Uhhhhhhhhhhhhh")),
          aa.forEach(r),
          (tt = c(E)),
          (he = s(E, "DIV", {}));
        var sa = l(he);
        (at = d(sa, "- Literally nothing (for a fair amount of time)")),
          sa.forEach(r),
          (st = c(E)),
          (ge = s(E, "DIV", {}));
        var ra = l(ge);
        (rt = d(ra, "- Breathing air (abnormal capability)")),
          ra.forEach(r),
          (lt = c(E)),
          (me = s(E, "DIV", {}));
        var la = l(me);
        (it = d(la, "- Learning stuff")),
          la.forEach(r),
          (ct = c(E)),
          (_e = s(E, "DIV", {}));
        var ia = l(_e);
        (nt = d(ia, "- Making useless lists")),
          ia.forEach(r),
          E.forEach(r),
          ta.forEach(r),
          (ot = c(f)),
          (ie = s(f, "DIV", { class: !0 }));
        var ca = l(ie);
        (dt = d(ca, "What I learnt so far:")),
          ca.forEach(r),
          (vt = c(f)),
          (ce = s(f, "DIV", { class: !0 }));
        var na = l(ce);
        u = s(na, "DIV", { class: !0 });
        var m = l(u);
        Ie = s(m, "DIV", {});
        var oa = l(Ie);
        (ut = d(oa, "- HTML, CSS & Javascript")),
          oa.forEach(r),
          (ft = c(m)),
          (pe = s(m, "DIV", {}));
        var da = l(pe);
        (ht = d(da, "- Svelte, I think")),
          da.forEach(r),
          (gt = c(m)),
          (xe = s(m, "DIV", {}));
        var va = l(xe);
        (mt = d(va, "- React, a little")),
          va.forEach(r),
          (_t = c(m)),
          (Ee = s(m, "DIV", {}));
        var ua = l(Ee);
        (It = d(ua, "- React Native, also a little")),
          ua.forEach(r),
          (pt = c(m)),
          (be = s(m, "DIV", {}));
        var fa = l(be);
        (xt = d(fa, "- Rust, very basic knowledge")),
          fa.forEach(r),
          (Et = c(m)),
          (ke = s(m, "DIV", {}));
        var ha = l(ke);
        (bt = d(ha, "- How to be funny (I'm lying)")),
          ha.forEach(r),
          (kt = c(m)),
          (ne = s(m, "DIV", {}));
        var Ut = l(ne);
        (yt = d(Ut, "- Making logos, I think (maybe) ")),
          (oe = s(Ut, "A", { href: !0 }));
        var ga = l(oe);
        (Dt = d(ga, "(did u check these ?)")),
          ga.forEach(r),
          Ut.forEach(r),
          m.forEach(r),
          na.forEach(r),
          ($t = c(f)),
          (N = s(f, "DIV", { id: !0, class: !0 }));
        var ma = l(N);
        (Vt = d(ma, "Links")),
          ma.forEach(r),
          (wt = c(f)),
          (w = s(f, "DIV", { class: !0 }));
        var Ae = l(w);
        x = s(Ae, "DIV", { class: !0 });
        var ve = l(x);
        M = s(ve, "A", { href: !0, class: !0, target: !0 });
        var _a = l(M);
        (F = s(_a, "IMG", { src: !0, alt: !0, class: !0 })),
          _a.forEach(r),
          (Mt = c(ve)),
          (L = s(ve, "A", { href: !0, class: !0, target: !0 }));
        var Ia = l(L);
        (P = s(Ia, "IMG", { src: !0, alt: !0, class: !0 })),
          Ia.forEach(r),
          (Lt = c(ve)),
          (T = s(ve, "A", { href: !0, class: !0, target: !0 }));
        var pa = l(T);
        (J = s(pa, "IMG", { src: !0, alt: !0, class: !0 })),
          pa.forEach(r),
          ve.forEach(r),
          (Tt = c(Ae)),
          (p = s(Ae, "DIV", { class: !0 }));
        var W = l(p);
        A = s(W, "A", { href: !0, class: !0, target: !0 });
        var xa = l(A);
        (O = s(xa, "IMG", { src: !0, alt: !0, class: !0 })),
          xa.forEach(r),
          (At = c(W)),
          (G = s(W, "A", { href: !0, class: !0, target: !0 }));
        var Ea = l(G);
        (z = s(Ea, "IMG", { src: !0, alt: !0, class: !0 })),
          Ea.forEach(r),
          (Gt = c(W)),
          (S = s(W, "A", { href: !0, class: !0, target: !0 }));
        var ba = l(S);
        (X = s(ba, "IMG", { src: !0, alt: !0, class: !0 })),
          ba.forEach(r),
          (St = c(W)),
          (C = s(W, "A", { href: !0, class: !0, target: !0 }));
        var ka = l(C);
        (K = s(ka, "IMG", { src: !0, alt: !0, class: !0 })),
          ka.forEach(r),
          W.forEach(r),
          Ae.forEach(r),
          (Ct = c(f)),
          (de = s(f, "DIV", { class: !0 }));
        var ya = l(de);
        Q = s(ya, "DIV", { class: !0 });
        var jt = l(Q);
        (Ht = d(
          jt,
          `for any suggestions/reports email me @
        `
        )),
          (Y = s(jt, "DIV", { class: !0 }));
        var Da = l(Y);
        (Wt = d(Da, "oueslatim268@gmail.com")),
          Da.forEach(r),
          jt.forEach(r),
          ya.forEach(r),
          f.forEach(r),
          Kt.forEach(r),
          ($e = c(n)),
          Se(Z.$$.fragment, n),
          this.h();
      },
      h() {
        (document.title = "/about"),
          t(h, "class", "bg-white"),
          t(te, "class", "text-4xl"),
          t(ae, "class", "text-base"),
          t(D, "class", "flex flex-row items-baseline"),
          R(q.src, (qt = "/twemojis/wavinghand.svg")) || t(q, "src", qt),
          t(q, "alt", "waving hand sign emote"),
          t(q, "class", "inline-block h-7"),
          t(V, "class", "text-xl"),
          t(se, "id", "age"),
          t(se, "class", "inline-block"),
          t(y, "href", "https://google.com/search?q=Tunisia"),
          t(y, "target", "_blank"),
          t(y, "rel", "noreferrer"),
          t(y, "class", "px-1"),
          t(I, "class", "text-xl"),
          t($, "class", "px-5 pb-16"),
          t(re, "class", "text-2xl"),
          t(g, "class", "text-lg"),
          t(le, "class", "flex flex-col items-center justify-center py-5"),
          t(ie, "class", "text-2xl"),
          t(oe, "href", "/projects/banners#Logos"),
          t(u, "class", "text-lg"),
          t(ce, "class", "flex flex-col items-center justify-center py-5"),
          t(N, "id", "Links"),
          t(N, "class", "my-5 text-2xl"),
          R(F.src, (Bt = "///logos/youtube.svg")) || t(F, "src", Bt),
          t(F, "alt", "youtube link"),
          t(F, "class", "h-10"),
          t(M, "href", "/links/yt"),
          t(M, "class", "duration-200 hover:scale-110 active:scale-90"),
          t(M, "target", "blank"),
          R(P.src, (Nt = "///logos/discord.svg")) || t(P, "src", Nt),
          t(P, "alt", "discord link"),
          t(P, "class", "h-10"),
          t(L, "href", "/links/discord"),
          t(L, "class", "duration-200 hover:scale-110 active:scale-90"),
          t(L, "target", "blank"),
          R(J.src, (Ft = "///logos/xbox.svg")) || t(J, "src", Ft),
          t(J, "alt", "xbox link"),
          t(J, "class", "h-10"),
          t(T, "href", "/links/xbox"),
          t(T, "class", "duration-200 hover:scale-110 active:scale-90"),
          t(T, "target", "blank"),
          t(x, "class", "flex flex-row items-center gap-5"),
          R(O.src, (Pt = "///logos/twitter.svg")) || t(O, "src", Pt),
          t(O, "alt", "twitter link"),
          t(O, "class", "h-10"),
          t(A, "href", "/links/twitter"),
          t(A, "class", "duration-200 hover:scale-110 active:scale-90"),
          t(A, "target", "blank"),
          R(z.src, (Jt = "///logos/steam.svg")) || t(z, "src", Jt),
          t(z, "alt", "steam link"),
          t(z, "class", "h-10"),
          t(G, "href", "/links/steam"),
          t(G, "class", "duration-200 hover:scale-110 active:scale-90"),
          t(G, "target", "blank"),
          R(X.src, (Ot = "///logos/github.svg")) || t(X, "src", Ot),
          t(X, "alt", "github link"),
          t(X, "class", "h-10"),
          t(S, "href", "/links/github"),
          t(S, "class", "duration-200 hover:scale-110 active:scale-90"),
          t(S, "target", "blank"),
          R(K.src, (zt = "///logos/reddit.svg")) || t(K, "src", zt),
          t(K, "alt", "reddit link"),
          t(K, "class", "h-10"),
          t(C, "href", "/links/reddit"),
          t(C, "class", "duration-200 hover:scale-110 active:scale-90"),
          t(C, "target", "blank"),
          t(p, "class", "flex flex-row items-center gap-5"),
          t(w, "class", "flex flex-col items-center gap-5"),
          t(
            Y,
            "class",
            "inline-block rounded-lg bg-dark p-1 duration-200 hover:scale-105 active:scale-95"
          ),
          t(Q, "class", "px-5"),
          t(de, "class", "pt-10"),
          t(v, "class", "flex flex-col items-center justify-center pb-20"),
          t(j, "class", "init-div px-5");
      },
      m(n, ee) {
        ye(n, _, ee),
          ye(n, h, ee),
          Ce(k, h, null),
          e(h, ue),
          Ce(U, h, null),
          ye(n, De, ee),
          ye(n, j, ee),
          e(j, v),
          e(v, D),
          e(D, te),
          e(te, Ue),
          e(D, je),
          e(D, ae),
          e(ae, qe),
          e(v, Be),
          e(v, $),
          e($, V),
          e(V, Ne),
          e(V, q),
          e(V, Fe),
          e($, Pe),
          e($, I),
          e(I, Je),
          Ce(B, I, null),
          e(I, Oe),
          e(I, se),
          e(I, ze),
          e(I, y),
          e(y, Xe),
          e(I, Ke),
          e(v, Qe),
          e(v, re),
          e(re, Ye),
          e(v, Ze),
          e(v, le),
          e(le, g),
          e(g, fe),
          e(fe, et),
          e(g, tt),
          e(g, he),
          e(he, at),
          e(g, st),
          e(g, ge),
          e(ge, rt),
          e(g, lt),
          e(g, me),
          e(me, it),
          e(g, ct),
          e(g, _e),
          e(_e, nt),
          e(v, ot),
          e(v, ie),
          e(ie, dt),
          e(v, vt),
          e(v, ce),
          e(ce, u),
          e(u, Ie),
          e(Ie, ut),
          e(u, ft),
          e(u, pe),
          e(pe, ht),
          e(u, gt),
          e(u, xe),
          e(xe, mt),
          e(u, _t),
          e(u, Ee),
          e(Ee, It),
          e(u, pt),
          e(u, be),
          e(be, xt),
          e(u, Et),
          e(u, ke),
          e(ke, bt),
          e(u, kt),
          e(u, ne),
          e(ne, yt),
          e(ne, oe),
          e(oe, Dt),
          e(v, $t),
          e(v, N),
          e(N, Vt),
          e(v, wt),
          e(v, w),
          e(w, x),
          e(x, M),
          e(M, F),
          e(x, Mt),
          e(x, L),
          e(L, P),
          e(x, Lt),
          e(x, T),
          e(T, J),
          e(w, Tt),
          e(w, p),
          e(p, A),
          e(A, O),
          e(p, At),
          e(p, G),
          e(G, z),
          e(p, Gt),
          e(p, S),
          e(S, X),
          e(p, St),
          e(p, C),
          e(C, K),
          e(v, Ct),
          e(v, de),
          e(de, Q),
          e(Q, Ht),
          e(Q, Y),
          e(Y, Wt),
          ye(n, $e, ee),
          Ce(Z, n, ee),
          (Ve = !0),
          Rt || ((Xt = Ta(Ha.call(null, Y))), (Rt = !0));
      },
      p: Aa,
      i(n) {
        Ve ||
          (He(k.$$.fragment, n),
          He(U.$$.fragment, n),
          He(B.$$.fragment, n),
          He(Z.$$.fragment, n),
          (Ve = !0));
      },
      o(n) {
        We(k.$$.fragment, n),
          We(U.$$.fragment, n),
          We(B.$$.fragment, n),
          We(Z.$$.fragment, n),
          (Ve = !1);
      },
      d(n) {
        n && r(_),
          n && r(h),
          Re(k),
          Re(U),
          n && r(De),
          n && r(j),
          Re(B),
          n && r($e),
          Re(Z, n),
          (Rt = !1),
          Xt();
      },
    }
  );
}
class Na extends $a {
  constructor(_) {
    super(), Va(this, _, null, Ua, wa, {});
  }
}
export { Na as default };
