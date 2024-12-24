export default function (eleventyConfig) {
	// assets以下をdistにコピー
	eleventyConfig.addPassthroughCopy({
		"html_template/assets": "assets",
	});

	return {
		dir: {
			input: "html_template/njk",
			output: "dist",
			includes: "_partials",
			layouts: "_layouts",
		},
		passthroughFileCopy: true,
	};
}
