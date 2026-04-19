# 筑波大学現代視覚文化研究会 美少女ゲーム制作班 公式ホームページ

[https://bishojo.gsk-tsukuba.net/](https://bishojo.gsk-tsukuba.net/) にて公開されている公式ホームページです。

このrepositoryを編集したい方の中でここに書いてあることが全くわからないという人はdocs/for-beginner.mdを見てください

## 開発環境

[Astro](https://astro.build/) で開発されています。コード品質のために以下を導入しています。

- **[`@astrojs/check`](https://github.com/withastro/language-tools)** — Astro / TypeScript の型チェックを行います。
- **[ESLint](https://eslint.org/)** — JavaScript のソースコード上の問題を発見・修正します。
- **[Prettier](https://prettier.io/)** — ソースコードのフォーマットを統一します。

## セットアップ

```bash
git clone --recurse-submodules https://github.com/tsukuba-GSK-bishoge/homepage.git
npm install
```

## コマンド一覧

### 開発サーバの起動

```bash
npm run dev
```

### 本番環境のプレビュー

```bash
npm run build # 本番ビルド
npm run preview # ビルド結果のプレビュー
```

### ファイルのフォーマット

```bash
npm run format
```

### コードのチェックと自動修正

```bash
npm run eslint
```

### 型のチェック

```bash
npm run check
```

## CI/CD

### CI（継続的インテグレーション）

`master` ブランチへの Pull Request 時に型チェック・ESLint・Prettier によるチェックが自動で走ります。チェックを通過しないと PR をマージできません。

以下のコマンドを実行することで、手元でも事前に確認できます。

```bash
npm run check        # 型チェック
npm run eslint:check # ESLint チェック
npm run format:check # フォーマットチェック
```

問題があれば、以下のコマンドで自動修正できます。

```bash
npm run eslint
npm run format
```

### CD（継続的デプロイ）

`master` ブランチへのマージ時に自動でデプロイされます。Docker イメージ（Node ビルダー → Nginx）をビルドして GHCR に push し、さくらインターネット VPS 上の [Portainer](https://www.portainer.io/) 経由で反映されます。

## コンテンツの更新

### お知らせ（news）

`src/contents/news/{slug}.md` を作成します。`{slug}` はアルファベット・ハイフン区切り推奨。

```md
---
date: 2025/04/27
description: ホームページを公開しました
---

本文をここにMarkdown形式で書きます。
```

- URL: `https://bishojo.gsk-tsukuba.net/news/#{slug}`
- 画像などのアセット: `src/assets/news/{slug}/` に置き、`![説明](../../assets/news/{slug}/fuga.png)` で参照できます。

### 作品（works）

`src/contents/works/{slug}.md` を作成します。

```md
---
title: 作品タイトル
description: 作品の説明
---

本文をここにMarkdown形式で書きます。
```

- キービジュアル画像（必須）: `src/assets/works/{slug}/keyvisual.{webp|png|jpg|jpeg|gif}` に配置してください。
- URL: `https://bishojo.gsk-tsukuba.net/works/{slug}`
- 画像などのアセット: `src/assets/works/{slug}/` に置き、`![説明](../../assets/works/{slug}/fuga.png)` で参照できます。

### ブラウザでプレイ可能な作品の追加

TyranoScript で作成した作品は、Git サブモジュールとして `public/works/{slug}/play/` に配置することでブラウザから直接プレイできます。

```bash
# サブモジュールとして追加
git submodule add <リポジトリURL> public/works/{slug}/play

# コミット
git add .gitmodules public/works/{slug}/play
git commit -m "feat: add playable build for {slug}"
```

- URL: `https://bishojo.gsk-tsukuba.net/works/{slug}/play/`
- `npm run build && npm run preview` でローカルでもそのまま動作確認できます。 (一度、buildする必要があります。)

> [!NOTE]
> クローン時にサブモジュールを取得するには `git clone --recursive` を使うか、既存リポジトリでは `git submodule update --init --recursive` を実行してください。

### その他のページ

`src/pages/` 以下のファイルがそのまま URL に対応しています。

| ファイル                    | URL          |
| --------------------------- | ------------ |
| `src/pages/index.astro`     | `/`          |
| `src/pages/about.astro`     | `/about`     |
| `src/pages/works.astro`     | `/works`     |
| `src/pages/news.astro`      | `/news`      |
| `src/pages/character.astro` | `/character` |
| `src/pages/members.astro`   | `/members`   |
| `src/pages/contact.astro`   | `/contact`   |
