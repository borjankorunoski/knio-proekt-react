import React from "react";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import {users} from "../../Data/UserData"

//ova kje go stavam kako placeholder, ako dinamichki pretstavuvame user, kje go smenime so props
const user = users.map(user =>
    <ListGroup className="list-group-flush">
        <ListGroupItem>Име: {user.userFirstName}</ListGroupItem>
        <ListGroupItem>Презиме: {user.userLastName}</ListGroupItem>
        <ListGroupItem>E-mail: {user.userEmail}</ListGroupItem>
    </ListGroup>
);

const UserInfo = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" />
            <Card.Body>
                <Card.Title>Здраво!</Card.Title>
            </Card.Body>
            {user}
            <Card.Body>
                <Card.Link href="#">Измени резервација</Card.Link>
                <Card.Link href="#">Избриши резервација</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default UserInfo;