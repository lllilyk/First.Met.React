// Inline If
// if문을 필요한 곳에 직접 집어 넣어 사용하는 방법
// && 논리 연산자 사용(로지컬 엔드 연산)
// 양쪽에 나오는 조건문이 모두 true인 경우에만 전체 결과가 true

import ConditionalRendering from "./ConditionalRendering";

// ex 1)
// true && expression : expression
// 첫 번째 조건문이 true이면 두 번째 조건문을 평가

// ex 2)
// false && expression : false
// 첫 번째 조건문이 false이면 어차피 전체 결과는 false가 되므로 두번째 조건문은 평가하지 않음
// 이것을 short-circuit evaluation(단축평가)이라고 함
// 결과가 정해져 있는 논리연산에서 굳이 불필요한 연산은 하지 않도록 하기 위해 사용하는 방법

// Inline If는 이 && 연산자를 jsx 코드 안에서 중괄호를 사용하여 직접 집어넣는 방법
// unreadMessages.length가 0보다 크면 h2 tag부분 렌더링됨
// 0보다 작으면 아무것도 렌더링되지 않음
function Mailbox(props){
    const unreadMessages = props.unreadMessages;

    return (
        <div>
            <h1>안녕하세요!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다. 
                </h2>
            }
        </div>
    );
}

// Inline If-Else
// If-else문을 필요한 곳에 직접 넣어서 사용하는 방법
// Inline-If는 보여주거나 안 보여주는 두 가지 경우만 있지만, 
// Inline If-Else는 조건문의 값에 따라서 다른 엘리먼트를 보여줄 때 사용함
// 이를 위해서 삼항 연산자라고 부르는 ?(물음표) 연산자를 사용함
function UserStatus(props){
    return (
        <div>
            이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}</b> 상태입니다.
        </div>
    )
}

function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <ConditionalRendering isLoggedIn={isLoggedIn} />
            {isLoggedIn
                ? <LogoutButton onClick={handleLogoutClick} />
                : <LoginButton onClick={handleLoginClick} />
            }
        </div>
    )
}
