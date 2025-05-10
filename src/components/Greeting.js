import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <label htmlFor="nameInput">Enter your name:</label>
      <br />
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name !== '' && <h2>Hello, {name}!</h2>}
    </div>
  );
};

export default Greeting;

