import React, { useState, useEffect } from "react";

function MovieCard(props) {
    // visibleCards라는 상태를 선언 : 현재 화면에 보이는 카드의 개수 관리
    const [visibleCards, setVisibleCards] = useState(0);
    
    // useEffect(이펙트 함수, 의존성 배열);
    // 기본적으로 이펙트 함수는 처음 컴포넌트가 렌더링 된 이후와 업데이트로 인한 재렌더링 이후에 실행됨
    useEffect(() => {
        // React.Childeren.count : React에서 제공하는 유틸리티 함수
        // 주어진 'children' prop의 자식 요소의 수를 반환함
        const cardCount = React.Children.count(props.children) //여기서는 3 반환.
        
        // setInterval : 일정 시간 간격으로 지정된 코드를 실행
        // 마운트 시('componentDidMount'에 해당)
        // : 컴포넌트가 처음으로 화면에 렌더링될 때(마운트될 때) useEffect 내부 코드가 실행됨
        //   setInterval이 시작되어 10초마다 visibleCards 값을 증가시키는 로직이 동작.
        const timer = setInterval(() => {
            setVisibleCards(prevVisibleCards => {
                if (prevVisibleCards < cardCount) {
                    return prevVisibleCards + 1;
                } else {
                    clearInterval(timer);
                    return prevVisibleCards;
                }
            });
        }, 10000);
        
        // 언마운트 시('componentWillUnmount'에 해당)
        // : 컴포넌트가 화면에서 사라질 때(언마운트될 때) useEffect 내부에서 반환하는 cleanUp 함수가 실행됨
        //   이 cleanUp 함수는 setInterval을 종료하는 clearInterval을 호출하여 setInterval의 동작을 멈춤.
        return () => clearInterval(timer);
    }, [props.children]);

    // useEffect와 setInterval 조합 사용
    // : 컴포넌트가 화면에 처음으로 렌더링 될 때부터 일정한 시간 간격으로 지정된 코드가 실행되며, 컴포넌트가 화면에서 사라질 때 해당 코드의 동작을 중지할 수 있음
    return (
        <div>
            {React.Children.map(props.children, (child, index) => {
                if (index < visibleCards) {
                    return child;
                }
                return null;
            })}
        </div>
    );
}
// React.Children.map 메서드는 child와 index 두 개의 파라미터를 받는 콜백 함수를 사용함.
// props.children의 각 자식 요소를 순회하며, child는 각 카드 컴포넌트를 나타냄
// index는 현재 순회 중인 child의 인덱스를 나타냄

export default MovieCard;