import React, { useState } from 'react';
import "./CustomButton.css";


const CustomButton = (props) => {
    return ( 

      <div>
          <button>{props.message}</button>
      </div>

     );
}
 
export default CustomButton;