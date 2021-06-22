import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import HomePageAnnouncement from "./HomePageAnnouncement";
import {announcements} from "../../Data/Data";

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
          {announcements.map(announcement => 
              <HomePageAnnouncement text={announcement} />
          )}

        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <span className="float-right small text-muted">{today + " " + time}</span>
      </Card.Footer>
    </Card>
  )
}
export default HomePageAnnouncementList;