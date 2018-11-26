import React from 'react';

const UserMenu = ({ src, name }) => (
  <div>
    <img src={src} width="100" height="100" alt="Avatar" />
    <p>{name}</p>
  </div>
);

export default UserMenu;
