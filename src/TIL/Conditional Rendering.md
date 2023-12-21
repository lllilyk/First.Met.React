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





