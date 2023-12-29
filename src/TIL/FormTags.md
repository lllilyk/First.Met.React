## 여러 가지 종류의 Forms

### 📌 TextArea
#### HTML textarea 태그
```javascript
<textarea>
    안녕하세요. 오늘은 정말 정말 피곤해요. 
</textarea>
```
- textarea 태그의 childeren으로 text가 들어가는 형태

<br />

#### React textarea 태그
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

<br />

### 📌 Select
#### HTML select 태그
``` javascript
<select>
    <option value="apple">사과</option>
    <option value="banana">바나나</option>
    <option selected value="grape">포도</option>
    <option value="watermelon">수박</option>
</select>
```
- HTML에서는 option 태그를 select 태그가 감싸는 형태로 사용
- option 태그에서 현재 선택된 옵션의 경우에는 Selected라는 attribute를 가지고 있음

<br />

#### React select 태그
```javascript
function FruitSelect(props) {
    const [value, setValue] = useState('grape');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('선택한 과일: ' + value);
        event.preventDefault();
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
}
```
- select 태그에 value라는 attribute를 사용해서 값을 표시
- FruitSelect라는 컴포넌트, 이 컴포넌트의 state로 grape라는 초기 값을 가진 value가 하나 있음
- 이 값을 select 태그에 value로 넣어줌
- 값이 변경된 경우에는 handleChange 함수에서 setValue 함수를 사용하여 값을 업데이트
- ✅ 이 방식을 사용하게 되면 사용자가 옵션을 선택했을 때 value라는 하나의 값만을 업데이트하면 되기 때문에 더 편리함!

<br />

```javascript
<select multiple={true} value={['B', 'C']}>
```
- 목록에서 다중으로 선택이 되도록 하려면 위 코드와 같이 multiple이라는 속성 값을 true로 하고, 

    value로 선택된 옵션의 값이 들어있는 배열을 넣어주면 됨 

<br />

### 📌 File Input
디바이스의 저장 장치로부터 하나 또는 여러 개의 파일을 선택할 수 있게 해주는 HTML 태그로, 보통은 서버로 파일을 업로드하거나 자바스크립트의 File API를 사용해서 파일을 다룰 때 사용함

```javascript
<input type="file">
```

- file input 태그는 그 값이 읽기 전용이기 때문에 React에서는 uncontrolled 컴포넌트가 됨
- 이말인 즉슨, 값이 React의 통제를 받지 않음!

<br />

## Multiple Inputs
만약, 하나의 컴포넌트에서 여러 개의 입력을 다루기 위해서는 어떻게 해야 할까?

-> 여러 개의 state를 선언하여 각각의 입력에 대해 사용하면 됨

```javascript
function Reservation(props) {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] - useState(2);

    const handleSubmit = (event) => {
        alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부:
                <input
                    type="checkbox"
                    checked={haveBreakfast}
                    onChange={(event) => {
                        setHaveBreakfast(event.target.checked);
                    }} />
            </label>
            <br />
            <label>
                방문객 수:
                <input
                    type="number"
                    value="{numberOfGuest}"
                    onChange={(event) => {
                        setHaveBreakfast(event.target.checked);
                    }} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}
``` 

- 아침식사 선택 유무를 입력받기 위한 input 태그는 type이 체크박스로 되어있고 값이 변경되면 setHaveBreakfast라는 함수를 통해 값을 업데이트 함
- 방문객수를 입력받기 위한 input 태그는 type이 number로 되어 있고 값이 변경되면 setNumberOfGuest라는 함수를 통해 값을 업데이트 함
- class 컴포넌트에서는 setState 함수 하나로 모든 state의 값을 업데이트했지만,

    함수 컴포넌트에서는 각 state의 변수마다 set 함수가 따로 존재하기 때문에 위와 같은 형태로 각각의 set함수를 사용해서 구현하면 ok!
