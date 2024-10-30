import React from 'react';

const InputField = ({ text, handleSubmit, handleInput }) => {
  return (
    <div>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Done</button>
    </div>
  );
};

export default InputField;
