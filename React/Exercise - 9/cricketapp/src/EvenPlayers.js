import React from 'react';
import { IndianPlayers } from './IndianPlayers';

function EvenPlayers() {
  const [, second, , fourth, , sixth] = IndianPlayers;
  return (
    <div>
      <div>{second}</div>
      <div>{fourth}</div>
      <div>{sixth}</div>
    </div>
  );
}

export default EvenPlayers;
