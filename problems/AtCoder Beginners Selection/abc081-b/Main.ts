import { readFileSync } from "node:fs";

// 標準入力を空白単位で読み取る
const inputSource = process.env.ATCODER_INPUT_FILE ?? 0;
const input = readFileSync(inputSource, "utf8").trim().split(/\s+/);

// ここに解答を実装する

let count = 0;
const updated = input.slice(1, input.length);

const checkInput = () => {
    for (let index = 0; index < updated.length; index++) {
        const num = Number(updated[index]);
        if (num % 2 === 0) updated[index] = String(num / 2);
        if (num % 2 === 1) return;
        if (updated.length - 1 === index) {
            count++;
            checkInput();
        }
    }
}

checkInput();

console.log(count);
