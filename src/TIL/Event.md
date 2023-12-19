## Event

✅ React의 Event 표기법 : camelCase(카멜 표기법)

```javascript
<button onClick={activate}>
    Activate
</button>
```

<br />

✅ DOM에서는 이벤트를 처리할 함수를 '문자열'로 전달하지만, React에서는 함수 그대로 전달함

- DOM의 Event 

    ```javascript
    <button onclick="activate()">
        Activate
    </button>
    ```

<br />

- React의 Event
    ```javascript
    <button onClick={activate}>
        Activate
    </button>
    ```
 
<br />

## Event Handler(Event Listener)

어떤 사건이 발생하면, 사건(이벤트)을 처리하는 역할을 하는 함수

Event Handler는 이벤트가 발생하는 것을 계속 듣고 있는다는 의미로 Event Listener라고 부르기도 함. 


<br />

### 🔻 클래스 Component에서 Event Handler를 처리하는 방법 🔻

1. **bind**
    ```javascript
    class Toggle extends React.Component {
        constructor(props) {
            super(props);

            this.state = { isToggleOn: true };

            // callback에서 `this`를 사용하기 위해서는 바인딩을 필수적으로 해줘야 함.
            this.handleClick = this.handleClick.bind(this);
        }

        // handleClick 함수 정의
        handleClick() {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
        }

        render() {
            return (
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? '켜짐' : '꺼짐'}
                </button>
            );
        }
    }
    ```

<br />

2. **Class fields syntax**

    ```javascript
    class MyButton extends React.Component {
        handleClick = () => {
            console.log('this is:', this);
        }

        render() {
            return (
                <button onClick={this.handleClick}>
                    클릭
                </button>
            );
        }
    }
    ```

<br />

3. **Arrow function**

    ```javascript
    class MyButton extends React.Component {
        handleClick() {
            console.log('this is:', this);
        }

        render() {
            // 이렇게 하면 `this`가 바운드됨
            return (
                <button onClick={() => this.handleClick()}>
                    클릭
                </button>
            );
        }
    }
    ```

- 근데 이 방식은 MyButton 컴포넌트가 렌더링될 때마다 다른 callback 함수가 생성되는 문제가 있음
    
    대부분의 경우에는 상관없지만, 이 callback 함수가 하위 컴포넌트에 prop으로 넘겨지게 되면 하위 컴포넌트에서 추가적인 렌더링이 발생하게 되므로,
    
    성능 문제를 피하기 위해서 1. 바인딩이나 2. class field syntax를 사용하는 것을 권장!


<br />
<br />

### 🔻 함수 Component에서 Event Handler를 처리하는 방법 🔻

```javascript
function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);

    // 방법 1. 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    // 방법 2. arrow function을 사용하여 정의
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    return (
        <button onClick={handleClick}>
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>    
    );
}
```

- 함수 컴포넌트에서는 이벤트를 넣어줄 때,

    this를 사용하지 않고 onClick에 바로 정의한 Event Handler(handleClick)를 넘기면 됨

<br />
<br />

## Argument(Parameter)

함수(Event Handler)에 전달할 데이터

<br />

### 🔻 클래스 Component에서 Event Handler에 매개변수를 전달하는 방법 🔻


```javascript
// Arrow Function 사용
<button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>
// event라는 매개변수는 React의 event객체를 의미함

// bind 사용
<button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
```

- 두 방법 모두 첫 번째 매개변수는 id, 두 번째 매개변수로는 event가 전달됨
    - Arrow Function을 사용한 방법 

        : 명시적으로 event를 두 번째 매개변수로 넣어줌
    
    - bind를 사용한 방법

        : event가 자동으로 id 이후에 두 번째 매개변수로 전달됨

- 지금은 거의 사용되지 않음

<br />

### 🔻 함수 Component에서 Event Handler에 매개변수를 전달하는 방법 🔻

```javascript
function MyButton(props) {
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    };

    return (
        <button onClick={(event) => handleDelete(1, event)}>
            삭제하기
        </button>
    );
}
```