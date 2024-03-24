import React from 'react';
import './MenuItems.css';
import MenuItem from './MenuItem/MenuItem';
const MenuItems = ()=>{
    return(
        <ul className="MenuItems">
            <MenuItem link="/" active>
                صفحه اصلی
            </MenuItem>
            <MenuItem link={
                     {
                        pathname:"/add-student",
                        search:"?sort-name",
                        hash:"the-hash",
                        state:{fromDashbord:true}
                     }
                     } >
                
                اضافه کردن دانش آموزان           
             </MenuItem>
        </ul>
    )
}
export default MenuItems