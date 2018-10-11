import React from 'react';

import { NavLink } from 'react-router-dom';

const routersData = [
  {
    name: '首页',
    to: '/dashboard',
  },
  {
    name: '账户',
    to: '/accounts',
  },
  {
    name: '联系人',
    to: '/addresses',
  },
  {
    name: '选举',
    to: '/democracy',
  },
  {
    name: '链中继',
    to: '/chains',
  },
];

const NavItem = props => {
  return (
    <div className="nav-item">
      <NavLink className="nav-item__link" activeClassName="nav-item__link--active" to={props.to}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Header = () => {
  return (
    <header className="page-header">
      <div className="wrapper">
        <div className="brand">Chainx App</div>
        <nav className="nav-list">
          {routersData.map(router => (
            <NavItem {...router} key={router.name} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
