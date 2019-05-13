import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  const signInUpOut = !props.authenticated ? (
    <li><NavLink to="/signInUp" exact>Sign In</NavLink></li>
  ) : (
    <li><button type="button" onClick={() => props.signOut(props.history)}>Sign Out</button></li>
  );

  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Meal Hacks</NavLink></li>
        <li><NavLink to="/posts/new">New Meal</NavLink></li>
        {signInUpOut}
      </ul>
    </nav>
  );
};

export default Nav;
