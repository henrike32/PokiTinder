import React from "react";
import { Navbar } from "reactstrap";

const Header = () => {
  const imageUrl =
    "https://images.squarespace-cdn.com/content/v1/5b47bb08f8370a85913c511a/1586523429769-V7KX8S0847N3H9UVJW07/Pokemon+Preorder+Header.png";

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "17vh",
        background: `url(${imageUrl}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    ></header>
  );
};

export default Header;
