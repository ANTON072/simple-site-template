export default function (eleventyConfig) {
	// assets以下をdistにコピー
	eleventyConfig.addPassthroughCopy({
		"src/assets": "assets",
	});

	return {
		dir: {
			input: "src/njk",
			output: "dist",
			includes: "_partials",
			layouts: "_layouts",
		},
		passthroughFileCopy: true,
	};
}
