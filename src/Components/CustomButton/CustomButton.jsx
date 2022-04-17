import React, { useState } from 'react';
import "./CustomButton.css";


const CustomButton = (props) => {

    // state variables for updating the button whenever it is pushed.
    const [buttonClass,setButtonClass ] = useState("inactive");

     // function to turn the button to active or inactive
     function handleClick(){
       if(buttonClass === "inactive"){
           setButtonClass("active");
       }
       else{
           setButtonClass("inactive");
       }

     }

    return ( 

      <div>
          <button className={buttonClass}  onClick={handleClick}>{props.message}</button>
      </div>

     );
}
 
export default CustomButton;