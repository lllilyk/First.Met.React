## elements
: 원래는 웹 사이트에 대한 모든 정보를 담고 있는 객체인 DOM에서 사용하는 용어
 
- element = DOM element(실제 브라우저의 DOM에 존재하는 element)

<br />

📌 리액트에서는 리액트 앱을 구성하는 가장 작은 블록들을 의미함

- React의 virtual DOM에 존재하는 element = React element
- React element는 DOM element의 가상 표현이라고 볼 수 있음
- DOM element는 React element에 비해서 많은 정보를 담고 있기 때문에 상대적으로 크고 무거움

<br />

📌 React elements는 자바스크립트 객체 형태로 존재함

- 엘리먼트는 컴포넌트 유형과 속성 및 내부의 모든 자식에 대한 정보를 포함하고 있는 일반적인 자바스크립트 객체
- 이 객체는 마음대로 변경할 수 없는 불변성을 가짐

```javascript
React.createElement(
    type,
    [props],
    [...children]
)
```

<br />

✅ React Component Element
type에 문자열로 된 html 객체가 아닌 리액트 컴포넌트의 이름이 들어감
```javascript
{
    type: Button,
    props: {
        color: 'green',
        children: 'Hello, element!'
    }
}
```

