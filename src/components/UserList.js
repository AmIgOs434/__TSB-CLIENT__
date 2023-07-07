import React, { useContext } from 'react'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import UserItem from "./UserItem";

const UserList = observer( ()=>{
    const {user} = useContext(Context)
    return (
        
        <div className = "gx-1">
            {user.users.map(user =>
                <UserItem key={user.id} user={user}/>
            )}
        </div>
        
  );
  
});

export default UserList