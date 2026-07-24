import { readFileSync } from "node:fs";

// 標準入力を空白単位で読み取る
const inputSource = process.env.ATCODER_INPUT_FILE ?? 0;
const input = readFileSync(inputSource, "utf8").trim().split(/\s+/);

// ここに解答を実装する
const [n, a, b] = input;
const numN = Number(n);
const numA = Number(a);
const numB = Number(b);

let sum = 0;
for (let index = 0; index <= numN; index++) {
    let indexSum = 0;
    String(index).split("").forEach(x => indexSum += Number(x));
    if (indexSum >= numA && indexSum <= numB)
        sum += index;
}
console.log(sum);