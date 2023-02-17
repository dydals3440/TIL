# Class 사용 방법 / Private(캡슐화 #) / get set 사용 (2023.02.17(Fri))

# Class

1. 객체를 생성할 수 있는 템플릿
2. Class나 생성자 함수를 이용해서 객체지향 프로그래밍 (Object-Oriented Programming)이 가능합니다.
3. 현업에서 대부분 생성자 함수 보다는 Class를 이용합니다. Class는 prototype보다 이용하기 편리합니다.
4. 클래스를 통해 만들어진 객체들을 instance라고 합니다.

- 생성자 함수

```js
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };
  // return this 생략 가능!
}
const greenApple = new Fruit("Green Apple", "🍏");
const orange = new Fruit("Orange", "🍊");

console.log(greenApple);
console.log(orange);
console.log(greenApple.name);
console.log(greenApple.emoji);

greenApple.display();
```

- 클래스로 만들어진 코드

```JS
class Fruit {
  // constructor 생성자
  constructor(name, emoji) { // 인자를 받아 할당.
    // fields
    this.name = name; // this는 객체(변수명)을 지정합니다.
    this.emoji = emoji; // this.name, this.emoji는 class의 field(property)이다.
  }
  // methods
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
```

---

### 클래스 만들떄 잘못된 예시 및 해결 방법

1. methods 내부에서 function을 사용할 경우
   Uncaught SyntaxError: Unexpected identifier 'display' 에러가 발생.

```js
class Fruit {
 // constructor: 생성자
	constructor(name, emoji) {
		// fields
		this.name = name;
		this.emoji = emoji;
	}
	// methods
	// function을 사용하면 안됩니다. 문법적 오류가 발생합니다.
	function display () {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
```

해결방법 1번!
함수를 사용하고 싶으면 method 내부에서 function 키워드를 제외하고 코드를 작성하면 됩니다.

```js
class Fruit {
  // constructor: 생성자
  constructor(name, emoji) {
    // fields
    this.name = name;
    this.emoji = emoji;
  }
  // methods
  // function을 제외하고 사용
  display() {
    console.log(`${this.name}: ${this.emoji}`);
  }
}
```

해결방법 2번!
화살표 함수(arrow function)을 이용!

```js
class Fruit {
 // constructor: 생성자
	constructor(name, emoji) { // 인자를 받아 할당합니다.
		// fields
		this.name = name; // this는 객체(변수명)를 지칭한다.
		this.emoji = emoji; // this.name, this.emoji는 클래스의 필드(프로퍼티)이다.
	}
	// methods
	// function을 사용하면 안됩니다. 문법적 오류가 발생합니다.
	function display () {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
```

---

## 재사용성을 높이는 방법

### static 정적 property, methods

클래스를 선언할 때 property와 methods 앞에 static 키워드를 작성하여 선언합니다. static property와 static method는 객체로 접근하여 사용할 수 없습니다.
(obj.property, obj.method)

1. 클래스 내부에서 static을 붙이지 않으면 instance 레벨이기 때문에 클래스 이름(Fruit) 자체에서 접근이 어렵습니다.
   즉, console.log(Fruit.name);, Fruit.display(); 이렇게 호출이 되지 않는다는 의미입니다.
   이유는, template인 상태, data가 없는 상태이기 때문에 접근이 불가합니다.

```js
// static 정적 property, methods
class Fruit {
  // 생성자: new 키워드로 객체를 생성할떄 호출
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// 클래스 이름 자체에서 접근이 어렵습니다.
// 클래스 자체에 데이터들이 채워져있지 않은 상태인 template 상태이기 때문입니다.
// 속성으로 접근해도 데이터가 없는 상태이기에 어렵습니다.
// Uncaught TypeError: Fruit.display is not a function
// 객체 자체에 있는 함수는 호출 X
console.log(Fruit.name);
Fruit.display();

// instance 레벨의 property와 methods는 생성된 instance를 통해 접근하고 호출
// 아래와 같이 new 연산자를 통해 instance를 생성하고 호출해야합니다.
const greenApple = new Fruit("Green Apple", "🍏");
const orange = new Fruit("Orange", "🍊");

console.log(greenApple);
console.log(orange);
console.log(greenApple.name);
console.log(greenApple.emoji);
greenApple.display();
```

