import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useHistory , Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/userSlice";

const SignUp = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError(true);
      return;
    }

    dispatch(setUser(username));

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  return (
    <div className="sections-contact">
      <div className="contact-form">
        <h2>Sign Up</h2>
        {error && <span>Passwords do not match!</span>}
        <form name="myform" action="#" method="POST" onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="email">Username:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div>
          <p>Do you have an account? <Link to="/login">Log in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
