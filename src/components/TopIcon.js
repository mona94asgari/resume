import React from 'react';
import './TopIcon.css';

const topIcon = (props) => {
   return (
      <div className='top-icon'>
         <img
            src={props.icon}
            alt="icon"
            width='20px'
            height='25px' />
      </div>
   )
}
export default topIcon