import React, { useState,useContext } from 'react';
import './Toolbar.css';

import Button from '../../../components/UI/button/button';
import Logo from '../../../components/logo/logo'
import MentuItems from '../MenuItems/MenuItems'
import Modal from '../../../components/UI/modal/Modal'
import SignIn from '../../../components/user/signIn/signIn'
import SideDrawer from '../SideDrawer/SideDrawer';
import {AuthContext} from '../../../context/Auth/autContext';
import { ThemeContext } from '../../../context/Theme/themeContext';
import {withRouter} from 'react-router-dom';

const Toolbar = (props)=>{
    
    
    const authContext=useContext(AuthContext);
    const themeContext=useContext(ThemeContext);
    const{lightTheme,light,dark}=themeContext;
    const theme=lightTheme?light:dark;
    const[showModal,setShowModal]=useState(false);
    const[openSideDrawer,setOpenSideDrawer]=useState(false)
    const modalHandler=()=>{
       setShowModal(true);
       
    }
    const modalClosed=()=>{
        setShowModal(false);
    }
    const sideDrawerHandler=()=>{
     setOpenSideDrawer(true);
    }
    const closeDrawer=()=>{
        setOpenSideDrawer(false); 
    }
    const logout=()=>{
       // authContext.logout();
       authContext.dispatch({type:'logout'});
      
         props.history.replace('/');
       
    }
    const themeHandeler=()=>{
       themeContext.changeTheme();
    }
    let auth=false;
    const userInfo=JSON.parse(localStorage.getItem('user'));
    if(userInfo)
    {
        auth=true;
    }
    return(
        <React.Fragment>
             <SideDrawer show={openSideDrawer} closeDrawer={closeDrawer} />
        <header className="Toolbar" style={{background:theme.bg,color:theme.syntax}}>
            <div onClick={sideDrawerHandler}>HAMBERGER ICON</div>
            
            <span className="showNav" onClick={themeHandeler}>
            <Logo height="80%" />
            </span>
            <span className="showNav">
            <nav ><MentuItems/></nav>
            </span>
            <span className="showNav">
           {auth?<Button btnType="danger" clicked={logout}>خروج</Button>:
           <Button btnType="danger" clicked={modalHandler}>ورود و ثبت نام</Button>}
            </span>
             
            
            
            <Modal show={showModal} modalClosed={modalClosed}>
              <SignIn/>
            </Modal>     
        </header>
        </React.Fragment>
       
    )
}
export default withRouter(Toolbar);