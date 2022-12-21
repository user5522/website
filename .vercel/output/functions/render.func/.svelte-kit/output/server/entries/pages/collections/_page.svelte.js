import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ghl42a_START -->${$$result.title = `<title>/collections</title>`, ""}<!-- HEAD_svelte-1ghl42a_END -->`, ""}

<div class="${"init-div"}"><div class="${"flex flex-col items-center justify-center"}"><div class="${"flex flex-row"}"><p class="${"text-4xl"}">Collections</p></div>
		<div><div class="${"px-10 text-xl"}">Everything I want to share</div></div></div>

	<div class="${"flex flex-row px-10 py-2"}"><button class="${"rounded-xl bg-dark p-2 duration-200 hover:scale-105 active:scale-95"}">Sorted by Latest</button></div>

	<div><div class="${"grid gap-5 px-5 sm:grid-cols-2 2xl:grid-cols-4"}"><a href="${"/collections/2"}" id="${"Clembs-SMP-Early-access-screentshots"}" class="${"rounded-xl bg-dark text-white duration-200 hover:scale-102 active:scale-95"}"><div><div class="${"h-full w-full"}"><div id="${"post_img"}" class="${"flex justify-center sm:h-2/3"}"><img src="${"/collections/csmpea.png"}" alt="${"Clembs SMP Early Access banner"}" class="${"rounded-t-xl object-cover"}"></div>
						<div class="${"p-5 sm:h-1/3"}"><div id="${"post_title"}" class="${"flex w-full flex-col items-baseline gap-1 py-2 md:flex-row"}"><div class="${"text-xl font-semibold md:flex md:w-1/2 md:justify-start"}">Clembs SMP early access moments
								</div>
								<div class="${"text-md text-lighter_true_gray md:flex md:w-1/2 md:justify-end"}">Post date: 18/12/2022
								</div></div>
							<div id="${"post_description"}" class="${"text-lg"}">Some screenshots from the Clembs Minecraft SMP winter early access, thought I would
								share them here since it will be reset.
							</div></div></div></div></a>

			<a href="${"/collections/1"}" id="${"initial-release"}" class="${"rounded-xl bg-dark p-5 text-white duration-200 hover:scale-102 active:scale-95"}"><div><div class="${"h-full"}"><div id="${"post_img"}" class="${"flex justify-center sm:h-2/3"}"><img src="${"/collections/initial-release.png"}" alt="${"Initial release banner"}"></div>
						<div class="${"sm:h-1/3"}"><div id="${"post_title"}" class="${"flex w-full flex-col items-baseline gap-1 py-2 md:flex-row"}"><div class="${"whitespace-nowrap text-xl font-semibold md:flex md:w-1/2 md:justify-start"}">Initial release!
								</div>
								<div class="${"text-md whitespace-nowrap text-lighter_true_gray md:flex md:w-1/2 md:justify-end"}">Post date: 26/11/2022
								</div></div>
							<div id="${"post_description"}" class="${"text-lg"}">Finally, after lots of work, user5522.tk is now at version 1.0.0. This post talks
								about everything new and what&#39;s (probably) upcomming.
							</div></div></div></div></a></div></div></div>`;
});
export {
  Page as default
};
