import React, { useState } from "react";

const Counter = (props) => {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  const [value, setValue] = useState(props.init);
  
  
  return (
    <div>
      <p>Vous avez cliqué {value} fois</p>
      <button onClick={setValue(value + 1)}>+</button>
      
    </div>
  );
};

export default Counter;
