import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { AllUsersContext } from "../../contexts/user/AllUsersContext";
import { CurrentUserContext } from "../../contexts/user/CurrentUserContext";

import Home from "../../pages/user/Home";

const UserSignUp = () => {
  const userFirstNameRef = useRef(null);
  const userLastNameRef = useRef(null);
  const userEmailRef = useRef(null);
  const userPasswordRef = useRef(null);
  const userConfirmPasswordRef = useRef(null);

  const { allUsers, setAllUsers } = useContext(AllUsersContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  console.log(allUsers);

  console.log(currentUser);

  let matchingUserAccount = [];

  let isUserExisting = false;

  const handleUserSignUp = (event) => {
    event.preventDefault();

    if (
      userConfirmPasswordRef.current.value !==
      userPasswordRef.current.value
    ) {
      alert("Password and Confirm Password should match");
    } else {
      const tempUserAccount = {
        userID: Date.now(),
        userFirstName: userFirstNameRef.current.value,
        userLastName: userLastNameRef.current.value,
        userEmail: userEmailRef.current.value,
        userPassword: userPasswordRef.current.value,
        userConfirmPassword: userConfirmPasswordRef.current.value,
      };

      console.log(`Is User Existing?`, isUserExisting);

      console.log(`Temp User Account:\n`, tempUserAccount);

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
      });

      console.log(`Is User Existing?`, isUserExisting);

      if (isUserExisting) {
        alert("This email has already been used");
      } else {
        alert("User Account successfully created");

        setAllUsers([...allUsers, tempUserAccount]);

        setCurrentUser(Array(tempUserAccount));

        window.location.reload();
      }

      userFirstNameRef.current.value = null;
      userLastNameRef.current.value = null;
      userEmailRef.current.value = null;
      userPasswordRef.current.value = null;
      userConfirmPasswordRef.current.value = null;

      isUserExisting = false;
    }

    console.log(`Is User Existing?`, isUserExisting);
    console.log(`Current User Account:\n`, currentUser);
  };

  return allUsers.length > 0 && currentUser.length > 0 ? (
    <Home />
  ) : (
    <div>
      <form onSubmit={handleUserSignUp}>
        <label htmlFor="userFirstName">First Name:</label>
        <input
          id="userFirstName"
          name="userFirstName"
          type="text"
          required
          className="form-control"
          ref={userFirstNameRef}
        />

        <label htmlFor="userLastName">Last Name:</label>
        <input
          id="userLastName"
          name="userLastName"
          type="text"
          required
          className="form-control"
          ref={userLastNameRef}
        />

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

        <label htmlFor="userConfirmPassword">Confirm Password:</label>
        <input
          id="userConfirmPassword"
          name="userConfirmPassword"
          type="password"
          required
          className="form-control"
          ref={userConfirmPasswordRef}
        />

        <button
          id="userSignUp"
          type="submit"
          className="btn btn-success w-25">
          Sign Up
        </button>
      </form>

      <p className="m-0">Already have an account?</p>

      <Link
        to="/UserLogin"
        className="btn btn-primary w-25">
        Login
      </Link>
    </div>
  );
};

export default UserSignUp;
