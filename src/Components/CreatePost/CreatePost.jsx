import React, { useState } from 'react';


const CreatePosts = (props) => {

    // construct a post object that will enter our post array.
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    // creating a function to prevent the page from reloading 
    function handleSubmit(event){
        event.preventDefault();
        // object to hold inputs and set them to the state variables values. 
        let newEntry = {
            name: name,
            post: post
        };
       // adds the post to our array. 
        props.addNewPost(newEntry);
    }

    return ( 
    <form onSubmit={handleSubmit}> 
       <div className='form-group'>
       <label for = 'namelabel' style = {{"margin-right": "1rem"}}> <b>Name:</b></label> 
       <input id = 'namelabel' type="text" className='form-control' className = "name-text-size" placeholder='Please Enter your name.' value={name}  onChange ={(event)=> setName(event.target.value) }/>  
       </div>
        <div className='form-group'>
        <label for = 'postlabel' style = {{"margin-right": "2rem"}} > <b>Post:</b></label> 
       <textarea id = 'postlabel' type="text" className='form-control' className= "post-area-field  " style={{'margin-top':'1em' }} placeholder='Please Enter your post.'  value={post}onChange ={(event)=> setPost(event.target.value) } />   
        </div>
       <button type='submit' style={{'margin-top':'1em' }} className='btn btn-primary' className = "button-status" className = "submit-button"  >  <b> create a post</b> </button>
    </form>


     );
}
 
export default CreatePosts;