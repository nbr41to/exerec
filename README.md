# Exerec

運動の記録/投稿をサポートするアプリ

毎日運動内容をどこかに投稿するときに毎度手入力する手間を省く

そのついでに運動の記録を貯めることもできる

https://exerec.vercel.app/

## 使い方/機能

- Google でアカウント登録
- Done（運動の記録）
  - クリップボードにコピーして LINE を開く
  - 運動内容を Tweet する
  - クリップボードにコピー
- Template
  - Done に使用するテンプレートの文章を登録できる
  - Template の内容を編集できる
- 今月の運動記録を Done した日付一覧が見れる
- Setting から`OURA PERSONAL ACCESS TOKEN`を登録することで, Oura ring のデータ（1 週間分の消費カロリー）を取得可能
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

## Issues

- [ ] Twitter と LINE を押したら Modal を閉じるようにする
- [ ] カレンダーの日付の順番を Sort する
