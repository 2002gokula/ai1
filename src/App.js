import "./App.css"
import Phone3d from "./component/3d Model/Phone3d"
import Header from "./component/Header/Header"
import Hero from "./component/hero/Hero"
import HeroEmail from "./component/HeroEmail/HeroEmail"
import MainPage from "./component/MainPage/MainPage"
import Resister from "./component/Resister/Resister"
import SmallAi from "./component/smallAi/SmallAi"
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom"
function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          exct
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Resister />

              <HeroEmail />
              <Phone3d />
            </>
          }
        />
        <Route path="/home" element={<MainPage />} />
        <Route path="/Smallpage" element={<SmallAi />} />
      </Routes>
    </div>
  )
}

export default App
