// Library Imports
import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";

// Component Imports
import Home from "../../pages/user/Home";
// Context Imports
import { AllUsersContext } from "../../contexts/user/AllUsersContext";
import { CurrentUserContext } from "../../contexts/user/CurrentUserContext";

// Others
import "../../styles/stylesEditLoginSignUp.css";

const UserLogin = () => {
  const userEmailRef = useRef(null);
  const userPasswordRef = useRef(null);

  const { allUsers } = useContext(AllUsersContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  let matchingUserAccount = [];

  let isUserExisting = false;
  let isPasswordCorrect = false;

  const handleUserLogin = (event) => {
    event.preventDefault();

    const tempUserAccount = {
      userEmail: userEmailRef.current.value,
      userPassword: userPasswordRef.current.value,
    };

    matchingUserAccount = JSON.parse(
      localStorage.getItem("allUsers")
    ).filter((user) => {
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
      alert("No user account matches this email");
    } else {
      if (!isPasswordCorrect) {
        alert("Incorrect Password");
      } else {
        alert("Login successful");

        setCurrentUser(
          allUsers.filter((user) => {
            return user.userEmail === tempUserAccount.userEmail;
          })
        );

        window.location.reload();
      }
    }

    userEmailRef.current.value = null;
    userPasswordRef.current.value = null;

    isUserExisting = false;
    isPasswordCorrect = false;
  };

  return allUsers.length > 0 && currentUser.length > 0 ? (
    <Home />
  ) : (
    <div id="divUserLogin">
      <h5 className="text-light text-center mb-4 opacity-75">
        Sign in to your account
      </h5>

      <form
        id="frmUserLogin"
        className="bg-dark-midtone"
        onSubmit={handleUserLogin}>
        <label htmlFor="userEmail">Email:</label>
        <input
          id="userEmail"
          name="userEmail"
          type="email"
          required
          className="form-control shadow-none"
          ref={userEmailRef}
        />

        <label htmlFor="userPassword">Password:</label>
        <input
          id="userPassword"
          name="userPassword"
          type="password"
          required
          className="form-control shadow-none"
          ref={userPasswordRef}
        />

        <button
          id="btnUserLogin"
          type="submit"
          className="bg-primary text-light btn w-100">
          Login
        </button>
      </form>

      <div className="suggestLoginOrSignUp bg-dark-midtone flexRowCenter">
        <p className="opacity-50">
          Don't have an account yet?&nbsp;&nbsp;
        </p>

        <Link
          to="/UserSignUp"
          className="btnSignUp text-secondary text-decoration-none opacity-75">
          Sign Up
        </Link>
      </div>

      <div className="extraLinks flexRowAround">
        <a
          href="#!"
          className="text-primary text-decoration-none">
          <small>Terms of Use</small>
        </a>

        <a
          href="#!"
          className="text-primary text-decoration-none">
          <small>Privacy Policy</small>
        </a>

        <a
          href="#!"
          className="text-light text-decoration-none opacity-50">
          <small>Contact Support</small>
        </a>
      </div>
    </div>
  );
};

export default UserLogin;
