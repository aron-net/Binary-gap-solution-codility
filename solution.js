// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maxGap = 0;
    let curMaxGap = 0;
    let binStr = N.toString(2);
    let startIndexFormEnd = binStr.length - 1;
    for (startIndexFormEnd; startIndexFormEnd >= 0; startIndexFormEnd--) {
        if (binStr.charAt(startIndexFormEnd) != '0') {
            break;
        }
    }
    for (let i = startIndexFormEnd -1; i>=0; i--) {
        if (binStr.charAt(i) === '0') {
            curMaxGap = curMaxGap + 1;
        } else {
            if (curMaxGap > maxGap) {
                maxGap = curMaxGap;
            }
            curMaxGap = 0;
        }
        return maxGap;
    }
}