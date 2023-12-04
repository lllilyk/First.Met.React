import React from "react";

// Class Component

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        // 확인 여부를 저장하기 위해 state의 isConfirmed라는 변수를 하나 가지고 있음, 초기값은 false
        // '확인하기' 버튼을 누르면 isConfirmed값이 true로 바뀌면서 텍스트가 '확인됨'으로 변하며 버튼이 비활성화 됨.
        this.state = {
            isConfirmed: false,
        };

        // bind를 사용하는 방식으로 이벤트 핸들러 처리
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    // 버튼의 onClick 이벤트를 처리하기 위해서 이벤트 핸들러로 handleConfirm이라는 함수를 만들어서 넣어줌. 
    handleConfirm() {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;