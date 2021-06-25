import React from "react";
import {Card, ListGroup, ListGroupItem, Button} from "react-bootstrap";
import {users} from "../../Data/UserData"

//ova kje go stavam kako placeholder, ako dinamichki pretstavuvame user, kje go smenime so props
const user = users.map(user =>
    <ListGroup className="list-group-flush">
        <ListGroupItem><b>Име:</b> {user.userFirstName}</ListGroupItem>
        <ListGroupItem><b>Презиме:</b> {user.userLastName}</ListGroupItem>
        <ListGroupItem><b>Електронска пошта:</b> {user.userEmail}</ListGroupItem>
    </ListGroup>
);

const UserInfo = () => {
    return (
        <Card>
            <Card.Img variant="top" src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" />
            <Card.Body>
                <Card.Title>Здраво!</Card.Title>
            </Card.Body>
            {user}
            <Card.Body>
                <Button className='mr-3'>Измени резервација</Button>
                <Button variant='danger'>Избриши резервација</Button>
            </Card.Body>
        </Card>
    );
};

export default UserInfo;