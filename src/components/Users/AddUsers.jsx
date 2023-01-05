import React, { useState } from "react";
import Button from "../UI/Button.jsx";
import Card from "../UI/Card.jsx";
import ErrorModal from "../UI/ErrorModal.jsx";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();
  const addUser = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values). ",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid  age (>0). ",
      });
      return;
    }
    props.onAddUser(userName, userAge);
    setUserName("");
    setUserAge("");
  };
  const userNameChange = (event) => {
    setUserName(event.target.value);
  };
  const userAgeChange = (event) => {
    setUserAge(event.target.value);
  };
  const onError = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onError}
        />
      )}
      <Card className={classes.input}>
        <form action="" onSubmit={addUser}>
          <label htmlFor=" username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameChange}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={userAge}
            onChange={userAgeChange}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
