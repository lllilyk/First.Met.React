import React, { useState, useEffect } from "react";

// LearnUseEffect2.jsx
// 이 코드는 customHook을 적용하기 전과 동일하게 작용함
// 동작에는 변경이 없고 중복되는 로직만을 추출하여 커스텀 훅으로 만든 것이니까!

// Custom Hook의 이름은 꼭! use로 시작해야 함

// 여러 개의 컴포넌트에서 하나의 Custom Hook을 사용할 때 
// 컴포넌트 내부에 있는 모든 state와 effects는 전부 분리되어 있음
// 커스텀 훅은 state와 관련된 로직을 재사용이 가능하게 만든 것 뿐!

// 커스텀 훅은 그럼, 어떻게 state를 분리하는 것일까?
// 각 Custom Hook 호출에 대해서 분리된 state를 얻게 되는 것임

// 하나의 컴포넌트에서 각 Custom Hook의 호출 또한 완전히 독립적!
function UserStatus(props) {
    const isOnline = useUserStatus(props.user.id);

    if(isOnline === null){
        return '대기중...';
    }
    return isOnline ? '온라인' : '오프라인';
 }

 function UserListItem(props){
    const isOnline = useUserStatus(props.user.id);

    return (
        <li style={{ color: isOnline ? 'green' : 'black' }}>
            {props.user.name}
        </li>
    );
 }