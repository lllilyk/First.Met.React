import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    // LandingPage 컴포넌트
    // useState Hook을 사용해서 사용자의 로그인 여부를 자체적으로 관리함
    // 그 값을 Toolbar 컴포넌트에 전달해서, 로그인 여부에 따라 툴바에 적절한 사용자 인터페이스가 표시되도록 함
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}            
            />
            <div style={{ padding: 16 }}>헷갈려용</div>
        </div>
    );
}

export default LandingPage;