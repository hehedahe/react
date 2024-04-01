# JavaScript

#### :one: 환경

* In the browser: JS 탄생 배경이 되기도 한다.
* Outside of the browser
* On mobile devices

*****


#### :two: 브라우저에서 JS 동작하기 = \<script>태그를 사용한다.

1. Inline

```
  <script>
    alert('Hello');
  </script>
```

☑ 인라인을 사용하지 않는 이유는 복잡하고 관리하기 어려운 HTML파일이 될 수 있다.  
짧은 스크립트에만 사용한다.

2. JS파일 Import

```
  <script src="script.js"></script>
```

☑ 프로젝트 관리가 쉬워진다.  

*****

#### :three: \<script>태그에 자주 사용하는 속성(attribute)

1. defer

```
  <html>
    <head>
      <script src="script.js" defer></script>
    </head>
    <body> ... </body>
  </html>
```

브라우저는 HTML을 읽다가 \<script>태그를 만나는 순간, HTML 파싱을 멈추고 스크립트를 다운받기 시작한다. body가 화면에 뿌려지기 전에 용량이 큰 스크립트를 먼저 실행해 사용자들은 스크립트 태그 이후의 화면은 볼 수 없게 된다.  
그래서 보통 이런 지연을 막기 위해 \<body>태그 제일 아래 쪽에 두어 화면을 먼저 뿌린다.  
그러나 HTML 문서 자체가 아주 큰 경우에는 브라우저가 HTML 파싱 후 스크립트를 다운받게 되면 네트워크 환경이 열악한 상황에서는 페이지 지연이 발생하여 사용자들로 하여금 불편을 겪게 한다.  
이때 사용하는 \<script>태그 속성 중 defer를 사용하면 브라우저는 스크립트를 백그라운드에서 다운로드 받는다. HTML 파싱을 멈추지 않고 스크립트를 다운로드 받는다.

2. type

```
  <html>
    <head>
      <script src="script.js" type="module"></script>
    </head>
    <body> ... </body>
  </html>
```
`type="module"`이 명시된 JS파일은 import/export 문법을 사용할 수 있다.
script.js 파일에 또 다른 JS파일을 가져올 수 있다.