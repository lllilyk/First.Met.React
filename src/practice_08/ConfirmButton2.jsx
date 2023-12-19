import React from "react";

// Class fields syntax 사용하여 클릭 이벤트 처리하기

class ConfirmButton2 extends React.Component {
    constructor(props) {
        super(props);
        
        // 확인 여부를 저장하기 위해 state에 isConfirmed라는 변수를 하나 가지고 있음
        // 초기값은 false
        this.state = {
            isConfirmed: false,
        };

        // this.handleConfirm = this.handleConfirm.bind(this);
    }

    // event handler를 정의하는 부분(Arrow Function으로 변경)
    //handleConfirm() {
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button 
                // 버튼의 onClick 이벤트를 처리
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>    
        );
    }

}

export default ConfirmButton2;