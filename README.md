# 筑波大学現代視覚文化研究会美少女ゲーム制作班公式ホームページ

## 開発について

上にあるようにこのプロジェクトは[Astrojs](https://astro.build/)によって開発されています。
上記のAstroにもともとある機能に加えて、保守性を高めるために以下を導入しています。

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
