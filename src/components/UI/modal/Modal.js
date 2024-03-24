import React from 'react';
import './Modal.css';
import BackDrop from '../backdrop/Backdrop';

const Modal = (props)=>{
    return(
        <React.Fragment>
           <BackDrop show={props.show} modalClosed={props.modalClosed}/>
            <div className="Modal"
            style={{transform:props.show?'translateX(0)':'translateX(-100vw)',
                    opacity:props.show?'1':'0'}}
            >
                {props.children}
            </div>
        </React.Fragment>
        
    )
}
export default React.memo(Modal)