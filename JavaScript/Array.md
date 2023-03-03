# 1. Array(배열)

배열은 복수의 데이터를 순서가 있게 담을 떄 이용하는 자료구조입니다.
아래와 같이 배열을 선언하면 됩니다.

```js
let array1 = new Array();
let array2 = [];
```

### 1-1 []를 이용한 배열 정의

```js
let foods = ["피자", "치킨", "돈까스"];
console.log(foods[0]); // '피자'
console.log(foods[1]); // '치킨'
console.log(foods[2]); // '돈까스'
```

인덱스 번호를 사용하여 배열의 요소를 덮어씌워 바꿀 수 있습니다.

```js
foods[0] = "만두";
console.log(foods[0]); // '만두'
```

.length를 통해 길이 또한 구할 수 있습니다.

```js
console.log(foods.length); // 3
```

### 1-2 new Array() 를 이용한 배열 정의

배열은 new Array()로 선언할 수 있습니다.

```js
const array = new Array("재밌는", "코딩");
console.log(array[0]); // '재밌는'
console.log(array[1]); // '코딩'
console.log(array.length); //2
```

new Array()의 소괄호 안에 숫자를 넣으면 배열의 길이를 초기에 설정할 수 있습니다.

```js
const array2 = new Array(10);
console.log(array2);
// (10) [empty × 10]

array2[9] = "last index";
console.log(array2);
// (10) [empty × 9, 'last index']
```

# 2. 배열 객체 내장 함수

### 2-1. 요소 추가, 제거

#### 1. push()

배열의 맨 끝에 요소를 추가!
요소를 추가한 후 배열의 길이를 숫자 타입으로 반환

```js
let number = ["one", "two", "three"];
number.push("four"); // 4
console.log(number); // (4) ['one', 'two', 'three', 'four']
```

#### 2. pop()

pop()은 배열의 맨 끝 요소를 추출합니다.
pop()은 추출한 요소를 반환해 줍니다.

```js
number.pop(); // four
console.log(number); // (3) ['one', 'two', 'three']
```

#### 3. unshift()

unshift()는 push()와 반대로 맨 앞에 요소를 추가합니다.
unshift()도 요소를 앞에 추가한 후 배열의 길이를 숫자 타입으로 반환합니다.

```js
number.unshift("zero"); // 4
console.log(number); // (4) ['zero', 'one', 'two', 'three']
```

#### 4. shift()

shift()는 pop()과 반대로 맨 앞의 요소를 추출합니다.
그리고 추출한 요소를 반환합니다.

```js
number.shift(); // 'zero'
console.log(number); // (3) ['one', 'two', 'three']
```

#### 5. concat()

여러개의 배열을 하나로 합치고 싶을 떄 사용합니다.

```js
const nums = ["one", "two", "three"];
const nums2 = ["four", "five", "six"];
const numbers = nums.concat(nums2);
console.log(numbers); // (6) ['one', 'two', 'three', 'four', 'five', 'six']
```

#### 6. spread 연산자 (...)

spread 연산자를 통하여 ...배열 형태로 선언시 배열 요소의 데이터가 전부 들어간 배열을 만들 수 있습니다.

```js
const nums = ["one", "two", "three"];
const nums2 = ["four", "five", "six"];
const newNum = [...nums, ...nums2];

console.log(newNum); //  (6) ['one', 'two', 'three', 'four', 'five', 'six']
```

#### 7. splice() 🔥

배열의 요소를 지우거나, 추가할 떄 사용

```js
배열.splice(인덱스, [, 삭제개수, 요소1, 요소2, ...요소N]);
```

삭제와 추가는 아래와 같다.
splice()로 삭제를 하면 원본 배열이 변형됩니다.
음수 인덱스 또한 사용이 가능합니다.

