// import adapter from "@sveltejs/adapter-static";
import adapter from "svelte-adapter-ghpages";

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
      fallback: null,
      // precompress: false,
    }),
  },
};

export default config;
