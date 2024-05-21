import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  background: white;
  cursor: pointer;

  &:hover {
    background: lightgrey;
  }
`;

// 댓글의 내용만 표시해주는 컴포넌트
function CommentListItem(props) {
  const { comment } = props;

  return (
    <Wrapper>
      <p>{comment.content}</p>
    </Wrapper>
  );
};

export default CommentListItem;