import React from 'react';
import emailjs from 'emailjs-com'
import {Button,Form} from 'react-bootstrap'

const ContacUs = () => {
    function sendConsulta(e) {
        e.preventDefault();

        emailjs.sendForm('service_xpq6501', 'template_qdsvzkb', e.target, 'user_VuOzu2MjCeCYYEbY56bbP')
            .then((result) => {
                alert('mensaje enviado');
            }, (error) => {
                alert('error al enviar el mensaje');
            });
        e.target.reset();
    }
    

    return (
        <Form onSubmit={sendConsulta}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" id='consulta'>
                <Form.Label>Ingrese su consulta</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="secondary" >
                  enviar
                </Button>
        </Form>
    );
};

export default ContacUs;