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

<br />

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

<br />

## useEffect()
useState()와 같이 가장 많이 사용되는 훅으로, Side effect를 수행하기 위한 Hook

일반적인 의미와 다르게 React에서 말하는 side effect는 그냥 효과나 영향을 뜻하는 effect의 의미에 가까움

ex) 서버에서 데이터를 받아오거나, 수동으로 DOM을 변경하는 등의 작업을 의미함

<br />

📌 그러면 왜 이런 작업을 effect라고 부를까?

: 다른 컴포넌트에 영향을 미칠 수 있고 렌더링 중에는 작업이 완료될 수 없기 때문에!✅

렌더링이 끝난 이후에 실행되어야 함❗ 때문에 이런 작업들이 side로 실행된다는 의미🖍️에서 side effect라고 불림

<br />

✅ useEffect() 훅은 React의 함수 컴포넌트에서 Side effect를 실행할 수 있게 해주는 Hook ✅

- useEffect() 훅 : 
    - class 컴포넌트에서 제공하는 생명주기 함수인 
        - componentDidMount
        - componentDidUpdate
        - componentWillUnmount와 동일한 기능을 하나로 통합해서 제공함
    - 따라서, useEffect() hook만으로 class 컴포넌트의 생명주기함수와 동일한 기능을 수행할 수 있음

    <br />

- 🔻 useEffect() 사용법 🔻
    ```javascript
    useEffect(이펙트 함수, 의존성 배열);
    ```

- 두 번째 파라미터로 들어가는 '의존성 배열'은 말 그대로, 이 이펙트가 의존하고 있는 배열.
    - ✅배열 안에 있는 변수 중에 하나라도 값이 변경✅되었을 때 '이펙트 함수'가 실행됨
    - 기본적으로 이펙트 함수는 처음 컴포넌트가 렌더링 된 이후🖍️와, 업데이트로 인한 재렌더링 이후🖍️에 실행됨.

    <br />
    
- 만약 이펙트 함수가 mount와 unmount시에 ❗단 한 번씩❗만 실행되게 하고 싶으면 아래와 같이 의존성 배열에 빈 배열을 넣으면 됨.
    ```javascript
    useEffect(이펙트 함수, []);
    ```

    - 이렇게 하면 해당 이펙트가 props나 state에 있는 어떤 값에도 의존하지 않는 것이 되므로 여러 번 실행되지 않음.

<br />

- 의존성 배열을 생략하면, 컴포넌트가 업데이트될 때마다❗ 호출 됨
    ```javascript
    useEffect(이펙트 함수);
    ```

<br />

- ⭕ useEffect()를 사용한 코드 ⭕

    ```javascript
    import React, { useState, useEffect } from "react";

    function Counter(props) {
        const [count, setCount] = useState(0);

        // componentDidMount, componentDidUpdate와 비슷하게 작동함
        useEffect(() => {
            // 브라우저 api를 사용해서 document의 title을 업데이트 함
            document.title = `You clicked ${count} times`;
        });

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
    
    - useEffect()를 사용해서 class 컴포넌트에서 제공하는 생명주기 함수✨의 기능을 동일하게 수행하도록 만듦.
        - 이펙트 함수 : 처음 컴포넌트가 mount되었을 때 실행되고 이후 컴포넌트가 업데이트 될 때마다 실행됨
        - 결과적으로 componentDidMount, componentDidUpdate와 동일한 역할을 하게 됨
        
        <br />

    - useEffect 안에 있는 이펙트 함수에서는 브라우저에서 제공하는 api를 사용해서 document의 title을 업데이트 함. 
        - document.title은 브라우저에서 페이지를 열었을 때 창에 표시되는 문자열을 의미함(탭에 나오는 제목)

        <br />

    - 위 코드처럼 의존성 배열 없이✅ useEffect를 사용하면 React는 DOM이 변경된 이후✅에 해당 이펙트 함수를 실행하라는 의미로 받아들임
        - 따라서, 기본적으로 컴포넌트가 처음 렌더링 될 때를 포함해서 매번❗ 렌더링 될 때마다 이펙트가 실행됨❗

        <br />

    - 또한, useEffect()는 함수 컴포넌트 안에서 선언되기 때문에 ✅해당 컴포넌트의 props와 state에 접근 가능✅
        - 위 코드에서는, count라는 state🖍️에 접근하여 해당 값이 포함된 문자열을 생성해서 사용하는 것을 볼 수 있음

<br />
<br />

📌 componentWillUnmount와 동일한 기능은 useEffect()로 어떻게 구현할 수 있을까?

```javascript
import React, { useState, useEffect } from "react";

