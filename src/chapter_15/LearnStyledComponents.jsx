// props
// styled-components에서 조건이나 동적으로 변하는 값을 사용해서 스타일링하기 위해 제공됨
// 리액트 컴포넌트의 props와 같은 의미로 이해하면 됨

import React from "react";
import styled from "styled-components";

const Button = styled.button`
    color: ${props => props.dark ? "white" : "dark"};
    background: ${props => props.dark ? "black" : "white"};
    border: 1px solid black;    
`;

function ButtonColor(props){
    return(
        <div>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
        </div>
    )
}

export default ButtonColor;