export interface Song {
  title: string
  intro?: Intro
  ending?: Ending
  stanzas: Stanza[]
  chorus: Chorus | null
  chorusFrequency?: "afterEachStanza" | "custom" | "none"
  startWithChorus?: boolean
}

export interface Stanza {
  lines: Line[]
  times?: number
  noNextChorus?: boolean
  type?: "stanza" | "interlude" | "bridge" | "vocals"
}

export interface Chorus {
  lines: Line[]
  times?: number
  type?: "chorus"
}

export interface Intro {
  lines: Line[]
  times?: number
  type?: "intro"
}

export interface Ending {
  lines: Line[]
  times?: number
  type?: "ending"
}

export interface Line {
  text: string
  times?: number
  textClassName?: string
  singer?: "all" | "boys" | "girls" | "girls2" | "girls1"
  harmonies?: Harmony[]
  alternateLines?: {
    boys?: string
    girls?: string
  }
}

export interface Harmony {
  word: string
  notes: string
}
