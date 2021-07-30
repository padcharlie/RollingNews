import React, { useEffect, useState } from 'react'
import {Modal, Row } from 'react-bootstrap';

export default function Publicidad() {
    const [show, setShow] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
          setShow(true)
        }, 7000)
      }, [])

    return (
        <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
            >

                <Modal.Body closeButton>
                    <Row className="text-center justify-content-center">
                        <img src={process.env.PUBLIC_URL+"/images/publi2.jpg"} alt="Publicidad" className="img-fluid" />
                    </Row>
                </Modal.Body>
            </Modal>
    )
}
