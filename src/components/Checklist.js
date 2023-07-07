import React, { useContext } from 'react'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Checkitem from "./Checkitem";

const Checklist = observer( (device1)=>{
    const {device} = useContext(Context)
    return (
        
        <div >
            {device.devices.map(device =>
                <Checkitem key={device.id} device={device} device1={device1} />
            )}
            
        </div>
        
  );
  
});

export default Checklist