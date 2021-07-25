import React from 'react';

const Refresh = ({refresh}) => {
  return (
    <div>
    <h2>no tours left</h2>
    <button className="btn" onClick={refresh}>refresh</button>
  </div>
  );
};

export default Refresh;