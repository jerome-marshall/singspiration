import { useState } from "react"
import { RevealSlides } from "react-reveal-slides"
import "./App.css"
import AudienceSongComponent from "./components/AudienceSongComponent"
import SongComponent from "./components/SongComponent"
import { Button } from "./components/ui/button"
import {
  kalvariMaMalai,
  oivunaalKarpanai,
  oruSanthathiAvarai,
  sugamVanthadu,
  vaanangalayum,
  varugaiKaana,
  yesuvinAnbinai,
} from "./data/songs"

function App() {
  const [state, setState] = useState<Reveal.RevealState>()
  console.log("🚀 ~ App ~ state:", state)

  const [view, setView] = useState<"audience" | "choir" | undefined>()

  const width = "100%"

  const songList = [
    vaanangalayum,
    oruSanthathiAvarai,
    oivunaalKarpanai,
    sugamVanthadu,
    kalvariMaMalai,
    yesuvinAnbinai,
    varugaiKaana,
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
