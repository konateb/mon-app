import React, { useState } from "react";

const MaForm = () => {
  const [text, setText] = useState("");
  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Le nom submis est: " + text);
    setText("");
  };
  return (
    <>
      <div className="flex-container">
        <form onSubmit={handleSubmit}>
          <label>
            Tappez 6 caractères:
            <input type="text" value={text} onChange={handleInput} />
          </label>
          <input
            type="submit"
            value="Submit"
            disabled={text.length < 6 ? true : false}
          />
          <div>
            <p>{text}</p>
            {text.length === 0
              ? false
              : true && <p className="rouge">{text.length} caractères</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default MaForm;
