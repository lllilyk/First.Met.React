import React from "react";

const styles = {
    wrapper : {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

function Toolbar(props) {
    // Toolbar 컴포넌트
    // 사용자의 로그인 여부를 나타내는 isLoggedIn이라는 값을 props로 받아서
    // 조건부 렌더링을 사용하여 환영 메시지를 표시하거나 감추고, 그에 따라 로그인 / 로그아웃 버튼을 보여주는 역할을 함 
    const { isLoggedIn, onClickLogin, onClickLogout } = props;

    // && 연산자와 삼항 연산자를 이용하여 각각 Inline if & Inline if-else 조건부 렌더링 구현
    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>어서옵숑</span>}

            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )}
        </div>
    );
}

export default Toolbar;