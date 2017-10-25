import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import SearchBar from "./search-bar";
import Menu from "./menu";

const Body = props => {
  return (
    <div className="explorer">
      <Header />
      <SearchBar />
      <Menu />
      <div className="explorer-body">{props.children}</div>
    </div>
  );
};

Body.propTypes = {
  children: PropTypes.node
};

export default Body;
