import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "윰니",
        comment: "두 번째예용 이제 이해가 좀 돼용",
    },
    {
        name: "근데",
        comment: "왜 사이즈가 이상할까 촴나",
    },
    {
        name: "내일",
        comment: "확인해보기로 해..",
    },
];

// map 함수
// : 배열의 각 요소에 대해 주어진 함수를 호출하고, 그 결과로 새로운 배열을 생성함
// 아래의 코드에서 comments.map((comment) => {...})은 comments 배열의 각 요소에 대해 주어진 함수를 실행! 아하!
// 음 이거에 대해서는 TIL/Map.md에서 계속

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    );
}

export default CommentList;