```js
// 삭제
let numbers = ["1", "2", "3", "4", "5", "6"];

numbers.splice(1, 1); // 2가 삭제됨
console.log(numbers); // ['1', '3', '4', '5', '6']

// 추가
numbers.splice(1, 0, "2");
console.log(numbers); // (6) ['1', '2', '3', '4', '5', '6']

// 음수 인덱스 사용
numbers.splice(-1, 1); // 6 삭제
console.log(numbers); // (5) ['1', '2', '3', '4', '5']
```

#### 8. delete

배열은 객체형에 속하기에 예약어 delete로도 요소 삭제가 가능하다. 하지만 delete로 배열 요소를 삭제해도 요소만 삭제되고 배열의 길이는 변화하지 않습니다. 이점을 주의해서 사용해야합니다.

```js
let numbers = ["1", "2", "3", "4", "5"];
delete numbers[0];

console.log(numbers); // (5) [empty, '2', '3', '4', '5']
```

#### 9. slice()

splice()와 유사하지만 훨씬 간단하게 이용이 가능.
slice()는 원본 배열을 변형시키지 않다.

```js
// 문법
배열.slice([시작 인덱스], [끝 인덱스]);
```

범위는 시작인덱스 ~ 끝 인덱스 - 1 까지의 요소를 의미합니다. slice()도 splice()처럼 음수 인자를 사용할 수 있습니다.
인자를 하나만 넣을 시 해당 인자 인덱스 요소부터 배열 끝까지에 해당합니다.

```js
let name = ["y", "o", "n", "g", "m", "i", "n"];
console.log(name.slice(4)); // (3) ['m', 'i', 'n']
console.log(name.slice(4, 7)); // (3) ['m', 'i', 'n']
console.log(name.slice(-3)); // (3) ['m', 'i', 'n']

console.log(name); //(7) ['y', 'o', 'n', 'g', 'm', 'i', 'n']
```

### 2-2 반복 작업

#### for

배열 순회시 for문은 가장 오래된 사용 방법이다.

```js
let name = ["y", "o", "n", "g", "m", "i", "n"];
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}
```

#### for ... of

for..of는 현재 요소의 인덱스를 얻을 수 없고 요소 값 만을 얻을 수 있습니다. 배열을 반복 순회할 때 간편하게 사용 가능하다.

```js
let name = ["y", "o", "n", "g", "m", "i", "n"];

// 문자열 하나하나를 받아와서 출력함
for (x of name) {
  console.log(x);
}
```

#### for ... in

배열은 객체형이기에 for ... in 사용이 가능합니다.
for ... in 은 현재 요소의 인덱스를 순회합니다. 배열 요소를 반복 순회할 때는 **for..in을 사용할 수 있지만 속도가 느리기 때문에 for..of가 더 좋습니다.**

```js
let name = ["y", "o", "n", "g", "m", "i", "n"];

// x는 인덱스를 반환합니다. 0, 1, 2, 3, 4, 5, 6, 7, 8
for (x in name) {
  console.log(name[x]);
}
```

#### forEach()

forEach()는 인자로 콜백함수를 넣어서 반복작업을 할 수 있습니다.
콜백함수의 item은 배열 요소를 가리킵니다. index는 배열 요소의 인덱스를 가리키고, array는 배열 전체 요소를 가리킵니다.

```js
let name = ["y", "o", "n", "g", "m", "i", "n"];

name.forEach(function (item, index, array) {
  console.log(`item: ${item}, index: ${index}, array: ${array}`);
});
/*
item: y, index: 0, array: y,o,n,g,m,i,n
VM2848:4 item: o, index: 1, array: y,o,n,g,m,i,n
VM2848:4 item: n, index: 2, array: y,o,n,g,m,i,n
VM2848:4 item: g, index: 3, array: y,o,n,g,m,i,n
VM2848:4 item: m, index: 4, array: y,o,n,g,m,i,n
VM2848:4 item: i, index: 5, array: y,o,n,g,m,i,n
VM2848:4 item: n, index: 6, array: y,o,n,g,m,i,n
*/
```

### 2-3. 배열 변형

#### sort()

