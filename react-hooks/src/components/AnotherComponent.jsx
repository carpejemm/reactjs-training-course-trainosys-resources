import { useEffect } from 'react'

const AnotherComponent = () => {
  // Fourth use case example:
  useEffect(() => {
    console.log('Component mounted or updated')

    return () => console.log('Component is unmounted!')
  })


  return (
    <>
      <h2>Another Component</h2>
    </>
  )
}

export default AnotherComponent

// What are the example of "complex" data
// Deeply nested objects
// Example:
const complexData = {
  user: {
    firstName: 'John',
    lastName: 'Doe',
    preference: 'dark',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
      countries: {
        US: 'United States',
        CA: 'Canada',
        MX: 'Mexico'
      }
    }
  }
}

// Array of complex objects
// Example:
const complexArray = [
  {
    id: 1,
    name: 'Item 1',
    details: {
      description: 'This is item 1',
      tags: ['tag1', 'tag2'],
    }
  },
  {
    id: 2,
    name: 'Item 2',
    details: {
      description: 'This is item 2',
      tags: ['tag3', 'tag4'],
    }
  }
]

// Multi step changes to specifc key of an object
// Example:
const multiStepObject = {
  id: 1,
  name: 'Item 1',
  details: {
    description: 'This is item 1',
    tags: ['tag1', 'tag2'],
  }
}

// Step 1: Update the description
multiStepObject.details.description = 'Updated description'

// Step 2: Add a new tag
multiStepObject.details.tags.push('tag3')
