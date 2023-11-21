import { useState, useEffect } from "react";

// Hook의 규칙
// Hook은 무조건 최상위 레벨에서만 호출해야 한다. (조건문이나 반복문 내에서 사용 x)
// 리액트 함수 컴포넌트에서만 (+커스텀 훅에서만) Hook을 호출해야 한다. 

// Custom Hook을 만드는 이유
// 여러 컴포넌트에서 반복적으로 사용되는 로직을 훅으로 만들어 재사용하기 위함

function useUserStatus(userId) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(()=> {
        function handleStatusChange(status){
            setIsOnline(status.isOnline);
        }

        ServerAPI.subscribeUserStatus(userId, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(userId, handleStatusChange);
        };
    });

    return isOnline;
}
