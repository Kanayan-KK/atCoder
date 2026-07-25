import { readFileSync } from "node:fs";

// 標準入力を空白単位で読み取る
const inputSource = process.env.ATCODER_INPUT_FILE ?? 0;
const input = readFileSync(inputSource, "utf8").trim().split(/\s+/);

// ここに解答を実装する
const N = Number(input.shift())
const P = input.slice(0, N).map(Number)
const numP = Number(P.join(""))
const Q = input.slice(N, input.length).map(Number)
const numQ = Number(Q.join(""))
const R = P.sort()
for (let i = 0; i < N + 1; i++) {
    const numbers = [];
    const Pi = P[i];

}
console.log()