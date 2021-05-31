import { Button, Modal } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import React from 'react'
import { useState } from 'react';
import emailjs from 'emailjs-com'

export default function ModalSuscripcion() {

        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        function sendEmail(e) {
          e.preventDefault();
      
          emailjs.sendForm('service_xpq6501', 'template_c05titl', e.target, 'user_VuOzu2MjCeCYYEbY56bbP')
            .then((result) => {
                alert('mensaje enviado');
            }, (error) => {
                alert('error al enviar el mensaje');
            });
            e.target.reset();
        }

        return (
          <>
            <Button variant="primary" className="m-2" onClick={handleShow}>
              Suscribirse
            </Button>
      
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>¡Suscríbase a Rolling News!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form onSubmit={sendEmail}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="nombre">Nombre</Label>
            <Input required type="text" name="nombre" id="nombre" placeholder="Nombre" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="apellido">Apellido</Label>
            <Input required type="text" name="password" id="apellido" placeholder="Apellido" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input required type="email" name="email" id="email" placeholder="email@rollingnews.com"/>
      </FormGroup>
      <FormGroup>
        <Label for="direccion">Dirección</Label>
        <Input required type="text" name="direccion" id="direccion" placeholder="Calle 123"/>
      </FormGroup>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="localidad">Localidad</Label>
            <Input required type="text" name="localidad" id="localidad"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="postal">Código Postal</Label>
            <Input required type="number" name="postal" id="postal"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="tlf">Teléfono</Label>
            <Input required type="number" name="tlf" id="tlf"/>
          </FormGroup>  
        </Col>
      </Row>
      <FormGroup check>
        <Input required type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>He leído los términos y condiciones</Label>
      </FormGroup>
      <Button type="submit">Suscribirse</Button>
    </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )
}
