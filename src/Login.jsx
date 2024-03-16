import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/userSlice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        dispatch(setUser(user.email)); 
        history.push("/");
      })
      .catch((error) => {
        setError(true);
        console.log(error.message); 
      });
  };

  return (
    <div className="sections-contact">
      <div className="contact-form">
        <h2>Login</h2>
        {error && <span>Passwords do not match!</span>}
        <form name="myform" action="#" method="POST" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
