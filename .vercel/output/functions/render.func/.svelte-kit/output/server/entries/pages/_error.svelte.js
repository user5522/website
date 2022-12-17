import { g as getContext, c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/index.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1xdm1xp_START -->${$$result.title = `<title>${escape($page.error.message)}</title>`, ""}<!-- HEAD_svelte-1xdm1xp_END -->`, ""}

<div class="${"flex flex-col items-center justify-center gap-5 p-5"}"><div class="${"flex flex-col items-center justify-center gap-1"}"><div class="${"text-4xl font-semibold"}">${escape($page.status)}: ${escape($page.error.message)}</div>
    <div class="${"text-3xl"}" id="${"pathname"}"></div></div>
  <div><div class="${"text-2xl"}">This looks like an error.. &amp; that&#39;s unfortunate.</div>
    <div class="${"flex flex-col gap-5"}"><div class="${"flex justify-center text-2xl"}">Maybe try one of these solutions:
      </div>
      <div class="${"rounded-xl bg-dark p-3 text-lg duration-200 hover:scale-102 active:scale-95"}"><li>- Checking if the URL/Link you received exists</li>
        <li>- Taking a quick sip of water</li>
        <li>- Looking over for any typos in the URL</li>
        <li>- <a href="${"https://google.com/search?q=have+you+tried+turning+it+off+and+on+again"}" target="${"_blank"}" rel="${"noreferrer"}">Turning it off &amp; on again?</a></li></div>
      <div class="${"flex justify-center text-xl"}">If none of these solutions work:
      </div></div></div>
  <div class="${"flex flex-row gap-5"}"><a href="${"/"}"><button class="${"blue-button"}">Return to homepage</button></a>
    <a href="${"/about#Links"}"><button class="${"blue-button"}">Contact me</button></a></div></div>
<div class="${"absolute top-0 right-0 -z-20 rotate-180 text-8xl font-semibold text-white opacity-30 sm:text-9xl"}">Damn.
</div>`;
});
export {
  Error$1 as default
};
