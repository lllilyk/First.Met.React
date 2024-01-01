import React, { useState } from "react";

// 굿굿 좋아요 / 흠 안좋아요 텍스트를 보여줄 것
// 좋아요 / 좋아요 취소 버튼을 보여줄 것
// 기본 텍스트는 '흠 안좋아요'이고 '좋아요' 버튼 클릭시 '굿굿 좋아요로 텍스트 변경
// '굿굿 좋아요' 상태에서 '안좋아요' 버튼 클릭시 텍스트가 '흠 안좋아요'로 변경

function Like(props) {
    return <h1>굿굿 좋아요</h1>;
}

function Unlike(props) {
    return <h1>흠 안좋아요</h1>;
}

function LikeUnlike(props) {
    const myFeeling = props.myFeeling;

    if(myFeeling) {
        return <Like />;
    }
        return <Unlike />;
}

function LikeBtn(props) {
    return (
        <button onClick={props.onClick}>
            좋아요
        </button>
    );
}

function UnlikeBtn(props) {
    return (
        <button onClick={props.onClick}>
            안좋아요
        </button>
    );
}

function FeelingChange(props) {
    const [myFeeling, setMyFeeling] = useState(false);

    // button을 클릭했을 때 실행되는 함수
    const handleLikeClick = () => {
        setMyFeeling(true);
    }

    const handleUnlikeClick = () => {
        setMyFeeling(false);
    }

    let FeelingBtn;

    // 자.. 생각을 하고 코드를 써라
    //if (FeelingBtn) {
    //    FeelingBtn = <LikeBtn onClick={handleLikeClick} />
    //} else {
    //    FeelingBtn = <UnlikeBtn onClick={handleUnlikeClick} />
    //}
    
    if (myFeeling) {
        FeelingBtn = <UnlikeBtn onClick={handleUnlikeClick} />
    } else {
        FeelingBtn = <LikeBtn onClick={handleLikeClick} />
    }

    return (
        <div>
            <LikeUnlike myFeeling={myFeeling} />
            <h3>왜?</h3>
            {FeelingBtn}
        </div>
    );
}

export default FeelingChange;

