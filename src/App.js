import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePosts from "./Components/CreatePost/CreatePost";
import CustomButton from "./Components/CustomButton/CustomButton";

function App() {
  const [posts, setPosts] = useState([]);
  // function to add new posts to DisplayPosts component.
  function addNewPost(post) {
    // create a temporary variable to hold the posts
    let tempPosts = [...posts, post];

    // updating the state variable by setting it equal to tempPosts
    setPosts(tempPosts);
  }

  return (
    <div>
      <CreatePosts addNewPost={addNewPost} />
      <DisplayPosts parentPosts={posts} />
    </div>
  );
}

export default App;
