import { Button, Modal } from "react-bootstrap";
import { Form, Row, Col, Label, FormGroup, Input } from "reactstrap";
import React from "react";
import { useState } from "react";

export default function ModalLogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [emailIngresado, setEmailIngresado] = useState('');
const [passwordIngresada, setPasswordIngresada] = useState('');

const handleSubmit = (e) =>{
  e.preventDefault();
  
}

  return (
    <>
      <Button variant="primary" className="m-2" onClick={handleShow}>
        Ingresar
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ingresar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email"
                  onChange={(e)=>setEmailIngresado(e.target.value)}
                 />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="*****"
                    onChange={(e)=>setPasswordIngresada(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button>Sign in</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
