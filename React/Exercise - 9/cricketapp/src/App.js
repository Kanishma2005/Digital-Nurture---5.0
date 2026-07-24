import React from 'react';
import ListofPlayers from './ListofPlayers';
import Scorebelow70 from './Scorebelow70';
import OddPlayers from './OddPlayers';
import EvenPlayers from './EvenPlayers';
import ListofIndianPlayers from './ListofIndianPlayers';

function App() {
  var flag = true;

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Indian Team</h1>
        <h1>Odd Players</h1>
        <OddPlayers />
        <h1>Even Players</h1>
        <EvenPlayers />
        <h1>List of Indian Players Merged</h1>
        <ListofIndianPlayers />
      </div>
    );
  }
}

export default App;
