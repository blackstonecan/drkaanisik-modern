type PostBodyBlock =
  | { p: string }
  | { h2: string }
  | { h3: string }
  | { quote: string }

type PostBodyProps = {
  blocks: PostBodyBlock[]
}

/** Renders mixed content blocks: paragraphs, h2/h3 headings, blockquotes. */
export function PostBody({ blocks }: PostBodyProps) {
  return (
    <div className="post-content">
      {blocks.map((b, i) => {
        if ('h2' in b) return <h2 key={i}>{b.h2}</h2>
        if ('h3' in b) return <h3 key={i}>{b.h3}</h3>
        if ('quote' in b) return <blockquote key={i}>{b.quote}</blockquote>
        return <p key={i}>{b.p}</p>
      })}
    </div>
  )
}
