import React, { useState } from "react";
import Understand from "./Understand";

function ShowPage(props) {

    const[didUnderstand, setDidUnderstand] = useState(false);

    const onClickYes = () => {
        console.log("onClickYes의 상태 업데이트 전 값 출력: ", didUnderstand);
        setDidUnderstand(false);
    };

    const onClickNo = () => {
        console.log("onClickNo의 상태 업데이트 전 값 출력: ", didUnderstand);
        setDidUnderstand(true);
    };

    console.log("상태 업데이트 후 값 출력", didUnderstand);

    return (
        <div>
            <Understand 
                didUnderstand={didUnderstand}
                onClickYes={onClickYes}
                onClickNo={onClickNo}
            />
            <div style={{ padding: 5 }}>조~~~~~아써!</div>
        </div>
    );
}

export default ShowPage;