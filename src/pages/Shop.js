import React, {useContext, useEffect} from 'react';
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchColors, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";
import Wpages from './wpages';
import useState from 'react-usestateref'


const Shop = observer( ()=>{
  const {device} = useContext(Context)
  const [love,setlove,setloveRef] = useState(null)
  const [sv,setsv,setsvRef] = useState(0)



  
  
  

 
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

   
}, [device.page, device.selectedType, device.selectedColor,]


)


  return (
    <div>
<div class="app1">
<Wpages/>

   <div class='nachalo_shop'>
<h6 class='text_bar_1'>Летний сезон</h6>
<h6 class='text_bar_2'>Ощущение тепла TSB - откройте для себя мужской трикотаж, свитера и кардиганы различных стилей и материалов, <br/>
включая роскошный кашемир и шерсть.</h6>
                                 
   </div>
   <div class="spinner"></div>

    <section class="shop_grid_area section-padding-0">


            <div class="display_cart">


                <div class="col-12 col-md-12 col-lg-12 gy-0">
                    <div class="shop_grid_product_area">


                        <div class="row gx-1 overflow-hidden ">
               

        
            
            <DeviceList/>
          
           
          

            </div>
            </div>
            </div>
            </div>
            </section>
            
            </div>
            <Pages/>
            </div>
  )
})

export default Shop