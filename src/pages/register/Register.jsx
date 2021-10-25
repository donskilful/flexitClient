import "./register.scss";
import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useAlert from "../../hooks/useAlert";
import { BASE_URL } from "../../config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const {showSuccess, showError} = useAlert()

  const handleRegister = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setEmail(emailRef.current.value);
    try {
      await axios.post(BASE_URL + "auth/register", { email, password });
      showSuccess("Registered Sucessfully")
      history.push("/login");
    } catch ({ response }) {
      let message = response?.data
      if (Array.isArray(message)) {
        message = message[0]
      } else {
        message = response?.data?.message
      }
      showError(message ?? "Some error occured")
    }
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://firebasestorage.googleapis.com/v0/b/netflix-1fe6a.appspot.com/o/items%2F1635072735141imgSmlogo.png?alt=media&token=bb76835f-f3cd-42ae-a70b-7241839865ee"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign up</h1>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
          />
          <button className="loginButton" onClick={handleRegister} >
            Sign up
          </button>
          <span>
            Already a member? 
            <Link style={{marginLeft: "10px", textDecoration: "none"}} to="/login">
              <b>Sign in.</b>
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
