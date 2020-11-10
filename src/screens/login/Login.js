import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Form, Button } from 'react-bootstrap';
import ModalNotification from '../../shared/components/ModalNotification';
import { loginAction } from "../../store/actions/login/LoginAction";
import validateLoginService from '../../service/UserAuthenticationService';

export default function Login(props) {
    const dispatch = useDispatch();

    const [formValidated, setFormValidated] = useState(false);
    const [objLogin, setObjLogin] = useState({
        email: '',
        password: ''
    });
    const [objAlert, setObjAlert] = useState({
        show: false,
        title: "",
        msg: "",
    });

    const submitDetails = async (event) => {
        debugger;
        event.preventDefault();
        setFormValidated(true);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            var objResponse = await validateLoginService(objLogin);

            if (objResponse.isAuth) {
                setObjAlert({
                    ...objAlert,
                    show: true,
                    msg: "Logged in successfully",
                    title: "Success",
                    returnUrl: "/Notes"
                });
                dispatch(loginAction(objResponse));
            } else {
                setObjAlert({
                    ...objAlert,
                    show: true,
                    msg: "Invalid credentials",
                    title: "Login Failed",
                    returnUrl: ""
                });
            }
        }
        event.preventDefault();
    };

    return (
        <div className="login-form">
            <Row>
                <Col md={12}>
                    <h2>Login</h2>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Form
                        noValidate
                        validated={formValidated}
                        onSubmit={submitDetails}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="User name"
                                value={objLogin.email}
                                required
                                min={3}
                                onChange={(e) => {
                                    if (!formValidated)
                                        setFormValidated(true);
                                    setObjLogin({ ...objLogin, email: e.target.value });
                                }}
                            ></Form.Control>
                            <Form.Text className="text-muted">
                                Email : any email address
    </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                Please enter valid email address
            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                value={objLogin.password}
                                required
                                minLength="3"
                                onChange={(e) => {
                                    setObjLogin({ ...objLogin, password: e.target.value });
                                }} />
                            <Form.Text className="text-muted">
                                Password : 123
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                Please enter your valid password
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 8 }}>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            {/* <ShowNotification
                show={objAlert.show}
                title={objAlert.title}
                msg={objAlert.msg}
                handleClose={() => {                    
                    setObjAlert({ ...objAlert, show: false });
                }}
            /> */}

            <ModalNotification
                show={objAlert.show}
                title={objAlert.title}
                msg={objAlert.msg}
                handleClose={() => {
                    setObjAlert({ ...objAlert, show: false })
                    debugger;
                    if (objAlert.returnUrl !== "") {
                        props.history.push(objAlert.returnUrl);
                    }
                }}
            />
        </div>
    );
}
