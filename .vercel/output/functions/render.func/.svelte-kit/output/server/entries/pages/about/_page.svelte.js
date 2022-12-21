import { c as create_ssr_component, e as escape, k as compute_rest_props, l as spread, p as escape_attribute_value, q as escape_object, v as validate_component } from "../../../chunks/index.js";
import { A as A1F633 } from "../../../chunks/A1F633.js";
import { A as A2764 } from "../../../chunks/A2764.js";
const AgeCounter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var t = new Date() - new Date("2006-11-24");
  t /= 1e3 * 60 * 60 * 24 * 365;
  let age = Math.floor(t) + "." + (t % 1).toFixed(2).substring(2);
  return `<div id="${"age"}" class="${"inline-block"}">${escape(age)}</div>`;
});
const A1F44b = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "ariaLabel"]);
  let { size = "36" } = $$props;
  let { ariaLabel = "1f44b" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 36 36" }
    ],
    {}
  )}><path fill="${"#EF9645"}" d="${"M4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093 1.112-.777 4.263 1.312 4.263 1.312-.786-1.122-.639-2.544.483-3.331 1.122-.784 2.67-.513 3.456.611l10.42 14.72L25 31l-11.083-4.042L4.25 12.625c-.793-1.129-.519-2.686.611-3.478z"}"></path><path fill="${"#FFDC5D"}" d="${"M2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894L4.557 11.21s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622L7.549 6.732s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498L12.238 4.729s-1.131-1.649.518-2.78c1.649-1.131 2.78.518 2.78.518l7.854 11.454 1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902.565.825 1.39.26 1.39.26-3.393-4.949-2.357-10.51 2.592-13.903L24.515 8.62s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831 2.657 5.28 1.07 11.842-3.94 15.279-5.465 3.747-12.936 2.354-16.684-3.11L2.695 17.336z"}"></path><g fill="${"#5DADEC"}"><path d="${"M12 32.042C8 32.042 3.958 28 3.958 24c0-.553-.405-1-.958-1s-1.042.447-1.042 1C1.958 30 6 34.042 12 34.042c.553 0 1-.489 1-1.042s-.447-.958-1-.958z"}"></path><path d="${"M7 34c-3 0-5-2-5-5 0-.553-.447-1-1-1s-1 .447-1 1c0 4 3 7 7 7 .553 0 1-.447 1-1s-.447-1-1-1zM24 2c-.552 0-1 .448-1 1s.448 1 1 1c4 0 8 3.589 8 8 0 .552.448 1 1 1s1-.448 1-1c0-5.514-4-10-10-10z"}"></path><path d="${"M29 .042c-.552 0-1 .406-1 .958s.448 1.042 1 1.042c3 0 4.958 2.225 4.958 4.958 0 .552.489 1 1.042 1s.958-.448.958-1C35.958 3.163 33 .042 29 .042z"}"></path></g></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-nxqaii_START -->${$$result.title = `<title>/about</title>`, ""}<!-- HEAD_svelte-nxqaii_END -->`, ""}

