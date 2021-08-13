import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  const isValid = props.users.length === 0;
  const noUsersFoundText = (
    <h2 className={styles.nousertext}>No Users Found.</h2>
  );

  return (
    <Card className={styles.userslist_card}>
      {isValid && noUsersFoundText}

      <ul className={styles.users}>
        {props.users.map((user) => (
          <li className={styles.item} key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
