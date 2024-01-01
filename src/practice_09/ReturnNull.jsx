import React, { useState } from "react";

// null을 리턴하도록 해서 컴포넌트의 렌더링 막기
// 아.. 컴포넌트명은 꼭 대문자로 시작하자..
function ShowTitle(props) {
    if(!props.status) {
        return null;
    }
        return (
            <h3>아이유&김연아의 '얼음꽃'</h3>
        );
}  

function FirstSong(props) {
    const [showStatus, setShowStatus] = useState(false);

    const handleToggleClick = () => {
        setShowStatus(prevShowStatus => !prevShowStatus);
    }

    return (
        <div>
            <ShowTitle status={showStatus} />
            <button onClick={handleToggleClick}>
                {showStatus ? '감추기' : '보이기'}
            </button>
        </div>
    )
}

export default FirstSong;