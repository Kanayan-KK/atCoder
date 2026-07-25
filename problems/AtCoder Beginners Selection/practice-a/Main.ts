import { readFileSync } from "node:fs";

// 標準入力を空白単位で読み取る
const inputSource = process.env.ATCODER_INPUT_FILE ?? 0;
const input = readFileSync(inputSource, "utf8").trim().split(/\s+/);

// ここに解答を実装する

const [a, b, c, d] = input;

console.log(`${Number(a) + Number(b) + Number(c)} ${d}`);
