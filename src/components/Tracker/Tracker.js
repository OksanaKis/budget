import React from "react";
import fire from "../../config/Fire";
import auth from "firebase/compat/auth";
import TrackerCss from "./TrackerCss.css";

function Tracker() {
    // logout button
    const logout = () => {
        fire.auth().signOut();
    }
    return (
        <>
            <button className="logOut" onClick={logout}>Logout</button>
        </>
    )
}

export default Tracker;