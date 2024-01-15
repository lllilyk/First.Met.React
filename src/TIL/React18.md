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

<br />

## Suspense
### Code Splitting
React로 컴포넌트를 작성하다 보면, 웹 사이트의 규모가 커지면서 컴포넌트의 사이즈도 커지게 됨

때문에, 웹 브라우저에서 이런 큰 컴포넌트를 한 번에 로딩하려고 하면 시간이 오래 걸리는 문제가 있었음. 

-> 개발자들이 이 문제를 해결하기 위해서 컴포넌트의 코드를 여러 조각으로 분리하는 Code Splitting이라는 기법을 적용하게 됨. 

    이 분리된 조각은 'Lazy Loading', 'Dynamic Loading'이라고 부르는 동적 로딩 기법을 적용하여 웹 사이트의 반응 속도를 높일 수 있게 됨

<br />

### Suspense
: 2018년에 리액트 버전 16.6이 릴리즈될 때 처음 등장한 '컴포넌트'

❗️ 리액트에서 Suspense 컴포넌트가 하는 역할

: 하위 컴포넌트(children)가 준비되기 전까지 렌더링을 중단하고, 하위 컴포넌트가 준비된 이후에 렌더링을 시킴으로써 사용자 경험을 향상시켜줌

<br />

[ Suspense를 사용한 예시 코드 ]

```jsx
import { lazy, Suspense } from 'react';
import LoadingSpinner from './LoadinngSpinner';
const OtherComponent = lazy(()=> import('./OtherComponent'));

function MyComponent(props) {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <OtherComponent />
        </Suspense> 
    );
}

export default MyComponent;
```

- 이렇게 코드를 작성하면 OtherComponent가 준비되기 전까지 fallback 속성에 들어가 있는 LoadingSpinner라는 컴포넌트를 화면에 보여주고, 

    OtherComponent가 준비되면 그때 OtherComponent를 화면에 보여주게 됨. 

- 기존의 Suspense는 이렇게 Client에서 Code Splitting과 함께 제한적으로만 사용되었는데,

    React 버전 18에서는 Suspense를 서버 렌더링과 제한적으로 데이터 패칭에서도 사용할 수 있도록 업데이트 됨. 

<br />

## 클라이언트와 서버 렌더링 API 업데이트
### React DOM Client
기존 방식(react 버전17)
```jsx
import React from 'react';
import React from 'react-dom';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
```

<br />

새로운 방식(react 버전18)
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
```
- react-dom/client라는 패키지가 새롭게 추가됨
- `createRoot` 함수를 사용한 렌더링

<br />

### 리액트 DOM 서버
- renderToPipeableStream

    : NodeJS 환경에서 스트리밍을 위한 함수

- renderToReadableStream

    : Edge runtime 환경(Ex. Deno, Cloudflare workers)을 위한 함수

<br />

## Strict Mode
React의 `Strict Mode`는 개발 모드일 때 잠재적인 버그를 찾을 수 있게 해주는 모드

리액트 버전 18에서는 strict mode의 동작이 변경되었는데, 

개발 모드에서 strict mode를 사용하게 되면 컴포넌트를 언마운트(unMount) 시켰다가 다시 한 번 마운트(Mount) 시키게 됨.

-> 컴포넌트 생명 주기 함수들이 예상과 다르게 여러 번 호출될 수 있음(컴포넌트가 여러 번 마운트 되어도 문제가 생기지 않도록 개발하는 것이 중요)



