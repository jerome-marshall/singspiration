import { Ending, Intro, Line, Song, Stanza } from "../types"

export const karthaneEnThunai: Song = {
  title: "கர்த்தனே எம் துணையானீர்",
  startWithChorus: true,
  chorusFrequency: "afterEachStanza",
  intro: {
    lines: [
      {
        text: "[ INTRO ]",
      },
      {
        text: "Rumpumpaa, rumpumpaa, rumpumpaa",
        singer: "boys",
        times: 2,
      },
      {
        text: "Aaa aaa aaa, Aaa aaa aaa, Aaa aaa aaa",
        singer: "girls",
        times: 2,
      },
    ],
  },
  chorus: {
    lines: [
      { text: "கர்த்தனே எம் துணையானீர்" },
      { text: "நித்தமும் எம் நிழலானீர்" },
      { text: "கர்த்தனே எம் துணையானீர்" },
    ],
  },
  stanzas: [
    {
      lines: [
        { text: "எத்தனை இடர் வந்து சேர்ந்தாலும்" },
        { text: "கர்த்தனே அடைக்கல மாயினார்", times: 2 },
        { text: "மனுமக்களில் இவர் போலுண்டோ" },
        { text: "விண் உலகிலும் இவர் சிறந்தவர்" },
      ],
    },
    {
      lines: [
        { text: "பாவி என்றென்னைப் பலர் தள்ளினார்" },
        { text: "ஆவி இல்லை என்றிகழ்ந்தும் விட்டார்", times: 2 },
        { text: "ராஜா உம் அன்பு எனைக் கண்டது" },
        { text: "ஐயா உம்மைப்போல, எங்கும் கண்டதில்லை" },
      ],
    },
    {
      lines: [
        { text: "ஆயிரம் நாவுகள் நீர் தந்தாலும்" },
        { text: "ராஜனே, உமைப் பாடக்கூடுமோ", times: 2 },
        { text: "ஜீவனே உமக்களிக்கின்றேனே" },
        { text: "ஐயா உம்மைப்போல, எங்கும் கண்டதில்லை" },
      ],
    },
    {
      noNextChorus: true,
      lines: [
        {
          text: "[ OUTRO ]",
        },
        {
          text: "Rumpumpaa, rumpumpaa, rumpumpaa",
          singer: "boys",
          times: 2,
        },
        {
          text: "Aaa aaa aaa, Aaa aaa aaa, Aaa aaa aaa",
          singer: "girls",
          times: 2,
        },
      ],
    }
  ],
}

const ADHIMANGALA_VOCALS: Intro | Ending = {
  lines: [
    { text: "ஆஆ ஆஆ ஆஆ ஆஆஆ-ஆஆ", singer: "girls" },
    { text: "ச ச ச ச சா - கரி கரி", singer: "boys" },
    { text: "லா லா லா லா லா லா லா", singer: "girls" },
    { text: "ச ச ச - ச நி த ப ம க", singer: "boys" },
    { text: "லா லா லா லா லா லா லா", singer: "girls" },
    { text: "ச ச ச ச", singer: "boys" },
  ],
}
export const adhiMangalaKararane: Song = {
  title: "அதி மங்கல காரணனே",
  chorusFrequency: "none",
  startWithChorus: true,
  intro: ADHIMANGALA_VOCALS as Intro,
  ending: ADHIMANGALA_VOCALS as Ending,
  chorus: {
    lines: [
      { text: "அதி மங்கல காரணனே" },
      { text: "துதி தங்கிய பூரணனே", times: 2 },
      { text: "நரர் வாழ விண் துறந்தோர் ஏழையாய்ப் " },
      { text: "பிறந்த வண்மையே தாரணனே!", times: 2 },
      { text: "அதி மங்கல, அதி மங்கல" },
      { text: "அதி மங்கல காரணனே!", times: 2 },
    ],
  },
  stanzas: [
    {
      lines: [
        { text: "ச நீ ச நீ ச க", singer: "girls" },
        {
          text: "ச நீ த ப க நீ ச",
          singer: "girls2",
          alternateLines: { boys: "சசச நீநீநீ ககக பபப" },
        },
        { text: "ப ம த ரி ம க", singer: "girls" },
        {
          text: "சநீச சநீச நீச",
          singer: "girls2",
          alternateLines: { boys: "ப ம க" },
        },
        { text: "ப த நீ த ச ரி நீ" , singer: "girls"},
        { text: "ச ரி க ப ப த நீ ரி ச", times: 2, singer: "boys" },
      ],
    },
    {
      lines: [
        { text: "மதி மங்கின எங்களுக்கும்" },
        { text: "திதி சிங்கினர் தங்களுக்கும்", times: 2 },
        { text: "உனின் மாட்சிமையும் திவ்விய காட்சியும்" },
        { text: "தோன்றிட வையாய் துங்கவனே", times: 2 },
        { text: "அதி மங்கல, அதி மங்கல" },
        { text: "அதி மங்கல காரணனே!", times: 2 },
      ],
    },

    {
      lines: [
        { text: "முடி மன்னர்கள் மேடையையும்" },
        { text: "மிகு உன்னத வீடதையும்", times: 2 },
        { text: "நீங்கி மாட்டிடையே பிறந்தாட்டிடையார் தொழ" },
        { text: " வந்தனையோ தரையில்", times: 2 },
        { text: "அதி மங்கல, அதி மங்கல" },
        { text: "அதி மங்கல காரணனே!", times: 2 },
      ],
    },
  ],
}

