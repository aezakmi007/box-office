import React, { memo } from 'react';
import { useLocation } from 'react-router';
import { NavList, LinkStyled } from './Navs.styled';

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
  const location = useLocation();
  return (
    <div>
      <NavList>
        {LINK.map(item => (
          <li>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? 'active' : ''}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
}

export default memo(Navs);
