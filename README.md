# AtCoder TypeScript環境

AtCoderの`TypeScript 5.9 (Bun 1.2.21)`に合わせた環境です。
各問題の解答、問題リンク、公式サンプルを`problems`にまとめています。

## 初回準備

```powershell
& "$env:USERPROFILE\.bun\bin\bun.exe" install
```

使用するBunのバージョンは`.bun-version`と`package.json`で`1.2.21`に固定しています。

## 問題を解く

PracticeAの場合は`problems/practice-a/Main.ts`を編集します。

全問題の型チェック:

```powershell
& "$env:USERPROFILE\.bun\bin\bun.exe" run typecheck
```

PracticeAのサンプルテスト:

```powershell
& "$env:USERPROFILE\.bun\bin\bun.exe" run test -- problems/practice-a
```

VS Codeでは`Ctrl+Shift+B`で全問題を型チェックできます。
「タスクの実行」からサンプルテストを選ぶと、対象ディレクトリを入力できます。

## F5デバッグ

1. デバッグする問題の`Main.ts`にブレークポイントを置く
2. `F5`を押す
3. 問題ディレクトリとサンプル番号を入力する

指定した問題の`Main.ts`がBunで直接実行され、指定したサンプルが自動入力されます。
JavaScriptへの事前ビルドは行いません。

F5には公式のBun VS Code拡張`oven.bun-vscode`が必要です。
この環境にはインストール済みです。反映されない場合はVS Codeを再起動してください。

## Webデバッガー

VS Codeの「タスクの実行」から`AtCoder: Webデバッグ`を選び、問題ディレクトリとサンプル番号を入力します。
ターミナルに表示された`https://debug.bun.sh/`のURLを開いてください。

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

`templates/Main.ts`を新しい問題ディレクトリへコピーします。
AtCoderへは対象問題の`Main.ts`の内容だけを提出します。

## 注意

各`Main.ts`は、F5デバッグ時だけ`ATCODER_INPUT_FILE`からサンプルを読みます。
AtCoderではこの環境変数がないため、通常どおり標準入力を読みます。

サンプルテストは出力を文字列として比較します。
ABC085Cのように正解が複数存在する問題では、正しい別解でもサンプル出力と異なると失敗します。
