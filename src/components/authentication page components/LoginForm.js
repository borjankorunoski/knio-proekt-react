import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <Form>
      <Form.Group controlId="email">
        <Form.Label>Електронска пошта</Form.Label>
        <Form.Control type="email" name='email' value={email} placeholder="Внеси е-мејл" onChange={(event) => {setEmail(event.target.value)}}/>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={password} placeholder="Password" onChange={(event) => {setPassword(event.target.value)}}/>
      </Form.Group>

      <Button variant="success" type="submit">
        Login
      </Button>
    </Form>
  );
}
export default LoginForm;