function UserStatus(props)  {
    const [isOnline, setIsOnline ] = useState(null);

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    useEffect(() => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        // useEffect()의 리턴 함수의 역할은 componentWillUnmount 함수가 하는 역할과 동일
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    });

    if(isOnline === null){
        return '대기 중...';
    }

    return isOnline ? '온라인' : '오프라인';
}
```

- 서버 api를 사용하여 사용자의 상태를 구독하고 있는 코드
- 이 코드에서는 함수를 하나 리턴하는데, 해당 함수 안에는 구독을 해지하는 api를 호출하도록 되어 있음.
    - useEffect에서 리턴하는 함수는 컴포넌트가 unmount될 때 호출됨.
    - 결과적으로 useEffect()의 리턴 함수의 역할은 componentWillUnmount 함수가 하는 역할과 동일한 것

<br />

⭕ useEffect()는 하나의 컴포넌트에 여러 개 사용 가능! ⭕

```javascript
function UserStatusWithCounter(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`;
    });

    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    });

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }
}
```

- 위 코드는 두 개의 useEffect 훅을 사용하고 있음
- useState hook과 useEffect hook을 각각 두 개씩 사용!
- 의존성 배열을 넣지 않았으니까 컴포넌트가 처음 렌더링될 때를 포함해서 매번 렌더링 될 때마다 이펙트가 실행됨
    - 클릭할 때마다 count값 1씩 증가

<br />

## useMemo()
Memoized value를 리턴하는 Hook

<br />

### Memoization
최적화를 위해서 사용하는 개념
- 📌 비용이 높은, 즉 연산량이 많이 드는 함수의 호출 결과를 저장해 두었다가 같은 입력값으로 함수를 호출하면,

    새로 함수를 호출하지 않고 이전에 저장해놨던 호출 결과를 바로❗ 반환하는 것을 의미함.
- 결과적으로 함수 호출 결과를 받기까지 걸리는 시간이 짧아질 뿐더러 불필요한 중복 연산도 하지 않기 때문에 컴퓨터의 자원을 적게 사용하게 됨
- 이렇게 ✅Memoization이 된 결과값을 영어로 Memoized Value✅라고 부름 (쉽게는 '메모를 해두었다가 나중에 다시 사용하는 것'이라고 생각하면 됨)

<br />
<br />

- 🔻 useMemo() 사용법 🔻
    ```javascript
    const memoizedValue = useMemo(
        // create 함수 호출
        () => {
            // 연산량이 높은 작업을 수행하여 결과를 반환
            return computeExpensiveValue(의존성 변수1, 의존성 변수2);
        };
        // 의존성 배열
        [의존성 변수1, 의존성 변수2]
    );
    ```

- useMemo() Hook은 파라미터로 memoizedValue를 생성하는 create 함수🖍️와 의존성 배열🖍️을 받는데,  

    ✅의존성 배열에 들어있는 변수가 변했을 경우에만 새로 create 함수를 호출하여 결과값을 반환✅하며, 그렇지 않은 경우에는 기존함수의 결과값을 그대로 반환함

- useMemo() hook을 사용하면 컴포넌트가 다시 렌더링될 때마다 연산량이 높은 작업을 반복하는 것을 피할 수 있음

    -> 결과적으로 빠른 렌더링 속도를 얻을 수 있음!

<br />
<br />

❌ 주의 사항 ❌

- useMemo() 훅으로 전달된 함수는 렌더링이 일어나는 동안🖍️ 실행되기 때문에, 일반적으로 ✅렌더링이 일어나는 동안 실행되서는 안되는 작업을 useMemo 함수에 넣으면 안됨✅!

    Ex) useEffectHook에서 실행되어야 할 side effect
        
    : 서버에서 데이터를 받아오거나, 수동으로 DOM을 변경하는 작업 등은 렌더링이 일어나는 동안 실행되어서는 안되기 때문에 useMemo 훅 함수에 넣으면 안되고, 
    
    useEffect() 훅을 사용해야 함❗



