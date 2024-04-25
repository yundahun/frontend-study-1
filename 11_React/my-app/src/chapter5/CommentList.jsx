import React from 'react';
import Comment from './Comment';

// 댓글들을 포함하는 컴포넌트
function CommentList(props) {
  return (
    <div>
      {/* <Comment />
      <Comment />
      <Comment /> */}

      {/* Quiz: props를 사용하여 name과 content 값 전달(데이터는 자유롭게 작성) */}
      <Comment name="유재석" content="리액트 재밌네~!" />
      <Comment name="이이경" content="저도 리액트 배워보고 싶어요!!" />
      <Comment name="이미주" content="리액트 너무 어려웡~~" />
    </div>
  );
}

export default CommentList;