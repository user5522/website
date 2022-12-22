import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from "./index.js";
const navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-out4v0-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.spin.svelte-out4v0{animation:svelte-out4v0-spin 0.5s linear infinite}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let observedSpan;
  const navItems = [
    { name: "Projects", href: "projects" },
    { name: "Collections", href: "collections" }
  ];
  const navMenuItems = [{ name: "About", href: "about" }, { name: "Credits", href: "credits" }];
  $$result.css.add(css);
  return `<div class="${"duration-400 " + escape("pb-16", true)}"><div class="${"duration-400 transition-all fixed top-0 z-50 flex w-full flex-col justify-center overflow-auto align-middle " + escape("", true)}"><div class="${"flex flex-row duration-400 transition-all bg-dark p-4 shadow-lg " + escape(
    "sm:bg-opacity-50 sm:backdrop-blur-md",
    true
  )}"><div class="${"flex w-1/2 flex-row items-center gap-1 duration-300 sm:gap-2"}" id="${"branding"}">
				<div id="${"logo"}" class="${"duration-200 hover:scale-105 active:scale-95"}"><img id="${"brandingLogo"}" src="${"/Logo_flat.svg"}" class="${[
    "h-9 items-center rounded-full bg-dark_light bg-opacity-50 backdrop-blur-md sm:h-10 svelte-out4v0",
    ""
  ].join(" ").trim()}" alt="${"logo"}"></div>
				<a href="${"/"}" class="${"text-white"}"><button id="${"brandingWoodmark"}" class="${"rounded-lg p-2 text-base font-bold duration-200 hover:scale-105 hover:bg-dark_light hover:bg-opacity-50 active:scale-95 sm:text-lg"}" alt="${"branding woodmark"}">User5522
					</button></a></div>
			<div class="${"flex w-1/2 gap-2 justify-end"}">${each(navItems, (navItem) => {
    return `<a${add_attribute("href", navItem.href, 0)} class="${"text-white"}"><button class="${"rounded-lg p-2 text-base font-medium duration-200 hover:scale-105 hover:bg-dark_light active:scale-95 sm:text-lg"}">${escape(navItem.name)}</button>
					</a>`;
  })}
				<a href="${"/about"}" class="${"hidden sm:block text-white"}"><button class="${"rounded-lg p-2 text-base font-medium duration-200 hover:scale-105 hover:bg-dark_light active:scale-95 sm:text-lg"}">About
					</button></a>
				<div class="${"block sm:hidden"}"><button class="${"rounded-lg duration-200 items-center hover:scale-105 hover:bg-dark_light active:scale-95"}"><p class="${"rotate-90 p-2 text-xl"}">:::</p></button></div></div></div></div></div>
<div class="${escape("", true) + " fixed duration-400 transition-all z-50 w-full " + escape("hidden", true)}" id="${"links-container"}"><div id="${"links-subcontainer"}" class="${escape("", true) + " bg-dark h-1/2 duration-400 transition-all flex flex-col gap-2 w-full p-4"}">${each(navMenuItems, (navMenuItem) => {
    return `<a${add_attribute("href", navMenuItem.href, 0)} class="${"block text-white hover:bg-dark_light rounded-xl duration-200 hover:scale-102 active:scale-95 p-2"}">${escape(navMenuItem.name)}
			</a>`;
  })}
		<div class="${"block rounded-xl duration-200 bg-dark_darker p-3"}">// This menu is a trial run for mobile devices! // Click anywhere outside of it to close it!
		</div></div></div>

<span${add_attribute("this", observedSpan, 0)}></span>`;
});
export {
  Navbar as N
};
