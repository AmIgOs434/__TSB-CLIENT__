import React, {useContext, useEffect} from 'react';


import {Context} from "../index";

import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import UserItem from '../components/UserItem';
import { fetchUsers } from '../http/userAPI';
const Check  = observer( ()=>{
    const {user} = useContext(Context)




    useEffect(() => {
        fetchUsers().then(data => user.setUsers(data))
    }, [])
    
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
                       Emile
                    </div>
                    <div class='col-12_5'>
                      Роль
                    </div>
                    <div class='col-12_5'>
                       Дата регистрации
                    </div>
                    <div class='col-12_5'>
                       Телефон
                    </div>
                    <div class='col-12_5'>
                       Статус
                    </div>
                    <div class='col-12_5'>
                      Промокод
                    </div>
                    <div class='col-12_5'>
                       Удалить
                    </div>

                </div>
                
                <UserItem/>
             </div>


            </div>
        
       
        </div>
    );
});

export default Check;
