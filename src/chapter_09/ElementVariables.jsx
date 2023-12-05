// Element Variables
// react element를 변수처럼 다루는 방법

import ConditionalRendering from "./ConditionalRendering";

function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            로그인
        </button>
    );
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            로그아웃
        </button>
    );
}

function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    let button;
    if (isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={handleLoginClick} />;
    }

    return (
        <div>
            <ConditionalRendering isLoggedIn = {isLoggedIn} />
            {button}
        </div>
    )
}