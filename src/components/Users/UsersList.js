import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((item) => (
          <li key={item.id}>
            {item.name} ({item.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;

//{props.users.map(item => <User name={item.userName} age={item.age}/>)}
