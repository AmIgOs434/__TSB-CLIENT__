import React, { useEffect, useState } from 'react';
import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import { ORDER_WORK_ROUTE } from '../utils/consts';
import { fetch_Order } from '../http/deviceAPI';
const CheckOrder  = observer( ()=>{
    const [order,setorder] =useState() 

    useEffect(()=>{
     getOrders()
    },[])
    const getOrders = async() => {
        const order= await  fetch_Order()  
        setorder(order)
     
    }
    const navigate = useNavigate()
    return (
        <div class='color__ app1'>
              
            <div id='check'>
            <div  clsass='col-12'>
            <img  onClick={() => navigate(-1)} class='back1' src='../assets/img/product-img/back.svg' alt="За стеклом"></img> 
                <div  className='row'>
                    <div class='col-12_5'>
                       ID
                    </div>
                    <div class='col-12_5'>
                       FIO
                    </div>
                    <div class='col-12_5'>
                      Телефон
                    </div>
                    <div class='col_12_5_5'>
                       Email
                    </div>
                    <div class='col-12_5'>
                       Дата покупки
                    </div>

                    <div class='col-12_5'>
                       status
                    </div>
                    <div class='col-12_5'>
                       Открыть / Удалить
                    </div>
                </div>


                {order?.data.map(order =>
         
                <div key={order.id} className='row'>
                    <div class='col-12_5'>
                       {order.id}
                    </div>
                    <div class='col-12_5'>
                    {order.FIO}
                    </div>
                    <div class='col-12_5'>
                    {order.phone}
                    </div>
                    <div class='col_12_5_5'>
                    {order.email} 
                    </div>
                    <div class='col-12_5'>
                    {order.createdAt}
                    </div>
                  
                    <div class='col-12_5'>
                    {order.status}
                    </div>
                    <div class='col-12_5 ' style={{cursor:"pointer"}} 
                    
                    onClick={()=> navigate(ORDER_WORK_ROUTE + '/' + order.id)}>
                       Открыть 
                    </div>
                </div>

)}

             </div>


            </div>         
        </div>
    );
});

export default CheckOrder;