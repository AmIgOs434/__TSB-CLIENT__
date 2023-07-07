import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const ColorBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="  ">
            {device.colors.map(color =>
                <Card
                    style={{cursor:'pointer'}}
                    key={color.id}
                    className="p-3"
                    onClick={() => device.setSelectedColor(color)}
                    border={color.id === device.selectedColor.id ? 'danger' : 'light'}
                >
                    {color.name}
                </Card>
            )}
        </Row>
    );
});

export default ColorBar;
