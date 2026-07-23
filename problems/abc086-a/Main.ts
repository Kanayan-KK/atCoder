import { readFileSync } from "node:fs";

// 標準入力を空白単位で読み取る
const input = readFileSync(0, "utf8").trim().split(/\s+/);

// ここに解答を実装する
const [a, b] = input;

Number(a) * Number(b) % 2 === 0 ? console.log("Even") : console.log("Odd");
