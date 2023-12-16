import { useState, useEffect } from "react";

// UserStatus 컴포넌트와 UserListItem 컴포넌트에서 중복되는 로직을 custom hook으로 추출함
// 이렇게 두 개의 javascript 함수에서 하나의 로직을 공유하도록 하고 싶은 경우, 
// 새로운 함수를 하나 만드는 방법을 사용함
// React 함수 컴포넌트와 hook은 모두 함수이기 때문

// 중요한 점
// 다른 컴포넌트의 내부에서와 마찬가지로, 다른 훅을 호출하는 것은 무조건 커스텀 훅의 최상위 레벨에서만!

function useUserStatus(userId) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ServerAPI.subscribeUserStatus(userId, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeStatus(userId, handleStatusChange);
        };
    });

    // useUserStatus Hook의 목적은 사용자의 온라인, 오프라인 상태를 구독하는 것
    // 때문에 파라미터로 userId를 받게 만들고, 해당 사용자가 온라인인지 오프라인인지 상태를 리턴하도록 함
    return isOnline;
}