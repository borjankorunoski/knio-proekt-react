import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <Form style={{border: '1px gray solid', borderRadius: '1rem', padding: '0.5rem'}}>
      <Form.Group controlId="email">
        <Form.Label>Електронска пошта</Form.Label>
        <Form.Control type="email" name='email' value={email} placeholder="Внеси валидна електронска пошта" onChange={(event) => {setEmail(event.target.value)}}/>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Лозинка</Form.Label>
        <Form.Control type="password" name='password' value={password} onChange={(event) => {setPassword(event.target.value)}}/>
      </Form.Group>

      <Button variant="success" type="submit">
        Испрати
      </Button>
    </Form>
  );
}
export default LoginForm;