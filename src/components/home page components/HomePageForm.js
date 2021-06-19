import React from "react";
import {Form, Button} from "react-bootstrap";

const HomePageForm = () => {
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
          <option value='1'>Локација 1</option>
          <option value='2'>Локација 2</option>
          <option value='3'>Локација 3</option>
        </Form.Control>
        <Form.Text className="text-muted">
          Изберете ја читалната каде што сакате да резервирате место.
        </Form.Text>
      </Form.Group>

      <Button variant="outline-primary" type="submit" className="float-right">
        Submit
      </Button>
    </Form>
  )
}
export default HomePageForm;
