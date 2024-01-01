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

## 📌 주의할 점 📌
### Babel
- JSX는 JavaScritp내에서 실행되므로, React 프로젝트에서는 JSX코드를 JavaScript로 변환해주는 도구(Babel)가 필요함

- JSX에선 'class' 대신 'className'을 사용해야 함

    Ex. `<div className="container">`

<br />

 ## JSX와 JavaScript 차이 알기
 1. 일반 JavaScript로 DOM 요소 생성하기
 
    ```javascript
    const heading = document.createElement('h1');
    heading.textContent = 'Hello, World!';
    document.body.appendChild(heading);
    ```

    - 순수한 JavaScript를 사용하여 h1 요소를 생성하고, 그 내부에 텍스트 설정 후 문서의 body에 추가하는 코드

<br />

2. JSX로 React 컴포넌트 생성하기

    ```jsx
    function Greeting() {
    return <h1>Hello, World!</h1>;
    }   
    ```

<br />

### 🙋‍♀️ 차이점 🙋‍♀️
1. 문법
    - 일반 JavaScript
    
    : DOM 요소를 생성하고 조작하기 위해 'document.createElement()'와 같은 DOM API를 사용함. 

    - JSX 
    
    : HTML과 유사한 구문을 사용하여 React 컴포넌트를 정의함. 

<br />

2. 사용 환경
    - 일반 JavaScript
    
    : 웹 브라우저의 스크립트로서 실행됨

    - JSX 
    
    : Babel과 같은 도구를 사용하여 JavaScript로 변환된 후에 웹 브라우저에서 실행됨. 

<br />

3. 추가 기능
    - JSX

    : JavaScript의 기능을 확장하여 사용할 수 있음. 

    ex. JSX에서는 {}를 사용하여 JavaScript 표현식 삽입 가능!

<br >

✅ 총 정리 ✅

일반 JavaScript는 DOM 조작에 특화되어 있고, JSX는 React 컴포넌트의 정의와 UI 구성에 특화되어 있음!

<br />

## Babel
JavaScript의 트랜스파일러(transpiler)로, 최신의 ECMAScript 표준에 따라 작성된 JavaScript 코드를 이전 버전의 JavaScript 코드로 변환해주는 도구.

<br />

### 🔺 Babel의 주요 특징 🔺
1. 최신 JavaScript 지원

    : 최신 ECMAScript 표준 (예: ES6, ES7, ES8 등)에 추가된 새로운 기능들을 사용하려는 개발자들이 이전 버전의 JavaScript로 변환할 수 있게 해줌

<br />

2. 플러그인 시스템

    : 플러그인을 통해 다양한 기능을 제공하며, 사용자가 필요한 기능만 선택하여 Babel의 동작을 확장할 수 있게 해줌

<br />

3. 트랜스파일링

    : 트랜스파일링(transpiling)을 통해 하나의 코드를 다른 형태의 코드로 변환.

    예를 들어, 최신의 JavaScript 코드를 오래된 JavaScript 코드로 변환하거나, TypeScript 코드를 JavaScript 코드로 변환하는 작업 등이 가능! 오!

<br />

### 🔻 Babel의 사용 목적 🔻
1. 브라우저 호환성

    : 모든 웹 브라우저가 최신 ECMAScript 기능을 지원하지 않기 때문에, Babel을 사용하여 코드를 이전 버전의 JavaScript로 변환하여 브라우저 호환성 문제를 해결 가능

<br />

2. 프론트엔드 프레임워크/라이브러리

    : React, Vue, Angular와 같은 프론트엔드 라이브러리나 프레임워크는 Babel을 사용하여 개발되며, 이를 통해 최신의 JavaScript 기능을 활용하면서도 브라우저 호환성을 유지할 수 있음

<br />

3. 개발 환경 설정

    : Babel은 개발 환경 설정에서 주로 사용되며, 웹팩(Webpack), 바벨-로더(Babel-loader)와 같은 도구와 함께 사용되어 프로젝트의 빌드 및 번들링 과정에서 자동으로 코드를 트랜스파일링함 !의문 해결!

<br />

✅ 총 정리 ✅
Babel은 최신의 JavaScript 코드를 이전 버전의 JavaScript로 변환하여 브라우저 호환성 문제를 해결하고, 다양한 플러그인을 통해 확장된 기능을 제공하는 JavaScript 트랜스파일러 도구다!