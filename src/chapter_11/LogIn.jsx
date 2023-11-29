import React, {useState} from "react";

function LogIn(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmitButton = (event) => {
        alert(`이메일 : ${email}`);
        alert(`비밀번호 : ${password}`);
        event.preventDefault();
    };

    return(
        <form onSubmit={handleSubmitButton}>
            <div>
                <label htmlFor="email">이메일</label>
            </div> 
            <div>   
                <input type="email" value={email} onChange={handleChangeEmail} />
            </div>
            <div>
                <label htmlFor="password">비밀번호</label>
            </div>
            <div>    
                <input type="password" value={password} onChange={handleChangePassword} />
            </div>
            <button type="submit">로그인</button>
        </form>
    );
}

export default LogIn;