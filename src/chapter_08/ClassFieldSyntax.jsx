class MyButton extends React.Component {
    // Class Field Syntax를 사용하는 방법
    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        // 이벤트 핸들러를 넣는 곳에 Arrow Function을 사용하는 방법
        // 근데 MyButton 컴포넌트가 렌더링될 때마다 다른 콜백 함수가 생성되는 문제가 있음
        // 성능 문제를 피하기 위해서는 바인딩이나 class feild syntax를 사용하는 것을 권장!
        
        return (
            <button onClick={this.handleClick}>
                클릭
            </button>
        );
    }
}