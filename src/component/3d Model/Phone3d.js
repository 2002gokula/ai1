import React from "react"
import "./Phone3d.css"
import Spline from "@splinetool/react-spline"
const Phone3d = () => {
  return (
    <div className="Phone3d">
      <div className="RightSide">
        {/* <Spline
          className="Phone__3d"
          width="500px"
          scene="https://prod.spline.design/95F2Fo9RZPxSI7Sj/scene.splinecode"
        /> */}
      </div>
      <div className="leftSide">
        <h2>Binansea</h2>
        <h1>Create & Sell NFT With Binansea</h1>
        <p>
          The purpose of lorem ipsum is to create a natural looking block of
          text (sentence, paragraph, page, etc.) that doesn't distract from the
          layout. A practice not without controversy, laying out pages with
          meaningless
        </p>
        <button>Try</button>
      </div>
    </div>
  )
}

export default Phone3d
