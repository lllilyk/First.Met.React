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
