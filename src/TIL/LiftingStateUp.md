## Lifting State Up
💫 여러 개의 컴포넌튿들 사이에서 state 공유하기 💫

React로 개발하다 보면 하나의 데이터를 여러 개의 컴포넌트에서 표현해야하는 경우가 종종 생기는데,

이런 경우에 각 컴포넌트의 state에서 데이터를 각각 보관하는 것이 아니라 가장 가까운 공통된 부모 컴포넌트의 state를 공유해서 사용하는 것이 더 효율적!

<br />

### Shared State
Shared State는 어떤(부모) 컴포넌트의 State에 있는 데이터를 여러 개의 하위(자식) 컴포넌트에서 공통적으로 사용하는 경우를 의미함

<br />

1. 섭씨온도 값을 props로 받아서 물의 끓음 여부를 문자열로 출력해주는 컴포넌트
    ```javascript
    function BoilingVerdict(props) {
        if (props.celsius >= 100) {
            return <p>물이 끓어용</p>;
        }
        return <p>물이 끓지 않아용!</p>;
    }
    ```

<br />

2. BoilingVerdict 컴포넌트를 사용하는 부모 컴포넌트
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
    - state로 온도 값(temperature)을 하나 가지고 있는 컴포넌트
    - 사용자로부터 입력을 받기 위해서 input 태그를 사용한 Controlled Component 형태로 구현되어 있음
    - 사용자가 온도 값을 변경할ㄹ 때마다 handleChange 함수가 호출되고, setTemperatue 함수를 통해 온도 값을 가지고 있는 Temperature라는 이름의 State를 업데이트 함
    - State의 온도 값은 BoilingVerdict 컴포넌트에 Celsius라는 이름의 prop으로 전달됨

<br />

3. Calculator 컴포넌트 안에 온도를 입력하는 부분을 별도의 컴포넌트로 추출
- 섭씨 온도와 화씨 온도를 각각 따로 입력받을 수 있게 해서, 재사용이 가능한 형태로 컴포넌트를 만들어 사용하는 것이 효율적이기 때문!
    ```javascript
    const scaleNames = {
        c: '섭씨',
        f: '화씨'
    };

    function TemperatureInput(props) {
        const [temperature, setTemperature] = useState('');

        const handleChange = (event) => {
            setTemperature(event.target.value);
        }

        return (
            <fieldset>
                <legend>
                    온도를 입력해주세용(단위:{scaleNames[props.scale]}):
                </legend>
                <input value={temperature} onChange={handleChange} />
            </fieldset>
        )
    }
    ```
    - Calculator 컴포넌트에서 온도를 입력받는 부분을 추출하여 별도의 컴포넌트로 만든 것
    - 추가적으로 props의 단위를 나타내는 scale을 추가하여 온도의 단위를 섭씨 또는 화씨로 입력 가능하도록 만듦
    - 이렇게 추출한 컴포넌트를 사용하도록 Calculator 컴포넌트를 변경하면???

<br />

4. 추출한 컴포넌트를 사용한 (2.)Calculator 컴포넌트
    ```javascript
    function Calculator(props) {
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
    ```
    - 총 2개의 입력을 받을 수 있으며 하나는 섭씨 온도를, 다른 하나는 화씨 온도를 입력받음!
    - 여기서 문제!
    - 사용자가 입력하는 온도 값이 TemperatureInput의 state에 저장되기 때문에 섭씨 온도와 화씨 온도 값을 따로 입력받으면 2개의 값이 다를 수 있음
    - 이를 해결하기 위해서는 값을 동기화시켜줘야 하고, 섭씨 온도와 화씨 온도를 동기화시키기 위해서는 먼저 각각에 대해 변환하는 함수를 작성해야 함.

<br />

5. 섭씨 온도와 화씨 온도를 변환하는 함수
    ```javascript
    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
    ```

<br />

6. 온도 변환 함수를 호출하는 함수
    ```javascript
    function tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }
    ```
    - 온도 값과 변환하는 함수를 파라미터로 받아서 값을 변환시켜 리턴해주는 함수
    - 만약 숫자가 아닌 값을 입력하면 empty String을 리턴하도록 예외처리 됨

