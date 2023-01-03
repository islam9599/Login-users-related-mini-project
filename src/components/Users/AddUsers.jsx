import React from "react";
import Button from "../UI/Button.jsx";
import Card from "../UI/Card.jsx";
import classes from "./AddUsers.module.css";

const AddUsers = () => {
  const addUser = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form action="" onSubmit={addUser}>
        <label htmlFor=" username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <Button type="submit">Add U ser</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
