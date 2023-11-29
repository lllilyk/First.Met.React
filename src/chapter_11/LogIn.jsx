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
        event.preventDefault();
    };

    return(
        <form onSubmit={handleSubmitButton}>
            <label>
                이메일 :
                <input type="email" value={email} onChange={handleChangeEmail} />
            </label>
            <label>
                비밀번호 :
                <input type="password" value={password} onChange={handleChangePassword} />
            </label>
            <button type="submit">로그인</button>
        </form>
    );
}

export default LogIn;