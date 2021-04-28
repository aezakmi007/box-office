import React from 'react';
import { Link } from 'react-router-dom';

const LINK = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/started',
    text: 'stated',
  },
];
function Navs() {
  return (
    <div>
      <ul>
        {LINK.map(item => (
          <li>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navs;
