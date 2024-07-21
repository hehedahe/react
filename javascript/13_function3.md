# Javascript

## 함수 안에 함수 정의하여 사용하기

``` javascript
  function init() {
    function greet() {
      console.log("Hello!");
    }
  }

  init(); // 아무 일도 일어나지 않지만

  fucntion init2() {
    function greet2() {
      console.log("HELLO!!!");
    }

    greet2();
  }

  init2(); // HELLO!!!
```

이렇게 함수 내부에서 정의한 함수를 사용할 수 있다.
단, 함수 내부에서 정의했기 때문에 내부에서만! 사용 가능하다. (scope의 중요성)
