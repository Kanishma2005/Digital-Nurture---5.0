import React from 'react';

export const players = [
  { name: "Sachin", score: 95 },
  { name: "Rahul", score: 78 },
  { name: "Dhoni", score: 72 },
  { name: "Virat", score: 85 },
  { name: "Rohit", score: 65 },
  { name: "Raina", score: 55 },
  { name: "Yuvraj", score: 68 },
  { name: "Jadeja", score: 45 },
  { name: "Hardik", score: 50 },
  { name: "Bumrah", score: 30 },
  { name: "Shami", score: 25 }
];

function ListofPlayers() {
  return (
    <div>
      {players.map((player, index) => (
        <div key={index}>Mr. {player.name} {player.score}</div>
      ))}
    </div>
  );
}

export default ListofPlayers;
