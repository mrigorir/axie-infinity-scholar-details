import React from 'react';
import useDatahooks from '../hooks/useDatahooks';
import { getXpAxie } from '../services/API';

function Home() {
  const details = useDatahooks();
  console.log(getXpAxie());
  if (details) {
    return (
      <div>
        Home.
      </div>
    );
  }
  return (
    <div>
      Nothing to show.
    </div>
  );
}

export default Home;
