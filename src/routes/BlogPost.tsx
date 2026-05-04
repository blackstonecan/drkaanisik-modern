import { useParams } from 'react-router-dom'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <main style={{ padding: '120px 32px' }}>
      <h1>BlogPost — {slug}</h1>
    </main>
  )
}
