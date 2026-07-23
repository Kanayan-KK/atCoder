# AtCoder TypeScript 環境

AtCoder の `TypeScript 5.9 (Node.js 22.19.0)` に合わせたローカル環境です。
各問題の解答、問題リンク、公式サンプルを `problems` の中へまとめています。

## 初回準備

```powershell
fnm install
fnm use
npm install
```

## 問題を解く

例として PracticeA を解く場合は、次のファイルを編集します。

```text
problems/practice-a/Main.ts
```

全問題の型チェック:

```powershell
npm run typecheck
```

PracticeA のサンプルテスト:

```powershell
npm test -- problems/practice-a
```

サンプルテストは未回答の状態では失敗します。
`Main.ts` に解答を実装してから使用してください。

VS Code では `Ctrl+Shift+B` で全問題を型チェックできます。
「タスクの実行」からサンプルテストを選ぶと、対象ディレクトリを入力できます。

## デバッグ実行

1. デバッグする問題の `Main.ts` をVS Codeで開く
2. 停止したい行の左側をクリックしてブレークポイントを置く
3. `F5` を押す
4. 「サンプル01」または「手入力」を選ぶ

「サンプル01」は同じ問題ディレクトリの `samples/01.in` を自動入力します。
「手入力」はデバッグターミナルへ入力を貼り付け、最後に `Ctrl+Z`、`Enter` の順で入力を終了します。

## 新しい問題を追加する

```text
problems/
└─ contest-task/
   ├─ Main.ts
   ├─ README.md
   └─ samples/
      ├─ 01.in
      └─ 01.out
```

`templates/Main.ts` を新しい問題ディレクトリへコピーして使用します。
AtCoderへは対象問題の `Main.ts` の内容だけを提出します。

## 注意

サンプルテストは出力を文字列として比較します。
ABC085C のように正解が複数存在する問題では、正しい別解でもサンプル出力と異なると失敗します。