2. static 활용
   display 함수는 만들어진 object에 주어진 데이터에 접근해서 무엇인가를 출력해야합니다. 만들어진 instance와 밀접하게 연관이 되어져있기때문에 이건 그대로 instance level로 두는게 좋습니다.

```js
// static 정적 프로퍼티, 메서드
class Fruit {
  // 속성앞에 메서드 붙이는 경우
  static MAX_FRUITS = 4;

  // 생성자: new 키워드로 객체를 생성할떄 호출하는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 클래스 별로 공통적으로 사용, 만들어진 instance의 데이터에 참조할 필요가 없는 경우 static활용
  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드 에서는 주어진 데이터가 채워져있지 않은상태(template)
    // this를 참조할 수 없습니다.
    return new Fruit("banana", "바나나이미지");
  }
  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
// 클래스 레벨의 메서드는 만들어진 오브젝트에서 호출하는 것이 아닌 바로 이렇게 사용 가능.
const banana = Fruit.makeRandomFruit();
console.log(banana);

/*
{
    "name": "banana",
    "emoji": "바나나이미지"
}
*/

// 4가 출력됨.
console.log(Fruit.MAX_FRUITS);
```

---

> 총 정리

1. class 레벨의 함수는 class Name으로 접근이 가능합니다.
2. Instance 레벨의 property와 함수는 만들어진 instance를 통해 접근이 가능합니다.
3. static이란 키워드를 붙이게 되면 class 레벨로 만들 수 있습니다.
4. 함수 앞에 static을 붙이면 class 레벨의 method가 됩니다.
5. 속성 앞에 static을 붙일 수 있습니다.
6. 우리가 만든 static 함수들과 property들은 instance 안에 들어있지 않은 것을 볼 수 있습니다. 이처럼 각각 찍어낼, 변경될 데이터가 아니라 공통적으로 사용할 수 있는 속성과 함수들에 대해서는 static을 붙여주면 좋습니다.

대표적인 사용 예제

```js
// Math라는 object를 만들지 않아도 pow라는 유용한 utility function 사용 가능
Math.pow();
Number.isFinite(100);
```

---

## Field란? 접근 제어자 => 비공개로 접근을 제어할 수 있는 방법

접근 제어자를 활용하어 캡슐화를 할 수 있습니다.
캡슐화란 내부상으로 필요한 데이터를 외부에서는 보이지 않도록 수정할 수 없도록 캡슐화를 진행합니다.

```js
// 접근 제어자 - 캡슐화
// private(#), public(기본), protected
class Fruit {
  #name;
  #emoji;
  #type = "과일";
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}:${this.#emoji}`);
  };
}

// banana는 Fruit 클래스의 인스턴스입니다.
const banana = new Fruit("banana", "🍌");
banana.#name = "apple"; // #field는 외부에서 접근이 불가능합니다.
console.log(apple);

