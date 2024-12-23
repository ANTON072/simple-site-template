export default function (eleventyConfig) {
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
