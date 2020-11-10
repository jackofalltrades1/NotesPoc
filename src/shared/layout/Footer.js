import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

export default function Footer() {
    return (
        <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
            <p className="pull-left">Copyright @ Notes</p>
        </Navbar>
        );
}