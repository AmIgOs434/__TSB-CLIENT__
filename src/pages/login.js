
import React, { useContext, useState} from 'react';
import {login, registration} from "../http/userAPI";
import { ADMIN_ROUTE, FESHION_ROUTE} from "../utils/consts";
import { useLocation,useNavigate } from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import $ from 'jquery'
import Bpages from './bpages';
const login2 = observer(()=>{

    
    const{user}= useContext(Context)
    const location = useLocation()

    const [password, setPassword] = useState('')
    const [password1, setPassword1] = useState('')
    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [email1, setEmail1] = useState('')


    var cla = $('.height1')
    var out = $('.out')
  var adminka = $('.adminka_')
  const user_ = localStorage.getItem('token')



    const log = async () => {
      try {
          let data;
          
          data = await login(email, password);
          
         
          user.setUser(data)
          user.setIsAuth(true)
  
          var heart_ = $('.heart_')
          var out = $('.out')
          var home = $('.class')
          var cla = $('.adminka_')
          home.addClass('display_')
          out.removeClass('display_')
          heart_.addClass('admin_display_on')
          console.log(data.role)
          if(data.role==='ADMIN'){
            user.setIsAdmin(true)
            cla.removeClass('display_')

            console.log(user.isAdmin)
            history(ADMIN_ROUTE)
        
          }else{
            history(FESHION_ROUTE)
      
          }

          
      } catch (e) {
          alert(e.response.data.message)
      }
  
  }
  const reg = async () => {
    try {
        let data;
        data = await registration(email1, password1);
        user.setUser(data)
        user.setIsAuth(true)
        history(FESHION_ROUTE)
    } catch (e) {
        alert(e.response.data.message)
    }

}

  return (
<body class='color__'> 
<Bpages/>
<div class='contain'>
<div class='row'>
 <div class='col-12 col-md-6 col-sm-12 log'>
 <form >

<h6 class='sign'>SIGN IN</h6>
<div class="mb-3">

  <input type="email" placeholder="Логин" value={email} onChange={ e => setEmail(e.target.value)} class="form-control in-put form-control_log " id="exampleInputEmail1" />
  <div id="emailHelp" class="form-text"></div>
</div>
<div class="mb-3">

  <input type="password" placeholder="Пароль"   value={password}  onChange={ e => setPassword(e.target.value)} class="form-control in-put form-control_log" id="exampleInputEmail2" />
  
</div>

{/* <div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>

</div> */}

<div type="submit" class="but0 sig"onClick={log} o >Войти</div>

<div id='text_5'>Не зарегистрированы ? <br/> Присоединяйтесь к нам <img src="assets/img/product-img/212.svg"/>
</div>
</form>

 </div>


 <div class='col-12 col-md-6 col-sm-12 reg'>
 <div class='col-100'>
<div class ='vertical-line1'>
</div>
</div>
 <form class='colo'>

<h6 class='sign'>JOIN</h6>

<div class="mb-3">
  <input type="email" placeholder="Логин"  value={email1} onChange={ e => setEmail1(e.target.value)}  class="form-control in-put form-control_log" id="exampleInputEmail1"/>

</div>

<div class="mb-3">
  <input type="password" placeholder="Пароль" value={password1}  onChange={ e => setPassword1(e.target.value)}  class="form-control in-put form-control_log" id="exampleInputEmail2" />
</div>





<div type="submit" class="but0 sig"onClick={reg} > Зарегистрироваться</div>



</form>
</div>
</div>


</div>



</body>


  );
})
export default login2