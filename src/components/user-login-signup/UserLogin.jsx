import React, { useRef } from "react";
import { Link } from "react-router-dom";

import Home from "../../pages/Home";

const UserLogin = () => {
  const userEmailRef = useRef(null);
  const userPasswordRef = useRef(null);

  const allUserAccounts = localStorage.getItem("allUserAccounts")
    ? JSON.parse(localStorage.getItem("allUserAccounts"))
    : [];

  let currentUserAccount = localStorage.getItem("currentUserAccount")
    ? JSON.parse(localStorage.getItem("currentUserAccount"))
    : {};

  let matchingUserAccount = [];

  let isUserExisting = false;
  let isPasswordCorrect = false;

  const handleUserLogin = (event) => {
    event.preventDefault();

    const tempUserAccount = {
      userEmail: userEmailRef.current.value,
      userPassword: userPasswordRef.current.value,
    };

    console.log(allUserAccounts);

    matchingUserAccount = allUserAccounts.filter((user) => {
      return user.userEmail === tempUserAccount.userEmail;
    });

    matchingUserAccount.forEach((user) => {
      if (user.userEmail === tempUserAccount.userEmail) {
        isUserExisting = true;
      } else {
        isUserExisting = false;
      }

      if (user.userPassword === tempUserAccount.userPassword) {
        isPasswordCorrect = true;
      } else {
        isPasswordCorrect = false;
      }
    });

    console.log(matchingUserAccount);
    console.log(isUserExisting);
    console.log(isPasswordCorrect);

    if (!isUserExisting) {
      alert("No account matches this email");
    } else {
      if (!isPasswordCorrect) {
        alert("Incorrect Password");
      } else {
        alert("Login successful");

        currentUserAccount = allUserAccounts.filter((user) => {
          return user.userEmail === tempUserAccount.userEmail;
        });

        localStorage.setItem(
          "currentUserAccount",
          JSON.stringify(currentUserAccount)
        );

        window.location.reload();
      }
    }

    userEmailRef.current.value = null;
    userPasswordRef.current.value = null;

    isUserExisting = false;
    isPasswordCorrect = false;
  };

  return localStorage.getItem("currentUserAccount") ? (
    <Home currentUserAccount={currentUserAccount} />
  ) : (
    <div>
      <form onSubmit={handleUserLogin}>
        <label htmlFor="userEmail">Email:</label>
        <input
          id="userEmail"
          name="userEmail"
          type="email"
          required
          className="form-control"
          ref={userEmailRef}
        />

        <label htmlFor="userPassword">Password:</label>
        <input
          id="userPassword"
          name="userPassword"
          type="password"
          required
          className="form-control"
          ref={userPasswordRef}
        />

        <button
          id="userLogin"
          type="submit"
          className="btn btn-primary w-25">
          Login
        </button>
      </form>

      <p className="m-0">Don't have an account yet?</p>

      <Link
        to="/UserSignUp"
        className="btn btn-success w-25">
        Sign Up
      </Link>
    </div>
  );
};

export default UserLogin;
