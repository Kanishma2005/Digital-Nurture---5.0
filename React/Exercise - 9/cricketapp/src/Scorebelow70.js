import React from 'react';
import { players } from './ListofPlayers';

function Scorebelow70() {
  const filteredPlayers = players.filter(player => player.score <= 70);

  return (
    <div>
      {filteredPlayers.map((player, index) => (
        <div key={index}>Mr. {player.name} {player.score}</div>
      ))}
    </div>
  );
}

export default Scorebelow70;
