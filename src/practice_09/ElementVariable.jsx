import React, { useState} from "react";

function UserGreeting(props) {
    return <h1>우리 또 보네요</h1>;
}

function GuestGreeting(props) {
    return <h1>앞으론 자주 봐요</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn) {
        return <UserGreeting />;
    } 
    return <GuestGreeting />;
}

function LoginBtn(props) {
    return (
        // button element의 클릭 이벤트에 대한 핸들러 설정
        // props.onClick은 부모 컴포넌트에서 LoginBtn 컴포넌트에 전달된 onClick 속성(prop)
        <button onClick={props.onClick}>
            또 로그인할게용
        </button>
    );
}

function LogoutBtn(props) {
    return (
        <button onClick={props.onClick}>
            흠 로그아웃할게용
        </button>
    );
}

function LoginLogout(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 클릭 이벤트 핸들러
    const handleClickLogin = () => {
        setIsLoggedIn(true);
    }

    const handleClickLogout = () => {
        setIsLoggedIn(false);
    }

    let button;
    if (isLoggedIn) {
        button = <LogoutBtn onClick={handleClickLogout} />
    } else {
        button = <LoginBtn onClick={handleClickLogin} />
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    )
}

export default LoginLogout;

// 부모 컴포넌트인 LoginLogout은 LoginBtn/LogoutBtn 컴포넌트에 onClick이라는 이름의 속성을 전달하고 있으며, 
// 이 속성의 값으로 handleClcikLogin/handleClickLogout 함수를 전달함
// UserGreeting/GuestGreeting과 LoginBtn/LogoutBtn은 구조는 같은데 리턴을 문자열로 할거냐 아니면 버튼 element로 할거냐 차이
// 역시 직접 해봐야 돼.. 부족해