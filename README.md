# Exerec

運動の記録/投稿をサポートするアプリ

## 使い方/機能

- Google でアカウント登録
- Done（運動の記録）
  - クリップボードにコピーしてLINEを開く
  - 運動内容をTweetする
  - クリップボードにコピー
- Template
  - Doneに使用するテンプレートの文章を登録できる
  - Templateの内容を編集できる
- 今月の運動記録をDoneした日付一覧が見れる
- Settingから`OURA PERSONAL ACCESS TOKEN`を登録することで, Oura ring のデータ（1週間分の消費カロリー）を取得可能
- ユーザ名を変更できる（とくに意味はない）

## Dependencies

- next.js
- next UI
- tailwindcss
- recoil

## Setup

`yarn install`

`.env`ファイルが必要

## 作成記録

`yarn create next-app --typescript exerec`

`cd exerec`

`yarn add recoil @nextui-org/react`

`yarn add -D tailwindcss postcss autoprefixer`
