import React, { useEffect } from 'react'
import useState from 'react-usestateref'
import axios from 'axios';
import {Row} from "react-bootstrap";

import {useParams} from 'react-router-dom'
import { Create_Basket_Device, Device_Basket_Put, delete_basket_device, fetch2_Basket, fetch3_Basket, fetchOneDevice, fetch_Basket_by_userId, fetch_Basket_by_userId1, fetch_One_Color, fetch_One_Size, put_Color_1, put_my_device } from '../http/deviceAPI';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import $ from 'jquery'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { BASKET_ROUTE } from '../utils/consts';
import set_message from './set_message.js'
import { login_0, registration_0 } from '../http/userAPI';
function DevicePage() {



  const navigate = useNavigate()



    
  //creating function to load ip address from the API

  const [device,setDevice] =useState({info:[]})
  const {id} = useParams()
  const [quantity,setquantity] =useState() 
  const [price,setprice] =useState()
  const [sizeId,setsize,setsizeRef] =useState(null)
  const [get_color,setgetColor] =useState([])
    const [colorId1,setcolorId1,colorId1Ref] =useState(null)
    const [basket_device_id,setbasket_device_id,basket_device_idRef] =useState(null)
  const [device_,setDevice_] =useState()

  const [activeButton, setActiveButton,activeButtonRef] = useState(null);
  const [activeSvg, setactiveSvg,activeSvgRef] = useState(null);
  const [quantity_color, setquantity_color,quantity_colorRef] = useState(null);
  

  const [img1, setimg1,setimg1Ref] = useState('https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw1110c003/original/90_1010841-1A07900_2WG70_10_LaColonnaStripedShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit');
  const [img2, setimg2,setimg2Ref] = useState('https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw1110c003/original/90_1010841-1A07900_2WG70_10_LaColonnaStripedShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit');
  const [img3, setimg3,setimg3Ref] = useState('https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw1110c003/original/90_1010841-1A07900_2WG70_10_LaColonnaStripedShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit');
  const [img4, setimg4,setimg4Ref] = useState('https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw1110c003/original/90_1010841-1A07900_2WG70_10_LaColonnaStripedShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit');
  const [img5, setimg5,setimg5Ref] = useState('https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw1110c003/original/90_1010841-1A07900_2WG70_10_LaColonnaStripedShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit');
  const [img6, setimg6,setimg6Ref] = useState('https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw1110c003/original/90_1010841-1A07900_2WG70_10_LaColonnaStripedShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit');
  const [img7, setimg7,setimg7Ref] = useState('https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw1110c003/original/90_1010841-1A07900_2WG70_10_LaColonnaStripedShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit');
  const [img8, setimg8,setimg8Ref] = useState('https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw1110c003/original/90_1010841-1A07900_2WG70_10_LaColonnaStripedShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit');
  const [img9, setimg9,setimg9Ref] = useState('https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw1110c003/original/90_1010841-1A07900_2WG70_10_LaColonnaStripedShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit');
  const [img10, setimg10,setimg10Ref] = useState('https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw1110c003/original/90_1010841-1A07900_2WG70_10_LaColonnaStripedShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit');
  
  const [desc, setdesc,setdescRef] = useState('https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw1110c003/original/90_1010841-1A07900_2WG70_10_LaColonnaStripedShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit');
  

  const [basketId, setBasketId,setBasketIdRef] = useState(null);




    const createBasketDevice_ = async(deviceId,device) => {




      if(activeButton!==null&&activeSvg!==null){

        const storedToken_1 = localStorage.getItem('token');
     
         

        if(storedToken_1===null ){
          localStorage.removeItem('token')
        
          let data;
          let date = new Date()
          const res = await axios.get('https://geolocation-db.com/json/')
        
          const ip = (res.data.IPv4)
          data =await registration_0(ip, date) 
          localStorage.setItem('token', data.data.token)
      
     
        }
        if(storedToken_1!==null){
          const user = jwt_decode(storedToken_1)
          if (user.email ==='amigo111@gmail.com'){
            localStorage.removeItem('token')
            let data;
            let date = new Date()
            const res = await axios.get('https://geolocation-db.com/json/')
        
            const ip = (res.data.IPv4)
            data =await registration_0(ip, date)  
        
            localStorage.setItem('token', data.data.token)
            
          
          }
        }

        const storedToken = localStorage.getItem('token');
        const userId = jwt_decode(storedToken).id
    

        const basketId = await fetch_Basket_by_userId(userId) 
        const dd = await fetch_Basket_by_userId1(userId)


        const bask = basketId.id
        const price = device.price
        const name = device.name
        const device_ = await Create_Basket_Device(deviceId, bask,price,activeButton,sizeId,colorId1Ref.current,setimg1Ref.current,name,activeSvgRef.current
       
      ).then(response => {
  
        setbasket_device_id(response.data.id)
      getDevice(response)
  })
      }else{
        
      }
     


}

  

  

    
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1367 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1367, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 471 },
      items:2
    },
    mobile: {
      breakpoint: { max: 471, min: 0 },
      items: 1
    }
  };
  
  






  useEffect (()=>{
 
   

  


  $(".svg1_glav").on("click", function() {
      

    $(".svg1_glav").toggleClass("svg1_glav_active");
    $(".admin_display_off").toggleClass("admin_display_on");

  
   
  })


  getDevice1()


      fetchOneDevice(id).then(data=> setDevice(data))

 
  
    $('.but50').click(function(){
        set_message('Товар успешно добавлен в вашу корзину!','completed');
    });
     
  },[])

  const getDevice = async(device_) => {
    
    $('.but50').removeClass('display_')
    $('.but51').removeClass('display_flex')
    $('.but52').removeClass('display_flex')

    if(device_!==0){
      $('.but50').addClass('display_')
      $('.but51').addClass('display_flex')
      $('.but52').addClass('display_flex')
      const quantity = device_.data.quantity
      const price = device_.data.final_price
      const idd = device_.data.basketId
      const size = device_.data.size
      const color = device_.data.color
      const colorId = device_.data.colorId
      const sizeId = device_.data.sizeId

      setprice(price)
      setquantity(quantity)
      setActiveButton(size)
      setcolorId1(colorId)
      setactiveSvg(color)

     
    }

  }



