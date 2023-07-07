import React, {useEffect,useState } from 'react'
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import BasketItem from "./BasketItem";
import jwt_decode from "jwt-decode";
import set_message from '../pages/set_message.js'
import { fetch_Basket_by_userId, fetch_my_Basket, fetch_my_device, update_Basket } from '../http/deviceAPI';
import $ from 'jquery'
const DeviceList = observer( ({SetData1,SetData2})=>{

    const [data,SetData] = useState([])
    
    useEffect(()=>{
    
        getBasketDevice_()
            },[])

const getBasketDevice_ = async() => {
 
    const storedToken = localStorage.getItem('token');
    if(storedToken===null){
      set_message("Вы не авторизованы :( ",'error')
    }else{
      const userId = jwt_decode(storedToken).id
    const basketId = await  fetch_Basket_by_userId(userId) 
    const bask = basketId.id
    const basket_device = await fetch_my_Basket(bask)
    if(basket_device.status === 200){
        SetData(basket_device.data)
     }
     Promise.all(basket_device.data.map(async id => {
        let response
        try {
          response =await fetch_my_device(id.deviceId)
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
    return (
        
        <Row className = "gx-1">
            
            {data && data.map(basketDevice =>
         
                <BasketItem key={basketDevice.id} basketDevice={basketDevice} SetData={SetData} SetData1={SetData1} SetData2={SetData2}/>
          
            )}
            
        </Row>
        
  );
  
});

export default DeviceList 

