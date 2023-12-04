// Event Handler (이벤트 핸들러)
// 어떤 사건이 발생하면, 사건을 처리하는 역할을 하는 함수
// 이벤트가 발생하는 것을 계속 듣고 있는다는 의미로 'Event Listener'라고 부르기도 함


class Toggle extends React.Component {
    constructor(props){
        super(props);
        
        // boolean 함수 - isToggleOn
        this.state = { isToggleOn : true };

        // jsx - this 주의!
        // 바인드를 하는 이유 : 자바스크립트에서는 기본적으로 클래스 함수들이 바운드되지 않기 때문
        // 일반적으로 함수의 이름 뒤에 괄호 없이 사용하려면 무조건 해당 함수를 바인드 해줘야 함
        
        // callback에서 `this`를 사용하기 위해서는 바인딩을 필수로 해줘야 함
        // 정의된 handleClick 함수를 constructor에서 바인드를 이용하여 this.handleClick에 대입해줌
        this.handleClick = this.handleClick.bind(this);
    }

    // handleClick 함수 정의
    // 일반적인 함수를 정의하는 것과 동일하게 괄호와 중괄호를 사용하여 클래스의 함수로 정의함
    handleClick() {
        this.setState(preState => ({
            isToggleOn: !preState.isToggleOn
        })); 
    }

    // 버튼을 클릭하면 이벤트 핸들러 함수인 handleClick 함수를 호출
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? '켜짐' : '꺼짐'}
            </button>
        );
    }
}