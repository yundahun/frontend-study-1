import { createGlobalStyle } from "styled-components";
import reset, { Reset } from "styled-reset";
import TodoTemplate from "./components/TodoTemplate";

// 패키지 설치
// npm install styled-components styled-reset react-icons

// 글로벌(공통) 스타일 적용과 reset css 적용
// createGlobalStyle을 이용하여 글로벌 스타일 컴포넌트를 만들고 가장 첫번째로 렌더링하면 됨
const GlobalStyle = createGlobalStyle`
  /* reset css */
  ${reset}

  /* 글로벌(공통) 스타일 */
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <input type="text" />
        <div>투두 목록</div>
      </TodoTemplate>
    </>
  );
}

export default App;
