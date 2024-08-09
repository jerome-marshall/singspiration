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
import AudienceSongComponent from "./components/AudienceSongComponent"
import { Button } from "./components/ui/button"

function App() {
  const [state, setState] = useState<Reveal.RevealState>()
  console.log("🚀 ~ App ~ state:", state)

  const [view, setView] = useState<"audience" | "choir" | undefined>()

  const width = "100%"

  const songList = [
    karthaneEnThunai,
    adhiMangalaKararane,
    maraven,
    dhayavu,
    aseervadham,
    sarvaSirushtikum,
  ]

  const Song = view === "choir" ? SongComponent : AudienceSongComponent

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {!view ? (
        <div className="flex justify-center gap-6 items-center size-full">
          <Button
            onClick={() => setView("choir")}
            size={"lg"}
            className="text-lg"
          >
            Choir
          </Button>
          <Button
            onClick={() => setView("audience")}
            size={"lg"}
            variant={"outline"}
            className="text-lg"
          >
            Audience
          </Button>
        </div>
      ) : (
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
          {songList.map((song, index) => (
            <Song key={index} song={song} />
          ))}
        </RevealSlides>
      )}
    </div>
  )
}

export default App
