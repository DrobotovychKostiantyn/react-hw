import React from 'react';
import history from './order-history.json';

const Table = () => (
  <table>
    <tbody>
      <tr>
        <th>Date</th>
        <th>Price</th>
        <th>Address</th>
        <th>Rating</th>
      </tr>
      {history.map(item => (
        <tr key={item.id}>
          <td>{item.date}</td>
          <td>{item.price}</td>
          <td>{item.address}</td>
          <td>{item.rating}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
