import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './forms/Login';
import Register from "./forms/Register";
import fire from "../config/Fire";
import auth from "firebase/compat/auth";
import Tracker from "./Tracker/Tracker";
import Spinner from '../assets/loader.gif';
import Navbar from "./Navbar/Navbar";
import {GiHamburgerMenu} from "react-icons/gi";
import "./Main.css";
import Home from "./Pages/Home/Home";
import Transactions from "./Pages/Transactions/Transactions";
import Expenses from "./Pages/Planned_Expenses/Expenses";
import Cards from "./Pages/Cards/Cards";
import Reports from "./Pages/Reports/Reports";
import Calendar from "./Pages/Calendar/Calendar";

function Main() {
    const [main, setMain] = useState({
        user: 1,
        loading: true,
        formSwitcher: false
    })

    const [showNav, setShowNav] = useState(false);
    console.log(showNav);

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
                (<>
                        {/*<header>*/}
                        {/*    <GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>*/}
                        {/*</header>*/}
                        {/*<Navbar show={showNav}/>*/}
                        {/*<Tracker/>*/}
                        <Router>
                            <header>
                                <GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>
                            </header>
                            <Navbar show={showNav}/>
                            <Tracker/>
                            <Routes>
                                <Route exact path="/" element={<Home show={showNav}/>}/>
                                <Route path="/transactions" element={<Transactions show={showNav}/>}/>
                                <Route path="/expenses" element={<Expenses show={showNav}/>}/>
                                <Route path="/cards" element={<Cards show={showNav}/>}/>
                                <Route path="/reports" element={<Reports show={showNav}/>}/>
                                <Route path="/calendar" element={<Calendar show={showNav}/>}/>
                            </Routes>
                        </Router>
                    </>
                )
            }
        </>
    )
}

export default Main;