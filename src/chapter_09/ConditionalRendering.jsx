// Conditional Rendering
// 조건에 따른 렌더링(조건부 렌더링)
// 조건문의 결과는 true 아니면 false가 나오는데 이 결과에 따라서 렌더링을 다르게 하는 것을 의미함

function UserGreeting(props) {
    return <h1>다시 오셨군요!</h1>
}

function GuestGreeting(props) {
    return <h1>회원가입을 해주세요.</h1>
}

// props로 들어오는 isLoggedIn의 값에 따라서 화면에 출력되는 결과가 달라짐
function ConditionalRendering(props){
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

export default ConditionalRendering;