import React, {useEffect, useState} from "react";
import './Main.css';
import Login from './forms/Login';
import Register from "./forms/Register";
import fire from "../config/Fire";
import auth from "firebase/compat/auth";
import Tracker from "./Tracker/Tracker";
import Spinner from '../assets/loader.gif';

function Main() {
    const [main, setMain] = useState({
        user: 1,
        loading: true,
        formSwitcher: false
    })

    useEffect(() => {
        authListener();
    }, []);

    function authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                setMain({user: user});
            } else {
                setMain({user: null})
            }
        });
    }


    function switchForm(action) {
        console.log(action);
        setMain({
            formSwitcher: action === 'register' ? true : false
        })
    }

    const form = !main.formSwitcher ? <Login/> : <Register/>;
    if (main.user === 1) {
        return <div className="mainBlock">
            <div className="Spinner">
                <img src={Spinner} alt="Spinner" className="ImgSpinner"/>
            </div>
        </div>
    }

    return (
        <>
            {!main.user
                ?
                (<div className="mainBlock">
                    {form}
                    {!main.formSwitcher
                        ?
                        (<span className="underLine">
                    Not Registered? <button onClick={() => {
                            switchForm(!main.formSwitcher ? 'register' : 'login')
                        }} className="linkBtn">Create an account</button>
                    </span>)
                        :
                        (<span className="underLine">
                   Have an account? <button onClick={() => {
                            switchForm(!main.formSwitcher ? 'register' : 'login')
                        }} className="linkBtn">Sign in here</button>
                    </span>)
                    }
                </div>)
                :
                (<Tracker/>)
            }
        </>
    )
}

export default Main;