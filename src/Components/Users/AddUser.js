import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const closeModalHandler = () => {
    setIsValid(true);
  };

  const ModalElement = (
    <Modal
      title={errorTitle}
      message={errorMessage}
      onConfirm={closeModalHandler}
    />
  );
  const submitFormHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorTitle("Invalid Values!");
      setErrorMessage(
        "Please enter valid values, Username or Age cannot be empty!"
      );
      setIsValid(false);
      return;
    }
    if (parseInt(enteredAge) < 1 || parseInt(enteredAge) >= 120) {
      setErrorTitle("Invalid Age!");
      setErrorMessage(
        "Please enter valid age, Age value must be greater than 0 and less than 120."
      );
      setIsValid(false);
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      {!isValid && ModalElement}
      <Card className={styles.form_user}>
        <form onSubmit={submitFormHandler}>
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />

          <label htmlFor="age">Age (in years) : </label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
