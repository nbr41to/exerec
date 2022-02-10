# Exerec

運動の記録/投稿をサポートするアプリ

毎日運動内容をどこかに投稿するときに毎度手入力する手間を省く

そのついでに運動の記録を貯めることもできる

https://exerec.vercel.app/

## 使い方/機能

- `Login` → Google でアカウント登録
- `Done`（運動の記録）→ 保存する →
  - `LINE`：クリップボードにコピーして LINE を開く
  - `Twitter`：運動内容を Tweet する画面に移動
  - `Copy`：クリップボードにコピー
- `New Template` or `Add Template` →
  - Done に使用するテンプレートの文章を登録できる
- `Edit` → Template の内容を編集できる
- `Calender`：
  - 今月に `Done` した日付一覧を確認できる
  - `OURA PERSONAL ACCESS TOKEN`を登録していれば 1 週間分の消費カロリーを確認できる
- `Setting`：
  - ユーザ名を変更できる（とくに意味はない）
  - `OURA PERSONAL ACCESS TOKEN`を登録/変更できる

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

- 今月以外の継続度も見れるようにする
- 全てプレビューページに変更し,API を叩いたときに登録を促す Modal を出すようにする
- 画面の縦横を固定化
- tailwind の並び替えを追加
