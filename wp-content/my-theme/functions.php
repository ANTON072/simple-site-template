<?php

// タイトルタグのサポート
function theme_slug_setup()
{
	add_theme_support("title-tag");
}
add_action("after_setup_theme", "theme_slug_setup");

// CSSとJavaScriptの読み込み
function enqueue_my_scripts()
{
	// 現在の環境を取得
	$environment = defined("WP_ENV") ? WP_ENV : "development"; // WP_ENVが定義されていない場合は 'development' をデフォルトに設定

	if ($environment === "production") {
		// production環境の場合
		$css_file = get_template_directory() . "/dist/bundle.css";
		$js_file = get_template_directory() . "/dist/bundle.js";

		$css_version = file_exists($css_file) ? filemtime($css_file) : "1.0.0";
		$js_version = file_exists($js_file) ? filemtime($js_file) : "1.0.0";

		wp_enqueue_style(
			"main-style",
			get_template_directory_uri() . "/dist/bundle.css",
			[],
			$css_version
		);
		wp_enqueue_script(
			"main-script",
			get_template_directory_uri() . "/dist/bundle.js",
			[],
			$js_version,
			true
		);
	} else {
		// development環境の場合
		$css_version = time(); // 現在のタイムスタンプでキャッシュを無効化
		$js_version = time(); // 現在のタイムスタンプでキャッシュを無効化

		wp_enqueue_style(
			"main-style",
			get_template_directory_uri() . "/assets/css/main.css",
			[],
			$css_version
		);
		wp_enqueue_script(
			"main-script",
			get_template_directory_uri() . "/assets/js/main.js",
			[],
			$js_version,
			true
		);
	}
}
add_action("wp_enqueue_scripts", "enqueue_my_scripts");

// 不要なバージョン情報の削除
function remove_version()
{
	return "";
}
add_filter("the_generator", "remove_version");

// フロントエンドで管理バーを非表示
add_filter("show_admin_bar", "__return_false");

// 不要なヘッダー情報を削除して、セキュリティを向上
function remove_wp_header_info()
{
	remove_action("wp_head", "wp_generator"); // バージョン情報
	remove_action("wp_head", "rsd_link"); // RSDリンク
	remove_action("wp_head", "wlwmanifest_link"); // Windows Live Writerリンク
	remove_action("wp_head", "rest_output_link_wp_head"); // REST APIリンク
	remove_action("wp_head", "wp_oembed_add_discovery_links"); // oEmbedリンク
}
add_action("init", "remove_wp_header_info");
