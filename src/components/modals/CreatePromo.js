import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createPromo} from "../../http/deviceAPI";

const CreatePromo = ({show, onHide}) => {
    const [quantity, setquantity] = useState('')
    const [skidka, setskidka] = useState('')
    const [identific, setidentific] = useState('')


    const addPromo = () => {
        createPromo({quantity: quantity,skidka:skidka,identific:identific}).then(data => {
            setidentific('')
            setquantity('')
            setskidka('')
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
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
   <div>
   <Form>
                    <div class='prom_'>
                    <div class='prom'>
                    Код
                    </div> 
                    <Form.Control
                        value={identific}
                        onChange={e => setidentific(e.target.value)}
                        placeholder={"Код"}
                    />
                    </div>
                  
                </Form>
                <Form>
                    <div class='prom_'>
                    <div class='prom'>
                    Скидка
                    </div>
                    <Form.Control
                        value={skidka}
                        onChange={e => setskidka(e.target.value)}
                        placeholder={"Скидка"}
                    />
                    </div>
                  
                </Form>
                <Form>
                    <div class='prom_'>
                    <div class='prom'>
                    Количество
                    </div>
                    <Form.Control
                        value={quantity}
                        onChange={e => setquantity(e.target.value)}
                        placeholder={"Количество"}
                    />
                    </div>
                  
                </Form>
   </div>
            
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addPromo}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreatePromo;