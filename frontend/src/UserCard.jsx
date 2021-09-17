import React, { useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./UserCard.module.css"; // Import css modules stylesheet as styles
import "./UserCard.css";
import { Link } from "react-router-dom";

const UserCard = (props) => {
  const { id, firstname, lastname, role, location, avatar } = props.user;
  var img = null;
  if (avatar) {
    const avatarData = avatar.data;
    img = String.fromCharCode(...new Uint8Array(avatarData));
  }
  return (
    <Link to={{ pathname: "/details", state: props.user }}>
      <Card className={styles.cardStyle}>
        <Card.Img
          variant="top"
          src={`data:image/jpeg;base64,${img}`}
          className="imageSize"
        />
        <Card.Body>
          <Card.Title>
            {firstname} {lastname}
          </Card.Title>
          <Card.Text>
            Role: {role}
            <br />
            Location:{location}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
export default UserCard;
