import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const Lobby = ({ joinRoom }) => {
  const [user, setUser] = useState();
  const [room, setRoom] = useState();

  return (
    <Form
      className="lobby"
      onSubmit={(e) => {
        e.preventDefault();
        joinRoom(user, room);
      }}
    >
      <Form.Group>
        <Form.Control
          placeholder="nombre"
          onChange={(e) => setUser(e.target.value)}
        />
        <Form.Control
          placeholder="sala"
          onChange={(e) => setRoom(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit" disabled={!user || !room}>
        Entrar
      </Button>
    </Form>
  );
};

export default Lobby;
