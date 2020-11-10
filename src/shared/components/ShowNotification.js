import React from "react";
import { Toast } from "react-bootstrap";

export default function ShowNotification(props) {
    return (
        <Toast
            show={props.show}
            onClose={() => props.handleClose()}
            delay={3000}
            autohide
            style={{
                position: "absolute",
                top: 0,
                right: 0,
            }}
        >
            <Toast.Header>
                <strong className="mr-auto">{props.title}</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>{props.msg}</Toast.Body>
        </Toast>
    );
}
