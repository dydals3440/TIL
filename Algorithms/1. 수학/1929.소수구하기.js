// 2023.02.20(Mon)

// const input = require("fs").readFileSync("/dev/stdin").toString();
const input = require("fs")
  .readFileSync("example/1929.txt")
  .toString()
  .trim()
  .split(" ");

let N = Number(input[0]); // 3
let M = Number(input[1]); // 16
let isPrimeNumber = Array(M + 1)
  .fill(true)
  .fill(true, 0, 2);

function result() {
  // 2부터 시작. 주어진값 N의 제곱근까지 i의 배수들을 모두 false로 만들어준다(i는 여전히 true)
  for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
    if (isPrimeNumber[i]) {
      let m = 2; // 배수들을 구하기위해 곱해줄 수.
      while (i * m <= M) {
        isPrimeNumber[i * m] = false; // i의 배수들을 false로 바꾼다.
        m++; // i * m은 초기에 2 * 2 이고 m++ 해줌으로써 i + m은 2 * 3으로 바뀐다.
      }
    }
  }

  const results = []; // 결과값을 담을 배열.
  for (let i = N; i <= M; i++) {
    // N부터 M까지의 숫자 i가 소수인지 아닌지 확인하는 for문
    if (isPrimeNumber[i]) {
      results.push(i); // i가 소수라면 results배열에 추가시켜준다.
    }
  }
  console.log(results.join("\n"));
}

result();
