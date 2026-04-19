# Welcome to Git/GitHub!!

![Git](https://git-scm.com/images/logos/downloads/Git-Logo-2Color.svg)

![GitHub](./images/github-mark.png)

GitやGitHubについて、知っているし使っている人、聞いたことがある人、聞いたことがあるけど違いがわからない人、マジで知らない人、様々にいると思いますが、Gitは上手く使うことで開発のバージョン管理を行うことができるツールです。

二度と、

`完成版.xlsx`

`完成版2.xlsx`

`完成版2 のコピー.xlsx`

`真の完成版.xlsx`

`本当に真の完成版.xlsx`

`すいませんこれが本当の完成版です.xlsx`

のようなバージョンの乱立地獄に陥らなくなれます（使い方次第で←重要）。

## Git/GitHubとは

### Gitの歴史

Gitはバージョン管理システムです。

Linuxの開発者であるところのリーナス・トーバルズ(Linus Torvalds)が、Linuxを開発する際に

\現行のバージョン管理システムは使えん！　オレオレバージョン管理システム作ったろ！/

![Linus Torvalds](https://avatars.githubusercontent.com/u/1024025?v=4)

と言って生まれました。

### Gitの用語/概念

#### リモート/ローカルとは

Gitは、

そもそもリモートにサーバが置いてあり、

1. それぞれのユーザがアクセスしリモートをローカルにコピーする(`clone`, `pull`)、

1. ローカルで編集を加え(`add`, `rm`, `commit`)、

1. 編集結果をリモートに追加する(`push`)

という一連の流れを取って開発を進めます。

このリモートをホスティングしてくれ、web上でリポジトリの状態を閲覧できるようにしたサービスが、GitHubです。

#### リポジトリとは

リポジトリは、一般に、ある一つの開発に対して一つ作られ、内部にディレクトリツリーを持っています。

#### ブランチとは

ブランチは、枝です。
リポジトリが、開発の歴史を記録したツリーを持っていて、その歴史は枝を生やす（世界線を分岐させるようなイメージ）ことができます。

```
git branch new-branch-name
git switch new-branch-name
```

とすると、`branch`で`new-branch-name`ブランチを生やすことができ、

`switch`で指定した名前のブランチに移動できます。

歴史的にGitでは、デフォルトブランチは`master`です。

しかしGitHubでは、デフォルトブランチは`main`です。

`master`または`main`ブランチを最も安定した完成ブランチ、`develop`ブランチを開発の主要ブランチ、個々の更新を`develop`から生やしたブランチで行うと、開発としては良いモデルでしょう。

#### コミットとは

ブランチという世界線の分岐を作って編集を加えると言いましたが、
その編集のGitが記録してくれる最小単位がコミットです。

コミットとは要はセーブポイントを作るというイメージで、仮にその後間違った編集操作をしてしまってもそのセーブポイントまで戻ってくることができます。

```
git add path/to/yourfile
git commit -m "コミットメッセージ"
```

のように、まず`add`で指定したファイルの存在や変更をGitに認識させ
(`path/to/yourfile`にはファイルパスを指定しますが、難しければリポジトリのルートディレクトリで`git add .`とやればすべてのファイルの変更を認識してくれます)、

`commit`でセーブポイントを作ります
(このときにコミットメッセージを書きます。日本語でも英語でも構いませんが、そのコミットはどういう編集を加えたものなのかが後で見てすぐ分かるものが良いです。
例えば、`"change code"`なんてのはソースコードの変更なのはそりゃそうだろうよすぎて内容がないようです。
`"feat: なんとか機能を実装した"`のようなのが良いでしょう)。

## Git/GitHubを使おう

### Git/GitHubを始めよう

#### GitHubアカウントの作成

[GitHub](https://github.com/)にアクセスし、アカウントを作りましょう。

GitHubの規約が近年ゆるくなったりしたとはいえ、一生に1つのアカウントを使うつもりで作りましょう。

#### Gitのインストール

Gitは元来コマンドラインで操作するツールです(`git`コマンド)。

今どきは、vscodeのGUIで操作することもできます。

[Git installation](https://git-scm.com/book/ja/v2/%E4%BD%BF%E3%81%84%E5%A7%8B%E3%82%81%E3%82%8B-Git%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)にアクセスし、手順に従ってGitをインストールしましょう。

本当かは分かりませんが、Windowsではpowershell上で次のようにするとインストールできるらしいです。

```powershell
winget install --id Git.Git -e --source winget
```

#### GitHub CLI でアカウントにサインインする

Gitはコマンドラインで操作することができますが、特にGitHubによってホスティングされているリポジトリに対する操作をする際は、GitHubアカウントにログインする必要があります。ここで、GitHub CLI(`gh`コマンド)が必要になります。

[GitHub CLI](https://github.com/cli/cli)にアクセスし、手順に従ってGitHub CLIをインストールしましょう。

Windowsでは以下の通り。

```
winget install --id GitHub.cli
```

以下で、GitHubにログイン

```
gh auth login
```

また、コミットが誰が行ったものなのかを記録するため、
メールアドレスと名前を設定する必要があります。

```
git config -g user.email "your.email.name@example.com"
git config -g user.name "your-name"
```

`your-name`はGitHubアカウントと同じ名前が良いはずです。
