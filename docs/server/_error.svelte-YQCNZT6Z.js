import {
  create_ssr_component,
  escape,
  getContext,
  subscribe
} from "./chunk-QSPNFZ7C.js";
import "./chunk-TWLJ45QX.js";

// .svelte-kit/adapter-node/entries/pages/_error.svelte.js
var getStores = () => {
  const stores = getContext("__svelte__");
  const readonly_stores = {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
  Object.defineProperties(readonly_stores, {
    preloading: {
      get() {
        console.error("stores.preloading is deprecated; use stores.navigating instead");
        return {
          subscribe: stores.navigating.subscribe
        };
      },
      enumerable: false
    },
    session: {
      get() {
        removed_session();
        return {};
      },
      enumerable: false
    }
  });
  return readonly_stores;
};
var page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
var Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape($page.status)}: ${escape($page.error.message)}</title>`, ""}`, ""}

<div class="${"fixed flex flex-col -translate-x-1/2 -translate-y-1/3 top-1/3 left-1/2"}"><div class="${"self-center text-3xl"}">${escape($page.status)}: ${escape($page.error.message)}</div>
  <div class="${"self-center text-2xl"}">That looks like an error.. Try one of these solutions:
  </div>
  <div class="${"self-center mt-5 text-xl"}">- Checking if the URL/Link you got is valid<br>
    - Checking if you have permission to access this page<br>
    - Refreshing the page<br>
    - Making sure the website is online (soon)
  </div>
  <div class="${"self-center mt-10 duration-200 hover:scale-110 active:scale-90"}"><a href="${"/"}" class="${"p-3 text-xl text-blue-300 bg-blue-900 rounded-xl"}">Home</a></div></div>`;
});
export {
  Error$1 as default
};
//# sourceMappingURL=_error.svelte-YQCNZT6Z.js.map
