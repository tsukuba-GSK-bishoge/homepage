# 筑波大学現代視覚文化研究会 美少女ゲーム制作班 公式ホームページ

[https://bishojo.gsk-tsukuba.net/](https://bishojo.gsk-tsukuba.net/) にて公開されている公式ホームページです。

## 開発環境

[Astro](https://astro.build/) で開発されています。コード品質のために以下を導入しています。

- **[ESLint](https://eslint.org/)** — JavaScript のソースコード上の問題を発見・修正します
- **[Prettier](https://prettier.io/)** — ソースコードのフォーマットを統一します

### セットアップ

```bash
npm install
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド
npm run preview  # ビルド結果のプレビュー
```

## CI/CD

### CI（継続的インテグレーション）

`master` ブランチへの Pull Request 時に ESLint と Prettier によるチェックが自動で走ります。
チェックを通過しないと PR をマージできません。

手元でも事前に確認できます：

```bash
npm run eslint:check
npm run format:check
```

問題があれば以下で自動修正できます：

```bash
npm run eslint
npm run format
```

### CD（継続的デプロイ）

`master` ブランチへのマージ時に自動でデプロイされます。
Docker イメージ（Node ビルダー → Nginx）をビルドして GHCR に push し、
さくらインターネット VPS 上の [Portainer](https://www.portainer.io/) 経由で反映されます。

## コンテンツの更新

### お知らせ（news）

`src/content/news/{slug}.md` を作成します。`{slug}` はアルファベット・ハイフン区切り推奨。

```md
---
date: 2025/04/27
description: ホームページを公開しました
---

本文をここにMarkdown形式で書きます。
```

- URL: `https://bishojo.gsk-tsukuba.net/news/#{slug}`
- 画像などのアセット: `src/assets/news/{slug}/` に置き、`![説明](../../assets/news/{slug}/fuga.png)` で参照

### 作品（works）

`src/content/works/{slug}.md` を作成します。

```md
---
title: 作品タイトル
description: 作品の説明
---

本文をここにMarkdown形式で書きます。
```

- キービジュアル画像（必須）: `src/assets/works/{slug}/keyvisual.{png|jpg|jpeg|gif}` に配置
- URL: `https://bishojo.gsk-tsukuba.net/works/{slug}`
- 画像などのアセット: `src/assets/works/{slug}/` に置き、`![説明](../../assets/works/{slug}/fuga.png)` で参照

### その他のページ

`src/pages/` 以下のファイルがそのまま URL に対応しています。

| ファイル | URL |
|---|---|
| `src/pages/index.astro` | `/` |
| `src/pages/about.astro` | `/about` |
| `src/pages/works.astro` | `/works` |
| `src/pages/news.astro` | `/news` |
| `src/pages/character.astro` | `/character` |
| `src/pages/members.astro` | `/members` |
| `src/pages/contact.astro` | `/contact` |
