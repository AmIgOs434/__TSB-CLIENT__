


import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar11111";
import Footer from "./components/footer.js";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check, check_admin} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import ScrollToTop from './components/ScrollTop';
import './pages/spinner.scss'
const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
  
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))


        check_admin().then(data => {
                
            user.setIsAdmin(true)
            
        })
    }, [])


    if (loading) {
      return <div style={{backgroundColor:'#f8f8f8'}} class="d-flex justify-content-center mt-50">
<div class="loader">
	<div class="loader__ball"></div>
	<div class="loader__ball"></div>
	<div class="loader__ball"></div>
</div>
    </div>
  }
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <NavBar />
            <AppRouter />
            <Footer />
        
        </BrowserRouter>
        
    );
    
});

export default App;