const TodoInsertWrapper = styled.form`
  display: flex;
  background: #495057;
`;

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
`;

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;
`;

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 input의 상태를 관리
function TodoInsert() {
  return (
    <>
    </>
  );
};

export default TodoInsert;