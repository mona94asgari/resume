import React from 'react';
import './DownIcon.css';

const downIcon =(props) => {
   return(     
    <div className='icon'>
    <img src={props.icon} alt="icon" width='20px' height='25px'/>
    </div>
   )
}
export default downIcon