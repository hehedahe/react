# Javascript

## 객체

- 객체 안에 함수를 정의할 수 있다
- `.`을 이용하면 객체 안에 정의된 프로퍼티에 접근할 수 있다.

``` javascript
  const user = {
    name: "manggom";
    age: 2,
    greet() {
      console.log('Helloooo');
    }
  };

  console.log(user.name); // maggom
  user.greet(); // Helloooo
```

- 또한, 객체 안의 필드나 메서드에 접근하고 싶으면 `this` 키워드를 붙이면 된다.

``` javascript
  const user = {
    name: "manggom";
    age: 2,
    greet() {
      console.log(this.age);
    }
  };

  user.greet(); // 2
```

## 클래스

- 클래스 이름은 대문자로 사용한다.
- `constructor` 키워드를 사용해 생성자 함수를 추가할 수 있다.
- 클래스에 정의된 생성자는 `new` 키워드로 사용한다. -> 이렇게 하면 클래스를 인스턴스화할 수 있다.
  즉, 인스턴스화한다는 것은 클래스의 생성자를 이용해 `객체를 생성할 수 있다`는 뜻이다.

``` javascript
  class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log('Hello!');
    }
  }

  const user1 = new User("manggom", 2);
  console.log(user1); // User {name: "manggom, age: 2, constructor: Object}
```

- 물론, 인스턴스화된 객체를 이용하여 클래스 안의 메서드에 접근도 가능하다.

``` javascript
  user1.greet(); // Hello!
```
