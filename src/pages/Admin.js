import React, { useState } from 'react'
import {Container} from "react-bootstrap";
import CreateDevice from '../components/modals/CreateDevice1';
import CreateColor from "../components/modals/CreateColor";
import CreateType from "../components/modals/CreateType";


import { CHECK_ORDER_ROUTE, CHECK_PROMO_ROUTE, CHECK_ROUTE,CHECK_USER_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';
import Bpages from './bpages';
<Bpages/>
const Admin = ()=>{
  const navigate = useNavigate()
  const [colorVisible, setColorVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible,setDeviceVisible] =useState(false)
  const [delVisible,setdelVisible] =useState(false)


  return (
<div class='bg'>
<Bpages/>
  <div class='adminka'>Админка</div>
    <Container className="d-flex flex-column pt-120 pb-200">
   



<div class='col-10'>

<div class='row'>

<div class='col-4 '>
<div class='adminka1'>Работа с клиентом</div>

         <div class='col-12'>
            <button
                className="mt-4 p-2 admi"
                onClick={() => navigate(CHECK_USER_ROUTE)}
            >
                Пользователи
            </button>
            <button
                className="mt-4 p-2 admi"
                onClick={() => navigate(CHECK_PROMO_ROUTE)}
            >
                Промокоды
            </button>
         </div>


</div>
<div class='col-4 '>

<div class='adminka1'>Работа с товаром</div>


       <div class='col-12'>
            <button
                className="mt-4 p-2 admi"
                onClick={() => navigate(CHECK_ROUTE)}
            >
                Товары
            </button>
         </div>


      <div class='col-12 '>

      <button 
        className="mt-4 p-2 admi"
        onClick={() => setTypeVisible(true)}
    >
        Добавить тип
       </button>
        </div>
        <div class='col-12'>
            <button
                className="mt-4 p-2 admi"
                onClick={() => setColorVisible(true)}
            >
                Добавить цвет
            </button>
         </div>
         <div class='col-12'>
            <button
          
            className="mt-4 p-2 admi"
            onClick={()=> setDeviceVisible(true)}
        >
            Добавить вещь
           </button>
        </div>
  </div>
<div class='col-4 '>
<div class='adminka1'>Работа с заказами</div>
         <div class='col-12'>
            <button
                className="mt-4 p-2 admi"
                onClick={() => navigate(CHECK_ORDER_ROUTE)}
            >
                Заказы
            </button>
         </div>
</div>

            </div></div>

             
        <CreateColor show={colorVisible} onHide={() => setColorVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>

    </Container>
    <div class="message-box"></div>
    </div>
  )
}

export default Admin