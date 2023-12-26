## List & Key

### List

배열 : List를 위해 사용하는 자료 구조

 자바스크립트의 변수나 객체들을 하나의 변수로 묶어 놓은 것

```javascript
const numbers = [1, 2, 3, 4, 5];
```

React에서는 이 배열을 사용해서 List 형태로 엘리먼트들을 렌더링 할 수 있음

<br />

### Key

List에 존재하는 item들을 구분하기 위한 고유한 문자열

<br />

✅ React에서는 List(배열)와 Key를 사용하여 반복되는 여러 개의 컴포넌트들을 쉽게 렌더링할 수 있음

-> 반복되는 다수의 엘리먼트가 렌더링 되는 것!

<br />

## Map 함수

같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우에 이를 코드 상에 하나씩 직접 넣는 것은 굉장히 비효율적! 같은 코드가 계속 반복되니까!

-> 이런 경우에 사용하는 것이 바로! JavaScript 배열의 Map 함수!

✅ 배열에 들어있는 각 변수에 어떤 처리를 한 뒤에 리턴하는 함수!

```javascript
const doubled = numbers.map((number) => number * 2);
```

: map 함수를 사용하여 numbers 배열에 들어있는 각 숫자에 1을 곱한 값이 들어간 doubled라는 배열을 생성하는 코드

<br />

### 🙋🏻‍♀️ map 함수는!? 🙋🏻‍♀️

🔺 배열의 첫 번째 item부터 순서대로 각 item의 어떠한 연산을 수행한 뒤에 최종 결과를 배열✅로 만들어서 Return 해줌!! 🔺

(아 근데 doubled가 배열이라고 정해주지 않았는데 배열이라니까 헷갈림)

<br />

## React에서는 map함수를 어떻게 사용해서 element를 렌더링할까?

```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => 
    <li>{numbers}</li>
);

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
);
```

- 1부터 5까지 들어있는 numbers라는 배열이 있음
- map 함수를 사용해서 이 배열에 들어있는 각 숫자를 li 태그로 감싸 리턴함
    - 📍JSX에서는 중괄호를 사용하면 JavaScript 코드를 넣을 수 있으📍므로 이렇게 하면 각 숫자의 값이 li태그 안에 들어가게 됨
- 이렇게 리턴된 listItems 배열은 총 5개의 element를 갖고 있게 됨

- ReactDOM.render(...); 코드는 화면에 listItems를 렌더링하기 위해 사용됨
- 결과적으로는 li 태그가 들어있는 listItems 배열을 ul 태그로 감싸서 렌더링하게 됨

<br />

🔺 위의 코드를 기본적인 형태를 가진 별도의 List 컴포넌트로 분리 🔺

```javascript
function NumberList(props) {
    // props 객체에서 numbers라는 속성을 분해하려고 시도
    const { numbers } = props;

    // numbers 배열의 각 요소(number)에 대해 map함수를 사용하여 listItem 생성
    const listItems = numbers.map((number) => 

        // 리액트의 JSX 문법에서는 {}안의 이름은 현재 스코프(Scope)에 있는 변수나 함수의 이름을 참조함
        // number는 Map함수의 콜백 함수 내에서 사용되는 매개변수의 이름으로, 임시 변수로서 map 함수에 의해 배열의 각 요소를 대표함
        <li>{number}</li>
    );

    // ul 태그 안에 listItems 배열을 포함시켜 완전한 list 반환
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(

    // NumberList 컴포넌트에 numbers 배열을 numbers라는 Props로 전달하여 렌더링
    // 내가 헷갈린 부분
    // NumberList 컴포넌트에 전달되는 props: numbers={numbers}
    // {numbers}는 numbers라는 변수의 값([1, 2, 3, 4, 5])을 의미함
    // 즉, numbers 배열이 전달되는 것
    <NumberList numbers={ numbers } />
    document.getElementById('root');
);
```

-> 그런데 이 코드를 실행해보면 콘솔 탭에 경고 문구가 나옴
    
    Warning: Each child in a list should have a unique "key" props.

