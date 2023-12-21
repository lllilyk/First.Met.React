## Conditional Rendering

조건에 따른 렌더링(조건부 렌더링) 즉, 어떠한 조건*에 따라서 렌더링이 달라지는 것을 의미함

* 조건 : 조건문의 결과(true or false)에 따라서 렌더링을 다르게 하는 것

<br />

```javascript
// 이미 회원인 사용자에게 보여줄 메시지를 출력하는 컴포넌트
function UserGreeting(props) {
    return <h1>다시 오셨네요~</h1>;
}

// 아직 가입하지 않은 게스트 사용자에게 보여줄 메시지를 출력하는 컴포넌트
function GuestGreeting(props) {
    return <h1>회원가입을 해주세요~</h1>;
}

```

<br />

🔻 회원인지 아닌지에 따라 이 두 개의 컴포넌트를 선택적으로 보여줘야 함 🔻

- 조건부 렌더링을 사용하여 이를 구현하는 코드

```javascript
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
```

<br />

### Element Variable
엘리먼트 변수는 이름 그대로, 리액트의 엘리먼트를 변수처럼 다루는 방법

```javascript
// 로그인 버튼을 나타내는 컴포넌트
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            로그인
        </button>
    );
}

// 로그아웃 버튼을 나타내는 컴포넌트
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            로그아웃
        </button>
    );
}
```

<br />

🔻 사용자의 로그인 여부에 따라 두 개의 컴포넌트를 선택적으로 보여주는 코드 🔻

```javascript
function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    let button;
    if (isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={handleLoginClick}/>;
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>    
    )
}
```

- isLoggedIn의 값에 따라서 button이라는 변수의 컴포넌트를 대입함
- 컴포넌트가 대입된 변수를 return에 넣어 실제로 컴포넌트(로부터 생성된 리액트 엘리먼트)가 렌더링 되도록 함
- 이렇게 element를 변수처럼 저장해서 사용하는 방법을 element variable이라고 부름

<br />

### Inline Conditions

조건문을 코드 안에 집어넣는 것

<br />

📌 **Inline If** 📌

if문을 필요한 곳에 직접 넣어 사용하는 방법

- if문을 실제로 넣는 것은 아니지만, if문과 동일한 효과를 내기 위해 &&(논리) 연산자를 사용

- ✅ &&(Logical AND) 연산(Operator) ✅ : 양쪽에 나오는 조건문이 모두 true인 경우에만 전체 결과가 true가 됨

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND

- ✅ Short-Circuit Evaluation : 단축 평가 ✅
        
    따라서, 첫 번째 조건문이 true이면 두 번째 조건문을 평가하고, 
    
    첫 번째 조건문이 false이면 어차피 전체 결과가 false가 되므로 두 번째 조건문은 평가하지 않음

    -> 결과가 정해져 있는 논리연산에서 굳이 불필요한 연산은 하지 않도록 하기 위해 사용하는 방법


    ```javascript
    function MailBox(props){
        const unreadMessages = props.unreadMessages;

        return (
            <div>
                <h1>안녕하세요!</div>
                {unreadMessages.length > 0 && 
                    <h2>
                        현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.
                    </h2>
                }
            </div>    
        );
    }
    ```
<br />

  