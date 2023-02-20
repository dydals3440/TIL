// 2023.02.20(Mon)

// const input = require("fs").readFileSync("/dev/stdin").toString();
const input = require("fs").readFileSync("example/8393.txt").toString();

let res = 0;
for (i = 1; i <= input; i++) {
  res += i;
}
console.log(res);
