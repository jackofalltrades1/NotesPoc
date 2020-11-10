import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { logoutAction } from '../../store/actions/login/LoginAction';

export default function Header() {
    var dispatch = useDispatch();

    var userDetails = useSelector(state => state.LoginReducer.userDetails);
    console.log(userDetails);

    const logout = () => {
        dispatch (logoutAction());
    }
    return (
        <Navbar expand="lg" variant="light" bg="light" >
            <Navbar.Brand href="#">Notes</Navbar.Brand>

            {userDetails.isAuth && <Nav className="">
                <Navbar.Text>
                    Hi <a href="#">{userDetails.username}</a>
                </Navbar.Text>                
                <Nav.Link eventKey={2} href="#" onClick={() => logout()}>
                    Logout
                </Nav.Link>
            </Nav>
            }
        </Navbar>
    );
}