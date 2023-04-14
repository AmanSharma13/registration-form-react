import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      &copy; 2023 @MyWebSite.com
      <Link className="text-black font-bold" href="/">
        MyWebSite.com
      </Link>
    </div>
  );
};

export default Footer;
