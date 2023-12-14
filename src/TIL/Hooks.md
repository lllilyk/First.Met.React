# Component

### Class Component

- 생성자에서 state를 정의
- setState() 함수를 통해 state 업데이트(state를 이용해서 렌더링에 필요한 데이터를 관리)
- Lifecycle methods 제공


<br />

### Function Component

- state 사용 불가
- Lifecycle에 따른 기능 구현 불가

- Class Component와 차이점 📌
    - 코드가 굉장히 간결함
    - 별도로 state를 정의해서 사용하거나, 컴포넌트의 생명주기에 맞춰 어떤 코드가 실행되도록 할 수 없음
    - 이러한 함수 컴포넌트에 이런 기능을 지원하기 위해서 나온 것이 바로 Hooks!
    - 훅을 사용하면 함수 컴포넌트도 클래스 컴포넌트의 기능을 모두 동일하게 구현할 수 있게 됨 ✅


## React Hooks

React의 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만들고,

이때 실행되는 함수를 hook이라고 부르기로 정한 것!

- state 관련 함수
- Lifecycle 관련 함수
- 최적화 관련 함수

<br />

### use로 시작하는 hook의 이름
hook이 수행하는 기능✅에 따라서 이름을 짓게 되었는데, 각 기능을 사용하겠다는 의미로 use✅를 붙임

<br />

## useState()
가장 대표적이고 많이 사용되는 hook, state를 사용하기 위한 훅

- 함수 컴포넌트에서는 기본적으로 state를 제공하지 않기 때문에 Class 컴포넌트처럼 state를 사용하고 싶으면 useState hook을 사용해야 함
- ❌ useState()를 사용하지 않은 코드 ❌ (엑스까지는 아니지만)


    ```javascript
    import React, { useState } from "react";

    function Counter(props) {
        var count = 0;

        return (
            <div>
                <p>총 {count}번 클릭했습니다.</p>
                <button onClick={() => count++}>
                    클릭
                </button>
            </div>    
        );
    }
    ```
    - 이렇게 count를 함수의 변수로 선언해서 사용하는 경우, 버튼 클릭 시 count값을 증가시킬 수는 있음
    - but, 재렌더링이 일어나지 않으므로 새로운 카운트 값이 화면에 표시되지 않음.

<br />

- 🔻 useState() 사용법 🔻
    ```javascript
    const [변수명, set함수명] = useState(초기값);
    ```

- useState를 노출할 때에는 파라미터로 선언할 ✅state의 초기값✅이 들어감.
- 클래스 컴포넌트의 생성자에서 state를 선언할 때 초기값을 넣어주는 것과 동일
- 이렇게 초기값을 넣어 useState를 노출하면 return 값으로 배열✅이 나옴

<br />

- return된 배열에는 두 가지 항목이 들어있음 📌
    - 첫 번째 항목은 state로 선언된 변수이고, 두 번째 항목은 해당 state의 set 함수

<br />

- ⭕ useState()를 사용한 코드 ⭕

    ```javascript
    import React, { useState } from "react";

    function Counter(props) {
        const [count, setCount] = useState(0);

        return (
            <div>
                <p>총 {count}번 클릭했습니다.</p>
                <button onClick={() => setCount(count + 1)}>
                    클릭
                </button>
            </div>        
        );
    }
    ```
    - useState✅를 사용하여 count값을 state✅로 관리하도록 만든 것
    - state의 변수명과 set함수가 각각 count, setCount로 되어 있음
        - 버튼이 눌렸을 때 setCount 함수를 호출해서 count를 1 증가 시킴✅
        - count의 값이 변경되면 Component가 재렌더링✨되면서 화면에 새로운 count값이 표시됨✨
            <br />

            이 과정은, class 컴포넌트에서 setState 함수를 호출해서 state가 업데이트 되고, 이후 컴포넌트가 재 렌더링 되는 과정과 동일하다고 볼 수 있음
            <br />

            but, class 컴포넌트에서는 setState 함수 하나로 모든 state값을 업데이트할 수 있지만,
            useState()를 사용하는 방법에서는 🖍️변수 각각에 대해 set 함수가 따로🖍️ 존재한다는 점!! 기억하기

<br />

### 🙋‍♀️ 차이 정확히 알기 🙋‍♀️

❌ useState()
```javascript
var count = 0;
```

⭕useState()
```javascript
const [count, setCount] = useState(0);
```

<br />

...

❌ useState()
```javascript
<button onClick={() => count++}>
    클릭
</button>
```

⭕useState()
```javascript
<button onClick={() => setCount(count + 1)}>
    클릭
</button>    
```