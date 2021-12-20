import React, {useState} from "react";
import './Login.css';
import fire from "../../config/Fire";

function Register () {
    const [register, setRegister] = useState({
        email: '',
        password: '',
        displayName: '',
        fireErrors: ''
    });

    function handleChange (e) {
        setRegister({
           ...register, [e.target.name]: e.target.value
        });
    }

    function handleRegister (e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(register.email, register.password)
            .then((user) => {
                console.log(user);
            // var currentUser = fire.auth().currentUser;
            // currentUser.updateProfile({
            //     displayName: register.displayName
            // })
        })
            .catch((error) => {
            console.log(error.message);
            setRegister({fireErrors: error.message})
        })
    }

    return (
        <>
            <form>
                <input type="text"
                       className="regField"
                       placeholder="Your Name"
                       onChange={handleChange}
                       value={register.displayName}
                       name="displayName"
                />
                <input type="text"
                       className="regField"
                       placeholder="Email"
                       onChange={handleChange}
                       value={register.email}
                       name="email"
                />
                <input type="password"
                       className="regField"
                       placeholder="Password"
                       onChange={handleChange}
                       value={register.password}
                       name="password"
                />
                <input type="submit"
                       className="submitBtn"
                       value="REGISTER"
                       onClick={handleRegister}
                />
            </form>
        </>
    )
}

export default Register;