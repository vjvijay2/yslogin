import React, { useState } from "react";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // For showing the success message

  async function submit(e) {
    e.preventDefault();

    try {
      // Sending signup details to the backend
      await axios.post("http://localhost:8000/signup", {
        email,
        password
      })
        .then(res => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "notexist") {
            setMessage("User successfully registered! Redirecting to login..."); // Set success message
            setTimeout(() => {
              history("/", { state: { id: email } }); // Redirect to login after 2 seconds
            }, 2000);
          }
        })
        .catch(e => {
          alert("Error occurred while registering.");
          console.log(e);
        });

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login" >
      <h1 className="text-blue-300" >Signup</h1>

      {/* Show success message if the user is successfully registered */}
      {message && <p>{message}</p>}

      <form onSubmit={submit} >
        <input
          type="email"
          onChange={(e) => { setEmail(e.target.value) }}
          placeholder="Email"
          required
        />
        <input
          type="password"
          onChange={(e) => { setPassword(e.target.value) }}
          placeholder="Password"
          required
        />
        <input type="submit" value="Register" />
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to="/">Login Page</Link>
    </div>
  );
}

export default Login;
