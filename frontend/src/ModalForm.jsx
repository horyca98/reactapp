import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
const ModalForm = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [avatar, setAvatar] = useState(null);

  const loadFileToB64 = (file) =>
    new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsDataURL(avatar);
      reader.onloadend = async function () {
        const base64data = resolve(reader.result.split(",")[1]);
      };
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const avatarB64 = await loadFileToB64(avatar);
    console.log(avatarB64);
    const data = {
      firstname: firstname,
      lastname: lastname,
      role: role,
      location: location,
      avatar: avatarB64,
    };
    const res = await axios.post("/users/addUser", data);
    if (res.status == 200) {
      data["avatar"] = res.data.avatar;
      props.onHide();
      props.setUsers([...props.users, data]);
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" id="firstname" name="firstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" id="lastname" name="lastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastname(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" id="role">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" id="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formFileSm" className="mb-3" id="avatarimage">
            <div>
              <Form.Label>Avatar</Form.Label>
            </div>
            <Form.Control
              type="file"
              size="sm"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
