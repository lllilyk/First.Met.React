import React from "react";
import styled from 'styled-components';

// styled-components
// styled-components는 tagged template literal을 사용하여 CSS 속성이 적용된 React 컴포넌트를 만들어 줌
// template literal : literal을 템플릿 형태로 사용하는 javascript의 문법
// 백틱스를 사용하여 문자열을 작성하고, 그 안에 대체가능한 expression(Substitution)을 넣는 방법

// tagged template literal 
// 1. untagged template literal
// 2. tagged template literal
 
// literal : 프로그래밍에서 literal은 소스코드에 고정된 값을 의미함 (상수와는 다른 개념)
// ex) let number = 20; (여기에서 정수 20이 바로 literal임)

const Wrapper = styled.div`
    padding: 1em;
    background: grey;
`;

const Title = styled.h1`
    font-size: 1.5em;
    color: white;
    text-align: center;
`;

function MainPage(props){
    return (
        <Wrapper>
            <Title>
                안녕, 리액트!
            </Title>
        </Wrapper>
    )
}

export default MainPage;