<br />
<br />

🙋‍♀️ 의존성 배열을 넣지 않을 경우 🙋‍♀️

```javascript
const memoizedValue = useMemo(
    () => computeExpensiveValue(a, b)
);
```

: 렌더링이 일어날 때마다 매번 create 함수가 실행되므로, useMemo 훅에 '의존성 배열'을 넣지 않고 사용하는 것은 아무런 의미가 ❌!!!


<br />
<br />

🙋‍♀️ 의존성 배열에 빈 배열을 넣은 경우 🙋‍♀️

```javascript
const memoizedValue = useMemo(
    () => {
        return computeExpensiveValue(a, b);
    },
    []
);
```

: 컴포넌트가 mount 될 때만 create 함수가 호출되므로, mount 이후에는 값이 변경되지 않음. 

-> ✅mount 시점에만 한 번✅ 값을 계산할 필요가 있을 경우에는 '의존성 배열에 빈 배열을 넣어' 사용하면 됨. 

but, 대부분의 경우에는 useMemo() 훅에 의존성 배열의 변수들을 넣고⭕, 해당 변수들의 값이 바뀜에 따라 새로 값을 계산해야 할 경우에 사용한다는 것!⭕

<br />

## useCallback()
useMemo() Hook과 유사하지만, 값이 아닌 함수🖍️를 반환하는 Hook

: component가 렌더링될 때마다 매번 함수를 새로 정의하는 것이 아니라, ✅의존성 배열의 값이 바뀐 경우에만 함수를 새로 정의해서 리턴✅함.

<br />

- 🔻 useMemo() 사용법 🔻
    ```javascript
    const memoizedCallback = useCallback(
        () => {
            doSomething(의존성 변수1, 의존성 변수2);
        },
        [의존성 변수1, 의존성 변수2]
    );
    ```

- useMemo() Hook과 마찬가지로 함수와 의존성 배열을 파라미터로 받음
- useCallback() Hook에서는 파라미터로 받는 이 함수를 callback이라고 부름
- ✅의존성 배열에 있는 변수 중 하나🖍️라도 변경되면, memoization된 callback 함수를 반환함✅ 

<br />

- '의존성 배열'에 따라 memoized 값을 반환한다는 점에서는 useMemo() Hook과 완전히 동일함.

- 🙋‍♀️ 동일한 역할을 하는 두 줄의 코드 🙋‍♀️

    ```
    useCallback(함수, 의존성 배열);

    useMemo(() => 함수, 의존성 배열);

    ```

<br />

- useCallback() 훅을 사용하지 않고 컴포넌트 내에 함수를 정의하는 경우, 매번 렌더링이 일어날 때마다 함수가 새로 정의됨. 
- useCallback() Hook을 사용하여 ✅특정 변수의 값이 변한 경우에만 함수를 다시 정의✅하도록 해서 불필요한 반복 작업을 없애❌주는 것!

<br />
<br />

❌ useCallback() Hook을 사용하지 않은 경우 ❌

