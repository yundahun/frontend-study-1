import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

function PostList() {
  return (
    <>
    </>
  );
};

export default PostList;