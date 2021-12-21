import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import styles from "./styles.module.sass";
import auth from "../../store/auth";
import {observer} from "mobx-react-lite";

const AuthorizationModal = observer(({isOpen}) => {
    const [nicknameValue, setNicknameValue] = useState("");
    return (
        <Modal show={isOpen}>
            <Modal.Header>
                <Modal.Title>Регистрация</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Для продолжения игры необходимо пройти регистрацию</p>

                <InputGroup className="mb-3">
                    <InputGroup.Text>Имя пользователя</InputGroup.Text>
                    <FormControl
                        aria-label="nickname"
                        value={nicknameValue}
                        onChange={(e) => setNicknameValue(e.target.value)}
                    />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer className={styles.footer}>
                <Button
                    variant="success"
                    onClick={() => auth.generateUser(nicknameValue)}
                    disabled={!nicknameValue.trim()}
                >
                    Зарегистрироваться
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

AuthorizationModal.propTypes = {};

export default AuthorizationModal;
