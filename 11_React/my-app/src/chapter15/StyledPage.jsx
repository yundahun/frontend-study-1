import styled from "styled-components";

// 0. styled-components 설치하기
// npm install styled-components

// CSS in JS 란?
// JS 안에 CSS를 작성하는 것

// styled-components란?
// CSS 문법을 그대로 사용하면서 결과물로 스타일링된 컴포넌트를 만들어주는 라이브러리
// 컴포넌트 개념을 사용하기 때문에 리액트와 궁합이 잘 맞음
// 백틱을 사용하여 구성 요소의 스타일을 지정

// 다양한 문법은 공식 문서 참고
// https://styled-components.com/docs

// 1. 기본적인 사용법
const Wrapper = styled.div`
  padding: 1rem;
  background: gray;
`;

function StyledPage() {
  return (
    <Wrapper>
    </Wrapper>
  );
};

export default StyledPage;