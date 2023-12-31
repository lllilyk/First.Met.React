## fieldset
React에서 legend 태그는 일반적으로 HTML의 'fieldset' 요소 내에서 사용됨

```html
<fieldset>
    ...
</fieldset>
```
- fieldset 태그는 관련된 입력 요소들을 그룹화할 때 사용하는 요소
- ex) 여러 개의 라디오 버튼 또는 체크 박스와 같은 입력 요소들을 하나의 그룹으로 묶어 스타일링하거나 접근성을 향상시키기 위해 사용할 수 있음

<br />

## legend
fieldset의 제목 또는 설명을 제공하는 데 사용됨
- legend 태그의 내용은 일반적으로 'fieldset'의 상단에 표시됨
- 이 제목은 관련된 입력 요소 그룹의 목적이나 사용자에게 제공되는 정보를 요약하는 역할을 함
    ```javascript
    function Calculator(props) {
        const [temperature, setTemperature] = useState('');

        const handleChange = (event) => {
            setTemperature(event.target.value);
        }

        return (
            <fieldset>
                <legend>섭씨 온도를 입력주세요:</legend>
                <input
                    value={temperature}
                    onChange={handleChange} />
                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
    ```
    - LiftingStateUp.md 참고