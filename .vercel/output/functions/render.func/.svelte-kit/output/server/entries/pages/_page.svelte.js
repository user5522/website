import { c as create_ssr_component, e as escape, d as add_attribute, b as each, i as identity, h as createEventDispatcher, o as onDestroy, s as setContext, j as null_to_empty, v as validate_component, m as missing_component, f as subscribe } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
const SvelteSeo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = void 0 } = $$props;
  let { noindex = false } = $$props;
  let { nofollow = false } = $$props;
  let { description = void 0 } = $$props;
  let { keywords = void 0 } = $$props;
  let { canonical = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { jsonLd = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0)
    $$bindings.noindex(noindex);
  if ($$props.nofollow === void 0 && $$bindings.nofollow && nofollow !== void 0)
    $$bindings.nofollow(nofollow);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.jsonLd === void 0 && $$bindings.jsonLd && jsonLd !== void 0)
    $$bindings.jsonLd(jsonLd);
  return `${$$result.head += `<!-- HEAD_svelte-1q8xl96_START -->${title ? `${$$result.title = `<title>${escape(title)}</title>`, ""}` : ``}<meta name="${"robots"}"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)}><meta name="${"googlebot"}"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)}>${description ? `<meta name="${"description"}"${add_attribute("content", description, 0)}>` : ``}${canonical ? `<link rel="${"canonical"}"${add_attribute("href", canonical, 0)}>` : ``}${keywords ? `<meta name="${"keywords"}"${add_attribute("content", keywords, 0)}>` : ``}${openGraph ? `${openGraph.title ? `<meta property="${"og:title"}"${add_attribute("content", openGraph.title, 0)}>` : ``}

    ${openGraph.description ? `<meta property="${"og:description"}"${add_attribute("content", openGraph.description, 0)}>` : ``}

    ${openGraph.url || canonical ? `<meta property="${"og:url"}"${add_attribute("content", openGraph.url || canonical, 0)}>` : ``}

    ${openGraph.type ? `<meta property="${"og:type"}"${add_attribute("content", openGraph.type.toLowerCase(), 0)}>` : ``}

    ${openGraph.article ? `${openGraph.article.publishedTime ? `<meta property="${"article:published_time"}"${add_attribute("content", openGraph.article.publishedTime, 0)}>` : ``}

      ${openGraph.article.modifiedTime ? `<meta property="${"article:modified_time"}"${add_attribute("content", openGraph.article.modifiedTime, 0)}>` : ``}

      ${openGraph.article.expirationTime ? `<meta property="${"article:expiration_time"}"${add_attribute("content", openGraph.article.expirationTime, 0)}>` : ``}

      ${openGraph.article.section ? `<meta property="${"article:section"}"${add_attribute("content", openGraph.article.section, 0)}>` : ``}

      ${openGraph.article.authors && openGraph.article.authors.length ? `${each(openGraph.article.authors, (author) => {
    return `<meta property="${"article:author"}"${add_attribute("content", author, 0)}>`;
  })}` : ``}

      ${openGraph.article.tags && openGraph.article.tags.length ? `${each(openGraph.article.tags, (tag) => {
    return `<meta property="${"article:tag"}"${add_attribute("content", tag, 0)}>`;
  })}` : ``}` : ``}

    ${openGraph.images && openGraph.images.length ? `${each(openGraph.images, (image) => {
    return `<meta property="${"og:image"}"${add_attribute("content", image.url, 0)}>
        ${image.alt ? `<meta property="${"og:image:alt"}"${add_attribute("content", image.alt, 0)}>` : ``}
        ${image.width ? `<meta property="${"og:image:width"}"${add_attribute("content", image.width.toString(), 0)}>` : ``}
        ${image.height ? `<meta property="${"og:image:height"}"${add_attribute("content", image.height.toString(), 0)}>` : ``}`;
  })}` : ``}` : ``}${twitter ? `<meta name="${"twitter:card"}"${add_attribute("content", twitter.card || "summary_large_image", 0)}>
    ${twitter.site ? `<meta name="${"twitter:site"}"${add_attribute("content", twitter.site, 0)}>` : ``}
    ${twitter.title ? `<meta name="${"twitter:title"}"${add_attribute("content", twitter.title, 0)}>` : ``}
    ${twitter.description ? `<meta name="${"twitter:description"}"${add_attribute("content", twitter.description, 0)}>` : ``}
    ${twitter.image ? `<meta name="${"twitter:image"}"${add_attribute("content", twitter.image, 0)}>` : ``}
     ${twitter.imageAlt ? `<meta name="${"twitter:image:alt"}"${add_attribute("content", twitter.imageAlt, 0)}>` : ``}
    ${twitter.player ? `<meta name="${"twitter:player"}"${add_attribute("content", twitter.player, 0)}>` : ``}
     ${twitter.playerWidth ? `<meta name="${"twitter:player:width"}"${add_attribute("content", twitter.playerWidth, 0)}>` : ``}
    ${twitter.playerHeight ? `<meta name="${"twitter:player:height"}"${add_attribute("content", twitter.playerHeight, 0)}>` : ``}` : ``}${jsonLd ? `<!-- HTML_TAG_START -->${`<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    ...jsonLd
  }) + "<"}/script>`}<!-- HTML_TAG_END -->` : ``}${slots.default ? slots.default({}) : ``}<!-- HEAD_svelte-1q8xl96_END -->`, ""}`;
});
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const Modal_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-n7cvum{box-sizing:border-box}.bg.svelte-n7cvum{position:fixed;z-index:1000;top:0;left:0;display:flex;flex-direction:column;justify-content:center;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.66)}@supports (-webkit-touch-callout: none){}.wrap.svelte-n7cvum{position:relative;margin:2rem;max-height:100%}.window.svelte-n7cvum{position:relative;width:40rem;max-width:100%;max-height:100%;margin:2rem auto;color:black;border-radius:0.5rem;background:white}.content.svelte-n7cvum{position:relative;padding:1rem;max-height:calc(100vh - 4rem);overflow:auto}.close.svelte-n7cvum{display:block;box-sizing:border-box;position:absolute;z-index:1000;top:1rem;right:1rem;margin:0;padding:0;width:1.5rem;height:1.5rem;border:0;color:black;border-radius:1.5rem;background:white;box-shadow:0 0 0 1px black;transition:transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);-webkit-appearance:none}.close.svelte-n7cvum:before,.close.svelte-n7cvum:after{content:'';display:block;box-sizing:border-box;position:absolute;top:50%;width:1rem;height:1px;background:black;transform-origin:center;transition:height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)}.close.svelte-n7cvum:before{-webkit-transform:translate(0, -50%) rotate(45deg);-moz-transform:translate(0, -50%) rotate(45deg);transform:translate(0, -50%) rotate(45deg);left:0.25rem}.close.svelte-n7cvum:after{-webkit-transform:translate(0, -50%) rotate(-45deg);-moz-transform:translate(0, -50%) rotate(-45deg);transform:translate(0, -50%) rotate(-45deg);left:0.25rem}.close.svelte-n7cvum:hover{background:black}.close.svelte-n7cvum:hover:before,.close.svelte-n7cvum:hover:after{height:2px;background:white}.close.svelte-n7cvum:focus{border-color:#3399ff;box-shadow:0 0 0 2px #3399ff}.close.svelte-n7cvum:active{transform:scale(0.9)}.close.svelte-n7cvum:hover,.close.svelte-n7cvum:focus,.close.svelte-n7cvum:active{outline:none}",
  map: null
};
function bind(Component, props = {}) {
  return function ModalComponent(options) {
    return new Component({
      ...options,
      props: { ...props, ...options.props }
    });
  };
}
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  const baseSetContext = setContext;
  const baseIsTabbable = (node) => node.tabIndex >= 0 && !node.hidden && !node.disabled && node.style.display !== "none" && node.type !== "hidden" && Boolean(node.offsetWidth || node.offsetHeight || node.getClientRects().length);
  let { isTabbable = baseIsTabbable } = $$props;
  let { show = null } = $$props;
  let { key = "simple-modal" } = $$props;
  let { ariaLabel = null } = $$props;
  let { ariaLabelledBy = null } = $$props;
  let { closeButton = true } = $$props;
  let { closeOnEsc = true } = $$props;
  let { closeOnOuterClick = true } = $$props;
  let { styleBg = {} } = $$props;
  let { styleWindowWrap = {} } = $$props;
  let { styleWindow = {} } = $$props;
  let { styleContent = {} } = $$props;
  let { styleCloseButton = {} } = $$props;
  let { classBg = null } = $$props;
  let { classWindowWrap = null } = $$props;
  let { classWindow = null } = $$props;
  let { classContent = null } = $$props;
  let { classCloseButton = null } = $$props;
  let { unstyled = false } = $$props;
  let { setContext: setContext$1 = baseSetContext } = $$props;
  let { transitionBg = fade } = $$props;
  let { transitionBgProps = { duration: 250 } } = $$props;
  let { transitionWindow = transitionBg } = $$props;
  let { transitionWindowProps = transitionBgProps } = $$props;
  let { disableFocusTrap = false } = $$props;
  const defaultState = {
    ariaLabel,
    ariaLabelledBy,
    closeButton,
    closeOnEsc,
    closeOnOuterClick,
    styleBg,
    styleWindowWrap,
    styleWindow,
    styleContent,
    styleCloseButton,
    classBg,
    classWindowWrap,
    classWindow,
    classContent,
    classCloseButton,
    transitionBg,
    transitionBgProps,
    transitionWindow,
    transitionWindowProps,
    disableFocusTrap,
    isTabbable,
    unstyled
  };
  let state = { ...defaultState };
  let Component = null;
  let background;
  let wrap;
  let modalWindow;
  let scrollY;
  let cssBg;
  let cssWindowWrap;
  let cssWindow;
  let cssContent;
  let cssCloseButton;
  let prevBodyPosition;
  let prevBodyOverflow;
  let prevBodyWidth;
  const camelCaseToDash = (str) => str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
  const toCssString = (props) => props ? Object.keys(props).reduce((str, key2) => `${str}; ${camelCaseToDash(key2)}: ${props[key2]}`, "") : "";
  const isFunction = (f) => !!(f && f.constructor && f.call && f.apply);
  const updateStyleTransition = () => {
    cssBg = toCssString(Object.assign(
      {},
      {
        width: window.innerWidth,
        height: window.innerHeight
      },
      state.styleBg
    ));
    cssWindowWrap = toCssString(state.styleWindowWrap);
    cssWindow = toCssString(state.styleWindow);
    cssContent = toCssString(state.styleContent);
    cssCloseButton = toCssString(state.styleCloseButton);
    state.transitionBg;
    state.transitionWindow;
  };
  const toVoid = () => {
  };
  let onClose = toVoid;
  let onClosed = toVoid;
  const open = (NewComponent, newProps = {}, options = {}, callbacks = {}) => {
    Component = bind(NewComponent, newProps);
    state = { ...defaultState, ...options };
    updateStyleTransition();
    disableScroll();
    onClose = (event) => {
      if (callbacks.onClose)
        callbacks.onClose(event);
      dispatch("close");
      dispatch("closing");
    };
    onClosed = (event) => {
      if (callbacks.onClosed)
        callbacks.onClosed(event);
      dispatch("closed");
    };
  };
  const close = (callbacks = {}) => {
    if (!Component)
      return;
    onClose = callbacks.onClose || onClose;
    onClosed = callbacks.onClosed || onClosed;
    Component = null;
    enableScroll();
  };
  const disableScroll = () => {
    scrollY = window.scrollY;
    prevBodyPosition = document.body.style.position;
    prevBodyOverflow = document.body.style.overflow;
    prevBodyWidth = document.body.style.width;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
  };
  const enableScroll = () => {
    document.body.style.position = prevBodyPosition || "";
    document.body.style.top = "";
    document.body.style.overflow = prevBodyOverflow || "";
    document.body.style.width = prevBodyWidth || "";
    window.scrollTo(0, scrollY);
  };
  const context = { open, close };
  setContext$1(key, context);
  onDestroy(() => {
  });
  if ($$props.isTabbable === void 0 && $$bindings.isTabbable && isTabbable !== void 0)
    $$bindings.isTabbable(isTabbable);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.ariaLabelledBy === void 0 && $$bindings.ariaLabelledBy && ariaLabelledBy !== void 0)
    $$bindings.ariaLabelledBy(ariaLabelledBy);
  if ($$props.closeButton === void 0 && $$bindings.closeButton && closeButton !== void 0)
    $$bindings.closeButton(closeButton);
  if ($$props.closeOnEsc === void 0 && $$bindings.closeOnEsc && closeOnEsc !== void 0)
    $$bindings.closeOnEsc(closeOnEsc);
  if ($$props.closeOnOuterClick === void 0 && $$bindings.closeOnOuterClick && closeOnOuterClick !== void 0)
    $$bindings.closeOnOuterClick(closeOnOuterClick);
  if ($$props.styleBg === void 0 && $$bindings.styleBg && styleBg !== void 0)
    $$bindings.styleBg(styleBg);
  if ($$props.styleWindowWrap === void 0 && $$bindings.styleWindowWrap && styleWindowWrap !== void 0)
    $$bindings.styleWindowWrap(styleWindowWrap);
  if ($$props.styleWindow === void 0 && $$bindings.styleWindow && styleWindow !== void 0)
    $$bindings.styleWindow(styleWindow);
  if ($$props.styleContent === void 0 && $$bindings.styleContent && styleContent !== void 0)
    $$bindings.styleContent(styleContent);
  if ($$props.styleCloseButton === void 0 && $$bindings.styleCloseButton && styleCloseButton !== void 0)
    $$bindings.styleCloseButton(styleCloseButton);
  if ($$props.classBg === void 0 && $$bindings.classBg && classBg !== void 0)
    $$bindings.classBg(classBg);
  if ($$props.classWindowWrap === void 0 && $$bindings.classWindowWrap && classWindowWrap !== void 0)
    $$bindings.classWindowWrap(classWindowWrap);
  if ($$props.classWindow === void 0 && $$bindings.classWindow && classWindow !== void 0)
    $$bindings.classWindow(classWindow);
  if ($$props.classContent === void 0 && $$bindings.classContent && classContent !== void 0)
    $$bindings.classContent(classContent);
  if ($$props.classCloseButton === void 0 && $$bindings.classCloseButton && classCloseButton !== void 0)
    $$bindings.classCloseButton(classCloseButton);
  if ($$props.unstyled === void 0 && $$bindings.unstyled && unstyled !== void 0)
    $$bindings.unstyled(unstyled);
  if ($$props.setContext === void 0 && $$bindings.setContext && setContext$1 !== void 0)
    $$bindings.setContext(setContext$1);
  if ($$props.transitionBg === void 0 && $$bindings.transitionBg && transitionBg !== void 0)
    $$bindings.transitionBg(transitionBg);
  if ($$props.transitionBgProps === void 0 && $$bindings.transitionBgProps && transitionBgProps !== void 0)
    $$bindings.transitionBgProps(transitionBgProps);
  if ($$props.transitionWindow === void 0 && $$bindings.transitionWindow && transitionWindow !== void 0)
    $$bindings.transitionWindow(transitionWindow);
  if ($$props.transitionWindowProps === void 0 && $$bindings.transitionWindowProps && transitionWindowProps !== void 0)
    $$bindings.transitionWindowProps(transitionWindowProps);
  if ($$props.disableFocusTrap === void 0 && $$bindings.disableFocusTrap && disableFocusTrap !== void 0)
    $$bindings.disableFocusTrap(disableFocusTrap);
  $$result.css.add(css);
  return `

${Component ? `<div class="${[
    escape(null_to_empty(state.classBg), true) + " svelte-n7cvum",
    !unstyled ? "bg" : ""
  ].join(" ").trim()}"${add_attribute("style", cssBg, 0)}${add_attribute("this", background, 0)}><div class="${[
    escape(null_to_empty(state.classWindowWrap), true) + " svelte-n7cvum",
    !unstyled ? "wrap" : ""
  ].join(" ").trim()}"${add_attribute("style", cssWindowWrap, 0)}${add_attribute("this", wrap, 0)}><div class="${[
    escape(null_to_empty(state.classWindow), true) + " svelte-n7cvum",
    !unstyled ? "window" : ""
  ].join(" ").trim()}" role="${"dialog"}" aria-modal="${"true"}"${add_attribute("aria-label", state.ariaLabelledBy ? null : state.ariaLabel || null, 0)}${add_attribute("aria-labelledby", state.ariaLabelledBy || null, 0)}${add_attribute("style", cssWindow, 0)}${add_attribute("this", modalWindow, 0)}>${state.closeButton ? `${isFunction(state.closeButton) ? `${validate_component(state.closeButton || missing_component, "svelte:component").$$render($$result, { onClose: close }, {}, {})}` : `<button class="${[
    escape(null_to_empty(state.classCloseButton), true) + " svelte-n7cvum",
    !unstyled ? "close" : ""
  ].join(" ").trim()}" aria-label="${"Close modal"}"${add_attribute("style", cssCloseButton, 0)} type="${"button"}"></button>`}` : ``}
        <div class="${[
    escape(null_to_empty(state.classContent), true) + " svelte-n7cvum",
    !unstyled ? "content" : ""
  ].join(" ").trim()}"${add_attribute("style", cssContent, 0)}>${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div></div></div>` : ``}
