# WordPressテーマ開発用シンプルサイトテンプレート

このテンプレートは、フロントエンドの開発をなるべくシンプルにして、WordPressテーマを開発するためのものです。  
よほど古いブラウザがターゲットでない限り、CSSやJSはバンドラー無しでも遜色なく開発できます。  
そのため、フロントエンドの環境をバニラの状態に保ちつつ、WordPressテーマを開発することができます。  
とはいえ、パフォーマンスの都合もあるので、公開時には最適化したCSSとJSが利用できるように、rollupでバンドルしたファイルも生成可能です。

「HTMLはマークアップエンジニアに依頼したい」といったケースのために、11tyでHTMLテンプレートを開発する機能も含んでいます。  
`html_template` 以下がそのためのディレクトリですが、assetsディレクトリは `wp_theme/assets` からのシンボリックリンクになっています。マークアップエンジニアとWordPress開発者で同じアセットファイルを参照することができます。

## WordPressテーマの開発

[wp-env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/)を利用しています。

```sh
# 依存ライブラリのインストール
npm i
# WordPressの起動
npm run wp-env start
# BrowserSyncの起動（オプション）
npm run browser-sync
```

`wp_theme` ディレクトリ以下で開発します。

## HTMLテンプレートの開発（マークアップエンジニア向け）

[eleventy](https://www.11ty.dev/)を利用しています。

```sh
# 依存ライブラリのインストール
npm i
# 11tyの起動
npm run dev:11ty
```

`html_template` 以下で開発します。
