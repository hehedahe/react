# Javascript

## 1. 배열 분해

``` javascript
const nameList = ["manggom", "chae"];

const firstName = nameList[0];
const lastName = nameList[1];
```

- 배열 안의 원소를 가져올 때 index를 이용하여 위 코드처럼 가져올 수도 있지만, 배열 분해 문법을 이용하여 가져올 수도 있다.

``` javascript
const [firstName, lastName] = ["manggom", "chae"];

console.log(firstName); // manggom
console.log(lastName); // chae
```

## 2. 객체 분해

- 배열 분해 문법을 사용할 때 배열을 의미하는 대괄호를 사용했다면, 객체 분해 문법을 사용할 때에는 `중괄호`를 이용한다.
- 객체 안의 프로퍼티 이름을 기준으로 가져오므로 키 값과 동일한 프로퍼티 이름을 사용해야 한다.

``` javascript
const { name, age } = {
  name: "manggom",
  age: 5
};

console.log(name); // manggom
console.log(age); // 5
```

- 그렇지만 새로운 별칭을 사용하고 싶다면 `:`을 이용하면 정의하면 된다!

``` javascript
const { name: userName, age } = {
  name: "manggom",
  age: 5
};

console.log(userName); // manggom
```

- 함수 파라미터에 객체 대신 사용할 수도 있다.

``` javascript
const user = {
  name: "manggom",
  age: "age",
  type: "gom"
};

// 함수 안에서 `.`을 이용하여 프로퍼티에 접근할 수도 있지만,
// function printUserInfo(user) {
//   console.log(user.name);
//   console.log(user.age);
// }

// 다음과 같이 프로퍼티를 꺼내어 사용할 수 있다.
function pringUserInfo({name, age}) {
  console.log(name);
  console.log(age);
}

storeUserInfo(user); // manggom 5
```
