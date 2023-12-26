## React에서의 Form

사용자로부터 입력을 받기 위해 사용하는 것

#### React에서의 Form과 HTML 폼에는 차이가 있음!
- React는 컴포넌트 내부에서 state를 통해 데이터를 관리
- HTML Form은 element 내부에 각각의 state가 존재함

<br />

### HTML Form

```javascript
<form>
    <label>
        이름: 
        <input type="text" name="name" />
    </label>
    <button type="submit">제출</button>
</form>
```

- 이 코드는 React에서도 잘 작동하지만, JavaScript 코드를 통해 사용자가 입력한 값에 접근하기에는 불편한 구조임
- 자바스크립트 코드에서 사용자가 입력한 값에 접근하고 제어할 수 있어야 웹 페이지를 개발할 때 당연 더 편리!!

<br />

## Controled Component

```javascript
function NameForm(props) {
    const [value, setValue] = useState('');

    // onChange(입력값이 변경되었을 때 호출됨) 콜백 함수의 첫 번째 파라미터인 event는 Event 객체를 나타냄
    // event.target은 말 그대로 현재 발생한 이벤트의 타겟을 의미함
    // event.target.value는 해당 타겟의 value 속성의 값을 의미!
    // 즉, 여기서 target : input element
    // event.target.value : input element의 value!
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 이름: ' + value);
        event.preventDefault();
    }
    
    // value={value}
    // React 컴포넌트의 state에서 값을 가져다 넣어줌
    // 그래서 항상 state에 있는 값이 input에 표시됨
    
    // onChange={handleChange}
    // 입력 값이 변경되었을 때 호출되는 onChange에는 handleChange 함수가 호출되도록 함
    // handleChange 함수에서는 setValue 함수를 사용하여 새롭게 변경된 값을 value라는 이름의 state에 저장!
    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름: 
                <input type="text" value={value} onChange={handleChange}>
            </label>
            <button type="submit">제출</button>    
        </form>
    )
}
```

사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트

- 여기서 통제를 하는 주체는 React

즉, 🔺 Controled Component는 그 값이 React의 통제를 받는 input form element를 의미함 🔺

<br />

### HTML Form
각 element(`<input>`, `<textarea>`, `<select>`... ) 가 자체적으로 state를 관리(각각 내부에 state를 가지고 있음)

- 이렇게 되면 자바스크립트 코드를 통해 각각의 값에 접근하기가 어려움

<br />

### Controlled Component
모든 데이터를 state에서 관리(state의 값을 변경할 때에는 무조건 setState 함수를 사용!)

- 함수 컴포넌트에서는 useState Hook을 사용하여 state를 관리함

- 이처럼 Controlled Component를 사용하면 입력 값이 React Compnent의 State를 통해 관리됨
    
    - 여러 개의 입력 양식의 값을 원하는 대로 조정할 수 있다는 것!! **(사용자의 입력을 직접적으로 제어할 수 있음!)**
    ```javascript
    const handleChange = (event) => {
        setValue(event.target.value.toUpperCase());
    }
    ```
    - 입력 양식의 초기 값을 내가 원하는 대로 넣어주는 것? 당연 가능
    
