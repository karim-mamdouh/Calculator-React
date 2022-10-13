import React from "react";
import PropTypes from "prop-types";

const CalculatorButton = ({
  text,
  id,
  className = "h-16 w-20",
  bgColor = "bg-slate-600",
  clickHandler,
}) => {
  const classes =
    className === undefined
      ? ""
      : className +
        " " +
        bgColor +
        " text-white hover:text-black border border-black hover:border-white";
  return (
    <button className={classes} id={id} onClick={clickHandler}>
      {text}
    </button>
  );
};

CalculatorButton.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  className: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default CalculatorButton;
