import { useRef, useState } from "react";
import "./Register.scss";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                    alt="logo" 
                    className="logo" 
                    />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime</h2>
                <p>
                    Ready tp watch? Enter your email to create your membership.
                </p>
                {
                    !email ? (
                        <div className="input">
                            <input type="email" placeholder="Email address" ref={emailRef} />
                            <button className="registerButton" onClick={handleStart}>Get Started</button>
                        </div>
                    ) : (
                        <div className="input">
                            <input type="password" placeholder="password" ref={passwordRef} />
                            <button className="registerButton" onClick={handleFinish}>Start</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Register;
