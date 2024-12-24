<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php wp_title("|", true, "right"); ?></title>
	<?php wp_head(); ?>
</head>
<body>
	<header class="header">
		<h1>ヘッダー</h1>
	</header>
	<main>
		<h2>メインコンテンツ</h2>
	</main>
	<footer>
		<h3>フッター</h3>
	</footer>
	<?php wp_footer(); ?>
</body>
</html>