const tatTara = {
  text: "tat tara tat tara",
  singer: "boys",
  textClassName: "small-text",
}
const maravenInterlude: Stanza = {
  type: "interlude",
  lines: [
    {
      text: "[ INTERLUDE ]",
    },
    {
      text: "La la la la la",
      times: 4,
    },
  ],
}
const maravenChorusLines: Line[] = [
  { text: "மறவேன் மறவேன் நீர் செய்த நன்மைகள்" },
  { text: "துதிப்பேன் துதிப்பேன் என் முழு இதயத்தோடு", times: 2 },
  { text: "என் கர்த்தர் நல்லவர்.. மிக மிக நல்லவர்" },
  { text: "என்னை விசாரிக்கும் நல் தகப்பனவர்", times: 2 },
]
export const maraven: Song = {
  title: "மறவேன்",
  chorus: {
    lines: maravenChorusLines,
  },
  chorusFrequency: "afterEachStanza",
  startWithChorus: false,
  stanzas: [
    {
      lines: [
        { text: "தாயின் வயிற்றில் தோன்றின நாள்முதல்" },
        { ...tatTara, singer: "boys" },
        { text: "என்னை ஏந்தி சுமந்து காத்த தேவனே" },
        { ...tatTara, singer: "boys" },
        { text: "(உம்) உள்ளங்கைகளில் என்னை வரைந்து" },
        { ...tatTara, singer: "boys" },
        { text: "உன்தன் கண்மணி போலென்னை காக்கின்றீர்" },
        { text: "Aaa Aaa Aaa", singer: "boys", textClassName: "small-text" },
      ],
    },
    maravenInterlude,
    {
      lines: [
        { text: "வெள்ளம் போல் சத்ரு எதிர்த்து வந்தாலும்" },
        {
          ...tatTara,
          singer: "boys",
          alternateLines: { boys: "வந்தாலும்" },
        },
        { text: "(தேவ)(ஆவி)யானவர் எனக்காய் கொடியேற்றுவீர்" },
        {
          ...tatTara,
          singer: "boys",
          alternateLines: { boys: "கொடியேற்றுவீர்" },
        },
        { text: "இதுவரை உதவி செய்த நேசரே" },
        {
          ...tatTara,
          singer: "boys",
          alternateLines: { boys: "நேசரே" },
        },
        { text: "இனியும் உதவி செய்ய வல்லவரே", times: 2 },
        {
          singer: "boys",
          text: "Aaa Aaa Aaa",
          textClassName: "small-text",
        },
      ],
    },
    maravenInterlude,
    {
      noNextChorus: true,
      lines: [
        { text: "பகைஞர் எதிரே எனக்கு ஓர் பந்தி" },
        {
          ...tatTara,
          singer: "boys",
          alternateLines: { boys: "ஓர் பந்தி" },
        },
        { text: "ஆயத்தம் செய்த சர்வ வல்லவரே" },
        {
          ...tatTara,
          singer: "boys",
          alternateLines: { boys: "வல்லவரே" },
        },
        { text: "எண்ணையால் என்னை அபிஷேகம் செய்து" },
        {
          ...tatTara,
          singer: "boys",
          alternateLines: { boys: "செய்து" },
        },
        { text: "என் பாத்திரம் நிரம்பி வழிய செய்கின்றீர்", times: 2 },
        {
          singer: "boys",
          text: "Aaa Aaa Aaa",
          textClassName: "small-text",
        },
      ],
    },
    {
      noNextChorus: true,
      lines: [
        ...maravenChorusLines,
        { text: "என்னை விசாரிக்கும் நல் தகப்பனவர்", times: 3 },
      ],
    },
  ],
}

