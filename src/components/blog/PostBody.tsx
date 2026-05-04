type PostBodyBlock =
  | { p: string }
  | { h2: string }
  | { h3: string }
  | { quote: string }
  | { ul: string[] }

type PostBodyProps = {
  blocks: PostBodyBlock[]
}

export function PostBody({ blocks }: PostBodyProps) {
  return (
    <div className="post-content">
      {blocks.map((b, i) => {
        if ('h2' in b) return <h2 key={i}>{b.h2}</h2>
        if ('h3' in b) return <h3 key={i}>{b.h3}</h3>
        if ('quote' in b) return <blockquote key={i}>{b.quote}</blockquote>
        if ('ul' in b)
          return (
            <ul key={i}>
              {b.ul.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )
        return <p key={i}>{b.p}</p>
      })}
    </div>
  )
}
