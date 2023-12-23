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

    console.log("렌더링 결과 값 출력", didUnderstand);

    // 첫 번째 조건부 렌더링 결과가 False라면 그 부분은 렌더링 되지 않게 되고, 바로 두 번째 조건부 렌더링이 실행됨
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