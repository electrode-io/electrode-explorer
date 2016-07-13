import React from "react";

const BuyTogether = (props) => {
  return (
    <div className="buyTogether">Hello {props.name}!</div>
  );
};

BuyTogether.displayName = "BuyTogether";

BuyTogether.propTypes = {
  "name": React.PropTypes.string
};

BuyTogether.defaultProps = {
  name: "React"
};

export default BuyTogether;
