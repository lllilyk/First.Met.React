import React from "react";
import styled from "styled-components";

// Button 컴포넌트
// HTML의 Button tag를 기반으로 만들어진 단순 버튼
const Button = styled.button`
    color: grey;
    border: 2px solid palevioletred;
`;

// Button에 style이 추가된 RoundedButton 컴포넌트
// Button 컴포넌트가 괄호로 둘러싸인 채로 들어가 있는 형태(html tag 빠짐)
// 다른 컴포넌트(Button component)의 스타일을 확장해서 사용하는 방식!
const RoundedButton = styled(Button)`
    border-radius: 16px;
`;

function RoundedButtonStyle(props){
    return(
        <div>
            <Button>Normal</Button>
            <RoundedButton>Rounded</RoundedButton>
        </div>
    )
}

export default RoundedButtonStyle;