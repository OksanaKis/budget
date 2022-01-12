import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import logo from "../../assets/icons8-budget-64.png";
import {AiFillHome} from "react-icons/ai";
import {GrTransaction} from "react-icons/gr";
import {AiFillAccountBook} from "react-icons/ai";
import {AiFillCreditCard} from "react-icons/ai";
import {BsFillFileBarGraphFill} from "react-icons/bs";
import {FaCalendarAlt} from "react-icons/fa";
import "../Pages/Calendar/Calendar.css";

const Navbar = ({show}) => {
    return (
        <>
            <div className={show ? 'sidenav active' : 'sidenav'}>
                <figure>
                <img src={logo} alt="Logo" className="logo"/>
                    <figcaption>Budget</figcaption>
                </figure>
                <ul>
                    <li>
                        <Link to="/"><AiFillHome/>Home</Link>
                    </li>
                    <li>
                        <Link to="/transactions"><GrTransaction/>Transactions</Link>
                    </li>
                    <li>
                        <Link to="/expenses"><AiFillAccountBook/>Expenses</Link>
                    </li>
                    <li>
                        <Link to="/cards"><AiFillCreditCard/>Cards</Link>
                    </li>
                    <li>
                        <Link to="/reports"><BsFillFileBarGraphFill/>Reports</Link>
                    </li>
                    <li>
                        <Link to="/calendar"><FaCalendarAlt/>Calendar</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;