
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteUser, getUserInfo } from '../http/userAPI';
const UserItem = ()=>{
    
    const [data,SetData] = useState([])
    useEffect(()=>{
        


getUsers()
    },[])
    const getUsers = async() =>{
        const response =await getUserInfo() 
       
        if(response.status === 200){
           
           SetData(response.data)
      
        }
   
}



    const onDeleteUser = async(id) =>{
         if(window.confirm('Точно удаляем ?')){
         await deleteUser(id) 
            getUsers()
         
    }
}
    const navigate = useNavigate();
  return (

              <div  className=''>
                {data && data.map(user =>
                <div  id='register'  class='row' key={user.id} user={user}> 
                    <div class='col-12_5'>
                    {user.id}
                    </div>
                    <div class='col-12_5'>
                    {user.email}
                    </div>
                    <div class='col-12_5'>
                    {user.role}
                    </div>
                    <div class='col-12_5'>
                    {user.createdAt}
                    </div>
                    <div class='col-12_5'>
                    {user.phone}
                    </div>
                    <div class='col-12_5'>
                    {user.satus}
                    </div>
                    {user.promocode}
                    <div class='col-12_5'>
                        
                

                    </div>
                    <div class='col-12_5'>
                    <div id='remove'
                       onClick={()=> onDeleteUser(user.id )}>Удалить</div>
                    </div></div>

)}

                        
                      </div>





  )
}

export default UserItem