import Footer from "../components/global/Footer";
import Navigasi from "../components/global/Navigasi";
import email_icon from "../components/image/email.png";
import password_icon from "../components/image/password.png";
import "./Login.css";

export default function Login() {
    return(
        <div >
            <div className="App"><Navigasi/></div>
            <div className="container">
                <div className="header">
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={email_icon} alt=""/>
                        <input type={"email"} placeholder="Email"/>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt=""/>
                        <input type={"password"} placeholder="Password"/>
                    </div>
                </div>
                <div className="small-login-signup">Sign Up</div>
                <div className="submit-container">
                    <div className="submit">Login</div>
                </div>
            </div>

            <div className="App"><Footer/></div>
        </div>
    );
}

