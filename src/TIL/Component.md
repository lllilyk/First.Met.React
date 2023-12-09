## Component

🖍️ 컴포넌트의 이름을 지을 때 유의해야 할 중요한 점!
- 컴포넌트의 이름은 항상 ⭐대문자⭐로 시작해야 한다는 것
- React는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문
<br />
예를 들어, div나 span과 같이 사용하는 것은 내장 컴포넌트라는 것을 뜻하며, span과 같은 문자열 형태로 react.creatElement에 전달됨. 

- 대문자로 시작하는 Foo와 같은 경우에는 react.createElement Foo 형태로 컴파일되며, javascript 파일 내에서 사용자가 정의헀거나 임포트한 컴포넌트를 가리킴

<br />

- HTML div 태그로 인식
    ```jsx
    const element = <div />;
    ```

- Welcome이라는 리액트 Component로 인식
    ```javascript
    const element = <Welcome name="윰니" />;
    ```

<br />

- 위의 두 줄의 코드는 모두 React element를 만들어 냄
- 컴포넌트를 렌더링 하려면 이 만들어진 element를 렌더링하면 되는 것. 

<br />

🖍️ 컴포넌트 렌더링하기

1. 렌더링을 위해선 가장 먼저 컴포넌트로부터 엘리먼트를 만들어야 함. 

    ```javascript
    function Welcome(props) {
        return <h1>왜 이렇게 머리에 안들어와, {props.name}</h1>;
    }

    const element = <Welcome name="props" />;
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
    ```

- 위 코드에서는 Welcome이라는 함수 컴포넌트를 선언하고 있음
- Welcome name="props" 라는 값을 가진 element를 파라미터로 해서 react-dom.render 함수를 호출함
2. React는 Welcome 컴포넌트에 name 윰니라는 props를 넣어서 호출하고, 그 결과로 React Element가 생성됨. 
3. 이렇게 생성된 element는 최종적으로 React DOM을 통해 실제 DOM에 효과적으로 업데이트 됨
- 우리가 브라우저를 통해서 볼 수 있게 됨. 


<br />

### ✨ Function Component
--- 

아래는 하나의 props 객체를 받아서 인삿말이 담긴 React element를 리턴하는 Welcome 함수
<br />

```javascript
function Welcome(props) {
    return <h1>안녕, {props.name}</h1>;
}
```

함수 컴포넌트는 이렇게 간단한 코드를 장점으로 가짐. 
