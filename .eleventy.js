module.exports = function (eleventyConfig) {
	// パスの短縮やエイリアスの設定が必要な場合はここで設定

	// 静的アセットのコピー
	eleventyConfig.addPassthroughCopy("src/assets");

	// テンプレートエンジンの設定（例: Nunjucks）
	return {
		dir: {
			input: "src/njk",
			output: "dist",
			includes: "_partials",
			layouts: "_layouts",
		},
		passthroughFileCopy: true,
	};
};
