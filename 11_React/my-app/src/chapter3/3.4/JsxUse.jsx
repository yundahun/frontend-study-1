import React from "react";

function JsxUse() {
  // JSX의 사용법(문법)
  // 1. 꼭 닫혀야 하는 태그
  // const element = (
  //   <div>
  //     {/* <div> */}
  //     {/* <input type="text"> */}
  //     {/* <br> */}

  //     {/* HTML에서는 태그를 닫지 않고 사용 가능
  //       리액트에서는 태그를 열었으면 무조건 닫아야 함 */}
  //     <div></div>
  //     <input type="text" />
  //     <br />
  //   </div>
  // );

  // 2. 꼭 감싸져야만 하는 태그
  // 두개 이상의 태그는 무조건 하나의 태그로 감싸져있어야 함
  const element = (
    // 반드시 하나의 부모 태그로 감싸져야 함
    // <div>
    //   <div>안녕하세요.</div>
    //   <div>안녕히계세요.</div>
    // </div>

    // 이렇게 단순히 감싸기 위하여 불필요한 div로 감싸는게 별로 좋지 않을 수 있음
    // HTML 중첩 구조가 복잡해지며 그에 따른 스타일 설정을 할 때도 복잡해짐
    // 이때 사용하는 것이 React Fragment
    <React.Fragment>
      <div>안녕하세요.</div>
      <div>안녕히계세요.</div>
    </React.Fragment>

    
  );

  return element;
}

export default JsxUse; // JsxUse 함수 컴포넌트 내보내기
// export를 해줘야 다른곳에서 import 해서 사용 가능