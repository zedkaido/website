import adapter from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// https://kit.svelte.dev/docs/adapter-cloudflare
		adapter: adapter({
			routes: {
				include: ["/*"],
				exclude: ["<all>"],
			},
		}),
	},
	vitePlugin: {
		inspector: true, // (CMD + Shift + Click) on any app element to jump straight to the component inside the editor
	},
};

export default config;
