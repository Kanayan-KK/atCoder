import { readFileSync } from "node:fs";

// 標準入力を空白単位で読み取る
const inputSource = process.env.ATCODER_INPUT_FILE ?? 0;
const input = readFileSync(inputSource, "utf8").trim().split(/\s+/);

// ここに解答を実装する
input.shift()
const numInput = input.map(Number)
let result = 0
let beforeNum = 0
for (let i = 0; numInput.length != 0; i++) {
    const maxNum = Math.max(...numInput)
    numInput.splice(numInput.lastIndexOf(maxNum), 1)
    if (beforeNum !== maxNum) result++
    beforeNum = maxNum
}

console.log(result);
