import React, { useState } from 'react';
import multiplyData from './multiplyData';

function Test1() {
  const [data, setData] = useState([
    { value: 2, multiplier: 2 },
    { value: 3, multiplier: 3 },
  ]);

  const processData = () => {
    setData(multiplyData(data));
  };

  return (
    <div>
      {data.map((result, index) => {
        return <p key={index}>{result.value} * {result.multiplier}</p> 
      })}
      <button type="button" onClick={processData}>
        Run
      </button>
    </div>
  );
};

export default Test1;
