import React, { useEffect, useState } from "react"
import "./SmallAi.css"
import FadeIn from "react-fade-in"
import { Avatar } from "@material-ui/core"
import Ai from "../3d Model/Ai"
import { Button } from "@material-ui/core"
const SmallAi = () => {
  const [Timer, setTimer] = useState(false)
  const date = new Date()
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var ampm = hours >= 12 ? "pm" : "am"
  hours = hours % 12
  hours = hours ? hours : 12 // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes
  var strTime = hours + ":" + minutes + " " + ampm

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimer(true)
    }, 5000)
  }, [])
  return (
    <div className="SmallAi">
      <div className="SmallPage">
        <div className="RightSide__SmallScreen">
          <div className="Menu__Bar">
            <img className="Menu__icon" src="/images/menu.png" alt="" />
          </div>
          <Button onClick={() => window.close()}>
            {" "}
            <img className="Home__Icon" src="/images/home.png" alt="" />
          </Button>
          <img className="Search__Icon" src="/images/search.png" alt="" />
          <img className="FullScreen__Icon" src="/images/full.png" alt="" />
          <h2 className="Setting__h2">Setting</h2>
          <img className="Setting__Icon" src="/images/settings.png" alt="" />
        </div>
        <div className="MiddleSide__SmallScreen">
          <div className="SmallScreen__Header">
            <img className="Wifi__Icon" src="/images/wifi.png" alt="" />
            <h3 className="Time__SmallScreen">{strTime}</h3>
            <Avatar className="Avatar__IconImage" />
          </div>

          <div className="Animation__helloText">
            <FadeIn>
              <h1 style={{ color: "black" }} className="Animation__text">
                Hello there!
              </h1>
            </FadeIn>
          </div>
          <div
            style={{ color: "black", overflow: "hidden" }}
            className="Animation__AiVoice"
          >
            <FadeIn>
              <h2
                style={{
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                hhhhhhhhhhhhhdffffffffffffff
              </h2>
            </FadeIn>
          </div>
          <div className="Spline__Animation1">
            {/* {Timer ? <Ai /> : <div></div>} */}
          </div>
          <div style={{ position: "relative" }}>
            {/* <button onClick={SmallScreen}>small</button> */}
          </div>
        </div>
        {/* <div className="LeftSide__SmallScreen"></div> */}
      </div>
    </div>
  )
}

export default SmallAi
