export default function (eleventyConfig) {
	// 静的アセットのコピー
	// eleventyConfig.addPassthroughCopy({
	// 	"src/assets": "/assets",
	// });

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
