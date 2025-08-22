
import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <button onClick={() => setCount(c => c - 1)} aria-label="decrement">-</button>
      <output aria-live="polite" style={{ minWidth: 24, textAlign: 'center' }}>{count}</output>
      <button onClick={() => setCount(c => c + 1)} aria-label="increment">+</button>
    </div>
  )
}
