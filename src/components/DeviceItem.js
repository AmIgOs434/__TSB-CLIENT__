import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {DEVICE_ROUTE} from "../utils/consts";
import axios from 'axios';
import useState from 'react-usestateref'
import $ from 'jquery'
import { createLove, delLoveone, fetchLoveone, registration_0 } from '../http/userAPI';
import jwt_decode from "jwt-decode";
import { fetch_One_Color, fetch_One_Size } from '../http/deviceAPI';
const DeviceItem = ({device})=>{
    const navigate = useNavigate();
    const [love,setlove,setloveRef] = useState(null)
    const [fill,setfill,setfillRef] = useState('#FFF')
    const [class1,setclass1,setclass1Ref] = useState('')



  const get_love_0 = async()=>{
    if(love===null){
 

      const user_ = localStorage.getItem('token')
      if(user_){
        const user = jwt_decode(user_)
        const set_love =  await fetchLoveone(user.id,device.id)
        
        if(set_love!==null){
          setclass1('fill')
        }
        setlove(set_love)
      }

    }
    

    


 }


  const get_love = async(userId,deviceId)=>{
     const set_love =  await fetchLoveone(userId,device.id)

     
     if(set_love===null){
      create_love(userId,deviceId)
     }else{
      del_love(userId,deviceId)
     }

  }

  const create_love = async(userId,deviceId)=>{
    const set_love =  await createLove(userId,deviceId)
    setclass1('fill')
    get_love_0()
 }
 const del_love = async(userId,deviceId)=>{
  const set_love =  await delLoveone(userId,deviceId)
  setclass1('1')
  get_love_0()
}



const click1 = async()=>{

  const storedToken_1 = localStorage.getItem('token')

  if(storedToken_1===null ){
    
    let data;
    let date = new Date()
    const res = await axios.get('https://geolocation-db.com/json/')

    const ip = (res.data.IPv4)
    data =await registration_0(ip, date)   
 
    localStorage.setItem('token', data.data.token)
    $('.heart_').addClass('admin_display_on')
    $('.out').addClass('admin_display_on')
    $('.account').addClass('display_')
     
    
    
  }
  const user_ = localStorage.getItem('token')
  const user = jwt_decode(user_)
  get_love(user.id,device.id)
}





useEffect(()=>{
  get_love_0()



  get_img(device?.id)
})
const [img1, setimg1,setimg1Ref] = useState('https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw1110c003/original/90_1010841-1A07900_2WG70_10_LaColonnaStripedShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit');
const [img2, setimg2,setimg2Ref] = useState('https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw1110c003/original/90_1010841-1A07900_2WG70_10_LaColonnaStripedShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit');
const get_img = async(id)=>{

  const device_= await fetch_One_Size(id) 

  if(device_.data!==null){
    const response = await fetch_One_Color(device_.data.id) 
    setimg1(response.data[0].img1);
    setimg2(response.data[0].img2);
  }



}


  return (


      

    // style={{fill:`${setfillRef.current}`}}

    <div class="col-12 col-sm-6 col-lg-3 col-md-6 tt " >
        <svg class={`mo-icon__svg heart heart1 ${setclass1Ref.current}`} onClick={click1} deviceId={device.id}  x="0px" y="0px"
viewBox="0 0 200 200" >
<g id="icon_x5F_wishlist">
	<g transform="translate(0,-952.36218)">
		<path class="st0" id="st0" d="M15.33293,980.7616c-19.11968,19.8092-19.10147,51.68518,0,71.51379l84.61456,87.86926
			c28.23759-29.25574,56.47517-58.51135,84.71275-87.76758c19.11969-19.80969,19.11969-51.70477,0-71.51422
			c-19.12007-19.80945-49.90512-19.80994-69.02521,0l-15.58933,16.15155l-15.68754-16.25305
			c-19.12008-19.80945-49.90513-19.80945-69.02521,0L15.33293,980.7616z"/>
	</g>
</g>
</svg>

    <div class="single-product-wrapper bg-transparent ">
   
        <div class="product-img" onClick={()=> navigate(DEVICE_ROUTE + '/' + device.id)} >
      
        <img src={setimg1Ref.current} alt=""/>
        <img class="hover-img" src={setimg2Ref.current} alt=""/>
            <div class="product-description bbb1">
            <span>TSB</span>
                <h6>{device.name}</h6>
            <p class="product-price">{device.price}</p>
            <div class="hover-content">
            </div>
        </div>
        </div>
    </div>
</div>

  )
}

export default DeviceItem