import React, {useState} from "react";
import './Main.css';
import Login from './forms/Login';
import Register from "./forms/Register";

function Main() {
    const [main, setMain] = useState({
        user: 1,
        loading: true,
        formSwitcher: false
    })


    function switchForm(action) {
        console.log(action);
        setMain({
            formSwitcher: action === 'register' ? true : false
        })
    }

    const form = !main.formSwitcher ? <Login /> : <Register />;

    return (
        <>
            <div className="mainBlock">
                {form}
                {!main.formSwitcher
                    ?
                    ( <span className="underLine">
                    Not Registered? <button onClick={() => {switchForm(!main.formSwitcher ? 'register' : 'login')}} className="linkBtn">Create an account</button>
                    </span>)
                    :
                    (<span className="underLine">
                   Have an account? <button onClick={() => {switchForm(!main.formSwitcher ? 'register' : 'login')}} className="linkBtn">Sign in here</button>
                    </span>)
                }
            </div>
        </>
    )
}

export default Main;