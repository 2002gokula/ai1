import React, { useEffect, useState } from "react"
import "./MainPage.css"

import FadeIn from "react-fade-in"
import Ai from "../3d Model/Ai"
import AiComments from "../MainPage/AiComment"
const MainPage = () => {
  const SmallScreen = () => {
    window.open(
      "https://spectacular-gumdrop-c58c09.netlify.app/home",
      "",
      "width=980px,height=709px"
    )
  }
  const [Timer, setTimer] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimer(true)
    }, 5000)
  }, [])

  return (
    <div className="MainPage">
      <div className="Animation__helloText">
        <FadeIn>
          <h1 className="Animation__text">Hello there!</h1>
        </FadeIn>
      </div>
      <div className="Animation__AiVoice">
        <FadeIn>
          <h2>hhhhhhhhhhhhhhhhhhhhhhhhhh</h2>
        </FadeIn>
      </div>
      <div className="Spline__Animation1">
        <Ai />
        {/* {Timer ? <Ai /> : <div></div>} */}
      </div>
      <div style={{ position: "relative" }}>
        <button onClick={SmallScreen}>small</button>
      </div>
    </div>
  )
}

export default MainPage
