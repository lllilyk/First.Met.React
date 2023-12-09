## Props 🧇
Component가 붕어빵 틀이라면, elements는 각 붕어빵들(팥붕, 슈붕), props는 붕어빵 속 팥, 슈크림!
<br />
즉, 같은 React component에서 눈에 보이는 글자나 색 등의 속성을 바꾸고 싶을 때 사용하는 컴포넌트의 속 재료
<br />
props가 컴포넌트의 모습과 속성을 결정한다! ✨ 
<br /><br />
props는 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체
<br />
컴포넌트의 어떤 데이터를 전달하고, 전달된 데이터에 따라 다른 모습의 엘리먼트를 화면에 렌더링하고 싶을 때 해당 데이터를 props에 넣어서 전달하는 것!

<br />
📌 props의 중요한 특징 : read-only 
<br />
props는 React component가 element를 생성하기 위해 사용하는 값 ✨
<br />
이 값이 element를 생성하는 도중에 갑자기 바뀌면 제대로 된 element가 생성될 수 없으므로 변경 불가. 
<br />
(팥 붕어빵 다 구워져 나왔는데 속을 슈크림으로 바꿀 수 있어!? 아니옹)

<br /><br />
📌 그럼 다른 props의 값으로 element를 생성하려면 어떻게 해야할까?
<br />
새로운 값을 component에 전달하여 새로 element를 생성하면 됨 -> 이 과정에서 element가 다시 렌더링 됨. 

⭐ React component의 props는 바꿀 수 없고, 같은 props가 들어오면 항상 같은 element를 return해야 한다는 것!! 중요💯

<br />

📌 컴포넌트에 props라는 객체를 전달하기 위해서는 어떻게 해야할까?
<br />
JSX를 사용하는 경우에는 아래의 코드와 같이 키와 값으로 이루어진 키-값 쌍의 형태로 컴포넌트에 props를 넣을 수 있음
```javascript
function App(props) {
    return (
        <Profile
            name="윰니"
            introduction="오늘은 10년 만에 시간여행자의 아내라는 영화를 다시 봤어요"
            viewCount={2}
        />
    );
}
```
위 코드에는 App 컴포넌트 안에서 Profile 컴포넌트를 사용하고 있고,
<br />
Profile 컴포넌트에 name, introduction, viewCount라는 3가지 속성을 넣어주었음

<br />

📌 각 속성에 값을 넣을때 중괄호를 사용한 것과 사용하지 않은 것의 차이는 무엇일까?
- 문자열에는 중괄호를 사용하지 않음 (사용해도 상관없음)
- 문자열 이외의 정수, 변수 그리고 다른 컴포넌트 등이 들어가는 경우에는 중괄호{}를 사용해서 감싸주어야 함. 
- 이렇게 하면 이 속성의 값들이 모두 Profile 컴포넌트의 props로 전달되며, props는 아래와 같은 형태의 자바스크립트 객체가 됨. 

```javascript
{
    name: "윰니",
    introduction: "오늘은 10년 만에 시간여행자의 아내라는 영화를 다시 봤어요",
    viewCount: 2
}
```

<br />

📌 props의 중괄호를 사용해서 아래와 같이 props의 값으로 컴포넌트도 넣을 수 있음

```javascript
function App(props){
    return (
        <Layout
            width={2500}
            height={1500}
            header={
                <Header title="주말은 즐거워" />
            }
            footer={
                <Footer />
            }
        />
    );
}
```
- Layout 컴포넌트의 props로는 정수 값을 가진 width, heigth와 React element로 header와 footer가 들어오게 됨. 
- 이렇게 jsx를 사용하는 경우에는 컴포넌트에 간단하게 props를 넣을 수 있음. 