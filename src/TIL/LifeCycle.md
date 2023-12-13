## 리액트 클래스 컴포넌트의 생명주기

```javascript
// ComponentDidMount
constructor {
    출생 Mounting
}    

// ComponentDidUpdate
render {
    // New props -> setState() -> forceUpdate()
    인생 Updating
}

// ComponentWillUnmount
사망 Unmounting
```

<br />

⭕ 단계별 생명 주기 ⭕

출생 : 컴포넌트가 생성되는 시점(mount) 
- 이 과정에서 컴포넌트의 constructor(생성자)가 실행되고, 컴포넌트의 state를 정의하게 됨

    또한, 컴포넌트가 렌더링되며 이후에 componentDidMount 함수가 호출됨

<br />

인생 : React 컴포넌트도 생애 동안 변화를 겪으면서 여러 번 렌더링 됨.(update 되는 과정)
- 업데이트 과정에서는 컴포넌트의 Props가 변경되거나 setState 함수 호출에 의해 state가 변경되거나, falseUpdate라는 강제 업데이트 함수 호출로 인해 컴포넌트가 재 렌더링 됨. 

<br />

사망 : unmount
- 상위 컴포넌트에서 현재 컴포넌트를 더 이상 화면에 표시하지 않게 될 때 Unmount 직전에 componentWillUnmount 함수가 호출됨