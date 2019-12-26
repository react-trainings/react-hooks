import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const HookDataFetchingTwo = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setPost(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="post-container">
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <div>
        <span>
          <b>{post.id}:</b>{' '}
        </span>
        <span>{post.title}</span>
      </div>
    </div>
  );
};

export default HookDataFetchingTwo;
