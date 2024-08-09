import React from "react"
import { Song, Stanza, Line } from "../types"

interface AudienceSongProps {
  song: Song
}

const AudienceSongComponent: React.FC<AudienceSongProps> = ({ song }) => {
  const renderLine = (line: Line) => {
    if (line.type === "vocals") return null
    return (
      <p className="audience-line line">
        {line.text}
        {line.times && line.times > 1 && ` (${line.times})`}
      </p>
    )
  }

  const renderStanza = (stanza: Stanza) => {
    if (stanza.type === "outro") return null

    return (
      <section className="audience-stanza stanza">
        {stanza.lines.map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>{renderLine(line)}</React.Fragment>
        ))}
      </section>
    )
  }

  const renderChorus = () => {
    if (!song.chorus) return null
    return (
      <section className="audience-chorus chorus">
        {song.chorus.lines.map((line, index) => (
          <React.Fragment key={index}>{renderLine(line)}</React.Fragment>
        ))}
      </section>
    )
  }

  return (
    <section className="audience-song song">
      <h1 className="audience-title title">{song.title}</h1>
      {song.startWithChorus && renderChorus()}
      {song.stanzas.map((stanza, index) => (
        <React.Fragment key={index}>
          {stanza.type !== "interlude" && renderStanza(stanza)}
          {song.chorusFrequency === "afterEachStanza" &&
            !stanza.noNextChorus &&
            stanza.type !== "interlude" &&
            renderChorus()}
        </React.Fragment>
      ))}
    </section>
  )
}

export default AudienceSongComponent
