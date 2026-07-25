import { readFileSync } from "node:fs";

// 標準入力を空白単位で読み取る
const inputSource = process.env.ATCODER_INPUT_FILE ?? 0;
const input = readFileSync(inputSource, "utf8").trim().split(/\s+/);

// ここに解答を実装する
const [a, b, c, x] = input;

const numA = Number(a);
const numB = Number(b);
const numC = Number(c);
const numX = Number(x);

let count = 0;
let callCount = 0;

const checkSum = (a: number, b: number, c: number) => {
    callCount++;
    const sum = 500 * a + 100 * b + 50 * c;
    if (sum === numX)
        count++;
}

for (let indexA = 0; indexA < numA + 1; indexA++) {
    for (let indexB = 0; indexB < numB + 1; indexB++) {
        for (let indexC = 0; indexC < numC + 1; indexC++) {
            checkSum(indexA, indexB, indexC);
        }
    }
}

console.log(count);
