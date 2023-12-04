// arguments
// : Event Handler에 전달할 데이터(파라미터:매개변수)

// Class Component에서 사용하는 방식 - 지금은 거의 사용하지 않음
// 1. arrow function 사용
/*
<button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>

// 2. bind
<button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
*/


// Function Component에서 사용하는 방식 - arrow function을 사용하여 정의
/* const handleClick = () => {
    setIsToggleOn((isToggleOn) => !isToggleOn);
    }*/
function MyButton(props){
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    };

    return (
        <button onClick={(event) => handleDelete(1, event)}>
            삭제하기
        </button>
    );
}