import React from "react";
import Comment from "./Comment";

function CommentList(props){
    return(
        <div>
            <Comment name={"윰니"} comment={"안뇽구리 오늘은 기부니 조아~"}/>
            <Comment name={"살구"} comment={"살구야 보고시펑"}/>
        </div>
    );
}

export default CommentList;