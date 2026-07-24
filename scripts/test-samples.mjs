import { existsSync, readdirSync, readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const normalize = (value) => value.trimEnd().replaceAll("\r\n", "\n");
const problemPath = process.argv[2];

if (!problemPath) {
  console.error("使用例: npm test -- problems/practice-a");
  process.exit(1);
}

const problemDir = resolve(problemPath);
const sourcePath = resolve(problemDir, "Main.ts");
const samplesDir = resolve(problemDir, "samples");

if (!existsSync(sourcePath) || !existsSync(samplesDir)) {
  console.error(`${problemPath} に Main.ts または samples がありません。`);
  process.exit(1);
}

const cases = readdirSync(samplesDir)
  .filter((name) => name.endsWith(".in"))
  .sort();

if (cases.length === 0) {
  console.error(`${problemPath}/samples に .in ファイルがありません。`);
  process.exit(1);
}

for (const inputName of cases) {
  // 同名の入出力ファイルを組にして実行する
  const caseName = inputName.slice(0, -3);
  const input = readFileSync(resolve(samplesDir, inputName), "utf8");
  const expected = readFileSync(resolve(samplesDir, `${caseName}.out`), "utf8");
  const result = spawnSync(process.execPath, [sourcePath], {
    input,
    encoding: "utf8",
  });

  // プログラムの実行結果をケースごとに表示する
  const actual = normalize(result.stdout);
  console.log(`\n[${caseName}] 実行結果`);
  console.log(actual || "(出力なし)");

  // 実行失敗または出力不一致を報告する
  if (result.status !== 0) {
    console.error(`NG ${caseName}: ${result.stderr}`);
    process.exit(1);
  }
  if (actual !== normalize(expected)) {
    console.error(`NG ${caseName}\n期待値:\n${normalize(expected)}`);
    process.exit(1);
  }
  console.log(`OK ${caseName}`);
}
