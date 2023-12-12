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