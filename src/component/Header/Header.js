import React from "react"
import "./Header.css"
const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">
        <img src="images/logo.png" alt="" />
        <h2>Boldo</h2>
      </div>
      <div className="Header__title">
        <h1>Product</h1>
        <h1>Product</h1>
        <h1>Product</h1>
      </div>

      <div className="Header__button">
        <button>Log in</button>
      </div>
    </div>
  )
}

export default Header
