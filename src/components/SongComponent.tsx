import React from "react"
import { Line, Song, Stanza } from "../types"
import { cn } from "../lib/utils"

interface SongProps {
  song: Song
}

const SongComponent: React.FC<SongProps> = ({ song }) => {
  const renderLine = (line: Line) => {
    line.singer = line.singer || "all"

    return (
      <div className="flex">
        <p className={cn(`line singer-${line.singer}`, line.textClassName)}>
          {line.text.split(" ").map((word, index) => {
            const harmony = line.harmonies?.find((h) => h.word === word)
            if (harmony) {
              return (
                <span key={index} className="harmony " title={harmony.notes}>
                  {word}{" "}
                </span>
              )
            }
            return <span key={index}>{word} </span>
          })}
          <span>{line.times && line.times > 1 && `- (${line.times})`}</span>
        </p>
        {line.alternateLines && (
          <p className={cn("alternate-lines flex", line.textClassName)}>
            <span className="text-slate-900 mx-5"> | </span>
            {line.alternateLines.boys && (
              <div className="singer-boys">{line.alternateLines.boys}</div>
            )}
            {line.alternateLines.girls && (
              <div className="singer-girls">{line.alternateLines.girls}</div>
            )}
          </p>
        )}
      </div>
    )
  }

  const renderStanza = (stanza: Stanza, index: number) => {
    return (
      <section key={`stanza-${index}`} className="stanza">
        {stanza.lines.map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>{renderLine(line)}</React.Fragment>
        ))}
      </section>
    )
  }

  const renderChorus = () => {
    if (!song.chorus) return null
    return (
      <section className="chorus">
        {song.chorus.lines.map((line, index) => (
          <React.Fragment key={index}>{renderLine(line)}</React.Fragment>
        ))}
      </section>
    )
  }

  const renderIntro = () => {
    if (!song.intro) return null
    return (
      <section className="intro">
        {song.intro.lines.map((line, index) => (
          <React.Fragment key={index}>{renderLine(line)}</React.Fragment>
        ))}
      </section>
    )
  }

  const renderEnding = () => {
    if (!song.ending) return null
    return (
      <section className="ending">
        {song.ending.lines.map((line, index) => (
          <React.Fragment key={index}>{renderLine(line)}</React.Fragment>
        ))}
      </section>
    )
  }

  return (
    <section className="song">
      <h1 className="text-4xl">{song.title}</h1>
      {renderIntro()}
      {song.startWithChorus && renderChorus()}
      {song.stanzas.map((stanza, index) => (
        <React.Fragment key={index}>
          {renderStanza(stanza, index)}
          {song.chorusFrequency === "afterEachStanza" &&
            !stanza.noNextChorus &&
            stanza.type !== "interlude" &&
            renderChorus()}
        </React.Fragment>
      ))}
      {renderEnding()}
      <section>
        <p className="flex justify-center line">[ END ]</p>
      </section>
    </section>
  )
}

export default SongComponent
