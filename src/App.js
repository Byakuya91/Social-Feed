import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePosts from "./Components/CreatePost/CreatePost";
import "./App.css";

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
    <div className="container-fluid">
      <div className="row">
        <div className="col-mid-6">
          <div className="border-box">
            <CreatePosts addNewPost={addNewPost} />
          </div>
        </div>
        <div className="col-mid-6">
          <div className="border-box">
            <DisplayPosts parentPosts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
