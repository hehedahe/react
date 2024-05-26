# Javascript

## 함수
함수는 바로 실행하는 코드가 아닌, 나중에 함수를 호출했을 때 실행되는 코드를 정의하는 것이다.

함수를 사용할 때 매개변수의 디폴트 값을 지정해 줄 수 있다.

``` javascript
function greetUser(userName, message = "Hello!") {
  console.log(userName);
  console.log(message);
}
```

## 함수 키워드 종류
### 1. function
### 2. () => 