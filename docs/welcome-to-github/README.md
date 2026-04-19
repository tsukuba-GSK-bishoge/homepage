# welcome-to-github

Githubへようこそ!

このtsukuba-GSK-bishogeというGithub Organizationアカウントは、筑波大学現代視覚文化研究会美少女ゲーム班がゲーム開発を円滑に行うために2024年10月に作られました。

このリポジトリは、このOrganizationの管理するプロジェクトを俯瞰でき、Git/Githubの使用に慣れない人も参入しやすいような、エントリポイントとなることを目指して作られました。

## Git introduction

[./git_intro/git_intro.md](./git_intro/git_intro.md)
を参照

## Naming rules

### Repository name

ある一つのゲームエンジンの開発のために、_game_engine_name_-engineというリポジトリを置く。

例）`kirikiriz-engine`

そのゲームエンジンを利用するすべての企画（プロジェクト）は、_project_name_-projectという名前で、_game_engine_name_-engineから`fork`する。

例）`OL-and-AI-project`

これにより、互いのプロジェクトが干渉することがなくなる。

そして、ゲームエンジン周辺の開発を司る一つの大本のリポジトリから`fork`しているため同期を行うことで、プロジェクトのゲームエンジン周りを最新に保つことができる。

逆に、_game_engine_name_-engineリポジトリは、ゲームエンジン周辺の開発のみに専念できる。

### Commit message

コミットは、

```bash
git add file_or_directory
```

で、Gitのワークツリーに加えたいファイルやディレクトリ(_file_or_directory_)を追加し、

```bash
git commit -m "commit message"
```

で、*commit message*とともに、コミット（いわばセーブ地点を作ること）する。

このときのコミットメッセージ(_commit message_)についての規則を定める。（ただし、必ずしも従わなければならないというものではなく、こうするとわかりやすいという程度）

`feat:` 新しい機能

`fix:` バグ修正

`update:` 機能修正（バグではない）

`add:` 新規（ファイル）追加

`remove:` 削除（ファイル）

（例）「話しかける/かけない」という選択肢を追加したとき

```bash
git commit -m "feat: choices whether speak to or not"
```

（例）選択肢のジャンプ先が間違っていたので修正したとき

```bash
git commit -m "fix: jumping destination point of choices"
```

このように、_プレフィックス_（`feat:`や`fix:`）をつけるとわかりやすいという文化がGitにはあるが、何をしたコミットなのかがわかれば何でも良い（もちろん日本語で良い）。

ただし、`"change code"`のように、内容がないようなメッセージは避けること。
