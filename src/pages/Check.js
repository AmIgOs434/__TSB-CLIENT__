import React, {useContext, useEffect} from 'react';
import {fetchColors, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Checklist from "../components/Checklist";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
const Check  = observer( ()=>{
    const {device} = useContext(Context)




    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchColors().then(data => device.setColors(data))
        fetchDevices(null, null, 1, 10).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])
    
    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedColor.id, device.page, 10).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedColor,])


    const navigate = useNavigate()
    return (
        <div class='color__'>
              
            <div id='check'>
            <div  clsass='col-12'>
            <img  onClick={() => navigate(-1)} class='back1' src='../assets/img/product-img/back.svg' alt="За стеклом"></img> 
                <div  className='row'>
                    <div class='col-12_5'>
                       ID
                    </div>
                    <div class='col-12_5'>
                       Тип
                    </div>
                    <div class='col-12_5'>
                      Цвет
                    </div>
                    <div class='col-12_5'>
                       Название
                    </div>
                    <div class='col-12_5'>
                       Количество
                    </div>
                    <div class='col-12_5'>
                       Дата поставки
                    </div>
                    <div class='col-12_5'>
                       Радактировать
                    </div>
                    <div class='col-12_5'>
                       Удалить
                    </div>

                </div>
                
                <Checklist device1={device} />
             </div>


            </div>
           
      
        </div>
    );
});

export default Check;
