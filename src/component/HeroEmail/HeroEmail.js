import React from "react"
import "./HeroEmail.css"


const HeroEmail = () => {
  return (
    <div className="HeroEmail">
      <h1>Receive transmissions</h1>
      <p>
        Unsubscribe at any time. <a href="#">Privacy policy↗</a>
      </p>
      <div className="Email__div">
        <div className="Email">
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="Email_button">
          <button>
            <img src="/images/arrow.png" alt="" />
          </button>
        </div>
      </div>

      
    </div>
  )
}

export default HeroEmail
