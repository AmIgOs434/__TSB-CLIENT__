import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import set_message from '../pages/set_message.js'
import $ from 'jquery'
import { delete_Basket_device, fetch_Basket_by_userId, fetch_my_Basket, fetch_my_device, update_Basket } from '../http/deviceAPI';
import { DEVICE_ROUTE } from '../utils/consts.js';
const BasketItem = ({basketDevice,SetData,SetData1,SetData2})=>{
    useEffect(()=>{
    
        getBasketDevice_()
            },[])


            try {




            } catch (e) {
                alert(e.response.data.message)
            }         
const getBasketDevice_ = async() => {



   
    const storedToken = localStorage.getItem('token');
    if(storedToken===null){
      set_message("Вы не авторизованы :( ",'error')
    }else{
      const userId = jwt_decode(storedToken).id
      const basketId = await fetch_Basket_by_userId(userId) 
      const bask = basketId.id
      const basket_device = await fetch_my_Basket(bask)
    
      if(basket_device.status === 200){ 
          SetData(basket_device.data) 
       }
       Promise.all(basket_device.data.map(async id => {
          let response
          try {
            response =await  fetch_my_device(id.deviceId)
            
          } catch (err) {
            return err;
          }
          return response
        })).then(results => {
          var x= 0
          var col_dev = basket_device.data.map(d=>(x+=(d.quantity) ),x=0).reverse()[0]
          results = basket_device.data.map(d=>(x+=(d.final_price) ),x=0).reverse()[0]
          if (col_dev===undefined){
            var col_dev = 0 
            $('.basket_no_device').addClass('display_flex_on')
           }else{
             $('.basket_no_items').removeClass('basket_yes_items')
           }

          SetData2(col_dev)
          SetData1(results)

          update_Basket(bask,results,col_dev)

      })
    }
  
    
    }
    const [device,SetData3] = useState([])

    useEffect(()=>{
        getDevice_()
    },[])
    const getDevice_ = async() => {
     
    const response = await  fetch_my_device(basketDevice.deviceId) 
    SetData3(response.data)
}
    const delBasketDevice_ = async() => {

    await delete_Basket_device(basketDevice.id)


    set_message('Товар успешно удалён!','completed')
    getBasketDevice_()
    }
    const navigate = useNavigate();


  return (
    <div class='basket_unit '>
    <div class='row d-flex '> 
       <div class=' basket_img'>
       <img style={{cursor:'pointer'}} src={basketDevice.img}onClick={()=> navigate(DEVICE_ROUTE + '/' + basketDevice.deviceId)} alt=""/>
       </div>

        <div class='col'> 
            <div class='top_text_1'>
            {device.name}
            </div>
          <div class='mt-3'>
            <div class='top_text_2'>
            
            </div>     
            <div class='row top_text_2'>
            Цвет :
            <div
            class='color5  ml-5'style={{backgroundColor:`${basketDevice.color}`, width:'20px', height:'20px'}}
            >
               </div>
            
         
            </div>
            <div class='top_text_2'>
            размер : {basketDevice.size}            
            </div>
            <div class='top_text_2'>
            Количество : {basketDevice.quantity}            
            </div>
          </div>
        </div>
         <div class='col-1 fl_'>
        
        <svg onClick={() => delBasketDevice_()} width="23px" class=' cross' height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
          <g id="SVGRepo_iconCarrier"> <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#000000" stroke-width="1.6320000000000001" stroke-linecap="round" stroke-linejoin="round"/> </g>
        </svg>
        <div class='cross1'>
        {device.price*basketDevice.quantity}₽
            </div>
            
         </div>
    
         
    </div>
  
  </div>

  )
}

export default BasketItem