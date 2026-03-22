# 筑波大学現代視覚文化研究会美少女ゲーム制作班公式ホームページ

[https://bishojo.gsk-tsukuba.net/](https://bishojo.gsk-tsukuba.net/)にて公開されている、美少女ゲーム制作班のホームページです。

## 開発について

下にあるようにこのプロジェクトは[Astrojs](https://astro.build/)によって開発されています。
下記のAstroにもともとある機能に加えて、保守性を高めるために以下を導入しています。

- [ESLint](https://eslint.org/)

  JavaScriptのソースコード上の問題を発見、修正します。

- [Prettier](https://prettier.io/)

  ソースコードの形式を統一します。

- GitHub Actions

  GitHubにコードをプッシュするなどの特定の条件で発動する開発の半自動化システムです。

  - CI

    上記2つを用い、ソースコードに問題がないことを`master`ブランチへのマージ前に確認します。
    このチェックに通らない場合、Pull Requestはマージできません。
    手元で、

    ```
    npm run eslint
    npm run format
    ```

    をそれぞれ実行したり、ソースコード中のバグを手動で除去したりして問題がない状態にしてください。

  - CD

    開発が行われている2025年3月末現在、
    このホームページは、現代視覚文化研究会情報システム担当が管理している[さくらインターネット](https://www.sakura.ad.jp/)のVPSの上で、
    [portainer](https://www.portainer.io/)で管理された[Docker](https://www.docker.com/)コンテナ群の1つとして稼働することとなっています。
    `master`ブランチへのPull Requestがマージされた際にただちにこの本番環境に反映されるように、自動でデプロイされるアクションを現在整備中です。

### 内容を更新したい!!

比較的簡単に更新できるようになっているのは、「お知らせ(news)」、「作品(works)」の2つです。

それぞれ元のテキストはMarkdown形式[^markdown]で書かれており、画像などのアセットファイルは特定のディレクトリ(フォルダ)に置くことを推奨しています。

以下の手順で適当に作ったものをgit commitしてGitHub上でPRを作ってマージしてください。
分からない人は分かる人に聞いてください。

それ以外については、それほどは簡単に更新できないものの、
`src/pages/`以下が、URL上のホーム以下に対応しているので、見る人が見れば分かるはずです。

(たとえばホーム https://bishojo.gsk-tsukuba.net/ をいじりたかったら`src/pages/index.astro`を、メンバー募集 https://bishojo.gsk-tsukuba.net/members/ の画像が古いと思ったら`src/pages/members.astro`を、とりあえず見に行って順に辿っていけば良いということです。)

[^markdown]: テキストの修飾を軽量に行えるマークアップ記法。本当に何も難しくないのでぜひ調べて書いてください。

#### お知らせ(news)

##### お知らせのファイル作成、日付と説明、本文

例えば`hoge`(任意の文字列で置き換えてください。ただしURLなどに露出するためアルファベットでハイフン区切りを推奨します)というお知らせを作りたいとき、

`src/content/news/`以下に`hoge.md`ファイルを作ってください(つまり`src/content/news/hoge.md`ができる)。

この場合、URLでは`https://bishojo.gsk-tsukuba.net/news/#hoge`となります。

ファイルの冒頭に以下のように記述して日付(`date`, `YYYY/MM/DD`形式を推奨)と説明(`description`)を付けてください。付けないと壊れますので注意を。

```md
---
date: 2025/04/27
description: ホームページを公開しました
---

本文ですわ〜。
```

お知らせの本文は、これに続けてMarkdown記法で記述できます。

##### 画像ファイル

画像などのアセットファイルを使いたい場合、

`src/assets/news/hoge/`というディレクトリを作り、例えば`fuga.png`をそこに置きます。

`src/content/news/hoge.md`のMarkdownからは

```md
![fuga](../../assets/news/hoge/fuga.png)
```

として参照できます。

#### 作品(works)

お知らせと大まかには同じ雰囲気です。

##### 作品のファイル作成とタイトル、説明

例えば`hoge`という作品を作りたいとき、

`src/content/works/`以下に`hoge.md`ファイルを作ってください(つまり`src/content/works/hoge.md`ができる)。

ファイルの冒頭に以下のように記述して、タイトル(`title`)、説明(`description`)を付けてください。

```md
---
title: hogehoge
description: fugafuga
---
```

##### キービジュアル画像

キービジュアルの画像を`src/assets/works/hoge/keyvisual.png`として置いてください。

png以外にjpeg, jpg, gifのファイル拡張子が使えるらしいですが本当かは知りません。

**いずれの場合も`keyvisual.拡張子`としないと表示されません。**

https://bishojo.gsk-tsukuba.net/works/ にタイトル、説明、キービジュアルの3つがサムネイルとして載ります。

##### 作品の本文、画像ファイル

本文は

`https://bishojo.gsk-tsukuba.net/works/hoge`

に生えます。先程のworksのほうからリンクされているはずですが...。

上記のファイル冒頭の記述に続けて、Markdown記法を使って書いてください。

画像などのアセットファイルを使いたい場合、

`src/assets/works/hoge/`というディレクトリを作り、例えば`fuga.png`をそこに置きます。

`src/content/works/hoge.md`のMarkdownからは

```md
![fuga](../../assets/works/hoge/fuga.png)
```

として参照できます。
