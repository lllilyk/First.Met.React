import React, { useState } from "react";

// useCounter Hook
// 초기 count 값을 파라미터로 받아서 count라는 이름의 state를 생성하여 값을 제공, 
// 카운트 증가 및 감소를 편리하게 할 수 있도록 함수를 제공하는 Hook

// useCounter Hook을 사용하면, 어떤 함수 컴포넌트에서든지 count 기능을 쉽게 사용할 수 있음. 
function useCounter(initialValue) {
    // const [변수명, set함수명] = useState(초기값);
    const [count, setCount] = useState(initialValue);

    // 함수형 업데이트(Functional Updates)
    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count -1, 0));

    return [count, increaseCount, decreaseCount];
}


export default useCounter;