import { c as create_ssr_component } from "./index.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"bottom-0 w-full bg-true_gray p-5"}"><div class="${"flex flex-row"}"><div class="${"flex flex-col"}"><div class="${"flex flex-col gap-5 sm:flex-row sm:gap-10"}"><div class="${"flex flex-col"}"><div class="${"font-semibold"}">Website links:</div>
					<div>- <a href="${"/"}">Homepage</a></div>
					<div>-
						<a href="${"/accusations"}">Accusations</a></div>
					<div>-
						<a href="${"/projects"}">Projects</a></div>
					<div>- <a href="${"/projects/vbot"}">Vbot (WIP)</a></div>
					<div>-
						<a href="${"/projects/banners"}">Banners &amp; Logos</a></div>
					<div>-
						<a href="${"/credits"}">Credits</a></div>
					<div>-
						<a href="${"/collections"}">Collections</a></div></div>
				<div class="${"flex flex-col"}"><div class="${"font-semibold"}">Redirecting links:</div>
					<div class="${"flex flex-row gap-1"}">-
						<a href="${"/discord"}" class="${"flex"}">Discord <img src="${"/logos/discord.svg"}" class="${"relative top-1 h-5 items-baseline pl-1"}" alt="${"discord logo"}"></a></div>
					<div class="${"flex flex-row gap-1"}">-
						<a href="${"/github"}" class="${"flex"}">Github <img src="${"/logos/github.svg"}" class="${"relative top-1 h-5 items-baseline pl-1"}" alt="${"github logo"}"></a></div>
					<div class="${"flex flex-row gap-1"}">-
						<a href="${"/reddit"}" class="${"flex"}">Reddit <img src="${"/logos/reddit.svg"}" class="${"relative top-1 h-5 items-baseline pl-1"}" alt="${"reddit logo"}"></a></div>
					<div class="${"flex flex-row gap-1"}">-
						<a href="${"/twitter"}" class="${"flex"}">Twitter <img src="${"/logos/twitter.svg"}" class="${"relative top-1 h-5 items-baseline pl-1"}" alt="${"twitter logo"}"></a></div>
					<div class="${"flex flex-row gap-1"}">-
						<a href="${"/xbox"}" class="${"flex"}">Xbox <img src="${"/logos/xbox.svg"}" class="${"relative top-1 h-5 items-baseline pl-1"}" alt="${"xbox logo"}"></a></div>
					<div class="${"flex flex-row gap-1"}">-
						<a href="${"/yt"}" class="${"flex"}">Youtube <img src="${"/logos/youtube.svg"}" class="${"relative top-1 h-5 items-baseline pl-1"}" alt="${"youtube logo"}"></a></div>
					<div class="${"flex flex-row gap-1"}">-
						<a href="${"/vbot"}" class="${"flex"}">Vbot Invite <img src="${"/vbot.svg"}" class="${"relative top-1 h-4 items-baseline pl-1"}" alt="${"vbot logo"}"></a></div></div>
				<div class="${"flex flex-col"}"><div class="${"font-semibold"}">Website testing links:</div>
					<div>-
						<a href="${"/long"}">Long page</a></div>
					<div>-
						<a href="${"/sandbox"}">Sandbox page</a></div></div></div></div>

		<img src="${"/Logo_flat.svg"}" alt="${"monochrome logo"}" class="${"ml-auto h-28 w-28 rounded-full bg-light_true_gray grayscale sm:h-32 sm:w-32"}"></div>
	<div class="${"pt-5 text-lighter_true_gray"}"><div class="${"text-lighter_true_gray"}">© 2022 User552</div>
		<div>Found some annoying bugs?
			<a href="${"https://github.com/user5522/website/issues"}" target="${"blank"}" class="${"text-lighter_true_gray underline"}" rel="${"noreferrer"}">report them by making an issue here!</a></div></div></footer>`;
});
export {
  Footer as F
};
