import React from 'react';
import useDatahooks from '../hooks/useDatahooks';
import HomeDetails from './HomeDetails';

function Home() {
  const hooks = useDatahooks();
  const { errorMessage, details } = hooks;
  const { todaySoFar, yesterdaySLP, average } = details[0];
  return (
    <>
      <h1>
        { errorMessage.message }
      </h1>
      <HomeDetails todaySoFar={todaySoFar} yesterdaySLP={yesterdaySLP} average={average} />
    </>
  );
}

export default Home;
