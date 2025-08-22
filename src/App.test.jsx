
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

describe('App', () => {
  it('renders and increments the counter', async () => {
    render(<App />)
    const inc = screen.getByRole('button', { name: /increment/i })
    const out = screen.getByRole('status', { hidden: true }) || screen.getByText('0')
    await userEvent.click(inc)
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})
