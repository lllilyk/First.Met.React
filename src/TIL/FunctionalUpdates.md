
## useCounter Hook
초기 count 값을 파라미터로 받아서 count라는 이름의 state를 생성하여 값을 제공, 
카운트 증가 및 감소를 편리하게 할 수 있도록 함수를 제공하는 Hook

useCounter Hook을 사용하면, 어떤 함수 컴포넌트에서든지 count 기능을 쉽게 사용할 수 있음. 

<br />

### useState() 사용 방법

```javascript
const [변수명, set함수명] = useState(초기값);
```

<br />

🙋‍♀️ 잘 이해가 안되는 부분 🙋‍♀️  

```javascript
import React, { useState } from "react";

function useCounter(initialValue) {
    
    const [count, setCount] = useState(initialValue);

    // 함수형 업데이트(Functional Updates)
    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count -1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;
```


### 📌  함수형 업데이트 📌

- React의 'setState' 함수는 이전 상태 값을 받아서 새로운 상태 값을 반환하는 함수를 인자로 받을 수 있음. 
- 이 방식을 사용하면 이전 상태에 의존하는 업데이트 수행 가능!

<br />

- 🔻 헷갈리면 뜯어보자 🔻

    ```javascript
    const increaseCount = () => setCount((count) => count + 1);
    ```

    - increaseCount 함수는 'setCount'를 호출
    - setCount는 현재 상태를 나타내는 'count'를 받아서 새로운 상태를 결정하는 함수를 인자로 받음.
    - 화살표 함수 '(count) => count + 1'은 현재 상태를 나타내는 'count'를 받아서 1을 더한 값을 반환함
    - 따라서, 현재 상태에서 1을 증가시킨 값을 새로운 상태로 설정하게 됨.

<br />


- ✅ 이 방식을 사용하는 이유 ✅ 
    - React는 상태 업데이트를 비동기적으로 처리하기 때문에.
    - 만약, 단순히 'setCount(count + 1)'와 같이 사용한다면, React는 현재 상태를 기반으로 업데이트를 수행하기 때문에, 

        연속된 업데이트에서 예상치 못한 결과가 발생할 수 있음.
    - ⭕ 함수형 업데이트를 사용하면 항상 이전 상태를 기반으로 정확한 업데이트를 수행할 수 있음 ⭕!!    