import React from 'react';
import Hello from './Hello';

function App(){
  const name = 'manggom';
  return (
    <>
      <h1> Fragment: 이름 없는 태그 </h1>
      <div> 이름 없는 태그를 사용하면 Fragment 가 만들어지는데, 이 Fragment는 브라우저 상에 별도의 엘리먼트로 나타나지 않는다!</div>
      <Hello/>
    </>
  );
}
export default App;
