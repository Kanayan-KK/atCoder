import { readFileSync } from "node:fs";

// 標準入力を空白単位で読み取る
const inputSource = process.env.ATCODER_INPUT_FILE ?? 0;
const input = readFileSync(inputSource, "utf8").trim().split(/\s+/);

// ここに解答を実装する
const [N, Y] = input.map(Number)
let isLogged = false
const checkSum = (x: number, y: number, z: number) => {
    if (isLogged) return false;
    const sum = 10000 * x + 5000 * y + 1000 * z;
    if (Y === sum) {
        console.log(`${x} ${y} ${z}`)
        isLogged = true;
        return true;
    }
    return false;
}

for (let iX = 0; iX < (Y / 10000) + 1; iX++) {
    if (isLogged) break
    for (let iY = 0; iY < (Y / 5000) + 1; iY++) {
        if (isLogged) break
        const iZ = N - (iX + iY)
        if (iZ < 0) continue
        if ((iX + iY + iZ) != N) continue
        checkSum(iX, iY, iZ)
    }
}

if (!isLogged) console.log("-1 -1 -1")