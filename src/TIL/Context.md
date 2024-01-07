## Context
기존의 일반적인 React application에서는 데이터가 컴포넌트의 props를 통해 부모에서 자식으로 단방향👇으로 전달됨. 

하지만, 여러 컴포넌트에 걸쳐 굉장히 자주 사용되는 데이터의 경우 기존 방식을 사용하면 코드도 너무 복잡해지고 사용하기에 불편함이 많았음..

그래서 나오게 된 것이 바로 Context!

<br />

### Context의 장점
: React 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식 대신 컴포넌트 트리를 통해 곧바로 컴포넌트로 전달하는 새로운 방식을 제공함

1. 어떤 컴포넌트든지 데이터에 쉽게 접근 가능
    
    context를 사용하면 일일이 props로 전달할 필요 없이! 데이터를 필요로 하는 컴포넌트에 곧바로 데이터를 전달하는 것이 가능!

2. 코드도 매우 깔끔해지고, 데이터를 한 곳에서 관리하기 때문에 디버깅에 있어서도 매우 유리

<br />

### 언제 Context를 사용하면 좋을까?
먼저, 여러개의 Component들이 접근해야 하는 데이터에는 
- 현재 선택된 언어 등이 있음
- 로그인 정보
- 사용자의 로그인 여부
    - 예를 들어서 네비게이션 바에 사용자의 로그인 여부에 따라서 로그인 버튼과 로그아웃 버튼을 선택적으로 보여주고 싶은 경우, 
    
        현재 로그인 상태 데이터에 접근 필요!
- 이런 데이터들을 기존 방식대로 컴포넌트의 props를 통해 넘겨주게 되면 자식 컴포넌트의 자식 컴포넌트까지 계속해서 내려갈 수 밖에 없음..

<br />

## ✅ 기존의 props로 데이터를 전달하는 방식과 Context로 전달하는 방식의 차이 느끼기 ✅

### 1. 현재 선택된 테마를 기존 방식을 사용하여 🙆‍♀️컴포넌트의 props🙆‍♀️로 전달하는 코드

```jsx
function App(props) {
    return <Toolbar theme="dark" />;
}

function Toolbar(props) {
    return (
        <div>
            <ThemeButton theme={props.theme} />
        </div>
    );
}

function ThemeButton(props) {
    return <Button theme={props.theme} />;
}
```
- Toolbar 컴포넌트는 ThemeButton에 theme을 넘겨주기 위해서 'theme' prop을 가져야만 하는데, 

    현재 테마를 알아야 하는 모든 버튼에 대해서 props로 전달하는 것은 굉장히 비효율적!

- 실제 데이터를 필요로 하는 컴포넌트까지의 깊이가 깊어질수록 복잡해지고, 반복적인 코드를 계속해서 작성해주어야 하므로 비효율적이며 직관적이지도 않음👎

<br />

### 2. 🙆‍♀️Context🙆‍♀️를 사용하여 개선한 코드(동일한 기능)

```jsx
const ThemeContext = React.createContext('light');
```
- Context는 데이터를 매번 컴포넌트를 통해 전달할 필요 없이 컴포넌트 트리로 곧바로 전달하게 해줌
- 이 코드에서는 현재 테마를 위한 컨텍스트를 생성하며, 기본값은 light

<br />

```jsx
function App(props) {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}
```
- 컨텍스트를 사용할 컴포넌트의 📌상위📌 컴포넌트에서 ✅ Provider ✅로 감싸주어야 하는데 
    
    여기서는 최상위 컴포넌트인 App 컴포넌트를 ThemeContext.Provider로 감싸주었음
- Provider를 사용하여 하위 컴포넌트들에게 현재 테마 데이터를 전달함
- 모든 하위 컴포넌트들은 컴포넌트 트리 하단에 얼마나 깊이 있는지와 관계없이 데이터를 읽을 수 있음
- 위 코드에서는 현재 테마값으로 'dark'를 전달.

<br />

```jsx
function Toolbar(props) {
    return (
        <div>
            <ThemeButton />
        </div>
    );
}
```
- 이제 중간에 위치한 컴포넌트가 테마 데이터를 하위 컴포넌트로 전달할 필요가 없어짐!

<br />

```jsx
function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {value => <Button theme={value} />}
        </ThemeContext.Consumer>
    );
}
```
- 리액트는 가장 가까운 상위 테마 ✅ Provider ✅를 찾아서 해당되는 값을 사용함
- 만약 해당되는 Provider가 없을 경우, 기본값 light를 사용
- 이 코드에서는 상위 Provider가 있기 때문에 현재 테마의 값은 dark가 됨

<br />

### Context가 주로 사용되는 경우
이렇게 여러 컴포넌트에서 계속해서 접근이 일어날 수 있는 데이터들이 있는 경우에는 Context를 사용하는 것이 좋음!!
    
- 다른 레벨의 많은 컴포넌트가 특정 데이터를 필요로 하는 경우에 주로 사용됨.

