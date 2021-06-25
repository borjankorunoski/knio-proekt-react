import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return(
    <Form style={{border: '1px gray solid', borderRadius: '1rem', padding: '0.5rem'}}>
      <Form.Group controlId="name">
        <Form.Label>Име</Form.Label>
        <Form.Control type="text" name='name' value={name} placeholder="Внеси име" onChange={(event) => {setName(event.target.value)}}/>
      </Form.Group>

      <Form.Group controlId="surname">
        <Form.Label>Презиме</Form.Label>
        <Form.Control type="text" name='surname' value={surname} placeholder="Внеси презиме" onChange={(event) => {setSurname(event.target.value)}}/>
      </Form.Group>

      <Form.Group controlId="emailadd">
        <Form.Label>Електронска пошта</Form.Label>
        <Form.Control type="email" name='email' value={email} placeholder="Внеси валидна електронска пошта" onChange={(event) => {setEmail(event.target.value)}}/>
      </Form.Group>

      <Form.Group controlId="passcode">
        <Form.Label>Лозинка</Form.Label>
        <Form.Control type="password" name='password' value={password} onChange={(event) => {setPassword(event.target.value)}}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Регистрација
      </Button>
    </Form>
  );
}
export default RegisterForm;