/*
Uncaught SyntaxError: Private field '#name' must be 
declared in an enclosing class (at 3.field.js:21:6)
비공개 필드인 이름은 클래스안에서만 선언이 되어져야 합니다.
클래스 안에서만 접근 가능, 클래스 밖에서는 접근 불가능.
*/
```

## Acessor Property (set(세트) / get(게트))

### 접근자 프로퍼티 (Acessor Property)

접근자란 객체 지향 프로그래밍에서 객체가 가진 property 값을 바깥에서 읽거나 쓸 수 있도록 제공하는 method 입니다. 객체의 property를 객체 바깥에서 직접 조하는 행위는 데이터의 유지 보수성을 해치는 주요한 원인입니다.

Getter(획득) : 인수가 없는 함수로, 특정 값을 조회하고자 할 때 사용합니다.
Setter(설정) : 인수가 하나인 함수로, 특정 값을 설정하고자 할 때 사용합니다.

접근자 property 'getter(획득자)'와 'setter(설정자)' method로 표현됩니다. 객체 리터럴 안에서 getter와 setter method는 get과 set으로 나타낼 수 있습니다.

객체의 property는 두 종류로 나뉩니다.

1. 첫 번쨰 종류는 data property 입니다.
   지금까지 사용한 모든 property는 데이터 property입니다.

2. 두 번쨰는 accessor property 접근자 프로퍼티 입니다.
   접근자 프로퍼티의 본질은 함수입니다. 이 함수는 값을 획득(get)하고, 설정(set)하는 역할을 담당합니다. 그러나 외부 코드에서는 함수가 아닌 일반적인 property처럼 보입니다.

> set => 설정, get => 값을 가져오는 것 이라고 생각하자.
> user-id 라는 변수를 선언한다고 했을떄, user-id의 변수에 어떠한 값(id)에 저장(set)을 한다.
> user-id에 젖아한 값을 불러오는 것이 get이다.

> 통장을 만든다 => 변수 선언
> 통장안에 돈을 저축한다. => set
> 얼마들었는지 확인한다. => get

> set과 get 사용 이유
> 외부로부터 변수의 값에 직접적으로 접근하는 것을 방지하기 위해 사용합니다. 직접 값에 접근하게 된다면 값이 변동되게하고 그러면 데이터의 무결성이 깨지게됩니다. 클래스 내부에서 변수 private(#) 캡슐화를 선언하여 외부에서의 접근을 차단할 수 있습니다.

```js
let obj = {
  get propName() {
    // getter, obj.propName을 실행할 때 실행되는 코드
  },
  set propName(value) {
    // setter, obj.propName = value를 실행할 때 실행되는 코드
  },
};
```

getter 메서드는 obj.propName을 사용해 property를 읽으려고 할 떄 실행됩니다.
setter 메서드는 obj.prpName = value으로 propert에 값을 할당하려 할 때 실행됩니다.

### getter 메서드

```js
let user = {
  name = "yongmin",
  surname = "Kim",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  fullName2() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName);
alert(user.fullName2());
```

바깥 코드에선 접근자 property를 일반 property처럼 사용할 수 있습니다. 접근자 property는 이런 아이디어에서 출발했습니다.
접근자 property를 사용하면 함수처럼 호출 하지 않고, 일반 프로퍼티에서 값에 접근하는 것 처럼 평범하게 user.fullName을 사용해 property 값을 얻을 수 있습니다. 나머지 작업은 getter 메서드가 뒷단에서 처리해줍니다.
한편, 위 예시의 fullName은 getter 메서드만 가지고 있기 떄문에 user.fullName = "test'를 사용하여 값을 할당하려고 하면 아래와 같이 에러가 발생합니다.

```js
let user = {
  get fullName() {
    return `...`;
  },
};

user.fullName = "Test"; // Error(프로퍼티에 getter 메서드만 있기에 에러 발생)
```

이 error를 해결하기 위해서 우리는 setter 메서드를 활용합니다.

### setter 메서드

```js
let user = {
  name: "maybe",
  surname: "Kim",
  set fullName(value) {
    //  공백으로 this.name, this.surname으로 각각 구분을 받습니다.
    [this.name, this.surname] = value.split(" ");
  },
};

// 위에 주어진 값을 사용해 set fullName이 실행됩니다.
user.fullName = "Yongmin Kim"; // Yongmin Kim을 value 값으로 받습니다.
console.log(user.fullName); // undefined
console.log(user.name); // Yongmin
console.log(user.surname); // Kim
```

이렇게 getterd와 setter 메서드를 구현하면 객체엔 fullName이라는 '가상'의 프로퍼티가 생깁니다. 가상의 프로퍼티는 읽고 쓸 수 있지만 실제로는 존재하지 않습니다.

### 생성자 함수로 getter와 setter 정의하기

접근자 프로퍼티는 언제 어느 때나 getter와 setter를 사용해 데이터 프로퍼티의 행동과 값을 원하는 대로 조정할 수 있게 해준다는 점에서 유용합니다.
data property인 name과 age를 사용해서 사용자를 나타내는 객체를 구현한다고 가정해봅시다.

```js
function User(name, age) {
  this.name = name;
  this.age = age;
}
let yongmin = new User("Yongmin", 24);

