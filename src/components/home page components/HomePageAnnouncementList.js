import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import HomePageAnnouncement from "./HomePageAnnouncement";

const HomePageAnnouncementList = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  let HH = today.getHours();
  let MM = today.getMinutes();

  today = dd + '/' + mm + '/' + yyyy;
  let time = HH + ":" + MM;
  return(
    <Card className='mt-3'>
      <Card.Body>
        <Card.Title>
          Известувања
        </Card.Title>
        <ListGroup>
          <HomePageAnnouncement text="Итно известување" variant="danger"/>
          <HomePageAnnouncement text="Предупредување" variant="warning"/>
          <HomePageAnnouncement text="Информативно известување" variant="info"/>
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <span className="float-right small text-muted">{today + " " + time}</span>
      </Card.Footer>
    </Card>
  )
}
export default HomePageAnnouncementList;