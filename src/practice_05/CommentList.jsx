import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={"윰니"} comment={"두 번째예용 이제 이해가 좀 돼용"}/>
            <Comment name={"왜!"} comment={"뭐가 문제얏!! 왜 사이즈가 이상하지"} />
        </div>
    );
}

export default CommentList;