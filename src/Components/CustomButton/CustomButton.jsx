import React, { useState } from 'react';
import "./CustomButton.css";
// import App from '../../App';


const CustomButton = (props) => {

    // state variables for updating the button whenever it is pushed.
    const [likeStatus,setLikeStatus ] = useState("neutral");

     // function to turn the button to active or inactive
     function renderLikeButtonStyle(){
       if(likeStatus === "Liked"){
          
          return "active"
        
       }
       else if (likeStatus == "neutral"){
          
           return "inactive"
       
       }
       else{
           return "inactive"
       }

     }
     function renderDislikeButtonStyle(){
        if(likeStatus === "Disliked"){
           
           return "dislike"
         
        }
        else if (likeStatus == "neutral"){
           
            return "inactive"
        
        }
        else{
            return "inactive"
        }
 
      }
    return ( 

      <div>
          {/* {likeStatus === "Liked" ? <buttonClass style ="active">Liked!</buttonClass> : null} */}
          <button onClick = {()=> setLikeStatus("Liked")} className ='toggle-button' className={renderLikeButtonStyle()}>Like
          </button>
          <button onClick = {()=> setLikeStatus("Disliked")}className ='toggle-button' className={renderDislikeButtonStyle()}>Disliked
          </button>
      </div>

     );
}
 
export default CustomButton;