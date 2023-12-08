function Button(props) {
    return (
        <button className={`bg-${props.color}`}>
            <b>
                {props.children}
            </b>
        </button>
    )
}

// ConfirmDialog 컴포넌트가 Button 컴포넌트를 포함하고 있음
function ConfirmDialog(props){
    return (
        <div>
            <p>내용 확인하셨으면 확인 버튼을 클릭해주세요!</p>
            <button color='green'>확인!</button>
        </div>
    )
}

{
    type: 'div',
    props: {
        children: [
            {
                // div의 children 타입이 html 태그 중 하나인 p 태그임 -> 바로 렌더링 가능
                type: 'p',
                props: {
                    children: '내용 확인하셨으면 확인 버튼을 클릭해주세요!'
                }
            },
            {
                // div의 children 타입이 React component 이름인 Button
                // -> 이 경우에 React는 버튼 컴포넌트의 엘리먼트를 생성해서 합치게 됨
                type: Button,
                props: {
                    color: 'green',
                    children: '확인'
                }
            }
        ]
    }
}

// 최종본
// 컴포넌트 렌더링을 위해서 모든 컴포넌트가 CreateElement 함수를 통해 Element로 변환된다는 점! 기억하기!!!
{
    type: 'div',
    props: {
        children: [
            {
                type: 'p',
                props: {
                    children: '내용 확인하셨으면 확인 버튼을 클릭해주세요!'
                }
            },
            {
                type: 'button',
                props: {
                    className: 'bg-green',
                    children: {
                        type: 'b',
                        props: {
                            children: '확인'
                        }
                    }
                }
            }
        ]
    }
}