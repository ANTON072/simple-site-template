import { create } from "browser-sync";

const bs = create();

bs.init({
	proxy: "http://localhost:8888",
	files: ["wp_theme/**/*.php", "wp_theme/**/*.css", "wp_theme/**/*.js"],
	ui: false,
	port: 9999,
	open: true,
	notify: false,
});
