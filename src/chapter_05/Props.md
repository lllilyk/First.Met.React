### React Props 🐥
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
✨ props의 중요한 특징 : read-only
<br />
📌 props는 React component가 element를 생성하기 위해 사용하는 값. 
<br />
이 값이 element를 생성하는 도중에 갑자기 바뀌면 제대로 된 element가 생성될 수 없으므로 변경 불가. 
<br />
(팥 붕어빵 다 구워져 나왔는데 속을 슈크림으로 바꿀 수 있어!? 아니옹)

<br />
그럼 다른 props의 값으로 element를 생성하려면 어떻게 해야할까?
<br />
📌 새로운 값을 component에 전달하여 새로 element를 생성하면 됨 -> 이 과정에서 element가 다시 렌더링 됨. 

<br />
⭐ React component의 props는 바꿀 수 없고, 같은 props가 들어오면 항상 같은 element를 return해야 한다는 것!! 중요💯