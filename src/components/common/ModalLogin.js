import { Button, Modal } from "react-bootstrap";
import { Form, Row, Col, Label, FormGroup, Input } from "reactstrap";
import { useState, useEffect } from "react";
import { Swal } from "sweetalert2";
import { useHistory } from "react-router-dom";

export default function ModalLogin(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [emailIngresado, setEmailIngresado] = useState("");
  const [passwordIngresada, setPasswordIngresada] = useState("");
  
  const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailFound = props.admins.find(
      (admins) => admins.email === emailIngresado
    );
    const passwordFound = props.admins.find(
      (admins) => admins.password === passwordIngresada
    );
    if (emailFound && passwordFound) {
      const _user = props.admins.indexOf(
        props.admins.find((admins) => admins.email === emailIngresado) &&
          props.admins.find((admins) => admins.password === passwordIngresada)
      );
     
      props.setLoggedAdmin(props.admins[_user].name);
      localStorage.setItem("loggedAdmin", JSON.stringify(props.admins[_user].name));
      setShow(false);
      props.mostrarAdmin();

      history.push("/admin");
    } else {
      alert("El email o la contraseña ingresados son incorrectos");
    }
  };
 
  useEffect(() => {
    props.mostrarAdmin();
  },[]);


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
                    onChange={(e) => setEmailIngresado(e.target.value)}
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
                    onChange={(e) => setPasswordIngresada(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button type="submit">Sign in</Button>
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
