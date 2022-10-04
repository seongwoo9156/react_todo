import React from "react";
import "./style.css";

const Layout = (props) => {
  return <div className="wrap">{props.children}</div>;
};

export default Layout;
