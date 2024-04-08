# Javascript

### import/export 키워드

코드를 쉽게 관리하기 위해 여러 파일에 코드를 분리하고, 분리한 코드를 한 파일에서 사용하기 위해 import/export 문법을 사용한다.

1. import/export 문법: 변수로 export하기  

`util.js`

``` javascript
export let apiKey = "apiKeyTest";
```

`app.js`

``` javascript
import { apiKey } from './util.js';

console.log(apiKey); // apiKeyTest
```

:heavy_check_mark: 같은 폴더 안에 있는 파일은 `./`로 시작하고, 한 폴더 위로 이동하려면 `../`로 시작한다.  
:heavy_check_mark: from 확장자를 반드시 붙여야 한다. 리액트 프로젝트는 빌드 프로세스가 자동으로 확장자를 붙여준다!  
:heavy_check_mark: import/export를 사용하기 위해서는 `type=module` 속성을 반드시 사용해야 한다.  
  리액트 프로젝트에서는 `type=module` 속성이 없는 이유?  
  빌드 프로세스가 import/export 키워드가 있는 모든 javascript 파일을 모두 모아 큰 파일로 만든 다음 기존 문법을 순서대로 사용해 import 구문을 처리한다.  
  장점?  
  → import/export를 지원하지 않는 브라우저에서도 사용할 수 있다.  
  → 브라우저가 작은 파일을 여러개 받는 것보다 큰 파일을 하나 받는 게 더 효율적이다.  
  
2. import/export 문법: default export하기  

- default export 키워드는 변수명을 할당하지 않는다.  
- export는 여러개 선언할 수 있지만, default export는 한 파일당 한 번만 사용할 수 있다.
- default export한 대상을 import할 때에는 `{}`를 사용하지 않고, 원하는 변수명을 할당해 준다.  

→ 하나의 함수 또는 변수를 import/export할 때 주로 사용한다. 리액트 프로젝트에서는 파일에서 export할 대상이 하나의 컴포넌트 밖에 없을 때 사용한다.

`util.js`

``` javascript
export default "apiKeyTest";
```

`app.js`

``` javascript
import defaultVariableName from '.util.js';

console.log(defaultVariableName); // apiKeyTest
```

3. import/export 문법: 여러 변수 import하기
`{}` 안에 `,`로 구분해 입력한다.

`util.js`

``` javascript
export deafult "배고프당..";
export let apikey = "apiKeyTest";
export let abc = "React 완벽 가이드";
```

`app.js`

``` javascript
import { apiKey, abc } from './uitl.js';

console.log(apiKey); // apiKeyTest
console.log(abc); // React 완벽 가이드
```

4. import/export 문법: 객체로 import하기  
파일 안에 있는 모든 export를 가져오기 위해서 `*`에 이름을 할당해 준다.

`app.js`
``` javascript
import * as obj from './util.js';

console.log(obj); // {apiKey: "apiKeyTest", abc: "React 완벽 가이드", default: "배고프당.."}
console.log(obj.abc); // React 완벽 가이드
console.log(obj.default); // 배고프당..
```

5. import/export 문법: import하려는 변수에 또 다른 이름 할당하기

`app.js`
``` javascript
import { apiKey, abc as title } from './util.js';

console.log(title); // React 완벽 가이드
```