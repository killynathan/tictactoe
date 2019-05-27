import React from "react";

const Square = ({ content, borderBottom, borderRight, onClick }) => {
  const computedStyles = {
    ...styles.container,
    borderRight: borderRight ? "1px solid black" : 0,
    borderBottom: borderBottom ? "1px solid black" : 0,
    cursor: "pointer"
  };
  return (
    <div style={computedStyles} onClick={onClick}>
      <h3>{content}</h3>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
};

export default Square;
