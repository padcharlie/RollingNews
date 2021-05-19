import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Bannerclima from './Bannerclima';
import Cotizaciones from './Cotizaciones';

const Bannersuperior = () => {
    return (
        <Container className='py-2'>
            <Row>
                <Col md={5}>
            <Cotizaciones/>
            </Col>
            <Col md={{ span: 4, offset: 3 }}>
            <Bannerclima/>
            </Col>
            </Row>
        </Container>
    );
};

export default Bannersuperior;