import React from "react";

const Booking = (props) => {
    return (
        <React.Fragment>
            <th>{props.number}</th>
            <th>{props.location}</th>
            <th>{props.slot}</th>
            <th>{props.reservationDate}</th>
            <th>{props.dateCreated}</th>
        </React.Fragment>
    );
};

export default Booking;