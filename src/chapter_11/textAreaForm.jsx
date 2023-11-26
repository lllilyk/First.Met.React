function RequestForm(props){
    const [value, setValue] = useState('요청사항을 입력하세요');
    // state로는 value가 있고 이 값을 textArea 태그의 value에 넣어줌으로써 화면에 나타나게 됨
    // value를 선언할 때 초기값을 넣어줬기 때문에 처음 랜더링될 때부터 textarea에 text가 나타나게 됨

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 요청사항: ' + value);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                요청사항: 
                <textarea value={value} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}