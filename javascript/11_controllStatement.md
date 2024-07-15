# Javascript

## 제어문

### 1. if문

if와 else if는 지난 1년 반동안 주구장창 써왔으니 Pass

### 2. for문

자바스크립트에서 신기한 게 for of문이다.
자바에서 사용하던 for each문과 비슷하게 돌아가는 것 같지만 생김새가 다르다.
자스에서는 `:` 대신 `of`를 사용한다.
자바에서 사용하던 것처럼 배열에 돌면서 요소 하나 하나를 모두 꺼내어 명시된 변수에 담아 사용한다.

``` javascript
  const emotions = ["Joy", "Sadness", "Envy"];

  for (const emotion of emotions) {
    console.log(emotion);
  }
```
