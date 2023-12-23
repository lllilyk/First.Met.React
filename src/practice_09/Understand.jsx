import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "5px solid pink",
    },
    yes: {
        marginRight: 8,
    }
};

function Understand(props) {

    const { didUnderstand, onClickYes, onClickNo } = props;

    // console.log는 함수가 실행될 때마다 해당 함수 내에서 호출되면 출력됨
    // Understand 컴포넌트 함수가 호출되면 내부의 console.log도 실행되어 콘솔에 메시지를 출력함!
    console.log("렌더링될 결과 값 출력", didUnderstand); 

    // 컴포넌트 함수 호출 & 컴포넌트 렌더링
    // 컴포넌트 함수가 호출되면 해당 컴포넌트의 코드가 실행됨. 
    // 컴포넌트 렌더링은 컴포넌트의 UI를 화면에 표시하는 과정을 의미함. 
    // React는 컴포넌트가 렌더링되어야 할 때 해당 컴포넌트의 함수나 클래스를 호출하여 반환된 JSX를 실제 DOM에 반영함.
    // 즉, 컴포넌트의 함수가 호출되면 그 결과로 반환된 JSX가 렌더링되어 화면에 표시됨. 
    // 간단히 말하면,
    // 컴포넌트 함수는 컴포넌트의 코드를 실행하는 역할을 하고, 이 함수의 결과로 반환된 JSX가 실제로 화면에 렌더링되어 사용자에게 표시됨
    // 따라서, '함수 호출'은 컴포넌트의 로직을 실행하는 단계 / '렌더링'은 컴포넌트의 결과를 화면에 표시하는 단계!!!

    // 첫 번째 조건부 렌더링 결과가 False라면 그 부분은 렌더링 되지 않게 되고, 바로 두 번째 조건부 렌더링이 실행됨
    // return 문은 해당 컴포넌트의 JSX를 반환하는 역할
    // 이 반환된 JSX는 React에 의해 실제 DOM에 렌더링됨.
    return (
        <div style={styles.wrapper}>
            {didUnderstand && <span style={styles.yes}>YES I DID UNDERSTAND!!</span>}    

            {didUnderstand ? (
                <button onClick={onClickYes}>엉엉 이해가 안돼요</button>
            ) : (
                <button onClick={onClickNo}>히히 이해했어요</button>
            )}
        </div>
    );
}

export default Understand;