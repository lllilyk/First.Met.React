# State

React Component의 '변경 가능한 데이터'라는 의미에 가까움

이 state는 사전에 정의되는 것이 아니라, 리액트를 개발하는 개발자가 직접 정의해서 사용하게 됨. 

<br />

✅ state를 정의할 때 주의할 점 ✅

꼭 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 함!

why!? state가 변경되면 컴포넌트는 재렌더링 됨.

: 렌더링과 데이터 흐름에 관련없는 값을 포함하면, 불필요한 경우에도 컴포넌트가 재렌더링되어 성능을 저하시킬 수 있다!

따라서, 렌더링과 데이터 흐름에 관련있는 값만 state에 포함하도록 해야 하며, 그렇지 않은 값은 컴포넌트의 instance field로 정의하면 됨

<br />

### [React Class Component] LikeButton

```javascript
class LikeButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            liked: false
        };
    }
}
```

모든 class 컴포넌트에는 constructor(생성자)라는 이름의 함수가 존재하며, 이 함수는 클래스가 생성될 때 실행되는 함수임.

```javascript
this.state = {
    ...
}
```
이 부분이 현재 컴포넌트의 state를 정의하는 부분. 

<br />

✅ Class 컴포넌트의 경우 state를 생성자에서 정의! (함수 컴포넌트는 state를 useState라는 hook을 사용해서 정의함) ✅ 

state는 정의한 이후 직접 수정할 수 없다! 하면 안된다❗❗❗

```javascript
this.setState = {
    name: 'yoon'
};
```

📌 이렇게 Class 컴포넌트에서 state를 변경하고 싶은 경우에는 꼭 🔺setState🔺라는 함수를 사용해야 함
