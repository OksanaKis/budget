import React, {Component, useState} from "react";
import './Login.css';

function Login () {
    const [login, setLogin] = useState({
        email: '',
        password: '',
        fireErrors: ''
    });
    return (
        <>
            <form>
                <input type="text"
                       className="regField"
                       placeholder="Email"
                       name="email"
                />
                <input type="password"
                       className="regField"
                       placeholder="Password"
                       name="password"
                />
                <input type="submit"
                       className="submitBtn"
                       value="ENTER"
                />
            </form>
        </>
    )
}

export default Login;