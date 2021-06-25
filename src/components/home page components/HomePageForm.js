import React from "react";
import {Form, Button} from "react-bootstrap";
import {locations} from "../../Data/LocationsData";

const HomePageForm = () => {
  let options = locations.map(l => <option>{l.title}</option>)
  return(
    <Form className="mt-3">
      <Form.Group className="mb-3" controlId="dateFrom">
        <Form.Label>Од: </Form.Label>
        <Form.Control type="date" id="dateFrom" />
        <Form.Text className="text-muted">
          Внесете го почетниот датум на Вашата резервација.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="dateTo">
        <Form.Label>До: </Form.Label>
        <Form.Control type="date" id="dateTo" />
        <Form.Text className="text-muted">
          Внесете го крајниот датум на Вашата резервација.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="where">
        <Form.Label>Изберете Локација: </Form.Label>
        <Form.Control as="select">
          {options}
        </Form.Control>
        <Form.Text className="text-muted">
          Изберете ја читалната каде што сакате да резервирате место.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" className="float-right">
        Испрати
      </Button>
    </Form>
  )
}
export default HomePageForm;
