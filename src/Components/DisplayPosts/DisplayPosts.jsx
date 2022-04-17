import React, { useState } from 'react';




// Component is designed to display the posts created by the user.
const DisplayPosts = (props) => {
    return ( 
        // Paragraph to display the name and the post 
      <p>


      {props.parentPosts.map((post)=>{
          return(
            <div>
              <h3>{post.name}</h3>
              <p> {post.post}</p>
            </div>
             
           
  
             
          )
       })}   
       

      </p>


     );
}
 
export default DisplayPosts;