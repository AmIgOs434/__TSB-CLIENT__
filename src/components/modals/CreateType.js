import React from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";
import set_message from '../../pages/set_message';
import useState from 'react-usestateref'
const CreateType = ({show, onHide}) => {
    const [value, setValue,setValueRef] = useState()

    const addType = () => {
          if(!setValueRef.current){
           return set_message('Укажите категорию!','error')
          }
        
   
        createType({name: setValueRef.current}).then(data => {
            setValue('')
            set_message('Категория успешно добавлена','completed')
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
                    Добавить тип
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
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