배열 요소를 정렬한다. 그리고 이 경우 원본 배열이 변형됩니다. 배열.sort()만 사용한다면 문자열 기준으로 정렬합니다. 문자열 비교는 사전편집 순서로 하기 때문에 10보다 2가 더 크다고 인식됩니다.

```js
const arr = [1, 10, 2, 3];
console.log(arr.sort()); // (4) [1, 10, 2, 3]
```

숫자를 기준으로 오름차순 정렬을 원할 시 sort()안에 새로운 콜백함수를 넣어주어야 합니다. 콜백함수의 인자로 2개가 들어가야 하고, 두 값을 비교해서 양수, 음수, 0이 반환되도록 합니다. 만약에 두 값을 비교해서 양수가 나오면 두 인자의 위치를 바꿔줍니다. 양수가 아니면 값을 바꿔주지 않습니다.

```js
const arr = [1, 10, 2, 3];
console.log(
  arr.sort(function (a, b) {
    return a - b;
  })
); // 오름차순 1, 2, 3, 10

console.log(
  arr.sort(function (a, b) {
    return b - a;
  })
); // 내림차순, 10, 3, 2, 1
```

#### filter()

filter는 map과 비슷하게 배열 요소 전체를 대상으로 콜백함수를 호출합니다.
콜백함수의 반환값이 true인 값을 새 배열에 담아서 반환합니다.

```js
const nums = [1, 9999, 23213, 323, 23, 123, 10];

const newNums = nums.filter(function (item, index, array) {
  console.log(`item: ${item}, index: ${index}, array: ${array}`);
  return item > 100; // item이 100보다 큰 수를 새로운 배열로 반환
});

console.log(newNums);

/*
item: 1, index: 0, array: 1,9999,23213,323,23,123,10
item: 9999, index: 1, array: 1,9999,23213,323,23,123,10
item: 23213, index: 2, array: 1,9999,23213,323,23,123,10
item: 323, index: 3, array: 1,9999,23213,323,23,123,10
item: 23, index: 4, array: 1,9999,23213,323,23,123,10
item: 123, index: 5, array: 1,9999,23213,323,23,123,10
item: 10, index: 6, array: 1,9999,23213,323,23,123,10
(4) [9999, 23213, 323, 123]
*/
```

#### reduce()

reduce()는 배열 요소를 하나의 값으로 만들고 싶을때 사용.

```js
// 문법
let newValue = arr.reduce(
  function (accumulator, currentItem, index, array) {
    // ...
  },
  [initial]
);
```

reduce()의 인자로 콜백함수와 초기값이 들어갑니다. 초기값은 생략이 가능합니다.

1. callback의 accumulator는 이전 함수 호출 결과입니다. initial은 함수를 처음 호출할 시에 accumulator의 초기값으로 들어갑니다.
2. currentItem은 현재 배열 요소입니다.
3. index는 요소의 위치(인덱스) 입니다.
4. array는 배열 전체입니다.

reduce() 이용하여 배열 요소의 합계 구하기

```js
const arr = [1, 2, 3, 4, 5];

let valus = arr.reduce(function(acc, curr) {
	return acc + curr
}, 0);
console.log(value); // 15

/*
실행 흐름
acc : 0, curr : 1, result : 1
acc : 1, curr : 2, result : 3
acc : 3, curr : 3, result : 6
acc : 6, curr : 4, result : 10
acc: 10, curr : 5, result : 15
```

#### reverse()

배열 요소를 역순으로 정렬 새로운 정렬된 배열 반환

```js
const nums = [1, 2, 3];
console.log(nums.reverse()); // (3) [3, 2, 1]
```

#### join()

배열 안의 요소를 결합할 때 사용.
결합 문자열은 생략이 가능

```js
배열.join([결합할 문자열])
```

공백 넣으면 자동으로 쉼표로 동작

```js
const array = ["h", "e", "l", "l", "o"];
console.log(array.join()); // hello
console.log(array.join(",")); // h,e,l,l,o
console.log(array.join("+")); // h+e+l+l+o
```

#### toString()

