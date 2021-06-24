import React from "react";
import {Card} from 'react-bootstrap';

const LocationsCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imageURL} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <p>Работно време: {props.workingHours}</p>
                    <p>Адреса: {props.address}</p>

                </Card.Text>
            </Card.Body>
        </Card>
    );
};
export default LocationsCard;