import React from 'react';
const Button = ({ onClick, value }) => {
  console.log(`Button`);
  return (
    <div>
      <button onClick={onClick}>{value}</button>
    </div>
  );
};

export default Button;
