# Javascript

## 전개 연산자(스프레드 연산자)

### 1. 배열에 사용하기

자바스크립트에서 두 배열을 합칠 때 전개 연산자를 사용한다.
전개 연산자를 이용하면 배열의 모든 값을 꺼낼 수 있다.
전개 연산자는 `...`을 이용하면 된다.
이때 주의할 점은 전개 연산자 없이 배열 안에 배열을 담을 경우, 두 개의 배열이 담긴 중첩된 배열을 리턴한다.

``` javascript
  const emotions = ["Joy", "Sadness"];
  const newEmotions = ["Envy"];

  const mergedEmotions = [emotions, newEmotions];
  console.log(mergedEmotions); // (2) [Array(2), Array(1)]

  const mergedEmotions = [...emotions, ...newEmotions];
  console.log(mergedEmotions); // (3) ["Joy", "Sadness", "Envy"];
```

### 2. 객체에 사용하기

객체에도 전개 연산자를 사용하면 객체안에 담긴 모든 키와 값을 가져와 추가할 수 있다.

``` javascript
  const user = {
    name: "Manggom",
    age: 5
  };

  const extendedUser = {
    isAdmin: true,
    ...user
  };

  console.log(extendedUser); // {isAdmin: true, name: "Manggom", age: 5}
```
