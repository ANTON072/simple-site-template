// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

export default [
	{
		input: "src/assets/js/main.js",
		output: [
			{
				file: "dist/assets/js/bundle.js",
				format: "iife",
				sourcemap: true,
			},
			{
				file: "wp_theme/dist/js/bundle.js", // 出力ファイル
				format: "iife",
				sourcemap: true,
			},
		],
		plugins: [
			resolve(),
			terser(),
			copy({
				targets: [
					{ src: "src/assets/media/**/*", dest: "dist/assets/media" },
					{ src: "src/assets/media/**/*", dest: "wp_theme/dist/media" },
				],
				// `hook`オプションを使用してビルド後に実行
				hook: "writeBundle",
			}),
		],
	},
	{
		input: "src/assets/css/main.css",
		output: [
			{
				file: "dist/assets/css/main.css",
			},
			{
				file: "wp_theme/dist/css/main.css",
			},
		],
		plugins: [
			postcss({
				extract: "main.css",
				minimize: true,
				sourceMap: true,
			}),
		],
	},
];
