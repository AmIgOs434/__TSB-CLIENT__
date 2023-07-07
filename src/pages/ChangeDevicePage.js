
import React, { useEffect, useState } from 'react'
import { fetchOneDevice, put_my_device } from '../http/deviceAPI';
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const DeviceItem = ()=>{


        

    const [device,setDevice] =useState({info:[]})
    const {id} = useParams()
  
    useEffect (()=>{
  
        fetchOneDevice(id).then(data=> setDevice(data))
    },[])

    
   


    
const [name, updateName] = useState(device.name)
const [price, updatePrice] = useState(device.price)
const [typeId, updatetypeId] = useState(device.typeId)

const [img_1, updateimg_1] = useState(device.img_1)
    const handleUpdate = async(id) => {

        await put_my_device(id,name,price,typeId,)
        .then(response => {
            window.location.reload ()
            this.setStatus({ status: response.status });
           
        })}
        const navigate = useNavigate()

  return (
            <div class ='colo_'>
               <div class='change pt-20' >


               <img  onClick={() => navigate(-1)} class='back' src='../assets/img/product-img/back.svg' alt="За стеклом"></img> 
<div class='row'> 

    <div class="mb-3  col-6 name ">
    <div class='float_r'>  Название : {device.name} </div> 
    </div>     
    <div class="mb-3 col-6">
    <input type="text" class="  form-control" value={name}  onChange={e => updateName(e.target.value)}  size="20" />
  </div>

  </div>
   

  <div class='row'> 

<div class="mb-3  col-6 name ">
<div class='float_r'>  Цена : {device.price}₽ </div> 
</div>     
<div class="mb-3 col-6">
<input type="number" class="  form-control" value={price}  onChange={e => updatePrice(e.target.value)}  size="20" />
</div>

</div>

<div class='row'> 

    <div class="mb-3  col-6 name ">
       <div class='float_r'>  Тип : {device.typeId} </div> 
    </div>     
    <div class="mb-3 col-6">
    <input type="number" class="  form-control" value={typeId}  onChange={e => updatetypeId(e.target.value)} size="20" />
  </div>

  </div>




  <div class='row'> 

    <div class="mb-3  col-6 name ">
    </div>     
    <div class="mb-3 col-6">
    <input type="file" class="  form-control" value={img_1}  onChange={e => updateimg_1(e.target.value)}  size="20" />
  </div>
 
  <div>  <button class ='q'onClick={()=> handleUpdate(device.id) } >Отправить</button></div>
  </div>


                      </div>

                      </div>



  )
}

export default DeviceItem