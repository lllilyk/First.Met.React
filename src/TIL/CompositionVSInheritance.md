## Composition vs Inheritance

### Composition(합성)

여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것을 의미함

Ex) airbnb -> 컴포넌트 A와 컴포넌트 B를 합쳐서 페이지 컴포넌트를 만들었으므로 컴포지션 즉, 합성을 사용했다고 볼 수 있음

<br />

### 조합 방법에 따라 나뉘는 컴포지션 사용 기법

1. Containment : 하위 컴포넌트를 포함하는 형태의 합성 방법

    사용 방법 : React 컴포넌트의 props에 기본적으로 들어있는 Children 속성을 사용하면 됨

    ```jsx
    function FancyBorder(props) {
        return (
            <div className={'FancyBorder FancyBorder-' + props.color}>
                {props.children}
            </div>
        );
    }

    React.createElement(
        type,
        [props],
        [...children]
    );
    ```
    - props.children을 사용하면 해당 컴포넌트의 하위 컴포넌트가 모두 children으로 들어오게 됨
    - [...children] : 왜 배열로 되어있냐?
        - 여러 개의 하위 컴포넌트를 가질 수 있기 때문에
    - 결과적으로 FancyBorder 컴포넌트는 자신의 하위 컴포넌트를 모두 포함하여 예쁜 테두리로 감싸주는 컴포넌트가 됨

    <br />

    - 실제로 FancyBorder 컴포넌트를 사용하는 예제
    ```jsx
    function WelcomeDialog(props) {
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    어서오세요
                </h1>
                <p className="Dialog-message">
                    우리 사이트에 방문하신 것을 환영합니다!
                </p>
            </FancyBorder>
        );
    }
    ```
    - WelcomeDialog 컴포넌트에서 FancyBorder 컴포넌트를 사용하고 있음
    - FancyBorder 컴포넌트로 감싸진 부분 안에는 h1 태그와 p 태그가 있고 이 두 개의 태그는 모두 FancyBorder 컴포넌트에 Children이라는 이름의 props로 전달됨
    - 결과적으로 파란색의 테두리로 모두 감싸지는 결과!

    <br />

    Q. 여러 개의 Childeren 집합이 필요한 경우에는 어떻게 해야 할까?

    A. 별도로 props를 정의해서 각각 원하는 컴포넌트를 넣어주면 됨

    예제 코드)

    ```jsx
    function SplitPane(props) {
        return (
            <div className="SplitPane">
                <div className="SplitPane-left">
                    {props.left}
                </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        );
    }
    
    function App(props) {
        return (
            <SplitPane
                left={
                    <Contacts />
                }
                right={
                    <Chat />
                }
            />
        );
    }
    ```
    - 화면을 왼쪽과 오른쪽으로 분할해서 보여주는 SplitPane 컴포넌트
    - App 컴포넌트에서 SplitPane 컴포넌트를 사용하고 있는데 여기에서 left, right라는 두 개의 props를 정의하여 그 안에 각각 다른 컴포넌트를 넣어주고 있음

