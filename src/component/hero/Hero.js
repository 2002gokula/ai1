import React from "react"
import "./Hero.css"
import { Nav } from "react-bootstrap"
import Link, { useNavigate } from "react-router-dom"
const Hero = () => {
  const history = useNavigate()
  return (
    <div className="Hero">
      <div className="Hero__title">
        <h3>A Fast Blockchain.</h3>
        <h4>Scalable AI.</h4>
        <p>
          Our technology performing fast blockchain (120K TPS) and it has
          guaranteed AI-based data security. Proof of Stake, its consensus
          algorithm enables unlimited speeds.
        </p>
        <div className="Hero__Button">
          <button onClick={() => history("/home")} className="button__hero">
            Get started
          </button>

          <button className="button__hero1">Ecosystems</button>
        </div>
        <img className="Hero__BannerImg" src="/images/Banner.png" alt="" />
      </div>

      <div className="Hero__Notification">
        <div className="Notification__rightSide">
          <h1>Save time by building fast with Boldo Template </h1>
          <p>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="Notification__Button">
            <button className="Button__for__buy">Buy</button>
            <button className="Button__for__Explore">Explore</button>
          </div>
          <span className="Color__red"></span>
        </div>
        <div className="Notification__leftSide">
          <img src="/images/hero.svg" alt="" />
          <span className="Hero__color"></span>
        </div>
      </div>
    </div>
  )
}

export default Hero
