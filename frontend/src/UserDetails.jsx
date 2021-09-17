import React from "react";
import { Card } from "react-bootstrap";
import styles from './UserDetails.module.css'; // Import css modules stylesheet as styles
import "./UserCard.css";
const UserDetails = (props) => {
  // can also retrieve details from url query via server
  if (!props.location.state) return null;
  let details = props.location.state;
  const avatar = details.avatar;
  var img;
  if (avatar) {
    const avatarData = avatar.data;
    img = String.fromCharCode(...new Uint8Array(avatarData));
  }
  return (
    <Card className={styles.cardStyle}>
      <Card.Img
        variant="top"
        src={`data:image/jpeg;base64,${img}`}
        className="imageSize"
      />
      <Card.Body>
        <Card.Title>
          {details.firstname} {details.lastname}
        </Card.Title>
        <Card.Text>
          Role: {details.role}
          <br />
          Location:{details.location}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default UserDetails;
