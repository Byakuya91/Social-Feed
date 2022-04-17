import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePosts from "./Components/CreatePost/CreatePost";

function App() {
  const [posts, setPosts] = useState([
    {
      name: "Neil ",
      post: "This is a test post.The characters should be on display. ",
    },
  ]);
  return (
    <div>
      <CreatePosts />
      <DisplayPosts parentPosts={posts} />
    </div>
  );
}

export default App;
