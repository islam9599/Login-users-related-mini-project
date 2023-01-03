import React, { useState } from "react";
import Button from "../UI/Button.jsx";
import Card from "../UI/Card.jsx";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const addUser = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (+userAge < 1) {
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
  return (
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
        <Button type="submit">Add U ser</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