const getDevice1 = async() => { 
  const storedToken = localStorage.getItem('token');

  if(storedToken===null){
    
   


      let date = new Date()
      const email = 'amigo111@gmail.com'
      
      const data_0 = await login_0(email, date) 

      localStorage.setItem('token', data_0.data.token)

      getDevice1()

    
  }


    const userId  = jwt_decode(storedToken).id

    const basketId1 = await fetch_Basket_by_userId(userId) 
    setBasketId(basketId1.id)


if(activeButton===null){
  const device_= await fetch_One_Size(id) 

  setParams(device_.data.id)
  setActiveButton(device_.data.size)
}

}
  const setParams = async(id1) => { 

    const response = await fetch_One_Color(id1) 

    setgetColor(response)
    setsize(id1)
    setimg1(response.data[0].img1);
    setimg2(response.data[0].img2);
    setimg3(response.data[0].img3);
    setimg4(response.data[0].img4);
    setimg5(response.data[0].img5);
    setimg6(response.data[0].img6);

    setimg7(response.data[0].img7);
    setimg8(response.data[0].img8);
    setimg9(response.data[0].img9);
    setimg10(response.data[0].img10);

    setdesc(response.data[0].img10)

    setcolorId1(response.data[0].id)

    setquantity_color(response.data[0].quantity);
    setactiveSvg(response.data[0].color);


    if(activeSvgRef.current===null){
     
      const device_= await fetch2_Basket(id,id1,setBasketIdRef.current) 
     
      setsize(id1)
    if(device_.data!==null)
    {
      
      getDevice(device_)
    }
    else{
      getDevice(0)
    }
    }else{
      setParamsColor()
    }

  }


  const setParamsColor = async(id1) => {
  
    const device_= await fetch3_Basket(id,setsizeRef.current,activeSvgRef.current,setBasketIdRef.current ) 

    if(device_.data!==null)
    {
      getDevice(device_)
    }
    else{
      getDevice(0)
    }
  }
  const updateQuantity_plus = async(quantity,price,device) => {
    const quantity1 = quantity+1
     price = price+device.price
     
    update(quantity1,price)
   
    setprice(price)
    setquantity(quantity1)
  }
  const update = async(quantity1,price) => {


    const dd = await Device_Basket_Put(id,basket_device_idRef.current,quantity1,price,sizeId,colorId1Ref.current) 
  
  }
  const updateQuantity_minus = async(quantity,price,device) => {
    const quantity1 = quantity-1
     price = price-device.price
    update(quantity1,price)
  
    setquantity(quantity1)
    setprice(price)
   
  if (quantity1 === 0 ){
    await delete_basket_device(colorId1Ref.current) 


      $('.but50').removeClass('display_')
      $('.but51').removeClass('display_flex')
      $('.but52').removeClass('display_flex')
      set_message('Товар успешно удалён !', 'completed');

  }
 
    
  }
  


  
  const handleClick = e => {
  setactiveSvg(null)

    const id = e.target.id;
    const size = e.target.getAttribute('size1')
 
    setActiveButton(size);
    setParams(id)
  };



  const handleClick2 = async e => {
    const id2 = e.target.id;
    const color2 = e.target.getAttribute('color1')
    const quantity_color = e.target.getAttribute('quantity')

    const img1 = e.target.getAttribute('img1')
    const img2 = e.target.getAttribute('img2')
    const img3 = e.target.getAttribute('img3')
    const img4 = e.target.getAttribute('img4')
    const img5 = e.target.getAttribute('img5')
    const img6 = e.target.getAttribute('img6')

    const img7 = e.target.getAttribute('img7')
    const img8 = e.target.getAttribute('img8')
    const img9 = e.target.getAttribute('img9')
    const img10 = e.target.getAttribute('img10')

    setimg1(img1);
    setimg2(img2);
    setimg3(img3);
    setimg4(img4);
    setimg5(img5);
    setimg6(img6);

    setimg7(img7);
    setimg8(img8);
    setimg9(img9);
    setimg10(img10);


    setquantity_color(quantity_color);
    setactiveSvg(color2);
    setcolorId1(id2)

    const device_= await fetch3_Basket(id,sizeId,color2,setBasketIdRef.current) 

    if(device_.data!==null) 
    {
      getDevice(device_)
    }
    else{
      getDevice(0)
    }

  };
  const [name0, updateName] = useState(device.name)
  const [price0, updatePrice] = useState(device.price)
  const [typeId0, updatetypeId] = useState(device.typeId)
  const [colorId0, updatecolorId] = useState(device.colorId)
  const [img_10, updateimg_1] = useState(device.img_1)

  const DeviceUpdate = async(id) => {

    await  put_my_device(id,name0,price0,typeId0,)
    .then(response => {
        window.location.reload ()
        this.setStatus({ status: response.status });
       
    })}
    const Device_Color_Update = async(color_id) => {
  
      
      await put_Color_1(color_id,activeSvgRef.current,quantity_colorRef.current
      ).then(response => {
          window.location.reload ()
          this.setStatus({ status: response.status });
         
      })}


  return (


    

      <div >  
      
      <div class='container11 '>

      <div class='row '>
      <div class= 'col-12 col-sm-8 col-md-8 '>
       <div class='row gy-2 gx-2'>
      <div class= 'col-12 col-sm-12 col-md-6 tt'>
          <img src ={img1} class='img_1_'/>
          <button class='color5 abs choose svg1 admin_display_off'>
                </button>
                <input type="text" class="  form-control2  abs form_img admin_display_off" size="10" />
                <button class='color5 choose svg2 change_img admin_display_off'>
                </button>
      </div>
      <div class= 'col-12 col-sm-12 col-md-6 tt'>
              <img src ={img2} class='img_1_'/>
              <button class='color5 abs choose svg1 admin_display_off'>
                </button>
                <input type="text" class="  form-control2 abs form_img admin_display_off" size="10" />
                <button class='color5 choose svg2 change_img admin_display_off'>
                </button>
      </div>


      <div class= 'col-12 col-sm-12 col-md-6 tt'>
              <img src ={img3} class='img_1_'/>
              <button class='color5 abs choose svg1 admin_display_off'>
                </button>
                <input type="text" class="  form-control2 abs form_img admin_display_off" size="10" />
                <button class='color5 choose svg2 change_img admin_display_off'>
                </button>
      </div>
      <div class= 'col-12 col-sm-12 col-md-6 tt'>
              <img src ={img4} class='img_1_'/>
              <button class='color5 abs choose svg1 admin_display_off'>
                </button>
                <input type="text" class="  form-control2 abs form_img admin_display_off" size="10" />
                <button class='color5 choose svg2 change_img admin_display_off'>
                </button>
      </div>
     


      <div class= 'col-12 col-sm-12 col-md-6 tt'>
              <img src ={img5} class='img_1_'/>
              <button class='color5 abs choose svg1 admin_display_off'>
                </button>
                <input type="text" class="  form-control2 form_img admin_display_off" size="10" />
                <button class='color5 choose svg2 change_img admin_display_off'>
                </button>
      </div>
      <div class= 'col-12 col-sm-12 col-md-6 tt'>
              <img src ={img6} class='img_1_'/>
              <button class='color5 abs choose svg1 admin_display_off'>
                </button>
                <input type="text" class="  form-control2 form_img admin_display_off" size="10" />
                <button class='color5 choose svg2 change_img admin_display_off'>
                </button>
      </div>

      </div>   
      </div>     
      <div class= 'col-12 col-sm-12 col-md-4 ' id='sticky' >
      <button class='color5 choose svg1 svg1_glav ' style={{float:"right"}} >
                </button>

  
              <div class='row text1'>{device.name}
              <button class='color5 choose svg1 admin_display_off'>
                </button>
                <input type="text" class="  form-control2 form_name admin_display_off"value={name0}  onChange={e => updateName(e.target.value)} size="10" />
                <button class='color5 choose svg2 admin_display_off' onClick={()=> DeviceUpdate(device.id) }>
                </button>
                </div>
                
              <div class=' row price'>{device.price}₽
              <button class='color5 choose svg1 admin_display_off'>
                </button>
                <input type="text" class="  form-control2 form_name admin_display_off" size="10"value={price0}  onChange={e => updatePrice(e.target.value)} />
                <button class='color5 choose svg2 admin_display_off ' onClick={()=> DeviceUpdate(device.id) }>
                </button>
                </div>
              <hr class="hr-line1"/>

          <div class='row color_class overflow-hidden'>  

              <div class='color '> Размер:</div>
              {device.size?.map((size) =>{
                const className = activeButton === size.size ? "add" : "";
              
                return (
                <div 
                  className={className}
                  key={size.id} 
                  
                  id ={size.id} 
                  size1={size.size} 
                  
                  class={`color1 color_p ${className}`}
                  onClick={handleClick}
                  >{size.size}</div>
                )
               } )}  


          </div>



          <div class='row color_class'>

<div class='color'>Цвет:</div>




{get_color?.data?.map(get_color=>

  { const className1 = activeSvgRef.current === get_color.color ? "svg" : "";
      

  return(

        <div 
            key={get_color.id}
            id={get_color.id}
            color1={get_color.color}

            img1={get_color.img1}
            img2={get_color.img2}
            img3={get_color.img3}
            img4={get_color.img4}
            img5={get_color.img5}
            img6={get_color.img6}

            img7={get_color.img7}
            img8={get_color.img8}
            img9={get_color.img9}
            img10={get_color.img10}


            quantity={get_color.quantity}
            class= {`color5 choose ${className1}`}
            onClick={handleClick2} 
            style={{backgroundColor:`${get_color.color}`}}>
              
        </div>     
  )
  
  
  }   )}
  
  <div class='row mt-20'>
<button class='color5  choose svg1 admin_display_off'>
  </button> 
  <input type="color" class="  form-control form-control-color change_color admin_display_off"size="10" value={activeSvgRef.current}  onChange={e => setactiveSvg(e.target.value)} />
  <input type="number" class="  form-control2  form_color admin_display_off" size="10" value={quantity_colorRef.current}  onChange={e => setquantity_color(e.target.value)}/>
  <div class='color5 choose svg2 admin_display_off' onClick={()=> Device_Color_Update(colorId1Ref.current) }>
                </div>
</div>
</div>


          <div class='flex'> 
          
          <button class="but50" id='buton50' onClick={() => createBasketDevice_(device.id,device)}>Добавить в корзину</button>
          <button class=" but51" id='buton51'  onClick={() => navigate(BASKET_ROUTE)}>Перейти в корзину</button>
      
       
          <button class='but51 but52 ml-20 button-width' onClick={()=> updateQuantity_minus(quantity,price,device)}  >-</button>
          <div   class='but52 but53 button-width'>{quantity}</div>
          <button class='but51 but52 button-width' onClick={()=> updateQuantity_plus(quantity,price,device)}>+</button>
        
          </div>
          <hr class="hr-line"/>

                  <div class="accordion accordion-flush high"  id="accordionFlushExample">
                  <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                      <button class="accordion-button collapsed"  data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          Описание         
                      </button>
                      </h2>
                      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">{device.description}</div>
                      </div>
                      <hr class="hr-line2"/>
                  </div>
                  
                  <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      О модели 
                  </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse " aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">{device.info.map((info, index) =>
                    <Row key={info.id} style={{ left:5, padding: 5 }}>
                        - {info.title} {info.description}
                    </Row>
                )} </div>
                  </div>
                  <hr class="hr-line2"/>  

              </div>

                  </div> 
                  


      </div>
      </div>

      <div class='multy'>


</div>
<div class="message-box"></div>
      </div>
  <div class='container21'>

  <div id="carouselExampleCaptions" class="carousel slide carousel-dark">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src ={img1} class="d-block w-100 dostav" alt="..."/>

  </div>
  <div class="carousel-item">
    <img src ={img2} class="d-block w-100 dostav" alt="..."/>

  </div>
  <div class="carousel-item">
    <img src ={img3} class="d-block w-100 dostav" alt="..."/>

  </div>

  <div class="carousel-item">
    <img src ={img4} class="d-block w-100 dostav" alt="..."/>

  </div>
  <div class="carousel-item">
    <img src ={img5} class="d-block w-100 dostav" alt="..."/>

  </div>
  <div class="carousel-item">
    <img src ={img6} class="d-block w-100 dostav" alt="..."/>

  </div>
</div>
<button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Предыдущий</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Следующий</span>
</button>
</div>


<div class= 'col-12 col-sm-12 col-md-12 ' id='sticky1' >
              <div class='text1 mt-3'>{device.name}</div>
              <div class='price'>{device.price}₽</div>
              <hr class="hr-line1"/>

          <div class='row color_class'>

          <div class='color '> Размер:</div>
              {device.size?.map((size) =>{
                const className = activeButton === size.size ? "add" : "";
              
                return (
                <div 
                  className={className}
                  key={size.id} 
                  
                  id ={size.id} 
                  size1={size.size} 
                  
                  class={`color1 color_p ${className}`}
                  onClick={handleClick}
                  >{size.size}</div>
                )
               } )} 
          </div>

          <div class='row color_class'>

<div class='color'>Цвет:</div>




{get_color?.data?.map(get_color=>

  { const className1 = activeSvgRef.current === get_color.color ? "svg" : "";
      

  return(

        <div 
            key={get_color.id}
            id={get_color.id}
            color1={get_color.color}

            img1={get_color.img1}
            img2={get_color.img2}
            img3={get_color.img3}
            img4={get_color.img4}
            img5={get_color.img5}
            img6={get_color.img6}

            
            img7={get_color.img7}
            img8={get_color.img8}
            img9={get_color.img9}
            img10={get_color.img10}

            quantity={get_color.quantity}
            class= {`color5 choose ${className1}`}
            onClick={handleClick2} 
            style={{backgroundColor:`${get_color.color}`}}>
              
        </div>     
  )
  
  
  }   )}
  
  <div class='row mt-20'>
<button class='color5  choose svg1 admin_display_off'>
  </button> 
  <input type="color" class="  form-control form-control-color change_color admin_display_off"size="10" value={activeSvgRef.current}  onChange={e => setactiveSvg(e.target.value)} />
  <input type="number" class="  form-control2  form_color admin_display_off" size="10" value={quantity_colorRef.current}  onChange={e => setquantity_color(e.target.value)}/>
  <div class='color5 choose svg2 admin_display_off' onClick={()=> Device_Color_Update(colorId1Ref.current) }>
                </div>
</div>
</div>

          <div class='col-12 md-12 '>
          <div class='flex'> 
          
          <button class="but50" id='buton50' onClick={() => createBasketDevice_(device.id,device)}>Добавить в корзину</button>
          <button class=" but51 but54" id='buton51'  onClick={() => navigate(BASKET_ROUTE)}>Перейти в корзину</button>
      
       
          <button class='but51 but52 ml-20 button-width' onClick={()=> updateQuantity_minus(quantity,price,device)}  >-</button>
          <div   class='but52 but53 button-width'>{quantity}</div>
          <button class='but51 but52 button-width' onClick={()=> updateQuantity_plus(quantity,price,device)}>+</button>
        
          </div>
         
          <hr class="hr-line"/>

                  <div class="accordion accordion-flush high"  id="accordionFlushExample">
                  <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Описание       
                      </button>
                      </h2>
                      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">{device.description}</div>
                      </div>
                      <hr class="hr-line2"/>
                  </div>
                  
                  <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      О модели 
                  </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse " aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">{device.info.map((info, index) =>
                    <Row key={info.id} style={{ left:5, padding: 5 }}>
                        - {info.title} {info.description}
                    </Row>
                )} </div>
                  </div>
                  <hr class="hr-line2"/>  

              </div>
                  
                  </div> 
                  
                  </div>

      </div>
  </div>
  <div className="App">
    <div class='dopolni'>
    Дополни свой образ 
    </div>
    <div style={{ position: "relative" }}>
      <Carousel responsive={responsive}>
        <div class='marl' style={{backgroundImage: `url(${img7})`, height:'500px', cursor:'pointer' ,}}></div>
        <div class='marl' style={{backgroundImage: `url(${img8})`, height:'500px', cursor:'pointer' ,}}></div>
        <div class='marl' style={{backgroundImage: `url(${img9})`, height:'500px', cursor:'pointer' ,}}></div>
        <div  class='marl'style={{backgroundImage: `url(${img10})`, height:'500px', cursor:'pointer' ,}}></div>
      
      </Carousel>
    </div>
           

  </div>
  
  </div>
   


  )
}

export default DevicePage
