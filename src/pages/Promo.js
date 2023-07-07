import React, { useEffect} from 'react';

import {observer} from "mobx-react-lite";

import Bpages from './bpages';
import useState from 'react-usestateref'
import CreatePromo from '../components/modals/CreatePromo';
import { delPromo, fetchPromo } from '../http/deviceAPI';
const Promo = observer( ()=>{

    const [promoVisible, setpromoVisible] = useState(false)
    const [promo,setpromo,setpromoRef] = useState()
   

    const get = async() =>{
         if(!promo){
            const promo = await fetchPromo()
            setpromo(promo)
         }

    }
    const get_ = async() =>{
        setpromoVisible(false)
           const promo = await fetchPromo()
           setpromo(promo)
        

   }


    const del = async(id) =>{

        const promo1 = await delPromo(id)

        const promo = await fetchPromo()
        setpromo(promo)
    }

useEffect(()=>{
    get()
    
})


  return (
    <div class="app2 ">
        <div class='order_work'>

        <div class='work-text-1'>
   Промокоды
        </div>
<Bpages/>
<div class='container_work'>

{setpromoRef.current?.map(item=>
<div class='basket_unit  basket_unit_order_check basket_unit_promo_check '>
    <div class='row d-flex '> 


<div class='d-f'>

<div>

<div class='elem elem1' >
    Название :  {item.identific}
</div>
<div class='elem elem1' >
    Количество :  {item.quantity}
</div>


<div class='elem elem1'>
   Скидка :  {item.skidka}%
</div>
</div>





<div>

    <div  class='elem elem1 elem2' onClick={()=>{del(item.id)}}>
    Удалить
    </div>



</div>

</div>

    
         
    </div>
  
  </div>

)}

  <div class='plus' onClick={() => setpromoVisible(true)}>
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7V17M7 12H17" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
  </div>
  
            </div>
            
            <CreatePromo show={promoVisible}  onHide={() => get_()} />
      
            </div>
  )
})

export default Promo