```javascript
import { useState } from "react";

function ParentComponent(props) {
    const [count, setCount] = useState(0);

    // 재렌더링 될 때마다 매번 함수가 새로 정의됨
    const handleClick = (event) => {
        // 클릭 이벤트 처리
    };

    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                {count}
            </button>
            
            <ChildComponent handleClick={handleClick} />
        </div>
    );
}
```

- useCallback() Hook을 사용하지 않고, 컴포넌트 내에서 정의한 함수(handleClick)를 자식 컴포넌트의 props로 넘겨 사용하는 경우,
    
    부모 컴포넌트가 다시 렌더링이 될 때마다, 자식 컴포넌트도 다시 렌더링 됨. 

- but, ✅useCallback() Hook을 사용하면 특정 변수의 값이 변한 경우에만✅ 함수를 다시 정의하게 되므로,

    함수가 다시 정의되지 않는 경우에는 자식 컴포넌트도 재렌더링이 일어나지 않음. 

<br />


- ⭕ useCacllback()을 사용한 코드 ⭕

    ```javascript
        // component가 mount될 때만 함수가 정의됨
        const handleClick = useCallback((event) => {
            // 클릭 이벤트 처리
        }, []);
    ```

    - 의존성 배열에 빈 배열이 들어감 
        
        : 컴포넌트가 처음 mount되는 시점에만 함수가 정의되고 이후에는 다시 정의되지 않음.
        
        : 자식 컴포넌트도 불필요하게 재렌더링이 일어나지 않게 됨


<br />

- ❌ useCacllback()을 사용하지 않은 코드 ❌

    ```javascript
        // 재렌더링 될 때마다 매번 함수가 새로 정의됨
        const handleClick = (event) => {
            // 클릭 이벤트 처리
        };
    ```


<br />

## useRef()
Reference를 사용하기 위한 Hook

- React에서 Reference란, '특정 컴포넌트에 접근할 수 있는 객체'를 의미함 
- useRef() Hook은 이 Reference 객체를 반환함. 

<br />

- refObject.current
    - Reference 객체에는 current(.current)라는 속성이 있는데 이는 현재 레퍼런스(참조)하고 있는 element를 의미한다고 보면 됨

<br />

- 🔻 useRef() 사용법 🔻
    ```javascript
    const refContainer = useRef(초기값);
    ```

    - ✅파라미터로 초기값을 넣으면 해당 초기값으로 초기화된 reference 객체를 반환함✅
        - 초기값이 null이라면, current의 값이 null인 reference 객체가 반환되는 것.

    - 이렇게 반환된 reference 객체는 컴포넌트의 life time 전체🖍️에 걸쳐서 유지됨. 

<br />
<br />

- ⭕ useRef()을 사용한 코드 ⭕

    ```javascript
    function TextInputWithFocusButton(props) {
        const inputElem = useRef(null);

        const onButtonClick = () => {
            // `current`는 mount된 input element를 가리킴
            inputElem.current.focus();
        };

        return (
            <>
                <input ref={inputElem} type="text" />
                <button onClick={onButtonClick}>
                    Focus the input
                </button>
            </>    
        );
    }
    ```

    - useRef() Hook을 사용하여 버튼 클릭 시 input에 포커스를 하도록 하는 코드
    - 초기 값으로 Null을 넣고, 결과로 반환된 inputElem이라는 reference 객체를 input 태그에 넣어줌. 
    - 그리고, 버튼 클릭시 호출되는 함수에서 ✅inputElem.current를 통해 실제 element에 접근하여 focus 함수를 호출✅하고 있음


<br />

- 🙋‍♀️  useRef() Hook의 특징 🙋‍♀️ 
    - 매번 렌더링 될 때마다 항상✅ 같은✅ 레퍼런스 객체를 반환한다는 특징을 가짐
    - 내부의 데이터가 변경되었을 때 별도로 알리지 않음
        - current 속성을 변경한다고 해서 재렌더링이 일어나지 ❌!! 오 정신 혼미