export const dhayavu: Song = {
  title: "தயவு",
  intro: {
    lines: [
      { text: "[ INTRO ]" },
      {
        text: "Oooooooo.....", times: 2
      },
      {
        text: "Mmmm Mmmm.....", times: 2
      },
    ],
  },
  chorus: {
    lines: [
      { text: "உங்க தயவு பெரியதே" },
      { text: "உங்க தயவு சிறந்ததே" },
      { text: "உங்க தயவு என்னை சேதமின்றி பாதுகாத்ததே", times: 2 },
      { text: "ஒரு சேதமின்றி தலைமுறையாய் பாதுகாத்ததே" },
      { text: "தலைமுறைகள் தாண்டி நிற்கும் தயவு" },
        { text: "தலை நிமிர்ந்து வாழ செய்யும் தயவு", },
    ],
  },
  chorusFrequency: "afterEachStanza",
  startWithChorus: false,
  stanzas: [
    {
      lines: [
        { text: "தலைமுறைகள் தாண்டி நிற்கும் தயவு" },
        { text: "(என்) தலை நிமிர்ந்து வாழ செய்யும் தயவு", times: 2 },
        { text: "பாரபட்சம் பார்க்காத தயவு" },
        { text: "எளியவனை உயர்த்தி வைக்கும் தயவு" },
        { text: "தலைமுறைகள் தாண்டி நிற்கும் தயவு" },
      ],
    },
    {
      lines: [
        { text: "(எனை) குறிபார்த்து எறியப்பட்ட சவுலின் அம்புகள்" },
        { text: "திசை மாறி போக செய்த தயவு பெரியதே", times: 2 },
        { text: "ஒரு அடியின் தூரத்திலே கண்ட மரணத்தை" },
        { text: "தடுத்து நிறுத்தி பாதுகாத்த தயவு பெரியதே" },
        { text: "இந்த தயவை பாட ஜீவன் உள்ளதே" },
      ],
    },
    {
      lines: [
        { text: "சுற்றி நின்ற ஜலங்கள் எல்லாம் அமிழ்ந்து போனதே" },
        { text: "என் பேழை மட்டும் பத்திரமாய் மலையில் நின்றதே", times: 2 },
        { text: "மூழ்கும் என்று எதிர்பார்த்த கண்கள் தோற்றதே" },
        { text: "ஏறெடுத்து பார்க்கும் வண்ணம் உயர்த்தி வைத்ததே" },
        { text: "என்னை உயர உயர கொண்டு செல்லுதே" },
      ],
    },
    {
      noNextChorus: true,
      lines: [
        { text: "தலைமுறைகள் தாண்டி நிற்கும் தயவு" },
        { text: "(என்) தலை நிமிர்ந்து வாழ செய்யும் தயவு", times: 2 },
        { text: "பாரபட்சம் பார்க்காத தயவு" },
        { text: "எளியவனை உயர்த்தி வைக்கும் தயவு" },
        { text: "தலைமுறைகள் தாண்டி நிற்கும் தயவு" },
      ],
    },
    {
      noNextChorus: true,
      lines: [
        { text: "[ OUTRO ]" },
        {
          text: "Oooooooo.....", times: 2
        },
        {
          text: "Mmmm Mmmmm.....", times: 2
        },
      ],
    }
  ],
}

