import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "윰니",
        comment: "안뇽구리 오늘은 기부니 조아~",
    },
    {
        name: "살구",
        comment: "살구야 보고시펑",
    },
    {
        name: "무전",
        comment: "오늘은 엄마표 무전을 먹었지♥",
    },
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;