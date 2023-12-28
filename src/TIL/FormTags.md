## 여러 가지 종류의 Forms

### TextArea
#### HTML textarea 태그
```javascript
<textarea>
    안녕하세요. 오늘은 정말 정말 피곤해요. 
</textarea>
```
- textarea 태그의 childeren으로 text가 들어가는 형태

<br />

#### React textarea태그
```javascript
function RequestForm(props) {
    const [value, setValue] = useState('요청사항을 입력하세요');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 요청사항: ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                요청사항:
                <textarea value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
```
- React에서는 textarea 태그에 value라는 attribute를 사용하여 텍스트를 표시
- 고객으로부터 요청사항을 입력받기 위한 RequestForm
- state로는 value가 있고, 이 값을 textarea 태그에 value라는 attribute에 넣어줌으로써 화면에 나타나게 됨
- 위 코드에서는 value를 선언할 때 초기 값을 넣어줬기 때문에 처음 렌더링 될 때부터 textarea에 text가 나타나게 됨