${slots.default ? slots.default({}) : ``}`;
});
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClose } = $$props;
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  return `<button class="${"absolute top-5 right-5 z-50"}"><img src="${"/icons/close.svg"}" alt="${"Close popup"}" class="${"rounded-full bg-dark_light bg-opacity-60 p-2 backdrop-blur duration-200 hover:scale-110 hover:bg-red-900 active:scale-90"}"></button>`;
});
const Subtitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var subtitles = [
    " failure",
    " dumbass",
    " idot",
    " object",
    " 3D object",
    " rock eater",
    " h lover",
    " h enjoyer",
    " sveltekit lover",
    "ly idot idot",
    "ly stupid developer",
    "ly dumb developer"
  ];
  var subtitle = subtitles[Math.floor(Math.random() * subtitles.length)];
  return `<div class="${"pb-10 text-xl"}">A professional${escape(subtitle)}.</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modal, $$unsubscribe_modal;
  const modal = writable(null);
  $$unsubscribe_modal = subscribe(modal, (value) => $modal = value);
  $$unsubscribe_modal();
  return `${validate_component(SvelteSeo, "SvelteSeo").$$render(
    $$result,
    {
      title: "User5522.tk",
      description: "Welcome to my website! A place where I share information about all my stuff!",
      keywords: "user5522 u5522 user5522.tk username5522 Epik_Kid",
      openGraph: {
        title: "User5522.tk",
        description: "Welcome to my website! A place where I share information about all my stuff!",
        url: "https://user5522.tk/",
        type: "website",
        images: [
          {
            url: "/Logo_flat.svg",
            width: 850,
            height: 650,
            alt: "Logo OG image"
          }
        ]
      }
    },
    {},
    {}
  )}

${$$result.head += `<!-- HEAD_svelte-1k7q5qd_START -->${$$result.title = `<title>Welcome - user5522.tk</title>`, ""}<!-- HEAD_svelte-1k7q5qd_END -->`, ""}

<div class="${"init-div px-5"}"><div class="${"flex flex-col items-center justify-center"}"><div class="${"flex flex-row items-baseline"}"><div class="${"text-4xl"}">User5522</div>
			<div class="${"text-base"}">/Username5522</div></div>
		${validate_component(Subtitle, "Subtitle").$$render($$result, {}, {}, {})}
		<div class="${"flex flex-col items-center justify-center px-10"}"><div class="${"overflow-hidden whitespace-nowrap text-2xl"}">Welcome to <strong>user5522.tk</strong>!
			</div>
			<div class="${"py-5 text-lg"}">It&#39;s a good website, because:</div>
			<div class="${"pb-5"}"><div>- It is made using <a target="${"_blank"}" href="${"https://kit.svelte.dev"}" rel="${"noreferrer"}">sveltekit</a></div>
				<div>- I made it :${escape(")")}</div>
				<div>- It&#39;s fully opensource on
					<a target="${"_blank"}" href="${"https://github.com/user5522/website"}" rel="${"noreferrer"}">github
					</a> (just like most of my projects)
				</div>
				<div>- It&#39;s good looking (real)</div>
				<div>- It&#39;ll support more languages soon™</div>
				<div>- I have nothing else to compliment, but <a href="${"/about#Links"}">maybe you do</a></div></div></div>
		<div class="${"pb-5"}"><div class="${"rounded-xl bg-dark p-2 text-lg duration-200 hover:scale-102 active:scale-95"}">Check out my projects, <a href="${"/projects"}">dis way.</a></div></div>

		<div class="${"rounded-xl bg-dark p-2 text-lg duration-200 hover:scale-102 active:scale-95"}">Learn a little about me, <a href="${"/about"}">here.</a></div>
		<div><div class="${"pt-10 text-xl"}"><strong>Note:</strong></div>
			<div>I am NOT wanted in several countries for commiting any sort of federal crime.</div>
			<div class="${"pb-10"}">I am an innocent individual, and I definitely didn&#39;t commit any of these crimes:
			</div></div>
		<div class="${"flex flex-row gap-4"}">
			${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      show: $modal,
      unstyled: false,
      closeButton: CloseButton,
      styleWindow: {
        background: "#121212",
        borderRadius: ".8rem"
      }
    },
    {},
    {
      default: () => {
        return `<a><button class="${"blue-button"}">View false accusations </button></a>
				<a href="${"/accusations"}" class="${"text-white"}"><button class="${"hidden-button"}">View page</button></a>`;
      }
    }
  )}</div></div></div>`;
});
export {
  Page as default
};
