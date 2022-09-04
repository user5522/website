import {
  Footer,
  Navbar,
  Waves_start
} from "./chunk-BXAZGEYL.js";
import {
  writable
} from "./chunk-6OIODFTL.js";
import {
  add_attribute,
  createEventDispatcher,
  create_ssr_component,
  escape,
  identity,
  missing_component,
  null_to_empty,
  onDestroy,
  setContext,
  subscribe,
  validate_component
} from "./chunk-QSPNFZ7C.js";
import "./chunk-TWLJ45QX.js";

// .svelte-kit/adapter-node/entries/pages/_page.svelte.js
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
var css = {
  code: ".svelte-g4wg3a{box-sizing:border-box}.bg.svelte-g4wg3a{position:fixed;z-index:1000;top:0;left:0;display:flex;flex-direction:column;justify-content:center;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.66)}.wrap.svelte-g4wg3a{position:relative;margin:2rem;max-height:100%}.window.svelte-g4wg3a{position:relative;width:40rem;max-width:100%;max-height:100%;margin:2rem auto;color:black;border-radius:0.5rem;background:white}.content.svelte-g4wg3a{position:relative;padding:1rem;max-height:calc(100vh - 4rem);overflow:auto}.close.svelte-g4wg3a{display:block;box-sizing:border-box;position:absolute;z-index:1000;top:1rem;right:1rem;margin:0;padding:0;width:1.5rem;height:1.5rem;border:0;color:black;border-radius:1.5rem;background:white;box-shadow:0 0 0 1px black;transition:transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);-webkit-appearance:none}.close.svelte-g4wg3a:before,.close.svelte-g4wg3a:after{content:'';display:block;box-sizing:border-box;position:absolute;top:50%;width:1rem;height:1px;background:black;transform-origin:center;transition:height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)}.close.svelte-g4wg3a:before{-webkit-transform:translate(0, -50%) rotate(45deg);-moz-transform:translate(0, -50%) rotate(45deg);transform:translate(0, -50%) rotate(45deg);left:0.25rem}.close.svelte-g4wg3a:after{-webkit-transform:translate(0, -50%) rotate(-45deg);-moz-transform:translate(0, -50%) rotate(-45deg);transform:translate(0, -50%) rotate(-45deg);left:0.25rem}.close.svelte-g4wg3a:hover{background:black}.close.svelte-g4wg3a:hover:before,.close.svelte-g4wg3a:hover:after{height:2px;background:white}.close.svelte-g4wg3a:focus{border-color:#3399ff;box-shadow:0 0 0 2px #3399ff}.close.svelte-g4wg3a:active{transform:scale(0.9)}.close.svelte-g4wg3a:hover,.close.svelte-g4wg3a:focus,.close.svelte-g4wg3a:active{outline:none}",
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
var Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  const open = (NewComponent, newProps = {}, options = {}, callback = {}) => {
    Component = bind(NewComponent, newProps);
    state = { ...defaultState, ...options };
    updateStyleTransition();
    disableScroll();
    onClose = (event) => {
      if (callback.onClose)
        callback.onClose(event);
      dispatch("close");
      dispatch("closing");
    };
    onClosed = (event) => {
      if (callback.onClosed)
        callback.onClosed(event);
      dispatch("closed");
    };
  };
  const close = (callback = {}) => {
    if (!Component)
      return;
    onClose = callback.onClose || onClose;
    onClosed = callback.onClosed || onClosed;
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
  setContext$1(key, { open, close });
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
    escape(null_to_empty(state.classBg), true) + " svelte-g4wg3a",
    !unstyled ? "bg" : ""
  ].join(" ").trim()}"${add_attribute("style", cssBg, 0)}${add_attribute("this", background, 0)}><div class="${[
    escape(null_to_empty(state.classWindowWrap), true) + " svelte-g4wg3a",
    !unstyled ? "wrap" : ""
  ].join(" ").trim()}"${add_attribute("style", cssWindowWrap, 0)}${add_attribute("this", wrap, 0)}><div class="${[
    escape(null_to_empty(state.classWindow), true) + " svelte-g4wg3a",
    !unstyled ? "window" : ""
  ].join(" ").trim()}" role="${"dialog"}" aria-modal="${"true"}"${add_attribute("aria-label", state.ariaLabelledBy ? null : state.ariaLabel || null, 0)}${add_attribute("aria-labelledby", state.ariaLabelledBy || null, 0)}${add_attribute("style", cssWindow, 0)}${add_attribute("this", modalWindow, 0)}>${state.closeButton ? `${isFunction(state.closeButton) ? `${validate_component(state.closeButton || missing_component, "svelte:component").$$render($$result, { onClose: close }, {}, {})}` : `<button class="${[
    escape(null_to_empty(state.classCloseButton), true) + " svelte-g4wg3a",
    !unstyled ? "close" : ""
  ].join(" ").trim()}" aria-label="${"Close modal"}"${add_attribute("style", cssCloseButton, 0)} type="${"button"}"></button>`}` : ``}
        <div class="${[
    escape(null_to_empty(state.classContent), true) + " svelte-g4wg3a",
    !unstyled ? "content" : ""
  ].join(" ").trim()}"${add_attribute("style", cssContent, 0)}>${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div></div></div>` : ``}
