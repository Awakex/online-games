import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";
import {ROUTES} from "../../routes/routes";
import {useNavigate} from "react-router-dom";
import {APP_NAME} from "../../config/app";
import wsRoom from "../../store/ws-room-lobby";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    let navigate = useNavigate();
    return (
        <Navbar bg="secondary" variant="dark" style={{height: 50}}>
            <Container>
                <Navbar.Brand href="#" onClick={() => navigate(ROUTES.LOBBY)}>
                    {APP_NAME}
                </Navbar.Brand>
                <Navbar.Toggle />
                <Nav className="me-auto">
                    <Nav.Link href="#" onClick={() => navigate(ROUTES.LOBBY)}>
                        Лобби
                    </Nav.Link>
                </Nav>

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {wsRoom.isConnected ? `Онлайн: ${wsRoom.onlineUsers?.length}` : "Оффлайн"}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

NavBar.propTypes = {};

export default NavBar;
