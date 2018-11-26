import React from 'react';
import Logo from './logo';
import Nav from './navigation';
import UserMenu from './userMenu';
import logo from './logo.jpg';
import avatar from './avatar.png';

const Header = () => (
  <header>
    <Logo src={logo} />
    <Nav />
    <UserMenu name="Bob Ross" src={avatar} />
  </header>
);

export default Header;
