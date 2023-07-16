import React, {useContext, useEffect } from 'react';
import $ from 'jquery'
import Bpages from './bpages';
import { fetchGlavStr, putGlavStr } from '../http/deviceAPI';
import useState from 'react-usestateref'
import {Context} from "../index";
const Fashion = ()=>{
  const video1 = "https://www.youtube.com/watch?v=CHtAAVESk94"


  const {user} = useContext(Context)

  const [str,setstr,setstrRef] = useState()

  const [photo1,setphoto1,setphoto1Ref] = useState('http://localhost:3000/assets/img/product-img/im1.jpg')
  const [photo2,setphoto2,setphoto2Ref] = useState('http://localhost:3000/assets/img/product-img/im1.jpg')
  const [photo3,setphoto3,setphoto3Ref] = useState('http://localhost:3000/assets/img/product-img/im1.jpg')
  const [photo4,setphoto4,setphoto4Ref] = useState()
  const [photo5,setphoto5,setphoto5Ref] = useState()
  const [photo6,setphoto6,setphoto6Ref] = useState()
  



  const set = async() => {
    putGlavStr(video,photo1,photo2,photo3,photo4,photo5,photo6)
  }
  const getStr = async(device_) => {
    if(!str){
      var str = await fetchGlavStr() 
      setstr(str)

      setvideo(str.video)
      setphoto1(str.photo1)
      setphoto2(str.photo2)
      setphoto3(str.photo3)
      setphoto4(str.photo4)
      setphoto5(str.photo5)
      setphoto6(str.photo6)
    }
  }

  useEffect(()=>{
    
  $(".svg1_glav").on("click", function() {
      

    $(".svg1_glav").toggleClass("svg1_glav_active");
    $(".admin_display_off").toggleClass("admin_display_on");

  
   
  })
    getStr()
    
  },[])
  const [video,setvideo,setvideoRef] = useState('https://vod.fl.freecaster.net/vod/kenzo/o5zgqb5ZHd_720p.mp4')
  return (

    <div>
   <Bpages/>
    <div class="cart-bg-overlay"></div>



<div class='col-12'> 

  <div class='video_' >
  <button class='color5 choose svg1 svg1_glav ' style={{right:"20px" ,top:'70px',position:'fixed',}} >
</button>
  <button class='color5 abs choose svg1 admin_display_off'>
                </button>
                <input type="text" class="  form-control2  abs form_img admin_display_off" style={{top: '100px'}} value={video}  onChange={e => setvideo(e.target.value)} size="10" />
                <button class='color5 choose svg2 change_img admin_display_off' onClick={set}  style={{top: '100px'}}>
                </button>
             
  <video class='video2'  src={video} loop  autoplay='true' muted='true'>
   </video>

<div class="but_1 " ><a href="/" class="ddott ml-5 ">КОЛЛЕКЦИЯ</a><a href="#" class="ddott " >ОБРАЗЫ</a></div>


  </div>
  </div>

    

 
  <div class='row1 mt0'>



        <div class='col-12 col-sm-12 col-md-6_ tt'>
        <img src={setphoto1Ref.current}class='iimm' alt=""/>
        <input type="text" class="  form-control2  abs form_img admin_display_off" style={{top: '40px'}} value={photo1}  onChange={e => setphoto1(e.target.value)} size="10" />
                <button onClick={set} class='color5 choose svg2 change_img admin_display_off' style={{top: '40px'}}>
                </button>
        <div class="but_1" ><a href="#" class="ddott ">THE FASHION</a></div>
        
    </div>
    <div class='col-12 col-sm-12 col-md-6_ tt'>
        <img src={setphoto2Ref.current}class='iimm' alt=""/>
        <input type="text" class="  form-control2  abs form_img admin_display_off"style={{top: '40px'}}  value={photo2}  onChange={e => setphoto2(e.target.value)}  size="10" />
                <button class='color5 choose svg2 change_img admin_display_off' onClick={set} style={{top: '40px'}}>
                </button>
        <div class="but_1" ><a href="#" class="ddott ">THE FASHION</a></div>
    </div>



</div>
<div class='col-12 col-sm-12 col-md-12 tt'>
        <img src={setphoto3Ref.current}class='iimm' alt=""/>
        <input type="text" class="  form-control2  abs form_img admin_display_off" style={{top: '40px'}}value={photo3}  onChange={e => setphoto3(e.target.value)} size="10" />
                <button class='color5 choose svg2 change_img admin_display_off' onClick={set} style={{top: '40px'}}>
                </button>
        <div class="but_1" ><a href="#" class="ddott ">THE FASHION</a></div>
    </div>


<div class='row1'>
      
        <div class='col-4 tt'>
           <img src={setphoto4Ref.current} class='iimm' alt=""/>
           <input type="text" class="  form-control2  abs form_img admin_display_off" style={{top: '40px'}} value={photo4}  onChange={e => setphoto4(e.target.value)} size="10" />
                <button class='color5 choose svg2 change_img admin_display_off' onClick={set} style={{top: '40px'}}>
                </button>
           <div class='col-12 col-sm-12 col-md-4'>
           <div class="but_1" ><a href="#" class="ddott ">THE FASHION</a></div>
           
           </div>
        </div>
        <div class='col-4 tt'>
            <img src={setphoto5Ref.current} class='iimm'  alt=""/>
            <input type="text" class="  form-control2  abs form_img admin_display_off" style={{top: '40px'}} value={photo5}  onChange={e => setphoto5(e.target.value)} size="10" />
                <button class='color5 choose svg2 change_img admin_display_off' onClick={set} style={{top: '40px'}}>
                </button>
            <div class="but_1" ><a href="#" class="ddott ">THE FASHION</a></div>
        </div>
        <div class='col-4 tt'>
            <img src={setphoto6Ref.current}class='iimm' alt=""/>  
            <input type="text" class="  form-control2  abs form_img admin_display_off" style={{top: '40px'}} value={photo6}  onChange={e => setphoto6(e.target.value)} size="10" />
                <button class='color5 choose svg2 change_img admin_display_off'  onClick={set} style={{top: '40px'}}>
                </button>
            <div class="but_1" ><a href="#" class="ddott ">THE FASHION</a></div>
        </div>

</div>



    
</div>
    
  )
}

export default Fashion

