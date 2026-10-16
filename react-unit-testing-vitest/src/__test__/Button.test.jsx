import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from '../components/Button'

// render - this is a way to render our component in a virtual DOM for testing purposes
// screen - this is an object that provides access to the rendered DOM elements for querying and interacting with them in tests
// fireEvent - this is a utility to simulate user interactions like clicks, typing, etc.

// describe - this is a function used to group related tests together, providing a way to organize and structure test cases.
// it - this is way for us to define individual test cases within a describe block.
// expect - this is a function used to make assertions about the expected behavior or state of the component in the test cases.

describe('Button Component', () => {

  // Test case for rendering the button with the correct label
  // Important note: Ensure that test cases is in sequence to avoid unexpected behavior
  // Best practice is to keep test cases independent and focused on a single aspect of the component.
  // Best pratice to test UI level first before testing functionality
  it('should render the button with the correct label', () => {
    // Render the button component with a dummy click handler and the label "Click Me"
    render(<Button handleClickBtn={() => {}} label="Click Me" />)
    // We're expectting using our screen object to find the button element with the text "Click Me" and assert that it is present in the document.
    // toBeInTheDocument assertion - checks if the element is present in the document.
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

    it('should call the handleClickBtn function when clicked', () => {
      // vi.fn() - mocking our click handler function for testing purposes
      const handleClick = vi.fn()
      // Render the button component with the mocked click handler and the label "Click Me"
      render(<Button handleClickBtn={handleClick} label="Click Me" />)
      // Simulate a click event on the button element with the text "Click Me"
      fireEvent.click(screen.getByText('Click Me'))
      // Assert that the mocked click handler function was called as a result of the click event
      // toHaveBeenCalled assertion - checks if the mocked function was called at least once.
      expect(handleClick).toHaveBeenCalled()  
    })
})