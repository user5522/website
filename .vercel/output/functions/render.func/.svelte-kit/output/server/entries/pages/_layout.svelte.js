import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { N as Navbar } from "../../chunks/navbar.js";
import { F as Footer } from "../../chunks/footer.js";
const WavesStart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"spacer_start"}"><svg data-name="${"Layer 1"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 1200 120"}" preserveAspectRatio="${"none"}"><path d="${"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"}" class="${"shape-fill"}"></path></svg></div>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `<div class="${"bg-white"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	${validate_component(WavesStart, "WavesStart").$$render($$result, {}, {}, {})}</div>

${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
