## 속성 분해(Destructuring)

속성을 분해한다는 것은, 객체나 배열에서 원하는 값을 추출하여 변수에 저장하는 작업을 의미함. 

1. **객체 분해**
```javascript
const obj = {
    name: 'myeongheon',
    age: 19
};

const { name, age } = obj;

console.log(name); // 'myeongheon'
console.log(age); // 19
```
- const { name, age } = obj; 이 부분은 obj 객체에서 name과 age라는 속성을 추출하여 name과 age라는 변수에 할당하는 것

<br />

2. **배열 분해**
```javascript
const arr = [10, 20, 30];

const [first, second, third] = arr;

console.log(first); // 10
console.log(second); // 20
console.log(third); //30
```
- [first, second, third] = arr; 이 부분은 arr 배열의 첫 번째, 두 번째, 세 번째 요소를 각각 first, second, third 변수에 할당하는 것

    => 이러한 분해는 코드의 가독성을 높이고, 원하는 속성이나 요소를 간편하게 추출해서 사용할 수 있게 도와줌

<br />
<br />

```javascript
function NumberList(props) {
    const { number } = props;

    const listItems = numbers.map((number) => 
        <li>{number}</li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />
    document.getElementById('root');
);
```

<br />

🔺 이 코드는 '객체 분해'에 해당함 🔺

```javascript
const obj = {
    numbers: [1, 2, 3, 4, 5]
};

const { numbers } = obj;

console.log(numbers); // [1, 2, 3, 4, 5]
```

와 이해가 이렇게 어렵냐
자.. 자바랑 다르다고 타입이 일단 정해져있지 않잖아. 

<br />

-> JavaScript에서 변수의 타입은 선언 시점에 결정되는 것이 아니라, 📍할당되는 값에 따라 동적📍으로 결정됨

따라서, numbers라는 변수는 초기에는 아무 값도 가지지 않지만, props 객체에서 numbers라는 속성을 분해하여 해당 배열의 값을 가져와서 그 값을 가지게 됨

(배열인 numbers를 추출해서 각각 1, 2, 3, 4, 5 값을 추출한 다음에 numbers라는 변수에 이 값들을 할당. 이 때 이 값이 배열이니까 numbers 변수의 타입은 배열이 됨) 

<br />

-> 근데 이 것도 아니래

🙅🏻‍♀️ 자.. 변수 자체에는 '타입'이라는 개념이 명시되어 있지 않음 🙅🏻‍♀️

변수는 단순히 데이터를 저장하는 메모리 공간에 이름을 붙인 것일 뿐. 

따라서 🙋🏻‍♀️ **변수의 '타입'**은 **그 변수가 가리키는 값의 타입**📍에 의해 결정됨 🙋🏻‍♀️

```javascript
let numbers = [1, 2, 3, 4, 5];
```
여기서 numbers는 배열을 참조하는 변수! 즉, numbers 변수가 가리키는 값의 타입은 배열

-> 변수는 값의 메모리 위치를 가리키는 포인터처럼 동작하기 때문에, 변수의 타입은 변수가 참조하는 값의 타입에 따라 결정됨.