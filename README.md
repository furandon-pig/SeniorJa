# SeniorJa
'writen By hiro2021'
# シニアもくもく会　Javascript部屋
 毎月開催されるプログラムを学ぶコミュニティサークルです。このサイトは公開で運用します。このサイトを利用に当たり、簡単な自己紹介をご記入ください。
本日　LiveShareを体験します。誰が変更したのか、形跡は残るのかな？
今　VscodeのLiveShareからJoinを選んではいりました。
***
次回もくもく会　６月２４日（土）　記載ボード
1. プッシュのやり方お教えてください。皆さんそれぞれのやり方があるようなので、やり方を聞きたいです。

```sh
$ # 現在のブランチを確認する。
$ git branch 
* master
$
$ # 作業用にfix_readmeという名前のブランチ作成する。
$ # (ブランチの名前は作業内容に沿った名前にするとよい)
$ git checkout -b fix_readme
Switched to a new branch 'fix_readme'
$ git branch
* fix_readme
  master
```
2. 先回プログラムを投稿したyachiyoさんの「算術で着せ替え？」を話合いしませんか
3. お題について　いろんなスライドショー　lesson3でスライドショーのサンプル上げましたが、いろんな方法があるようなので、各人でトライしませんか
4. 他 
***
## GitとGitHub練習で自己紹介を作成
自己紹介のファイルを作成します。
 1. GitHubからクローンを自分のパソコンに読み込みます。
 2. 自己紹介のファイル(ニックネイム.md)を作成します。
 3. mdファイルは、VScodeのプレビューで見ると読み易くなります。
 4. 自己紹介のファイルをプッシュします。
 5. 自己紹介以外を編集する時は、masterをブランチします。
 6. ブランチ名はファイル名にします。
 7. 修正物は、プルリクエストをしてmasterに統合します。

    [Gitの説明](https://github.com/furandon-pig/senior-programming-memo/blob/main/memo/git/git.md)

    [GitHubの説明](https://github.com/furandon-pig/senior-programming-memo/blob/main/memo/git/github.md)
*** 
## サイト内ホルダー 
1. hajime　サイト紹介と自己紹介
2. lesson　初心者道場　はじめてJavascriptを始める方
3. step up　初心者道場　中級以上　
4. basic　　lessonと違い、独立のお試しページ
5. recital 　発表用の作品を登録
***
## よく使うgitコマンド
### オリジナルのリポジトリに入った変更内容を取り込む場合の手順
```sh
$ # リポジトリの参照先を確認する。
$ # この例ではoriginとupstreamの2つの参照先がある。
$ # 慣習的に大元のリポジトリは"upstream"と呼ばれたりする。
$ git remote -v
origin  git@github.com:furandon-pig/SeniorJa.git (fetch)
origin  git@github.com:furandon-pig/SeniorJa.git (push)
upstream        git@github.com:HirokazuYoshino/SeniorJa.git (fetch)
upstream        git@github.com:HirokazuYoshino/SeniorJa.git (push)
$ # 大元のリポジトリに入った修正を取り込む。
$ git fetch upstream
$ # masterブランチに切り替える。
$ git checkout master
Switched to branch 'master'
$ # 取り込んでおいた大元のリポジトリの変更内容をmasterブランチに反映(マージ)する。
$ git merge upstream/master
$ # origin(大元のリポジトリからフォークしたリポジトリ)のmasterにプッシュする。
$ git pushd origin master
```
***
## 参考文献
1. 本当によくわかるJavaScriptの教科書　
[サポートページ](http://isbn.sbcr.jp/95150)
2. Visual Studio Code　完全入門　リブロワークス著
3. chatGPT
4. 新Bing
***
## 拡張子.md --->Markdownファイル
ソフトウェアの開発向けドキュメントに広く使われ、Slackでも使えるようです。[Docs Markdown リファレンス](https://docs.microsoft.com/ja-jp/contribute/markdown-reference)
1. 見出し #　
2. リスト * 
3. 番号付は半角番号に.に半角スペース
4. 文字強調　*で挟む
5. テーブル作成　|　と --
6. 画像表示 ![代替テキスト]\(画像のファイルの相対パス)
7. ブロック引用　>
8. リンク　\[]()
>他にも色々あるようです。試してお使いください。