console.log(yongmin.age); // 24
```

만일 이 코드에서 age 정보 대신 birthday를 저장해야 한다고 해보겠습니다. age 보다는 birthdaty가 더 정확하고 편리하기 떄문입니다.

```js
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
}

let yongmin = new User("Yongmin", new Date(1999, 7, 14));
```

이렇게 생성자 함수를 수정하면 기존 코드 중 property age를 사용하고 있는 코드도 수정해주어야 합니다.
만일 여러 사람들이 age를 포함한 정보로 저장되어잇다고하면 하나하나 모두 찾아서 변경하는 것이 매우 쉽지 않을 것입니다. 게다가 age는 user안에 있어도 나쁠 것이 없는 property 이기도 합니다.
기존 코드들은 그대로 두고, age라는 프로퍼티를 추가하기 위해 getter method를 추가해서 문제를 해결해보겠습니다.

newDate를 활용해보겠습니다. 아래 문서를 참고하시면 됩니다.

[new Date 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)

```js
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
  // age는 현재 날짜와 생일을 기준으로 계산이 됩니다.
  // getter와 setter을 생성자에게 그냥 정의할 수 없으니 object Method를 활용하여 정의합니다.
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}
let yongmin = new User("Yongmin", new Date(1999, 7, 14));

alert(yongmin.birthday); // birthday를 사용할 수 있습니다.
alert(yongmin.age); // age 역시 사용할 수 있습니다.
```

---

아래 코드의 문제점을 해결해 봅시다.

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
}

const student = new Student("용민", "김");
console.log(student.firstName); // 용민
console.log(student.fullName);
/*
ƒ fullName() {
		return `${this.lastName} ${this.firstName}`;
	}
*/
console.log(student.fullName()); // 김 용민
```

fullName() 으로 호출하고싶지 않을 경우에는 어떻게 코드를 작성해야할까요?
이 경우에 우리가 접근자 프로퍼티를 사용하면 됩니다.

### 접근자 프로퍼티 get 활용

접근자 프로퍼티 사용시 함수지만 즉, 고정된 값이 아니라 이것을 호출하는 시점에 데이터를 만들어서 return을 하는데 이건 속성에 가깝기 떄문에 get이라는 키워드만 붙여주면 함수처럼 호출하지않고 속성에 접근하듯이 만들 수 있습니다.

즉, getter methods는 obj.propName을 통해 property를 읽으려고 할 떄 실행됩니다.

```js
// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
}
const student = new Student('수지', '김');
console.log(student.fullName): // 김 수지

// 정상적으로 출력이 됩니다.
```

### 접근자 프로퍼티 set 활용!

setter 메서드는 obj.propName = value로 property에 값을 할당하려 할 때 실행됩니다.

```js
// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  set fullName(value) {
    console.log("set", value);
  }
}

const student = new Student("용민", "김");
student.fullName = "김용민"; // set 김용민
```

### get / set 둘다 이용시

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log("set", value);
  }
}

// () 처럼 호출하기 싫을떄 접근자 프로퍼티를 이용.
// 접근자 프로퍼티 사용시 함수지만 즉, 고정된 값이 아니라 이것을 호출하는 시점에
// 데이터를 만들어 리턴을 하는데 이것은 속성에 가깝기 떄문에 get이라는 키워드를 통해
// 함수처럼 호출하지 않고 속성에 접근하듯이 만들어 줄 수 있습니다.
const student = new Student("용민", "김");
console.log(student.firstName); // 용민
console.log(student.fullName); // 김 용민

// set활용
student.fullName = "김택근";

// 접근자 프로퍼티 .이라고 해서 값을 읽게 되면 get이 호출
// 무엇인가를 할당한다면 set이 호출되면서 할당하고자 하는 value가 인자로 전달이 됩니다.
```
