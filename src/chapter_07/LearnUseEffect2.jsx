import React, { useState, useEffect } from "react";

// componentWillUnmount와 비슷하게 작동하는 코드
function UserStatus(props){
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status){
        setIsOnline(status.isOnline);
    }

    useEffect(()=> {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            // 컴포넌트가 unmount 될 때 호출됨
            // useEffect의 return 함수는 componentWillUnmount와 유사
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    });

    if (isOnline === null){
        return '대기 중';
    }

    return isOnline ? '온라인' : '오프라인';
}