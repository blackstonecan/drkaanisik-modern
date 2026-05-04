import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main style={{ padding: '120px 32px', textAlign: 'center' }}>
      <h1 style={{ fontSize: 48, marginBottom: 12 }}>404</h1>
      <p style={{ color: 'var(--muted)', marginBottom: 24 }}>Page not found.</p>
      <Link to="/" style={{ color: 'var(--coral)' }}>
        Return home
      </Link>
    </main>
  )
}
