import React from 'react';
import emailjs from 'emailjs-com'
import Form from 'react-bootstrap/Form'

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
        <Form className="container mt-3" onSubmit={sendConsulta}>
            <h2>Envíe su consulta, comentario, opinión, sugerencia...</h2>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" id='consulta'>
                <Form.Label>Ingrese su consulta</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
    );
};

export default ContacUs;