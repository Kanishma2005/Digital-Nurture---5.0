import React from 'react';
import { IndianPlayers } from './IndianPlayers';

function ListofIndianPlayers() {
  return (
    <div>
      {IndianPlayers.map((player, index) => (
        <div key={index}>{player}</div>
      ))}
    </div>
  );
}

export default ListofIndianPlayers;
