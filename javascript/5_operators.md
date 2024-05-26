# Javascript

## 연산자
1. === 연산자
  두 피연산자가 같은지 확인할 수 있다. return값은 boolean이다.

  ** == 연산자와 ===연산자의 차이점
  == 연산자는 오로지 값만 비교하지만, ===연산자는 타입도 함께 비교한다.

``` javascript
  const result = 10 == '10';
  console.log(result); // true

  const result = 10 === '10';
  console.log(result); // false
```
