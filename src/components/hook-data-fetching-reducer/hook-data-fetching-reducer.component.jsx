import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts/1';

const initialState = {
  loading: true,
  error: '',
  posts: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        posts: action.payload
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: 'Something went wrong: ' + action.payload,
        posts: {}
      };
    default:
      return state;
  }
};

const HookDataFetchingReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(response => dispatch({ type: 'FETCH_SUCCESS', payload: response.data }))
      .catch(error => dispatch({ type: 'FETCH_ERROR', payload: error.message }));
  }, []);

  return (
    <div>{state.loading ? <span>Loading...</span> : <span>{state.error ? state.error : state.posts.title}</span>}</div>
  );
};

export default HookDataFetchingReducer;
