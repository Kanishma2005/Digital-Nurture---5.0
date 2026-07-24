import React from 'react';
import { IndianPlayers } from './IndianPlayers';

function OddPlayers() {
  const [first, , third, , fifth] = IndianPlayers;
  return (
    <div>
      <div>{first}</div>
      <div>{third}</div>
      <div>{fifth}</div>
    </div>
  );
}

export default OddPlayers;
