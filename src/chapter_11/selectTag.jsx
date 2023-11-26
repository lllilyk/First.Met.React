function FruitSelect(props){
    const [value, setValue] = useState('grape');

    //React에서 handleChange는 주로 폼 요소의 값이 변경될 때 호출되는 이벤트 핸들러 함수를 나타냄 
    //주로 사용자가 폼 입력란에 텍스트를 입력하거나 다른 종류의 입력을 변경할 때 발생하는 이벤트에 대한 처리를 담당!
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('선택한 과일: ' + value);
        event.prevenDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요:
                <select value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )

    // input, textArea, select 모두 value라는 attribute를 통해서 값을 전달하고,
    // 값을 변경할 때는 onChange에서 setValue 함수를 사용하여 값을 업데이트 한다는 것!! 잘 기억해두기!
}