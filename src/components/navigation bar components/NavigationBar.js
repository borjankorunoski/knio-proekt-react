import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import Link from "./Link";
const NavigationBar = () => {
  return(
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Моја Читална</Navbar.Brand>
      <Nav className="mr-auto">
        <Link href='/'>
          <Nav.Link href='/'>Почетна страна</Nav.Link>
        </Link>
        <Link href="/profile">
          <Nav.Link href="/profile">Профил</Nav.Link>
        </Link>
        <Link href="/locations">
          <Nav.Link href="/locations">Локации</Nav.Link>
        </Link>
        <Link href="/login">
          <Nav.Link href="/login">Најава/Регистрација</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  )
}
export default NavigationBar;