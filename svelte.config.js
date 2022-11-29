import adapter from "@sveltejs/adapter-auto";

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
      assets: "static",
    },
  },
};

export default config;