${slots.default ? slots.default({}) : ``}`;
});
var CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClose } = $$props;
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  return `<button class="${"absolute z-50 right-10 top-5"}"><img src="${"/close.svg"}" alt="${"Close popup"}" class="${"rounded-full bg-dark_light p-2 hover:bg-red-900 hover:scale-110 active:scale-90 duration-200"}"></button>`;
});
var Subtitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var subtitleSentences = [
    " peepeepoopoo checker",
    " failure",
    " dumbass",
    " h lover",
    " h enjoyer",
    "ly idot idot",
    "ly dumb developer",
    " serial killer"
  ];
  var subtitleWord = subtitleSentences[Math.floor(Math.random() * subtitleSentences.length)];
  return `<div class="${"pb-10 text-xl"}">A professional${escape(subtitleWord)}.</div>`;
});
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modal, $$unsubscribe_modal;
  const modal = writable(null);
  $$unsubscribe_modal = subscribe(modal, (value) => $modal = value);
  $$unsubscribe_modal();
  return `<div class="${"bg-white"}"><div class="${"pb-32"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</div>
  <div>${validate_component(Waves_start, "WavesStart").$$render($$result, {}, {}, {})}</div></div>
<div class="${"pt-28 bg-black"}"><div class="${"flex flex-col items-center justify-center pb-20"}"><div class="${"flex flex-row items-baseline"}"><p class="${"ml-16 text-4xl"}">User5522</p>
      <p class="${"text-xs"}">/Username5522</p></div>
    <div>${validate_component(Subtitle, "Subtitle").$$render($$result, {}, {}, {})}</div>
    <div class="${"p-10"}">Welcome to my website, a place where I publish everything I failed at
      making
    </div>
    <div class="${"pl-10 pr-10"}">I am NOT wanted in several countries for commiting any sort of federal
      crime.
    </div>
    <div class="${"pb-10 pr-10 pl-10"}">I am an innocent individual, and I definitely didn&#39;t commit any of these
      crimes:
    </div>
    <div class="${"flex flex-row gap-4"}">
      ${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      show: $modal,
      unstyled: false,
      closeButton: CloseButton,
      styleContent: {
        backgroundColor: "#121212",
        borderRadius: "0.75rem"
      }
    },
    {},
    {
      default: () => {
        return `<a class="${""}"><button class="${"sm:p-5 p-4 sm:text-base text-sm text-blue-200 duration-200 bg-blue-800 rounded-xl hover:scale-110 active:scale-90"}">View false accusations
          </button></a>
        <a href="${"/Accusations"}"><button class="${"sm:p-5 p-4 sm:text-base text-sm hover:bg-dark_darker rounded-xl hover:scale-110 active:scale-90 duration-200"}">View in different page</button></a>`;
      }
    }
  )}</div></div>
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte-RVPAKICJ.js.map
