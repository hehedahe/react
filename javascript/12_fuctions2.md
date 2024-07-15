# Javascript

## 함수를 값으로 사용하기

- 브라우저에서 제공하는 기본적인 함수 중 `setTimeout()`이라는 함수가 있다.
  이 함수는 두 매개변수를 파라미터로 받는데, 그 중 첫 번째 매개변수는 함수를 받을 수 있다.

### 1. 함수에 함수를 정의하여 전달하기

함수에 함수를 전달하는 방법 중 하나는 바로 정의하여 전달하는 것이다.
새로운 함수를 바로 실행하는 게 아니라, 단순 정의하기만 하였을 뿐 새로운 함수는 setTimeout() 내부적으로 실행된다.

``` javascript
  setTimeout(function() { ... }, 1000); // 1000ms 뒤에 정의한 함수 실행
  setTimeout(() => { ... }, 1000); // 1000ms 뒤에 정의한 함수 실행
```

- 복습!
  화살표 함수는 이름을 붙일 수 없어 익명 함수로만 생성할 수 있다.
  그렇지만 상수나 변수를 이용하면 익명 함수에 이름을 부여할 수 있다.

``` javascript
  function handleTimeout() {
    console.log("Timed out!");
  }

  const handleTimeout2 = () => {
    console.log("Timed out again!");
  };
```

### 2. 함수에 기존에 정의된 다른 함수를 전달하기

기존에 이미 정의된 함수를 전달할 때에는 이름만 전달한다. handleTimeout() 함수 자체를 setTimeout() 함수에 값으로 전달하는 것이다.
이때 `소괄호`를 사용하지 않는다!
소괄호를 사용하면 handleTimeout()의 리턴값을 전달하게 되는데, setTimeout() 함수는 첫 번째 매개변수로 받은 함수를 내부적으로 실행하기 때문이다.

``` javascript
  setTimeout(handleTimeout(), 2000); // err
  
  setTimeout(handleTimeout, 2000); // 2000ms 뒤 handleTimeout()가 실행된다.
  setTimeout(handleTimeout2, 2000); // 2000ms 뒤 handleTimeout2에 정의된 익명함수를 실행한다.
```

### 3. 함수를 값으로 사용하기 커스텀

``` javascript
  function insideOut(newEmotionFn) {
    newEmotionFn();
  }

  insideOut(() => console.log("!!PUBERTY!!")); // !!PUTBERTY!!
  insideOut(() => console.log("Riley, wants you")); // Riley, wants you
```
