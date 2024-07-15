# Javascript

## 함수

함수는 바로 실행하는 코드가 아닌, 나중에 함수를 호출했을 때 실행되는 코드를 정의하는 것이다.
함수를 사용할 때 매개변수의 디폴트 값을 지정해 줄 수 있다.

``` javascript
  function greetUser(userName, message = "Hello!") {
    console.log(userName);
    console.log(message);
  }

  greetUser("max"); // max\nHello!
  greetUser("furiosa", "Hello, what's up?"); // max\nHello, what's up?
```

디폴트값을 설정한 매개변수에 다른 값을 넣으면 디폴트 값을 오버라이드 한다.

## 함수 키워드 종류

### 1. function

### 2. 익명함수(화살표 함수)

#### 1) default export

익명함수를 default export할 수 있다.

```javascript
  export default function() {
    console.log('Hello');
  }
```

#### 2) 화살표 함수

화살표 함수를 이용하면 더 간결하게 표현할 수 있다.
화삼표 함수를 이요하면 function 키워드를 사용하지 않아도 된다.

``` javascript
  export default () => {
    console.log('HELLO');
  }
```

#### 3) 화살표 함수를 사용할 때 매개변수 사용 가능

매개변수가 하나일 때, 묶는 괄호를 생략할 수 있다.

``` javascript
  (name) => {} // 이것도 되지만
  name => {}   // 이것도 된다.
```

#### 4) 화살표 함수를 사용할 때 return 사용 가능

반환문 외에 다른 로직이 없는 경우, 중괄호와 return 키워드를 생략할 수 있다.

``` javascript
  number => number * 3; // sccess: true
  number => return number * 3; // return 키워드는 생략되어야 하므로 오류 발생
  number => if (...) { return xxx; } // if문 자체는 리턴될 수 없으므로 오류 발생
```

#### 5) 객체만 반환

JS는 `{}`를 코드가 아닌 함수 본문 wrapper로 취급하기 때문에 객체를 반환하려고 할 때에는 객체과 중괄호를 한 번 더 괄호로 감싸면 된다.
이 때 JS는 중괄호가 함수 본문을 정의하는 것이 아니라 객체를 생성하기 위한 것으로 이해한다.

``` javascript
  user => { name: ToDaeRi }; // 오류 발생
  user => ({ name: ToDaeRi }); // 객체를 한 번 감싸줌으로써 오류가 발생하지 않는다.
```
