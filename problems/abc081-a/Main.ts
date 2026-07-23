import { readFileSync } from "node:fs";

// 標準入力を空白単位で読み取る
const input = readFileSync(0, "utf8").trim().split("");

// ここに解答を実装する
console.log(input.filter(x => x === "1").length);
