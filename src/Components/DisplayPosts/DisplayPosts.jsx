import React, { useState } from 'react';




// Component is designed to display the posts created by the user.
const DisplayPosts = (props) => {
    return ( 
        // Paragraph to display the name and the post 
      <p>


      {props.parentPosts.map((post)=>{
          return(

            // <ul>
            //    <li>{post.name}</li> 
            //    <li>{post.post}</li> 
            // </ul>

            <div>
              <h3>{post.name}</h3>
              {post.post}

            </div>
             
           
        
             
          )
       })}   
       

      </p>


     );
}
 
export default DisplayPosts;