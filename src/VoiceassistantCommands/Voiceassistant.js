import HeroEmail from "../component/HeroEmail/HeroEmail"

// ArtyomCommands.js
export default class ArtyomCommandsManager {
  // The ArtyomCommandsManager class expects as argument in the constructor
  // an already declared instance of Artyom.js
  constructor(ArtyomInstance) {
    this._artyom = ArtyomInstance
  }

  // Execute the loadCommands method to inject the methods to the instance of Artyom
  loadCommands() {
    let Artyom = this._artyom

    return Artyom.addCommands([
      {
        indexes: ["Hello", "Hi"],
        action: () => {
          Artyom.say("Hello, how are you?")
        },
      },
      {
        indexes: ["how are you", "how"],
        action: () => {
          Artyom.say("Fine sir!")
        },
      },
      {
        indexes: ["hey jarvis", "hey", "ok jarvis", "dai", "gokula"],
        action: () => {
          Artyom.say("Hell sir , I am jarvis .")
          Artyom.say("How May I Help You ?")
        },
      },

      {
        indexes: ["you need a break", "break", "bye jarvis"],
        action: () => {
          Artyom.say("ok sir , you can call me anytime")
        },
      },
      {
        indexes: ["ok jarvis you go to sleep"],
        action: () => {
          Artyom.say("ok sir , you can call me anytime")
        },
      },

      // {
      //   indexes: ["open spotify"],
      //   action: () => {
      //     Artyom.say("Ok Sir , I am closeing window!")
      //     window.open("https://open.spotify.com/collection/tracks")
      //   },
      // },
      // {
      //   indexes: ["wikipedia"],
      //   action: (i, search) => {
      //     Artyom.say("searching wikipedia......." + search)
      //     window.open("https://en.wikipedia.org/wiki/")
      //   },
      // },
      {
        indexes: ["google"],
        action: () => {
          Artyom.say("this is what i found for your search sir!")

          window.open(
            "https://www.google.co.in/search?q=gokula&sxsrf=ALiCzsZ1_qcoF8nJfW38qST1CHHlWezsXQ%3A1663596409333&source=hp&ei=eXcoY-2jEdqRr7wPhbOwuAc&iflsig=AJiK0e8AAAAAYyiFiY1NSf1XFBbCp26i2QVKNEepCvsp&ved=0ahUKEwitxJnIg6H6AhXayIsBHYUZDHcQ4dUDCAc&uact=5&oq=gokula&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyCAgAEIAEELEDMggILhCABBCxAzILCAAQgAQQsQMQgwEyDgguEIAEELEDEMcBEK8BMgUIABCABDILCC4QgAQQxwEQrwEyBQgAEIAEMgUIABCABDoHCCMQ6gIQJzoQCC4QsQMQgwEQxwEQ0QMQQzoKCAAQsQMQgwEQQzoECAAQQzoICAAQsQMQgwE6EAgAEIAEEIcCELEDEIMBEBQ6CgguELEDENQCEEM6CgguELEDEIMBEEM6CgguEMcBENEDEEM6BwguELEDEEM6BwgAELEDEENQ7Q5YzBVg1RdoAXAAeACAAYMCiAHrCZIBBTAuMy4zmAEAoAEBsAEK&sclient=gws-wiz"
          )
        },
      },
      {
        indexes: ["open whatsapp"],
        action: () => {
          Artyom.say("this is what i found for your search sir!")

          window.open("https://web.whatsapp.com/")
        },
      },
      {
        indexes: ["open instragram"],
        action: () => {
          Artyom.say("this is what i found for your search sir!")

          window.open("https://www.instagram.com/")
        },
      },
      {
        indexes: ["open chrome"],
        action: () => {
          Artyom.say("opening chrome sir!")

          window.open("")
        },
      },
      {
        indexes: ["open YouTube"],
        action: () => {
          Artyom.say("opening you tube sir!")

          window.open("https://www.youtube.com/")
        },
      },
      {
        indexes: ["open code"],
        action: () => {
          Artyom.say("opening vscode sir!")

          window.open("https://vscode.dev/")
        },
      },
      {
        indexes: ["open vscode"],
        action: () => {
          Artyom.say("opening vscode sir!")

          window.open("https://vscode.dev/")
        },
      },
      {
        indexes: ["joke", "tall me a joke"],
        action: () => {
          Artyom.say("I knew better, I still do, but I'm not the first man")
          Artyom.say("i can tell you other jake")
          Artyom.say("I knew better, I still do, but I'm not the first man")
        },
      },
      {
        indexes: ["play music"],
        action: () => {
          Artyom.say("this is what i found for your search sir!")
          var audio = new Audio(
            "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
          )
          audio.play()
        },
      },
      {
        indexes: ["who made you", "who created you"],
        action: () => {
          Artyom.say("I have been created by Gokula krishnan")
          window.open(
            "https://www.linkedin.com/in/gokula-krishnan-r-50a306243/"
          )
        },
      },
      {
        indexes: ["i love you"],
        action: () => {
          Artyom.say("no i am AI assistant")
        },
      },

      {
        indexes: ["who is gokul", "gokula krishnan", "who is gokula krishnan"],
        action: () => {
          Artyom.say("gokula krishnan is created by me ")
          window.open(
            "https://www.linkedin.com/in/gokula-krishnan-r-50a306243/"
          )
        },
      },
      {
        indexes: ["who are you", "yaru ne"],
        action: () => {
          Artyom.say("i am Artificial intelligence created by gokula krishnan")
        },
      },
      {
        indexes: ["call", "call gokula", "call gokula krishnan", "make a call"],
        action: () => {
          Artyom.say("i am Artificial intelligence created by gokul")
          window.open("tel:+918608990584")
        },
      },
      {
        indexes: ["open map", "map"],
        action: () => {
          Artyom.say("opening google map sir!")
          Artyom.say("nega anaporega sir!")
          window.open("https://www.google.com/maps")
        },
      },

      {
        indexes: ["weather"],
        action: () => {
          Artyom.say(" here is your weather sir!")
          window.open(
            "https://www.google.com/search?q=weather&rlz=1C1ONGR_enIN1017IN1017&oq=weat&aqs=chrome.1.69i57j0i67i131i433j0i67j0i67i131i433i457j0i402l2j0i131i433i512l3j0i512.3173j0j7&sourceid=chrome&ie=UTF-8"
          )
        },
      },

      {
        indexes: ["date"],
        smart: true,
        action: (i, month) => {
          let date = new Date().getDay()
          let month1 = new Date().getMonth
          let hour = new Date().getHours()
          let min = new Date().getMinutes()
          let year = new Date().getFullYear()

          Artyom.say(`time is ${hour}${min} date is ${date}${month1}${year} `)

          Artyom.say(
            "Ready ! What were you expecting? write some code you lazy bear !"
          )
        },
      },
    ])
  }
}
