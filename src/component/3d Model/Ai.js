import React from "react"
import Spline from "@splinetool/react-spline"
import FadeIn from "react-fade-in/lib/FadeIn"
// Import the Artyom library
import Artyom from "artyom.js"
import "./Ai.css"
// Import the previously created class to handle the commands from another file
import ArtyomCommandsManager from "../../VoiceassistantCommands/Voiceassistant"

// Create a "globally" accesible instance of Artyom
const Jarvis = new Artyom()

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context)

    // Add `this` context to the handler functions
    this.startAssistant = this.startAssistant.bind(this)
    this.stopAssistant = this.stopAssistant.bind(this)
    this.speakText = this.speakText.bind(this)
    this.handleTextareaChange = this.handleTextareaChange.bind(this)

    // Prepare simple state
    this.state = {
      artyomActive: false,
      textareaValue: "",
      artyomIsReading: false,
    }

    // Load some commands to Artyom using the commands manager
    let CommandsManager = new ArtyomCommandsManager(Jarvis)
    CommandsManager.loadCommands()
  }

  startAssistant() {
    let _this = this

    console.log("Artyom succesfully started !")

    Jarvis.initialize({
      lang: "en-US",
      debug: true,
      continuous: true,
      soundex: true,
      listen: true,
    })
      .then(() => {
        // Display loaded commands in the console
        console.log(Jarvis.getAvailableCommands())

        Jarvis.say("Hello there, how are you?")

        _this.setState({
          artyomActive: true,
        })
      })
      .catch((err) => {
        console.error("Oopsy daisy, this shouldn't happen !", err)
      })
  }

  stopAssistant() {
    let _this = this

    Jarvis.fatality()
      .then(() => {
        console.log("Jarvis has been succesfully stopped")

        _this.setState({
          artyomActive: false,
        })
      })
      .catch((err) => {
        console.error("Oopsy daisy, this shouldn't happen neither!", err)

        _this.setState({
          artyomActive: false,
        })
      })
  }

  speakText() {
    let _this = this

    _this.setState({
      artyomIsReading: true,
    })

    // Speak text with Artyom
    Jarvis.say(_this.state.textareaValue, {
      onEnd() {
        _this.setState({
          artyomIsReading: false,
        })
      },
    })
  }

  handleTextareaChange(event) {
    this.setState({
      textareaValue: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <div>
          <FadeIn>
            <Spline
              width="900px"
              height="450px"
              value="Start Artyom"
              disabled={this.state.artyomActive}
              onClick={this.startAssistant}
              style={{ animationDelay: "5s" }}
              className="Spline__Animation"
              scene="https://prod.spline.design/dO3CUyT-njNgpUgY/scene.splinecode"
            />
            <div className="Ai__Button_Div">
              <button
                className="Ai__Stop__Button"
                type="button"
                value="Stop Artyom"
                disabled={!this.state.artyomActive}
                onClick={this.stopAssistant}
              >
                Stop
              </button>
            </div>
          </FadeIn>
        </div>

        {/* <input
          type="button"
          value="Start Artyom"
          disabled={this.state.artyomActive}
          onClick={this.startAssistant}
        /> */}
        {/* <input
          type="button"
          value="Stop Artyom"
          disabled={!this.state.artyomActive}
          onClick={this.stopAssistant}
        /> */}

        {/* Speech synthesis Area */}

        {/* <textarea
          rows="5"
          onChange={this.handleTextareaChange}
          value={this.state.textareaValue}
        />
        <br /> */}
        {/* Read the text inside the textarea with artyom */}
        {/* <input
          type="button"
          value="Read Text"
          disabled={this.state.artyomIsReading}
          onClick={this.speakText}
        /> */}
      </div>
    )
  }
}
