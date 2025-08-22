
import React from 'react'
import Counter from './components/Counter.jsx'

export default function App() {
  return (
    <main style={{ fontFamily: 'ui-sans-serif, system-ui, Arial', padding: 24, lineHeight: 1.5 }}>
      <h1>React + GitHub Actions + AWS</h1>
      <p>
        This tiny app is for teaching CI/CD. Change some text, push a branch, open a PR, and
        watch CI run. Merge to <code>main</code> to trigger deploys.
      </p>
      <section style={{ marginTop: 16 }}>
        <h2>Counter</h2>
        <Counter />
      </section>
      <section style={{ marginTop: 16, fontSize: 14, opacity: 0.8 }}>
        <div>Build mode: <code>{import.meta.env.MODE}</code></div>
      </section>
    </main>
  )
}
