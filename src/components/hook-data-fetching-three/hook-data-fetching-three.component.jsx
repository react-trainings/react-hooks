import React, { useState } from 'react';
import Axios from 'axios';

const HookDataFetchingThree = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  const handleFetchPost = () => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleFetchPost}>Fetch Post</button>
      <div>
        <span>{post.id ? post.id + ':' : ''}</span>
        <span>{post.title}</span>
      </div>
    </div>
  );
};

export default HookDataFetchingThree;
