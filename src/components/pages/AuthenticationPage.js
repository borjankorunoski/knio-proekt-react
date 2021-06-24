import React from "react";
import LoginForm from "../authentication page components/LoginForm";
import RegisterForm from "../authentication page components/RegisterForm";
import {Col, Row} from "react-bootstrap";

const AuthenticationPage = () => {
  return(
    <Row>
      <Col>
        <LoginForm/>
      </Col>
      <Col>
        <RegisterForm/>
      </Col>
    </Row>
  )
}
export default AuthenticationPage;