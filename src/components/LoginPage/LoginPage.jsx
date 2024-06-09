import React, { useState } from "react";
import "./LoginPage.css";
import { users, admins } from "../../data";
import Page from "../Page";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const validation = () => {
  //   if (isRegistered) {
  //     alert("Match!");
  //   } else {
  //     alert("Email and Password don't match");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    users.map((user) => {
      if (user.email === email && user.password === password) {
        setIsRegistered(true);
      }
    });
    // validation();
  };

  if (isRegistered) {
    return <Page />;
  }
  return (
    <section className="form-container">
      <h1>Welcome to Voting App!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default LoginPage;
