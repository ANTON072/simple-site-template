// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";

export default [
	{
		input: "src/assets/js/main.js", // エントリーポイント
		output: {
			file: "dist/assets/js/bundle.js", // 出力ファイル
			format: "iife", // 即時実行関数形式
			sourcemap: true, // ソースマップの生成
		},
		plugins: [
			resolve(), // モジュール解決
			terser(), // JavaScriptの最小化
		],
	},
	{
		input: "src/assets/css/main.css",
		output: {
			file: "dist/assets/css/bundle.css",
		},
		plugins: [
			postcss({
				extract: "bundle.css", // 出力ファイル名
				minimize: true,
				sourceMap: true,
			}),
		],
	},
];
