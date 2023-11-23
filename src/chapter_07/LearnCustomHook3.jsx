const userList = [
    { id: 1, name: 'woosung' },
    { id: 2, name: 'myeongheon' },
    { id: 3, name: 'hyeoncheol' },
];

function ChatUserSelector(props){
    const [userId, setUserId] = useState(1);
    const isUserOnline = useUserStatus(userId);

    return (
        <>
            <Circle color={isUserOnline ? 'green' : 'red'} />
            <select 
                value={userId}
                onChange={event => setUserId(Number(event.target.value))}
            >
                {userList.map(user => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </>
    )
}