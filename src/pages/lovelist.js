import React, { useContext } from 'react'
import DeviceItem from '../components/DeviceItem';

import {Context} from "../index";
const LoveList = ({})=>{

  const {device} = useContext(Context)

  return (

<div className = "gx-1 display_cart" >
            {device.love_items.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </div>












  )
}

export default LoveList