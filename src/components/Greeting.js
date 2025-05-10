import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <label htmlFor="nameInput">Enter your name:</label>
      <br />
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginTop: '10px', padding: '8px', fontSize: '16px' }}
      />
      {name.trim() && (
        <h2 style={{ marginTop: '20px' }}>Hello, {name}!</h2>
      )}
    </div>
  );
};

export default Greeting;
