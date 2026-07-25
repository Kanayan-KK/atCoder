import { readFileSync } from "node:fs";

// 標準入力を空白単位で読み取る
const inputSource = process.env.ATCODER_INPUT_FILE ?? 0;
const input = readFileSync(inputSource, "utf8").trim().split(/\n/);

// ここに解答を実装する
input.shift();
input.unshift("0 0 0")
let result = true
for (let i = 0; i < input.length - 1; i++) {
    const [t, x, y] = input[i].trim().split(/\s+/).map(Number)
    const [nT, nX, nY] = input[i + 1].trim().split(/\s+/).map(Number)
    const dt = Math.abs(nT - t)
    const dist = Math.abs(nX - x) + Math.abs(nY - y)

    if (dist > dt || (dt - dist) % 2 !== 0) {
        result = false
        break
    }
}

console.log(result ? "Yes" : "No")