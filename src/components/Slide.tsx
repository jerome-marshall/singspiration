interface SlideProps {
  data: string | { lines: string[] }
}

const Slide = ({ data }: SlideProps) => {
  if (typeof data === "string") {
    return (
      <section>
        <p className="r-fit-text">{data}</p>
      </section>
    )
  }
  return (
    <section>
      {data.lines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </section>
  )
}

export default Slide
