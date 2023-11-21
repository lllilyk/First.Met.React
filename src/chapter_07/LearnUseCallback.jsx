import { useState } from "react";

function ParentComponent(props){
    const [count, setCount] = useState(0);

    // useCallbackHook을 사용하지 않은 경우
    // 재렌더링 될 때마다 매번 함수가 새로 정의됨
    // 부모 컴포넌트가 재랜더링될 때마다 자식 컴포넌트도 매번 재랜더링됨
    //const handleClick = (event) => {
        //클릭 이벤트 처리
    //};

    // useCallbackHook을 사용한 경우
    // 컴포넌트가 마운트 될 때만 함수가 정의됨(의존성 배열에 빈 배열이 들어갔으므로)
    // (특정 변수의 값이 변한 경우에만 함수를 재정의)
    // 함수가 다시 정의되지 않는 경우에는 자식 컴포넌트도 재랜더링이 일어나지 않음
    const handleClick = useCallback((event) => {
        // 클릭 이벤트 처리
    }, []); 

    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                {count}
            </button>

            <ChildComponent handleClick={handleClick} />
        </div>
    );
}