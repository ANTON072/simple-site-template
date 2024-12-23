// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";

export default [
	{
		input: "wp_theme/assets/js/main.js",
		output: {
			file: "wp_theme/dist/bundle.js",
			format: "iife",
			sourcemap: true,
		},
		plugins: [resolve(), terser()],
	},
	{
		input: "wp_theme/assets/css/main.css",
		output: {
			file: "wp_theme/dist/bundle.css",
		},
		plugins: [
			postcss({
				extract: "bundle.css",
				minimize: true,
				sourceMap: true,
			}),
		],
	},
];
