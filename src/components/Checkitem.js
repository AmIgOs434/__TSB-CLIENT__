
import React from 'react'
import { Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { CHANGE_DEVICE_ROUTE } from '../utils/consts';
import { delete_device, fetchDevices } from '../http/deviceAPI';

const DeviceItem = ({device,device1})=>{





    const onDeleteUser = async(id) =>{
         if(window.confirm('Точно удаляем ?')){
            
         const response =await delete_device(id) 
    
         

         fetchDevices(null, null, 1, 10).then(data => {
            
            device1.setTotalCount(data.count)
         })
         if(response.status === 200){

            Toast.success(response.data)
       
         }
    }
}






    const navigate = useNavigate();
  return (
               <div   className='row'>
                    <div class='col-12_5'>
                    {device.id}
                    </div>
                    <div class='col-12_5'>
                    {device.typeId}
                    </div>
                    <div class='col-12_5'>
                    
                    </div>
                    <div class='col-12_5'>
                    {device.name}
                    </div>
                    <div class='col-12_5'>
                       5
                    </div>
                    <div class='col-12_5'>
                    {device.createdAt}
                    </div>

                    <div class='col-12_5 display_flex '>
                        
                    <div style={{cursor:'pointer'}} onClick={()=> navigate(CHANGE_DEVICE_ROUTE + '/' + device.id)}>Редактировать </div>
                    
                    </div>
                    <div class='col-12_5 display_flex'>
                       <div style={{cursor:'pointer'}}
                       onClick={()=> onDeleteUser(device.id)}>Удалить</div>
                    </div>

            

                        
                      </div>





  )
}

export default DeviceItem