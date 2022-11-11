import adapter from "@sveltejs/adapter-static";

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
      fallback: null,
      precompress: false,
    }),
    files: {
      lib: "src/components",
    },
  },
};

export default config;
