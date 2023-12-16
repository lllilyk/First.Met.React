import React, { useState, useEffect } from "react";

function UserListItem(props) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnlien);
        }

        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    });

    // 온라인인 사용자의 이름은 초록색으로 표시해 주고 싶다
    return (
        <li style={{ color : isOnline ? 'green' : 'black' }}>
            {props.user.name}
        </li>    
    );
}