export const aseervadham: Song = {
  title: "ஆசீர்வாதம் [The Blessing]",
  stanzas: [
    {
      lines: [{ text: "ஆமென், ஆமென், ஆமென்" }],
    },
    {
      lines: [
        { text: "கர்த்தர் நம்மை ஆசீர்வதிப்பார்" },
        { text: "அவர் முகத்தை நம்மேல் பிரகாசிப்பார்" },
        { text: "நம்மை காப்பார்" },
        { text: "கிருபையால் மறைப்பார்" },
        { text: "சமாதானம் தருவார்", times: 2 },
      ],
    },
    {
      lines: [{ text: "ஆமென், ஆமென், ஆமென்" }],
    },
    {
      lines: [
        { text: "அவர் தயவு நம்மேலே" },
        { text: "நம் குடும்பங்கள் மேலே" },
        { text: "நம் பிள்ளைகள் மேலே" },
        { text: "நம் சந்ததிகள் மேலே" },
      ],
    },
    {
      lines: [
        { text: "அவர் சமூகம் நம் முன்னே" },
        { text: "நம் அருகே நம் பின்னே" },
        { text: "அவர் பிரசன்னம் நம்மை மூடுதே" },
        { text: "அவர் என்றும் நம்மோடே" },
      ],
    },
    {
      lines: [
        { text: "அவர் தயவு நம்மேலே" },
        { text: "நம் குடும்பங்கள் மேலே" },
        { text: "நம் பிள்ளைகள் மேலே" },
        { text: "நம் சந்ததிகள் மேலே" },
      ],
    },
    {
      lines: [
        { text: "அவர் சமூகம் நம் முன்னே" },
        { text: "நம் அருகே நம் பின்னே" },
        { text: "அவர் பிரசன்னம் நம்மை மூடுதே" },
        { text: "அவர் என்றும் நம்மோடே" },
      ],
    },
    {
      lines: [{ text: "ஆமென், ஆமென், ஆமென்" }],
    },
  ],
  chorus: null,
}

export const sarvaSirushtikum: Song = {
  title: "சர்வ சிருஷ்டிக்கும் எஜமானன் நீரே",
  stanzas: [
    {
      lines: [
        { text: "சர்வ சிருஷ்டிக்கும் எஜமானன் நீரே" },
        { text: "சர்வ சிருஷ்டியை காப்பவர் நீரே" },
        { text: "எங்கள் இதயத்தில் உம்மைப் போற்றிடுவோம்" },
        { text: "என்றென்றும் பணீந்து தொழுவோம்" },
      ],
    },
    {
      lines: [
        { text: "வானம் பூமி ஒழிந்து போனாலும்" },
        { text: "உம் வார்த்தை என்றும் மாறா" },
        { text: "இல்வாழிக்கை அழிந்து மறைந்துபோம்" },
        { text: "விசுவாசி என்றும் நிலைய்ப்பான்" },
      ],
    },
    {
      lines: [
        { text: "கர்த்தர் கரத்தின் கிரியைகள் நாங்கள்" },
        { text: "கிருபை எங்கள் மேல் ஊற்றுவீரே" },
        { text: "ஆவி ஆத்துமா சரீரம் உம் சொந்தமே" },
        { text: "அதை சாத்தான் தொடாமல் காப்பீரே" },
      ],
    },
  ],
  chorus: {
    lines: [
      { text: "ஆ-ஆ-ஆ அல் லே லூ யா", times: 7 },
      { text: "ஆ-ஆ-ஆ ஆ– மேன்" },
    ],
  },
  chorusFrequency: "afterEachStanza",
  startWithChorus: false,
}
