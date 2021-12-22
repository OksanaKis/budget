import React, { useState } from "react";
import './Login.css';
import fire from "../../config/Fire";
import auth from "firebase/compat/auth";

function Login () {
    const [login, setLogin] = useState({
        email: '',
        password: '',
        fireErrors: ''
    });

    const loginHandleChange = (e) => {
        setLogin({
            ...login, [e.target.name]: e.target.value
        });
    }

    const logIn = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(login.email, login.password)
            .catch((error) => {
                console.log(error.message);
                setLogin({...login,fireErrors: error.message})
        })
    }

    return (
        <>
            {login.fireErrors ? (<div className="Error">{login.fireErrors}</div>) : null}
            <form>
                <input type="text"
                       className="regField"
                       placeholder="Email"
                       value={login.email}
                       onChange={loginHandleChange}
                       name="email"
                />
                <input type="password"
                       className="regField"
                       placeholder="Password"
                       value={login.password}
                       onChange={loginHandleChange}
                       name="password"
                />
                <input
                    onClick={logIn}
                    type="submit"
                    className="submitBtn"
                    value="ENTER"
                />
            </form>
        </>
    )
}

export default Login;