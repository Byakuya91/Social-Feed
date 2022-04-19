import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';



// Component is designed to display the posts created by the user.
const DisplayPosts = (props) => {
    return ( 
        // Paragraph to display the name and the post 
      <p>


      {props.parentPosts.map((post)=>{
          return(
            <div>
              <h3 className='name-text'>  {post.name}</h3>
              <p className='post-text'>  {post.post}</p>
              <CustomButton></CustomButton>
            </div>
             
           
  
             
          )
       })}   
       

      </p>


     );
}
 
export default DisplayPosts;