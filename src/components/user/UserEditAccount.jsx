// Library Imports
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

// Component Imports
import UserHeader from "./UserHeader";
import UserLogin from "./UserLogin";
import UserSignUp from "./UserSignUp";

// Context Imports
import { AllUsersContext } from "../../contexts/user/AllUsersContext";
import { CurrentUserContext } from "../../contexts/user/CurrentUserContext";

// Others
import "../../styles/stylesEditLoginSignUp.css";

const UserEditAccount = () => {
  const { allUsers, setAllUsers } = useContext(AllUsersContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const userFirstNameRef = useRef(null);
  const userLastNameRef = useRef(null);
  const userEmailRef = useRef(null);
  const userPasswordRef = useRef(null);

  let userAccountEdits = {};

  console.log(currentUser);
  console.log(allUsers);

  // Save Edits
  const handleSaveEdits = (event) => {
    event.preventDefault();

    userAccountEdits = {
      userID: "",
      userFirstName: userFirstNameRef.current.value,
      userLastName: userLastNameRef.current.value,
      userEmail: userEmailRef.current.value,
      userPassword: userPasswordRef.current.value,
    };

    const matchingUserAccount = currentUser.map((user) => {
      if (user.userPassword === userAccountEdits.userPassword) {
        alert("User account successfully updated");
        return {
          ...user,
          userFirstName: userAccountEdits.userFirstName,
          userLastName: userAccountEdits.userLastName,
          userEmail: userAccountEdits.userEmail,
        };
      } else {
        alert("Incorrect password");
      }

      return user;
    });

    // Remove the old details of the Current User from the List of All Users
    const retainedUsers = JSON.parse(
      localStorage.getItem("allUsers")
    ).filter((user) => {
      return user.userID !== currentUser[0].userID;
    });

    setAllUsers(retainedUsers);

    // Update the stored Current User with his/her new details
    setCurrentUser([...matchingUserAccount]);

    // Update the stored List of All Users, adding the new details of the Current User
    setAllUsers([...retainedUsers, matchingUserAccount[0]]);

    console.log(currentUser);
    console.log(allUsers);

    userFirstNameRef.current.value = null;
    userLastNameRef.current.value = null;
    userEmailRef.current.value = null;
    userPasswordRef.current.value = null;
  };

  return allUsers.length === 0 ? (
    <UserSignUp />
  ) : currentUser.length === 0 ? (
    <UserLogin />
  ) : (
    <div>
      <UserHeader />

      <form
        id="frmUserEditAccount"
        onSubmit={handleSaveEdits}>
        <h5 className="text-light text-center mb-4 px-5 opacity-50">
          Edit your account details
        </h5>

        <label htmlFor="userFirstName">First Name:</label>
        <input
          id="userFirstName"
          name="userFirstName"
          type="text"
          required
          placeholder="Enter updated First Name"
          className="form-control shadow-none"
          ref={userFirstNameRef}
        />

        <label htmlFor="userLastName">Last Name:</label>
        <input
          id="userLastName"
          name="userLastName"
          type="text"
          required
          placeholder="Enter updated Last Name"
          className="form-control shadow-none"
          ref={userLastNameRef}
        />

        <label htmlFor="userEmail">Email:</label>
        <input
          id="userEmail"
          name="userEmail"
          type="email"
          required
          placeholder="Enter updated Email Address"
          className="form-control shadow-none"
          ref={userEmailRef}
        />

        <label
          htmlFor="userPassword"
          className="text-secondary">
          For verification purposes, please enter your password below.
        </label>

        <input
          id="userPassword"
          name="userPassword"
          type="password"
          required
          className="form-control shadow-none"
          placeholder="Enter your password for verification"
          ref={userPasswordRef}
        />

        <div className="flexRowBetween">
          <button
            id="btnSave"
            type="submit"
            className="bg-primary text-light btn py-2">
            <FontAwesomeIcon icon={faCheck} />
            &nbsp;&nbsp;Save
          </button>

          <Link
            to="/"
            className="bg-tertiary text-light btn py-2">
            <FontAwesomeIcon icon={faXmark} />
            &nbsp;&nbsp;Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserEditAccount;
