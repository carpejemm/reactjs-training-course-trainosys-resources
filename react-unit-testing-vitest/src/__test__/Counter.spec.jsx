import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter'

describe('Counter component', () => {
  it('should render the counter with initial value 0', () => {
    // Render the Counter component and check if the initial value is 0
    render(<Counter />) // will load the initial state of the counter component
    // Get the counter element by its text content and assert that it is present in the document.
    expect(screen.getByText('Counter: 0')).toBeInTheDocument()
  })

  it('should increment the counter when the up button is clicked', async () => {
    // Render the counter component and check if the up button increments the counter correctly
    render(<Counter />)

    // Set up the user event for simulating user interactions
    // userEvent - used to simulate user interactions such as clicks, typing, etc.
    const user = userEvent.setup()
    await user.click(screen.getByText('⬆️'))
    expect(screen.getByText('Counter: 1')).toBeInTheDocument()
  })

  it('should decrement the counter when the down button is clicked', async () => {
    render(<Counter />)
    const user = userEvent.setup()
    await user.click(screen.getByText('⬇️'))
    expect(screen.getByText('Counter: -1')).toBeInTheDocument()
  })
})