<br />

7. tryConvert 함수를 실제로 사용하는 방법
    ```javascript
    tryConvert('abc', toCelsius);
    tryConvert('10.22', toFahrenheit);
    ```
    - 온도 값과 변환하는 함수를 파라미터로 넣어주면 됨 


<br />

### Shared State 적용하기
- 하위 컴포넌트의 state를 공통된 부모 컴포넌트로 끌어올려서 shared state를 적용해야 함
- 여기서 state를 상위 컴포넌트로 올린다는 것을 'lifting state up'이라고 표현함(하위 컴포넌트의 State를 공통 상위 컴포넌트로 올리는 것)

<br />

8. TemperatureInput 컴포넌트에서 온도 값을 가져오는 부분을 아래와 같이 수정
    ```javascript
    return (
        ...
            // <input value={temperature} onChange={handleChange} />
            <input value={props.temperature} onChange={handleChange} />
        ... 
    )
    ```
    - 온도 값을 컴포넌트의 state에서 가져오는 것이 아니라 props를 통해서 가져오게 됨
    - 컴포넌트에 state를 사용하지 않게 되기 때문에 입력 값이 변경되었을 때 상위 컴포넌트로 변경된 값을 전달해주어야 함
    - 따라서, handleChange 함수를 아래와 같이 변경
    ```javascript
    const handleChange = (event) => {
        //setTemperature(event.target.value);
        props.onTemperatureChange(event.target.value);
    }
    ```
    - 사용자가 온도 값을 변경할 때마다 props에 있는 onTemperatureChange 함수를 통해 변경된 온도 값이 상위 컴포넌트로 전달됨

<br />

9. 최종적으로 완성된 TemperatureInput 컴포넌트
    ```javascript
    function TemperatureInput(props) {
        const handleChange = (event) => {
            props.onTemperatureChange(event.target.value);
        }

        return (
            <fieldset>
                <legend>
                    온도를 입력해주세용(단위:{scaleNames[props.scale]}:
                </legend>
                <input value={props.temperature} onChanage={handleChange} />
            </fieldset>
        )
    }
    ```
    - state는 제거되어 오로지 상위 컴포넌트에서 전달받은 값만을 사용함

<br />

10. 변경된 TemperatureInput 컴포넌트에 맞춰 변경된Calculator 컴포넌트
    ```javascript
    function Calculator(props) {
        const [temperature, setTemperature] = useState('');
        const [scale, setScale] = useState('c');

        const handleCelsiusChange = (temperature) => {
            setTemperature(temperature);
            setScale('c');
        }

        const handleFahrenheitChange = (temperature) => {
            setTemperature(temperature);
            setScale('f');
        }

        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={farenheit}
                    onTemperatureChange={handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
    ```
    - state로 temperature와 scale을 선언하여 온도 값과 단위를 각각 저장하도록 함
    - 이 온도와 단위를 이용하여 변환함수를 통해 섭씨 온도와 화씨 온도를 구해서 사용함
    - TemperatureInput 컴포넌트를 사용하는 부분에서는 각 단위로 변환된 온도 값과 단위를 props로 넣어줌
    - 값이 변경되었을 때 업데이트하기 위한 함수를 onTemperatureChange에 넣어줌
    - 따라서, 섭씨 온도가 변경되면 단위가 'c'로 변경되고, 화씨 온도가 변경되면 단위가 'f'로 변경됨

<br />

### 총 정리
- 상위 컴포넌트인 Calculator에서 온도값과 단위를 각각의 state로 가지고 있으며, 

    두 개의 하위 컴포넌트는 각각 섭씨와 화씨로 변환된 온도 값과 단위 그리고 온도를 업데이트하기 위한 함수를 props로 가지고 있음

- 이렇게 각 컴포넌트가 state의 값을 가지고 있는 것이 아니라, 공통된 상위 컴포넌트로 올려서 공유하는 방법을 사용하면 React에서 더욱 간결하고 효율적으로 개발 가능!
