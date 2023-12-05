// component를 렌더링하고 싶지 않은 경우
// null을 리턴하면 됨
// React에서는 null을 리턴하면 렌더링되지 않기 때문!

// props.warning의 값이 true인 경우에만 배너를 출력하고 false인 경우에는 아무것도 출력하지 않음
function WarningBanner(props){
    if(!props.warning){
        return null;
    }

    return (
        <div>경고!</div>
    )
}

function MainPage(props){
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    }

    return (
        <div>
            <WarningBanner warning={showWarning} />
            <button onClick={handleToggleClick}>
                {showWarning ? '감추기' : '보이기'}
            </button>
        </div>
    )
}