import React, { useEffect} from 'react';

import {observer} from "mobx-react-lite";

import $ from 'jquery'
import Bpages from './bpages';
import { useParams } from 'react-router-dom';

import useState from 'react-usestateref'
import { getOrderById, get_item_order, put_Order_Status } from '../http/deviceAPI';
const Order_Work = observer( ()=>{
  const status_0 = 'Ваш заказ оплачен. Начинаем процесс сборки'
  const status_1 = 'Ваш заказ передан в доставку'
  const status_2 = 'Ваш заказ успешно доставлен'
  const status_3 = 'Заказ ожидает оплаты'




  const {id} = useParams()
  const [order,setorder,setorderRef] = useState()
  const [items,setitems] = useState()
  const [formatted,setformatted] = useState()
  
  const get = async()=>{
    if (!order){
    const order1 = await getOrderById(id) 
    const items =await get_item_order(id) 
    setorder(order1)
    setitems(items)
    setglav_status(order1.data.status)

let formatted = new Date(order1.data.createdAt).toLocaleString()

setformatted(formatted)



    
    if(setglav_statusRef.current === status_3){
        $(".set_status_3").addClass("green");
    }

    if(setglav_statusRef.current === status_0){
        $(".set_status_0").addClass("green");
    }
    
    if(setglav_statusRef.current === status_1){
        $(".set_status_1").addClass("green");
    }
    
    if(setglav_statusRef.current === status_2){
        $(".set_status_2").addClass("green");

    }

   
}

}

const [glav_status,setglav_status,setglav_statusRef] = useState()
const get_ = async()=>{



if(setglav_statusRef.current === status_3){
    $(".green").removeClass("green");
    $(".set_status_3").addClass("green");
}

if(setglav_statusRef.current === status_0){
$(".green").removeClass("green");
$(".set_status_0").addClass("green");
}

if(setglav_statusRef.current === status_1){
$(".green").removeClass("green");
$(".set_status_1").addClass("green");
}

if(setglav_statusRef.current === status_2){
$(".green").removeClass("green");
$(".set_status_2").addClass("green");
}}

  const get_1 = async(status)=>{
    setglav_status(status)
    const change =await put_Order_Status(id,status)
    get()
    get_()
  }




useEffect(() => {
 
    get()
   
}, [])


  return (
    <div class="app2">

<Bpages/>
<div class='order_work'>

<div class='work-text-1'>
    Заказ от :  {formatted}
</div>



<div class='container_work'>

<div class='mb-10'>
    ФИО :   {order?.data?.FIO}
</div>

<div class='mb-10'>
    Email :   {order?.data?.email}
</div >

<div class='mb-10'>
    Адрес :   {order?.data?.address}
</div>

<div class='mb-10'>
    Комментарий :   {order?.data?.comment}
</div>

<div class='mb-10'>
    Сумма заказа :   {order?.data?.final_price} Р
</div>

<div class='mb-10'>
    Статус :   {setglav_statusRef.current}


</div>
<div class='d-flex_1'>
<div class='set_status set_status_3 mb-10' onClick={()=>{get_1(status_3)}}>
    Оплата
</div>
<div class='set_status set_status_0 mb-10' onClick={()=>{get_1(status_0)}}>
    Создан
</div>
<div class='set_status set_status_1 mb-10' onClick={()=>{get_1(status_1)}}>
 Доставляется
</div>
<div class='set_status set_status_2 mb-10' onClick={()=>{get_1(status_2)}}>
   Доставлен
</div>

</div>



{items?.data?.map(item=>
<div class='basket_unit  basket_unit_order_check'>
    <div class='row d-flex '> 
       <div class=' basket_img'>
       <img src={item.img} class='img1_'alt=""/>
       </div>

        <div class='col'> 
            <div class='top_text_1'>
            {item.name}
            </div>
          <div class='mt-3'>
            <div class='top_text_3'>
            
            </div>     
            <div class='row top_text_3'>
            Цвет :
            <div
            class='color5  ml-5'style={{backgroundColor:`${item.color}`, width:'20px', height:'20px'}}
            >
               </div>
            
         
            </div>
            <div class='top_text_3'>
            размер : {item.size}            
            </div>
            <div class='top_text_3'>
            Количество : {item.quantity}            
            </div>
          </div>
        </div>
         <div class='col-1 fl_'>
        


            
         </div>
    
         
    </div>
  
  </div>)}
  </div>
</div>


            </div>
  )
})

export default Order_Work