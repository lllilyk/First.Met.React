import React, { useState } from "react";

// ConfirmButton 컴포넌트를 함수 컴포넌트로 변경함
// 클래스 컴포넌트인 ConfirmButton1, 2와 코드 잘 비교하기

function HandlingClickEvent(props) {
    // useState 훅을 사용하여 상태변수 isConfirmed와 상태를 변경하는 함수 setIsConfirmed를 선언.
    // 초기값은 false
    // useState는 리액트에서 상태를 관리할 수 있게 해주는 훅
    const [isConfirmed, setIsConfirmed] = useState(false);


    // handleConfirm이라는 함수를 선언(이벤트 핸들러)
    // 이 함수는 호출될 때마다 isConfirmed의 상태를 반전시킴
    // 이전 상태 값(prevIsConfirmed)을 받아와서 그 상태의 반대값으로 설정
    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };


    // JSX를 반환
        // 버튼을 클릭하면 handleConfirm 함수가 실행됨
        // disabled 속성은 isConfirmed의 값에 따라 활성화 또는 비활성화 됨.
        // 버튼의 텍스트는 isConfirmed의 값에 따라 변함. 
    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default HandlingClickEvent;