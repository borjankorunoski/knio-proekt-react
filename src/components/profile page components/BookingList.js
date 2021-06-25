import React from "react";
import {bookings} from "../../Data/BookingData";
import {Table} from "react-bootstrap";
import Booking from "./Booking";

const bookingsList = bookings.map(booking =>
    <tr>
        <Booking
            number={booking.number}
            location={booking.location}
            slot={booking.slot}
            reservationDate={booking.reservationDate}
            dateCreated={booking.dateCreated}
            key={Math.random().toString()}
        />
    </tr>);

const BookingList = () => {
    return (
      <div>
        <h1>Твои резервации: </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Читална</th>
              <th>Термин</th>
              <th>Датум</th>
              <th>Резервација направена на:</th>
            </tr>
          </thead>
          <tbody>
            {bookingsList}
          </tbody>
        </Table>
      </div>
    );
};

export default BookingList;