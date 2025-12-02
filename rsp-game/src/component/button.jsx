import React from "react";

const Button = (props) => {
  const play = (userChoice) => {
    console.log("selected", userChoice);
  };

  return (
    <div>
      <button onClick={() => play(props.name)} className="button">
        {props.name}
      </button>
    </div>
  );
};

export default Button;
