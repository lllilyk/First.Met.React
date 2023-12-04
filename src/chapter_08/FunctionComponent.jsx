function Toggle(props){
    const [isToggleOn, setIsToggleOn] = useState(true);

    // 1. 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    // 2. arrow function을 사용하여 정의
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    // 함수 컴포넌트에서는 이벤트를 넣어줄 때 this를 사용하지 않고
    // onClick에 바로 정의한 이벤트 핸들러를 넘기면 됨.
    return (
        <button onClick={handleClick}>
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    );
}