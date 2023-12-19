## 함수 컴포넌트에서의 이벤트 처리

```javascript
import React, { useState } from "react";

function HandlingClickEvent(props) {
    
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default HandlingClickEvent;
```

<br />

### 하나씩 뜯어보기

```javascript
const [isConfirmed, setIsConfirmed] = useState(false);
```

- useState 훅을 사용하여 상태변수 isConfirmed와 상태를 변경하는 함수 setIsConfirmed를 선언.
- 초기값은 false
- useState는 리액트에서 상태를 관리할 수 있게 해주는 Hook

<br />

```javascript
const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };
```
- handleConfirm이라는 함수를 선언(이벤트 핸들러)
- 이 함수는 호출될 때마다 isConfirmed의 상태를 반전시킴
- 이전 상태 값(prevIsConfirmed)을 받아와서 그 상태의 반대값으로 설정

<br />

```javascript
return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
```

- JSX를 반환
    - 버튼을 클릭하면 handleConfirm 함수가 실행됨
    - disabled 속성은 isConfirmed의 값에 따라 활성화 또는 비활성화 됨.
    - 버튼의 텍스트는 isConfirmed의 값에 따라 변함. 