import React from "react";
import BookingList from "../profile page components/BookingList";
import UserInfo from "../profile page components/UserInfo";
import {Col, Row} from "react-bootstrap";

const ProfilePage = () => {
    return(
        <React.Fragment>
          <Row>
            <Col>
              <UserInfo/>
            </Col>
            <Col>
              <BookingList/>
            </Col>
          </Row>
        </React.Fragment>
    );
};

export default ProfilePage;