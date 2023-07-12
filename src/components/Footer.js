import React from "react"
import { Navbar, NavbarBrand } from "reactstrap"

const Footer = () => {
  return(
    <>
      <Navbar
        className="my-2"
        color="warning"
        fixed="bottom"
      >
        <NavbarBrand href="/">
          &copy; Justin & Henri
        </NavbarBrand>
      </Navbar>
    </>
  )
}

export default Footer