import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ModalNotification(props) {    
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.msg}</Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={props.handleClose}>
                    Close
          </Button> */}
                <Button variant="primary" onClick={props.handleClose}>
                    Ok
          </Button>
            </Modal.Footer>
        </Modal>
    );
}