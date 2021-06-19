import React from "react";
import {ListGroupItem} from "react-bootstrap";

const HomePageAnnouncement = (props) => {
  return(
    <ListGroupItem variant={props.variant||''}>
      {props.text}
    </ListGroupItem>
  )
}
export default HomePageAnnouncement;