import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createColor} from "../../http/deviceAPI";

const CreateColor = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addColor = () => {
        createColor({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header >
                <Modal.Title className = 'modal-title1' id="contained-modal-title-vcenter">
                    Добавить цвет
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='admin2'>        
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addColor}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateColor;
