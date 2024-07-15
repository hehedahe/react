# Javascript

## 배열

### 1. `findIndex()`

findIndex()는 파라미터를 함수로 받아야 하고, 배열의 모든 원소를 해당 함수에 전달한다.

``` javascript
  const emotions = ["Joy", "Sadness", "Fear", "Disgust", "Anger"];

  const index = emotions.findIndex((item) => {
    return item === "Sadness";
  });

  console.log(index); // 1
```

복습) 화살표 함수를 줄여보자!
화살표 함수는 return문 외에 다른 로직이 없으므로 `return`과 `중괄호`를 생략할 수 있다.

``` javascript
  const index = emotions.findIndex((item) => item === "Sadness");
```

### 2. `map()`

#### 1) map()은 배열의 모든 원소를 다른 형태로 변환할 수 있다

map()은 기존 배열을 수정하는 것이 아닌 `새로운 배열을 반환`한다.

``` javascript
  const editedEmotions = emotions.map((item) => item + "!");

  console.log(editedEmotions); // ["Joy!", "Sadness!", "Fear!", "Disgust", "Anger"]
```

#### 2) 객체로 변환할 수도 있다

복습) 화살표 함수와 객체
화살표 함수로 객체를 반환할 때, `{}`를 `괄호`로 한 번 더 감싸주어야 한다.
JS는 중괄호를 함수를 감싸는 wrapper로 이해하기 때문이다.

``` javascript
  const emotionObjects = emotions.map((item) => ({
      text: item
    })
  );

  console.log(emotionObjects); // [Object, Object, Object, Object]

  // 각 Object 안에는 "text"는 key 값으로, value는 기존 배열의 값이 들어 있다.
  // { text: "Joy"}
  // { text: "Sadness"}
  // { text: "Fear"}
  // { text: "Disgust"}
  // { text: "Anger"}
```
