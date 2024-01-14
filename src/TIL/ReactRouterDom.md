## react-router-dom v6

routing : 사용자가 원하는 경로로 보내는 과정

react-router-dom은 이러한 routing을 쉽게 구현할 수 있도록 React 컴포넌트 형태로 제공해주는 라이브러리. 

### react-router-dom을 이용한 라우팅 구성 예시
```jsx
<BrowserRouter>
    <Routes>
        <Route index element={<MainPage />} />
        <Route path="places" element={<PlacePage />} />
        <Route path="games" element={<GamePage />} />
        <Route path="house/:houseId" element={<HouseList />} />
    </Routes>
</BrowserRouter>
```
- 경로 값 없이 그냥 사이트 메인으로 접속하게 되면 `index`라는 prop을 가진 Route로 라우팅 됨.
    - 인덱스 경로인 `/` 경로로 접속하면 `MainPage` 컴포넌트가 렌더링되어 보이게 됨
- `/games`로 접속하면 `GamePage` 컴포넌트가 렌더링되어 화면에 나오게 됨. 
- `house/:houseId` 여기에서 :(콜론)houseId는 동적으로 변하는 파라미터를 위한 값
    - 경로에 이렇게 콜론을 사용하고 아이디를 입력하면 실제 컴포넌트에서 useParams 훅을 사용해 아이디로 해당 값을 가져올 수 있음

<br />

- react-router-dom을 이용해 라우팅을 구성하기 위해서 사용하는 기본적인 컴포넌트는 3개
    - `BrowserRouter`
        - 웹 브라우저에서 React router를 사용하여 라우팅을 할 수 있도록 해주는 컴포넌트
        - 웹 브라우저에는 history라는 기능이 내장되어 있는데, 여기에 사용자가 탐색한 페이지들의 방문 기록이 저장됨
        - 웹 브라우저의 '뒤로가기' 버튼을 누르면 이 history를 이용해서 이전 페이지가 어디인지 찾고 해당 페이지로 이동하게 됨!
        - 한 줄 요약) 히스토리를 이용해서 경로를 탐색할 수 있게 해주는 컴포넌트
    - `Routes`
        - 여러 개의 Route 컴포넌트를 children으로 가짐
        - 사용자가 주소창에 새로운 경로를 입력하거나 웹사이트 내에서 경로 이동이 일어나게 되면, 
            
            Routes 컴포넌트는 하위 children으로 가지고 있는 Route 컴포넌트 중에서 현재 경로와 가장 일치하는 경로를 찾아 해당되는 Element를 반환함
        - 이러고 나면 사용자에게 보이는 화면이 바뀌게 되는 것! 
    - `Route`
        - Routes 컴포넌트의 하위 컴포넌트로서 path와 element라는 props를 가지고 있음
        - 여기서 path는 경로를 의미하고, element는 경로가 일치할 경우 렌더링 할 React element를 의미함

<br />

## useNavigate()
react-router-dom에서는 페이지 이동을 위해서 useNavigate 훅을 제공함
```jsx
function SampleNavigate(props) {
    const navigate = useNavigate();

    const moveToMain = () => {
        navigate("/");
    }

    return (
        ...
    );
}
```
- useNavigate 훅의 호출 결과로 나오는 navigate 함수의 파라미터로 이동할 경로를 넣어주면 됨 
