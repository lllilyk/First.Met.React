## JSX

JavaScript XML의 약자로, React에서 UI를 만들기 위한 템플릿 언어로 사용됨

JSX는 React 컴포넌트 내에서 HTML과 비슷한 문법을 사용하여 UI를 표현할 수 있게 해줌

<br />
✅ 총 정리 ✅

JSX는 React에서 UI를 구성하는데 사용되는 JavaScript 확장 문법으로, 

HTML과 비슷하게 생겼지만, JavaScript의 기능을 모두 사용할 수 있어 더 동적이고 강력한 UI를 만들 수 있음!

<br />

## 왜 JSX를 사용할까!?

1. 문법이 직관적임

: JSX는 HTML과 유사한 구문을 사용하기 때문에, React 컴포넌트의 UI 구조를 더 쉽게 이해하고 작성할 수 있다

<br />

2. JavaScript와 통합

: JSX는 JavaScript 내부에서 작동하기 때문에 JavaScript의 모든 기능과 함께 사용 가능! 따라서 동적인 UI를 쉽게 만들 수 있다

<br />

### JSX를 사용하여 간단한 React 컴포넌트를 정의하는 예제
```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```
- 그동안 맨날 백틱뒤에 javascript라고 썼는데.. 바보
- `<h1>Hello, {props.name}</h1>;` 이 부분이 JSX

<br />

## 주의할 점
### Babel
- JSX는 JavaScritp내에서 실행되므로, React 프로젝트에서는 JSX코드를 JavaScript로 변환해주는 도구(Babel)가 필요함

- JSX에선 'class' 대신 'className'을 사용해야 함

    Ex. `<div className="container">`

<br />

 