import React, { useState, useEffect } from "react";

function Counter(props){
    // const [변수명, set함수명] = useState(초기값); 
    const [count, setCount] = useState(0);

    // componentDidMount, componentDidUpdate와 비슷하게 작동
    // useEffect(이펙트 함수);
    // 의존성 배열을 생략하면 컴포넌트가 업데이트될 때마다 호출됨 
    useEffect(()=> {
        // 브라우저 API를 사용해서 document의 title을 업데이트
        document.title = `you clicked ${count} times`;
    });

    return ( 
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={()=> setCount(count + 1)}>
                클릭
            </button>
        </div>
    )
}