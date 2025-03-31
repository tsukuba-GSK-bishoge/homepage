# 筑波大学現代視覚文化研究会美少女ゲーム制作班公式ホームページ

## Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


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
