import React from 'react';

import { NavLink } from 'react-router-dom';

import routersData from './appRouters';

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
            <NavItem name={router.name} to={router.path} key={router.name} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
