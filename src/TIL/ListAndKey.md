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

🔺 배열의 첫 번째 item부터 순서대로 각 item의 어떠한 연산을 수행한 뒤에 최종 결과를 배열✅로 만들어서 Return 해줌!! 🔺

(아 근데 doubled가 배열이라고 정해주지 않았는데 배열이라니까 헷갈림)

<br />

### React에서는 map함수를 어떻게 사용해서 element를 렌더링할까?

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
    - JSX에서는 중괄호를 사용하면 JavaScript 코드를 넣을 수 있으므로 이렇게 하면 각 숫자의 값이 li태그 안에 들어가게 됨
- 이렇게 리턴된 listItems 배열은 총 5개의 element를 갖고 있게 됨

- ReactDOM.render(...); 코드는 화면에 listItems를 렌더링하기 위해 사용됨
- 결과적으로는 li 태그가 들어있는 listItems 배열을 ul 태그로 감싸서 렌더링하게 됨

