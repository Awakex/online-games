import React from "react";
import styles from "./styles.module.sass";
import Card from "../../entries/card/card";
import {Col, Container, Row} from "react-bootstrap";
import {GAME_MODES} from "../../config/app";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../routes/routes";

const LobbyPage = () => {
    let navigate = useNavigate();
    return (
        <Container>
            <h2 className={styles.title}>Лобби</h2>

            <Row className={styles.modes}>
                {GAME_MODES.map((mode) => (
                    <Col key={mode.id} md={6} xs={12} className={styles.modesColumns}>
                        <Card
                            title={mode.name}
                            description={mode.description}
                            className={styles.card}
                            handleClick={() => navigate(ROUTES.GAMES.CONTAINERS)}
                            isAvailable={mode.isAvailable}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

LobbyPage.propTypes = {};

export default LobbyPage;
