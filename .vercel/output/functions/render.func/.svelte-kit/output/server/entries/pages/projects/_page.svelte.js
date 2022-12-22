import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { A as A1F633 } from "../../../chunks/A1F633.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-i0huxp_START -->${$$result.title = `<title>/projects</title>`, ""}<!-- HEAD_svelte-i0huxp_END -->`, ""}

<div class="${"init-div"}"><div class="${"flex flex-col items-center justify-center"}"><div class="${"flex flex-row"}"><p class="${"text-4xl"}">Projects</p></div>
		<div class="${"flex flex-row gap-1"}"><div class="${"px-10 text-xl"}">Projects I&#39;m working on that I want to share with you
				${validate_component(A1F633, "A1F633").$$render($$result, { class: "inline-block h-7 w-7" }, {}, {})}</div></div></div>
	<div class="${"grid gap-5 p-5 sm:grid-cols-2 2xl:grid-cols-4"}"><a class="${"w-full rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95"}" href="${"/projects/vbot"}"><div><div class="${"h-full"}"><div class="${"sm:h-2/3"}"><div class="${"flex w-full items-center justify-center"}"><img src="${"/banners/Vbot.png"}" alt="${"Vbot Banner"}" class="${"rounded-t-xl"}"></div></div>
					<div class="${"p-5 sm:h-1/3"}"><div class="${"flex flex-row items-baseline"}"><div id="${"project_title"}" class="${"text-xl font-bold"}">Vbot</div></div>
						<div><div id="${"project_description"}" class="${"text-lg"}">A multi-purpose Discord bot that is built to be fast, responsive &amp; easy to use (&amp;
								all the rest of the marketting crap). [in ALPHA]
							</div></div></div></div></div></a>
		<a class="${"h-auto w-full rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95"}" href="${"/projects/banners"}"><div><div class="${"h-full"}"><div class="${"sm:h-2/3"}"><div class="${"flex w-full items-center justify-center"}"><img src="${"/banners/banners.png"}" alt="${"banners"}" class="${"rounded-t-xl"}"></div></div>
					<div class="${"p-5 sm:h-1/3"}"><div class="${"flex flex-row items-baseline"}"><div id="${"project_title"}" class="${"text-xl font-bold"}">Banners &amp; Logos</div></div>
						<div><div id="${"project_description"}" class="${"text-lg"}">A good amount of banners that I made for CRBT&#39;s old profiles feature &amp; some logos
								for my other projects.
							</div></div></div></div></div></a>
		<a href="${"/sgsource"}" id="${"SquareGame"}" class="${"rounded-xl bg-dark text-white duration-200 hover:scale-102 active:scale-95"}"><div><div class="${"h-full"}"><div class="${"flex w-full items-center justify-center sm:h-2/3"}"><img src="${"/banners/SquareGame.png"}" class="${"rounded-t-xl"}" alt="${"SquareGame"}"></div>
					<div class="${"p-5 sm:h-1/3"}"><div id="${"project_title"}" class="${"flex flex-col text-xl font-semibold sm:flex-row"}">SquareGame
						</div>
						<div id="${"project_description"}" class="${"text-lg"}">A Unity 2D game, about, well.. a 2D square that can move and goes through levels..?
							[in BETA]
						</div></div></div></div></a>
		<a class="${"rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95"}" href="${"/snaksource"}" id="${"Snak"}"><div><div class="${"h-full"}"><div class="${"flex items-center justify-center sm:h-2/3"}"><div class="${"h-full w-full"}"><img src="${"/banners/Snak.png"}" alt="${"Snak"}" class="${"rounded-t-xl"}"></div></div>
					<div class="${"p-5 sm:h-1/3"}"><div class="${"flex flex-row items-baseline"}"><div id="${"project_title"}" class="${"text-xl font-bold"}">Snak</div></div>
						<div><div id="${"project_description"}" class="${"text-lg"}">A, and believe me when I say it, buggy trash snake clone made in Rust with the Bevy
								game engine.
							</div></div></div></div></div></a></div></div>`;
});
export {
  Page as default
};