<div class="${"init-div px-5"}"><div class="${"flex flex-col items-center justify-center gap-5"}"><p class="${"text-4xl"}">About</p>

		<div class="${"flex flex-col items-center justify-center text-xl"}"><div>Hi I&#39;m Oueslati ${validate_component(A1F44b, "A1F44b").$$render($$result, { class: "inline-block h-6 w-6" }, {}, {})},
			</div>
			<div>a <button class="${"relative duration-200 hover:scale-102 active:scale-95"}"><strong class="${"rounded-xl bg-dark p-1"}">${validate_component(AgeCounter, "AgeCounter").$$render($$result, {}, {}, {})}</strong></button>
				year old
				<a href="${"https://google.com/search?q=north+tunisia"}" target="${"_blank"}" rel="${"noreferrer"}">north Tunisian</a>
				developer.
			</div>
			<div>These are some things about me</div></div>
		<div class="${"flex flex-col items-start justify-center gap-5 sm:flex-row"}">
			<div id="${"ilike"}" class="${"h-full w-full rounded-xl bg-dark duration-200 hover:scale-102 active:scale-95 sm:backdrop-blur-sm"}"><div class="${"flex flex-col p-5"}"><div class="${"text-center text-2xl"}">I Like:</div>
					<div class="${"flex flex-col py-5"}"><ul class="${"text-lg"}"><li>- Drinking water</li>
							<li>- Open-Source projects</li>
							<li>- Breathing air</li>
							<li>- Coding &amp; learning</li>
							<li>- Eating food</li>
							<li>- SvelteKit</li>
							<li>- Making uselessly long lists</li>
							<li>- The letter H</li>
							<li>- You, probably. ${validate_component(A1F633, "A1F633").$$render($$result, { class: "inline-block h-6 w-6" }, {}, {})}</li></ul></div></div></div>
			<div id="${"skills"}" class="${"h-full w-full rounded-xl bg-dark duration-200 hover:scale-102 active:scale-95"}"><div class="${"flex flex-col p-5"}"><div class="${"text-center text-2xl"}">Skills:</div>
					<div class="${"flex flex-col py-5"}"><ul class="${"text-lg"}"><li>- SvelteKit (<strong>7/10</strong> I really ${validate_component(A2764, "A2764").$$render($$result, { class: "inline-block h-6 w-6" }, {}, {})} it)
							</li>
							<li>- React (<strong>4/10</strong> not so good)</li>
							<li>- Rust (<strong>3/10</strong> too hard for me)</li>
							<li>- HTML &amp; CSS (<strong>8/10</strong> I&#39;m pretty good)</li>
							<li>- Javascript (<strong>6/10</strong> I can do stuff)</li>
							<li>- Dart (<strong>4/10</strong> Still learning it)</li>
							<li>- Python (<strong>3/10</strong> never tried with it)
							</li></ul></div></div></div></div>
		<div class="${"flex flex-col items-start justify-center gap-5 sm:flex-row"}"><div id="${"projects"}" class="${"h-full w-full rounded-xl bg-dark duration-200 hover:scale-102 active:scale-95"}"><div class="${"flex flex-col p-5"}"><div class="${"text-center text-2xl"}">Projects:</div>
					<div class="${"flex flex-col py-5"}"><ul class="${"text-lg"}"><li>- Vbot - Multipurpose Discord bot</li>
							<li>- SquareGame - 2D Unity game</li>
							<li>- This website - place for all of my stuff</li>
							
							<li>- Snak - broken snake clone made to learn Rust</li>
							<li>- <a href="${"/projects"}">Everything else</a></li></ul></div></div></div></div>

		<div id="${"Links"}" class="${"my-5 text-2xl"}">Links</div>
		<div class="${"flex flex-col items-center gap-5"}"><div class="${"flex flex-row items-center gap-5"}"><a href="${"/yt"}" class="${"duration-200 hover:scale-105 active:scale-90"}" target="${"blank"}"><img src="${"/logos/youtube.svg"}" alt="${"youtube link"}" class="${"h-10"}"></a>
				<a href="${"/discord"}" class="${"duration-200 hover:scale-105 active:scale-90"}" target="${"blank"}"><img src="${"/logos/discord.svg"}" alt="${"discord link"}" class="${"h-10"}"></a>
				<a href="${"/github"}" class="${"duration-200 hover:scale-105 active:scale-90"}" target="${"blank"}"><img src="${"/logos/github.svg"}" alt="${"github link"}" class="${"h-10"}"></a></div>
			<div class="${"flex flex-row items-center gap-5"}"><a href="${"/twitter"}" class="${"duration-200 hover:scale-105 active:scale-90"}" target="${"blank"}"><img src="${"/logos/twitter.svg"}" alt="${"twitter link"}" class="${"h-10"}"></a>
				<a href="${"/xbox"}" class="${"duration-200 hover:scale-105 active:scale-90"}" target="${"blank"}"><img src="${"/logos/xbox.svg"}" alt="${"xbox link"}" class="${"h-10"}"></a>
				<a href="${"/steam"}" class="${"duration-200 hover:scale-105 active:scale-90"}" target="${"blank"}"><img src="${"logos/steam.svg"}" alt="${"steam link"}" class="${"h-10"}"></a>
				<a href="${"/reddit"}" class="${"duration-200 hover:scale-105 active:scale-90"}" target="${"blank"}"><img src="${"/logos/reddit.svg"}" alt="${"reddit link"}" class="${"h-10"}"></a></div></div>

		<div class="${"pt-10"}"><div class="${"px-5"}">for any suggestions/reports email me @
				<div class="${"relative inline-block rounded-xl bg-dark p-1 duration-200 hover:scale-102 active:scale-95"}"><div>oueslatim268@gmail.com</div></div></div></div>
		<div class="${"rounded-xl bg-dark p-2 duration-200 hover:scale-102 active:scale-95"}">Looking for the website credits? <a href="${"/credits"}">Look here.</a></div></div></div>`;
});
export {
  Page as default
};
