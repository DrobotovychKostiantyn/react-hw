import React from 'react';
import Logo from '../Logo/index';
import Nav from '../Navigation/index';
import UserMenu from '../UserMenu/index';
import logo from '../assets/logo.jpg';
import avatar from '../assets/avatar.png';

const Header = () => (
  <header>
    <Logo src={logo} />
    <Nav />
    <UserMenu name="Bob Ross" src={avatar} />
  </header>
);

export default Header;
