import styled from "styled-components";
// styled-components 라이브러리
// : 스타일을 정의한 컴포넌트를 만들어주는 역할
// styled.div는 element에 스타일을 적용한 새로운 컴포넌트를 생성함. 

// Wrapper와 Block은 styled-components 라이브러리를 사용하여 생성한 컴포넌트.
// 이 컴포넌트들은 각각 div 엘리먼트에 스타일을 적용한 것으로, 이렇게 생성된 컴포넌트는 jsx에서 일반적인 HTML element처럼 사용 가능
// Wrapper와 Block 컴포넌트를 사용하여 스타일이 적용된 div 엘리먼트들을 생성하고 화면에 렌더링함으로써,
// 코드의 가독성을 높이고, 재사용 가능한 스타일을 간편하게 정의 가능!!
const Wrapper = styled.div`
    padding: 1rem; 
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: lightgrey;
`;

// template literal과 함께 사용되어 해당 스타일 속성을 동적으로 설정할 수 있도록 함
// props는 컴포넌트에 전달된 속성을 의미
// 예를 들어, padding 속성이 부모 컴포넌트에서 전달되면 해당 값을 사용하여 패딩을 동적으로 설정함
// 아래의 코드에서 padding과 background-color는 동적으로 변경 가능
// 함수형 프로그래밍의 개념 중 하나인 화살표 함수(=>)를 사용하여 속성을 동적으로 설정하는 것이 특징
const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 1rem;
    background-color: ${(props) => props.backgroundColor};
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;
// ${} 안에 있는 부분은 JavaScript 코드를 삽입할 수 있는 template literal
// (props) => props.padding는 화살표 함수로, props를 매개변수로 받아서 props.padding값을 반환함
// padding: ${(props) => props.padding}; 은 최종적으로 해당 컴포넌트에 전달된 padding 속성값을 스타일로 전환함

const blockItems = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor: "red",
    },
    {
        label: "2",
        padding: "3rem",
        backgroundColor: "green",
    },
    {
        label: "3",
        padding: "2rem",
        backgroundColor: "blue",
    },
];

function Blocks(props){
    return(
        <Wrapper>
            {blockItems.map((blockItem) => {
                return (
                    <Block
                        padding={blockItem.padding}
                        backgroundColor={blockItem.backgroundColor}
                    >
                        {blockItem.label}
                    </Block>
                );
            })}
        </Wrapper>
    );
}

export default Blocks;