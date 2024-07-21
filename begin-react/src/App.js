import React from 'react';
import Hello from './Hello';
import './App.css';

function App(){
  const name = 'manggom';
  const style={
    backgroundColor: 'black',
    color: 'aqua',
    fontsize: 24, // 기본 단위는 px이다.
    padding: '1rem' // px 말고 다른 단위 사용 시, 문자열로 설정한다.
  };
  return (
    <>
      <>
        <h1> Fragment </h1>
        <div> 태그를 사용할 때 이름 없이 사용하면 Fragment 가 만들어지는데, 이 Fragment는 브라우저 상에 별도의 엘리먼트로 나타나지 않는다!</div>
        <Hello/>
      </>
      <>
        <h1> JSX 안에 자바스크립트 변수를 보여줄 때 중괄호를 사용하면 된다.</h1>
        <div>name</div>
        <div>{name}</div>
      </>
      <>
        <h1> 인라인 스타일 </h1>
        <div> 리액트에서 인라인 스타일은 객체 형태로 작성해야 한다. </div>
        <div> 기존 CSS에서 `-`로 구분되어 있는 형태에서 camelCase 형태로 사용해야 한다. 예) background-color → backgroundColor </div>
        <div> 위에서, JSX 안에 자바스크립트 변수를 사용할 때에는 중괄호를 사용하면 된다고 했는데, 스타일에 대한 정보를 객체로 선언한 변수를 사용할 때에도 중괄호를 사용한다.  </div>
        <div style={style}>{name}</div>
      </>
      <>
        <div class="gray-box">
          <h1> class를 이용해서 style 적용하기 </h1>
          <div> App.css 파일에 . 뒤에 클래스 이름을 적고, 객체 형태로 스타일을 적어준다. 이렇게 작성한 css class를 인라인으로 적용하기 위해 style이 아닌 className으로 설정한다. </div>
          <div> css class를 사용하기 위해 class=가 아니라 className=을 쓰는 이유? class는 자바스크립트 예약어이기 때문이다. </div>
        </div>
      </>
    </>
  );
}
export default App;
