// useUserStatus 훅(함수)의 선언 부분에서 function useUserStatus(userId)라고 되어있으므로,
// userId가 이 함수(useUserStatus)의 매개변수(parameter)로 간주됨.
// 따라서 useUserStatus 훅을 호출할 때 userId값을 전달해야 함!!

// 두 컴포넌트 모두 props.userId를 사용해야 일관성이 있음
// 이렇게 사용하면 두 컴포넌트에서 같은 인터페이스를 유지하며 useUserStatus 훅을 호출하게 됨.

function UserStatus(props) {
    const isOnline = useUserStatus(props.userId);

    if(isOnline === null) {
        return '대기중...';
    }
    return isOnline ? '온라인' : '오프라인';
}

function UserListItem(props){
    const isOnline = useUserStatus(props.userId);

    return(
        <li style={{ color : isOnline ? 'green' : 'black' }}>
            {props.user.name}
        </li>
    );
}