module.exports = {
	plugins: [
		require("postcss-import"),
		require("postcss-csso")({
			restructure: false,
		}),
	],
};