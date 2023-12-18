import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // useEffect(이펙트 함수, 의존성 배열);
    // 의존성 배열을 생략하면, 컴포넌트가 업데이트될 때마다 호출됨
    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    // 기본적으로 이펙트 함수는 처음 컴포넌트가 렌더링된 이후와 업데이트로 인한 재렌더링 이후에 실행됨
    // '의존성 배열' 안에 있는 값이 하나라도 변경되었을 때, '이펙트 함수'가 실행됨
    useEffect(() => {

        // count값이 바뀔 때마다 useEffect() 훅이 호출되는데,
        // 이때 용량이 가득 찼는지 아닌지의 상태를 isFull(setIsFull)이라는 state에 저장함
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

// 두 개의 useEffect() Hook이 호출되는데, 
// 의존성 배열이 없는 useEffect() 훅이 호출된 이유 : 컴포넌트가 업데이트 되었기 때문
// 의존성 배열이 있는 useEffect() 훅이 호출된 이유 : count 값이 변경되었기 때문

export default Accommodate;