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
        // console.log(newEntry);
        props.addNewPost(newEntry);
    }

    return ( 
    <form onSubmit={handleSubmit}> 
       <div className='form-group'>
       <labeL>Name</labeL> 
       <input type="text" className='form-control' value={name}  onChange ={(event)=> setName(event.target.value) }/>  
       </div>
        <div className='form-group'>
        <label>Post</label> 
       <textarea type="text" className='form-control'  value={post}onChange ={(event)=> setPost(event.target.value) } />   
        </div>
       <button type='submit'  className='btn btn-primary'>create a post </button>
    </form>


     );
}
 
export default CreatePosts;