import React from "react";

const SpecialButton = props => {
  console.log("specials", props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="special-button" onClick={console.log('Special Button Clicked')}>{props.text}</button>
    </>
  );
};

export default SpecialButton;
