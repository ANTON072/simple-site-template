import { create } from "browser-sync";

const bs = create();

bs.init({
	proxy: "http://localhost:8888",
	files: [
		"wp-content/my-theme/**/*.php",
		"wp-content/my-theme/**/*.css",
		"wp-content/my-theme/**/*.js",
	],
	ui: false,
	port: 9999,
	open: true,
	notify: false,
});
