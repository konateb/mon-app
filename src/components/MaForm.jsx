import React, { useState } from "react";

const MaForm = () => {
  const [text, setText] = useState("");
  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("A name was submitted: " + text);
    setText("");
  };
  return (
    <div className="flex-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={text} onChange={handleInput} />
        </label>
        <input
          type="submit"
          value="Submit"
          disabled={text.length <= 6 ? true : false}
        />
      </form>
      <div>
        <p>{text}</p>
        <p className="jaune">{text.length}</p>
      </div>
    </div>
  );
};

export default MaForm;
