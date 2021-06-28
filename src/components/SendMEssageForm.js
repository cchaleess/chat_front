import React, { useState } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";

const SendMessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(message);
        setMessage("");
      }}
    >
      <InputGroup>
        <FormControl
          type="user"
          placeholder="mensaje..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <InputGroup.Append>
          <Button variant="primary" type="submit" disabled={!message}>
            Enviar
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default SendMessageForm;
