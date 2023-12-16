function UserStatus(props) {
    const isOnline = useUserStatus(props.user.id);

    if(isOnline === null) {
        return '대기중...';
    }
    return isOnline ? '온라인' : '오프라인';
}

function UserListItem(props){
    const isOnline = useUserStatus(props.user.id);

    return(
        <li style={{ color : isOnline ? 'green' : 'black' }}>
            {props.user.name}
        </li>
    );
}