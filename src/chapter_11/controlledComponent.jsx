function NameForm(props) {
    const [value, setValue] = useState('');

    // onChange 함수의 첫 번째 파라미터인 event는 이벤트 객체를 나타냄
    // event.target은 현재 발생한 이벤트의 타겟을 의미하며, 
    // event.target.value는 해당 타겟의 value 속성의 값을 의미함
    // 여기서의 타겟은 input element가 되며, event.target.value는 input element의 값이 됨!
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 이름: ' + value);
        event.preventDefault();
    }

    // input 태그의 value 부분은 react component의 state에서 값을 가져다 넣어주는 것
    // 그렇기 때문에 항상 state에 들어있는 값이 input에 표시됨
    // 또한, 입력 값이 변경되었을 때 호출되어지는 onChange에는 handleChange라는 함수가 호출되도록 했는데
    // handleChange 함수에서는 setValue 함수를 사용하여 새롭게 변경된 값을 value라는 이름의 state에 저장함
    return(
        <form onSubmit={handleSubmit}>
            <label>
                이름:22
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    )

    // 이처럼 controlled component를 사용하면 입력 값이 React 컴포넌트의 state를 통해 관리된다. 
}