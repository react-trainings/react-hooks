import React from 'react';
import { Link } from 'react-router-dom';

import examples from './examples-data';

const HomePage = () => {
  return (
    <div>
      <ul>
        {examples.map(example => (
          <li key={example.id}>
            <Link to={example.url}>{example.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
