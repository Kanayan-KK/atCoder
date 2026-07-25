import { readFileSync } from "node:fs";

// 標準入力を空白単位で読み取る
const inputSource = process.env.ATCODER_INPUT_FILE ?? 0;
const input = readFileSync(inputSource, "utf8").trim().split(/\s+/);

// ここに解答を実装する
const [s] = input
const words = ["dream", "dreamer", "erase", "eraser"]

const a = Array<boolean>(s.length + 1).fill(false)
a[0] = true
for (let i = 0; i < s.length; i++) {
    if (!a[i]) continue
    for (const w of words) {
        if (s.startsWith(w, i))
            a[i + w.length] = true
    }
}
console.log(a[s.length] ? "YES" : "NO")