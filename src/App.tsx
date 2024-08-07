import { RevealSlides } from "react-reveal-slides"
import "./App.css"
import SongComponent from "./components/SongComponent"
import {
  adhiMangalaKararane,
  aseervadham,
  dhayavu,
  karthaneEnThunai,
  maraven,
  sarvaSirushtikum,
} from "./data/songs"
import { useState } from "react"

function App() {
  const [state, setState] = useState<Reveal.RevealState>()
  console.log("🚀 ~ App ~ state:", state)

  const width = "100%"

  // switch (state?.indexh) {
  //   case 0:
  //     // karthaneEnThunai
  //     width = 1200
  //     break
  //   case 1:
  //     // adhiMangalaKararane
  //     width = 1300
  //     break
  //   case 2:
  //     // maraven
  //     width = 1400
  //     break
  //   case 3:
  //     // dhayavu
  //     width = 1400
  //     break
  // }

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <RevealSlides
        theme="white"
        controlsLayout="bottom-right"
        onStateChange={(newState) => {
          setState(newState)
        }}
        progress
        slideNumber
        width={width}
        height={"100%"}
      >
        <SongComponent song={karthaneEnThunai} />
        <SongComponent song={adhiMangalaKararane} />
        <SongComponent song={maraven} />
        <SongComponent song={dhayavu} />
        <SongComponent song={aseervadham} />
        <SongComponent song={sarvaSirushtikum} />
      </RevealSlides>
    </div>
  )
}

export default App
