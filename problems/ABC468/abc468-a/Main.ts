import { readFileSync } from "node:fs";

// 標準入力を空白単位で読み取る
const inputSource = process.env.ATCODER_INPUT_FILE ?? 0;
const input = readFileSync(inputSource, "utf8").trim().split(/\s+/);

// ここに解答を実装する
const inputNum = input.map(Number)
const result = [];
for (let i = 1; i < inputNum.length - 1; i++) {
    if (inputNum[i] < inputNum[i + 1] && inputNum[i + 1] > inputNum[i + 2])
        result.push(i)
}
console.log(result.length)

