import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { F as Footer } from "../../../chunks/footer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"p-10"}"><div id="${"cards-container"}" class="${"grid gap-5 sm:grid-cols-2 2xl:grid-cols-4"}"><div class="${"rounded-xl bg-dark p-5 text-white duration-200 hover:scale-105 active:scale-95"}"><div id="${"post_img"}"><img src="${"/placeholder.png"}" alt="${"placeholder"}"></div>
			<div id="${"post_title"}" class="${"flex flex-col items-baseline gap-1 py-2 sm:flex-row"}"><div class="${"text-xl font-semibold"}">This is a much longer title</div></div>
			<div id="${"post_description"}" class="${"text-lg"}">This is a description about this post&#39;s content, it is supposed to be a summary for people
				to know what they will be reading.
			</div></div>
		<div class="${"rounded-xl bg-dark p-5 text-white duration-200 hover:scale-105 active:scale-95"}"><div id="${"post_img"}"><img src="${"/placeholder.png"}" alt="${"placeholder"}"></div>
			<div id="${"post_title"}" class="${"flex flex-col items-baseline gap-1 py-2 sm:flex-row"}"><div class="${"text-xl font-semibold"}">This is a much longer title</div></div>
			<div id="${"post_description"}" class="${"text-lg"}">This is a description about this post&#39;s content, it is supposed to be a summary for people
				to know what they will be reading.
			</div></div>
		<div class="${"rounded-xl bg-dark p-5 text-white duration-200 hover:scale-105 active:scale-95 "}"><div id="${"post_img"}"><img src="${"/placeholder.png"}" alt="${"placeholder"}"></div>
			<div id="${"post_title"}" class="${"flex flex-col items-baseline gap-1 py-2 sm:flex-row"}"><div class="${"text-xl font-semibold"}">This is a much longer title</div></div>
			<div id="${"post_description"}" class="${"text-lg"}">This is a description about this post&#39;s content, it is supposed to be a summary for people
				to know what they will be reading.
			</div></div>
		<div class="${"rounded-xl bg-dark p-5 text-white duration-200 hover:scale-105 active:scale-95 "}"><div id="${"post_img"}"><img src="${"/placeholder.png"}" alt="${"placeholder"}"></div>
			<div id="${"post_title"}" class="${"flex flex-col items-baseline gap-1 py-2 sm:flex-row"}"><div class="${"text-xl font-semibold"}">This is a much longer title</div></div>
			<div id="${"post_description"}" class="${"text-lg"}">This is a description about this post&#39;s content, it is supposed to be a summary for people
				to know what they will be reading.
			</div></div></div></div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
