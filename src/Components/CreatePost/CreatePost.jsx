import React, { useState } from 'react';

const CreatePosts = (props) => {

    // construct a post object that will enter our post array.
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    // creating a function to prevent the page from reloading 
    function handleSubmit(event){
        event.preventDefault();
    }

    return ( 
       <form onSubmit={handleSubmit}> 
       <labeL>Name</labeL> 
       <input type="text" value={name}  onChange ={(event)=> setName(event.target.value) }/>  
       <labeL>Post</labeL> 
       <input type="text" value={post}onChange ={(event)=> setPost(event.target.value) } />
       <button type='submit'>create a post </button>
       </form>


     );
}
 
export default CreatePosts;