import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";

function App() {
  const [posts, setPosts] = useState([
    { name: "Neil ", post: "This is a test post. " },
  ]);
  return (
    <div>
      <DisplayPosts parentPosts={posts} />
    </div>
  );
}

export default App;
