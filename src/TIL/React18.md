## Automatic Baching

### Baching
: 여러 상태의 업데이트가 동시에 발생하는 경우에, 이 작업들을 묶어서 한 번에 처리하는 것

<br />

리액트 컴포넌트는 상태가 업데이트될 때마다 재렌더링이 발생함. 
useState 훅을 사용해서 선언한 각 state들의 set함수를 거의 동시에 호출하더라도, 호출된 횟수만큼 재렌더링이 발생. 

-> 이러한 문제들을 해결하기 위해서 여러 상태의 업데이트가 동시에 발생하면, 이 작업들을 묶어서 한 번에 처리하는 것이 바로 Baching.

[ 기존 ]

: 리액트의 event handler 내에서만 Baching이 이루어졌음. 

[ React 18 ]
: Automatic Baching이 새롭게 등장, 자동으로 여러 상태의 업데이트 작업을 묶어서 한 번에 처리하게 됨. 

<br />

📌 기존 버전의 배칭 작동 방식

```jsx
setTimeout(()=> {
    setCount((count) => count + 1);
    setIsFull((isFull) => !isFull);
    // 각 state의 업데이트마다 재렌더링이 발생
}, 1000);
```
- 각 state의 업데이트마다 재렌더링이 발생하게 됨
- setCount함수가 호출됐을 때와 setIsFull 함수가 호출됐을 때 각각 재렌더링이 발생함

<br />

📌 현재(React18) 버전의 배칭 작동 방식

```jsx
setTimeout(()=> {
    setCount((count) => count + 1);
    setIsFull((isFull) => !isFull);
    // 재 렌더링이 마지막에 한 번만 발생(Automatic Batching)
}, 1000);
```
- 상태 업데이트 작업을 자동으로 묶어서 한 번에 처리해줌

<br />

## Transitions
: 리액트에서 긴급한 업데이트와 긴급하지 않은 업데이트를 구분해서 처리하기 위한 새로운 개념

### 업데이트의 종류

📍 긴급한 ⭕️ 업데이트
- 사용자와 직접적인 인터랙션이 일어나는 경우
    - 예) 글자 입력, 버튼 클릭 등

<br />

📍 긴급하지 ❌ 업데이트
- 사용자와 직접적인 인터랙션이 일어나지 않는 경우
    - 예) 서버로부터 결과를 받아와서 보여주는 경우

<br />

❓ 업데이트의 형태를 나눈 이유는?

-> 업데이트의 종류를 나누고 긴급한 업데이트를 먼저 처리함으로써 사용자에게 더 나은 경험을 제공하기 위함.

```jsx
import { startTransition } from 'react';

// 긴급 업데이트 : 입력한 글자를 화면에 보여주어야 함
setInputValue(input);

// 함수 내에 있는 모든 업데이트는 Transition 업데이트가 됨
startTransition(() => {
    // Transition 업데이트 : 검색 결과를 보여주어야 함
    setSearchQuery(input);
});
```

- React에서 제공하는 startTransition이라는 함수를 사용해서 사용자로부터 한 번의 입력이 발생했을 때 업데이트를 나눠서 처리하는 코드
- 사용자의 입력을 화면에 보여주는 것은 긴급하게 처리되어야 할 업데이트이기 때문에 기존과 동일하게 상태 업데이트를 진행함. 
- 그리고 이후에 사용자 입력에 따른 결과를 보여주는 것은 아주 긴급하게 처리하지는 않아도 되는 부분이므로 startTransition 함수를 사용해서 Transition 업데이트로 처리함. 
    - Transition 업데이트는 긴급하지 않은 것으로 처리되기 때문에 그 사이에 더 긴급한 업데이트가 들어오면 중단될 수 있음.