배열 안의 모든 문자를 쉼표(,)로 구분해서 하나의 문자열로 반환

```js
const numbers = ["1", "2", "3", "4"];
console.log(numbers.toString()); //1,2,3,4
```

## 2-4. 배열 탐색

#### indexOf, lastIndexOf, includes

// 문법

```js
// 시작할 위치는 생략이 가능합니다.
배열.indexOf(검색할데이터, [시작할위치]);
배열.lastIndexOf(검색할데이터, [시작할위치]);
배열.includes(검색할데이터, [시작할위치]);
```

indexOf와 lastIndexOf의 실행결과 검색할 데이터가 배열에 없으면 -1을 반환합니다.
만약 검색할 데이터를 발견한다면 해당 인덱스를 반환합니다.
includes는 검색할 데이터가 있으면 true를 반환하고 그렇지 않다면 false를 반환합니다.

```js
[1, 2, 3, 4, 5, 1, 2, 3].indexOf(2); // 1
[1, 2, 3, 4, 5, 1, 2, 3].indexOf(2, 4); // 6

[1, 2, 3, 4, 5, 1, 2, 3].lastIndexOf(2); // 6
[1, 2, 3, 4, 5].lastIndexOf(2); // 1

[1, 2, 3, 4, 5].includes(2); // true
[1, 2, 3, 4, 5].includes(10); // false
```

#### find, findIndex

문법은 아래와 같습니다. find와 findIndex의 사용법은 비슷합니다.

```js
// 문법
배열.find(function (item, index, array) {
  return 조건;
});
```

find는 조건에 맞는 해당 요소를 반환합니다.
findIndex는 조건에 맞는 해당 요소의 인덱스를 반환합니다.
하지만, 조건에 맞는 요소가 없다면 -1을 반환합니다.

find(), findIndex() 의 인자로 콜백함수가 들어갑니다.
콜백함수의 인자는 배열의 요소인 item, 요소의 인덱스인 index, 배열 요소 전체를 가리키는 array가 들어갈 수 있습니다.
❗ 콜백함수의 item, index, array 인자가 생략이 가능합니다.

```
const fruits = ['🍇', '🍋','🍌','🍊', '🍉'];

const myFruit = fruits.find(function(item, index, array) {
    console.log(`item: ${item}, index: ${index}, array: ${array}`);

    return item === '🍋';
})
/* 실행결과
** item: 🍇, index: 0, array: 🍇,🍋,🍌,🍊,🍉
** item: 🍋, index: 1, array: 🍇,🍋,🍌,🍊,🍉
*/
```

```

console.log(myFruit); // 🍋
```

find()는 조건에 맞는 반환 값을 만나면 그 즉시 배열 요소 반복문을 종료합니다.
findIndex()도 동일합니다.

```
const myFruitIndex = fruits.findIndex(function(item, index, array) {
    console.log(`item: ${item}, index: ${index}, array: ${array}`);

    return item === '🍉';
});

/* 실행결과
** item: 🍇, index: 0, array: 🍇,🍋,🍌,🍊,🍉
** item: 🍋, index: 1, array: 🍇,🍋,🍌,🍊,🍉
** item: 🍌, index: 2, array: 🍇,🍋,🍌,🍊,🍉
** item: 🍊, index: 3, array: 🍇,🍋,🍌,🍊,🍉
** item: 🍉, index: 4, array: 🍇,🍋,🍌,🍊,🍉
*/

console.log(myFruitIndex); // 4

```

2-5. 기타
**Array.isArray()**
자바스크립트에서는 배열이 독립된 자료형이 아니라 객체형안에 속합니다.
그래서 **typeof로는 객체와 배열을 구분할 수 없습니다.**
이럴 때 **isArray()로 배열 여부 알아낼 수 있습니다.
**
Array.isArray()로 인자에 값을넣어서 배열이면 true를 반환하고, 그렇지 않다면 false를 반환합니다.

```
console.log(typeof []); //object
console.log(typeof {}); //object
console.log(typeof null); //object

console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false
```
