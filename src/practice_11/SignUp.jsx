import React, { useState } from "react";

function SignUp(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    // 백틱(`)
    // Template Literal을 사용하기 위함
    // : ES6(ECMAScript 2015)에서 도입된 문자열 표현 방식

    // 백틱을 사용하면 다음과 같은 기능들 활용 가능
    // 1. 문자열 내에 변수 삽입
    // :  `${variableName}` 형태로 변수를 문자열 내에 삽입 가능
    
    // 2. 멀티라인 문자열
    // : 개행 문자(\n)를 사용하지 않고도 여러 줄의 문자열 삽입 가능(백틱 내)

    // 3. 기존의 문자열과 결합
    // const greeting = "안녕? ";
    // const name = "교동";
    // const message = `${greeting}${name}아! 오늘 기분은 어때~?`;

    // console.log(message); // 안녕? 교동아! 오늘 기분은 어때~?
    
    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름: 
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default SignUp;