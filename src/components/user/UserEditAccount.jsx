import React, { useContext, useRef } from "react";
import UserLogin from "./UserLogin";
import { AllUsersContext } from "../../contexts/user/AllUsersContext";
import { CurrentUserContext } from "../../contexts/user/CurrentUserContext";

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

    // Update the stored Current User with their new details
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

  return allUsers.length === 0 && currentUser.length === 0 ? (
    <UserLogin />
  ) : (
    <div>
      <h1>User Edit Account</h1>

      <form onSubmit={handleSaveEdits}>
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

        <p className="text-danger">
          For verification purposes, please enter your password.
        </p>

        <input
          id="userPassword"
          name="userPassword"
          type="password"
          required
          className="form-control"
          placeholder="Enter your password for verification"
          ref={userPasswordRef}
        />

        <button
          id="btnSave"
          type="submit"
          className="btn btn-info w-25">
          Save
        </button>
      </form>
    </div>
  );
};

export default UserEditAccount;