: list의 각 item은 무조건 고유한 key를 갖고 있어야 하는데 현재 각 아이템에 키가 없기 때문!

<br />

## List의 Key

item들을 구분하기 위한 고유한 문자열로, List에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해서 사용됨

📌 React에서의 Key값은 같은⭕ List에 있는 Elements 사이에서만 고유한 값이면 OK⭕!!! 


<br />

## 고유한 키 값을 어떻게 만들어서 사용해야 할까?

### ❌ key로 값을 사용하는 경우 ❌

```javascript
const numbers = [1, 2, 3, 4, 5];

// map 메서드는 배열의 각 항목을 순회하면서 새로운 배열을 만든다.
// numbers 배열의 각 숫자를 순회하며 <li> 요소로 변환하고, 각 숫자를 그 내부에 표시하려고 함

// number
// map 메서드가 numbers 배열의 각 항목을 순회하면서 현재 처리 중인 항목을 가리키는 변수
// map 메서드는 배열의 각 요소를 파라미터로 받는 콜백 함수를 실행하며, 그 콜백 함수의 첫 번째 인자가 바로 현재의 배열 요소를 의미함
// 첫 번째 순회에서 number는 1
// 두 번째 순회에서 number는 2
// 세 번째 순회에서 number는 3...
// -> map 메서드가 numbers 배열의 각 숫자를 순회하면서 현재 처리 중인 숫자를 number 변수로 전달해 줌
const listItems = numbers.map((number) =>

    // key 속성
    // React에서는 list item을 렌더링할 때 각 아이템에 고유한 key 속성을 지정해야 함. 
    // 이렇게 하면 React가 리스트의 아이템을 효율적으로 관리하고 업데이트 할 수 있음
    // number.toString으로 각 숫자를 문자열로 변환하여 key로 사용하고 있음
    <li key={number.toString()}>
        {number}
    </li>
    // {number} 는 중괄호 내에 있으므로 JavaScript 표현식
    // 따라서 {number}는 number 변수의 현재 값으로 대체 됨
    // {number}는 현재 순회 중인 numbers 배열의 각 숫자 값을 출력하기 위해 사용되는 JavaScript 표현식!
);
```

- 지금처럼 numbers 배열의 숫자들이 중복되지 않는 경우에는 정상적으로 작동하지만, 중복된 숫자들이 있는 경우에는 '고유해야 한다'는 key 값의 조건이 충족되지 않음

<br />

### ⭕ key로 id를 사용하는 경우 ⭕ 

```javascript
const todoItems = todos.map((todo) => 
    <li key={todo.id}>
        {todo.text}
    </li>
);
```

- id의 의미 자체가 고유한 값이라는 것이므로 key값으로 사용하기에 적합함
- id가 있는 경우에는 보통 id 값을 key값으로 사용함!✅

<br />

### ⭕ key로 index를 사용하는 경우 ⭕ 

```javascript
const todoItems = todos.map((todo, index) => 
    // 아이템들의 고유한 ID가 없을 경우에만 사용해야 함
    <li key={index}>
        {todo.text}
    </li>
);
```

- map 함수에서 두 번째 파라미터로 제공해주는 index값을 key값으로 사용하는 것
- index는 배열 내에서 현재 아이템의 인덱스를 의미하며, 고유한 값이기 때문에 key값으로 사용해도 ok!
    - 대신, index를 key값으로 사용하는 것은 ✅item들의 고유한 id가 없는 경우에만✅ 사용하는 것이 좋음!

- 🔺 React에서는 key를 명시적으로 넣어주지 않으면, 기본적으로 이 index 값을 key값으로 사용한다는 거~! 🔺

- but, 배열에서 item의 순서가 바뀔 수 있는 경우에는 key값으로 index를 사용하는 것을 권장하지 않음!
    - 성능에 부정적인 영향을 끼칠 수도 있고, 컴포넌트의 state와 관련하여 문제를 일으킬 수도 있으니까  

<br />

### 🌟 map() 함수 안에 있는 Elements는 꼭 key가 필요하다! 중요 별표 백개! 🌟