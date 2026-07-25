import { readFileSync } from "node:fs";

// 標準入力を空白単位で読み取る
const inputSource = process.env.ATCODER_INPUT_FILE ?? 0;
const input = readFileSync(inputSource, "utf8").trim().split(/\s+/);

// ここに解答を実装する
const [m, d, s] = input
const numM = Number(m)
const numD = Number(d)
const array = s.split("")
const dp = Array<Boolean>(array.length).fill(false)
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === "G") {
        const start = i - numD > 0 ? i - numD : 0;
        dp.fill(true, start, i + numD + 1)
    }
}
console.log(dp.filter(x => x === false).length)
