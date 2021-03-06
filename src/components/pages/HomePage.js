import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import HomePageForm from "../home page components/HomePageForm";
import HomePageAnnouncementList from "../home page components/HomePageAnnouncementList";

const HomePage = () => {
  return(
    <Container>
      <Row>
        <Col>
          <HomePageForm/>
        </Col>
        <Col>
          <HomePageAnnouncementList/>
        </Col>
      </Row>
    </Container>
  )
}
export default HomePage;