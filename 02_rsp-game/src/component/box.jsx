import React from "react";

const Box = (props) => {
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "Draw" &&
    props.result !== ""
  ) {
    result = props.result === "Win" ? "Lose" : "Win";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <h2>{props.title}</h2>
      <h3>{props.item && props.item.name}</h3>
      <img className="item-img" src={props.item && props.item.img} />
      <h3>{result}</h3>
    </div>
  );
};

export default Box;
