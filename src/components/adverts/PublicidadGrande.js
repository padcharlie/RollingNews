import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Modal } from "react-bootstrap";

export default function PublicidadGrande() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="modal-body">
          <img
            src={process.env.PUBLIC_URL + "/images/publicidad1.jpeg"}
            alt="Publicidad"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}
