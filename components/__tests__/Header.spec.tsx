import React from 'react'
import { cleanup, render, getByText } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Header from '../Header'

afterEach(cleanup)

it('should render', () => {
  const { container } = render(<Header />)

  expect(getByText(container, /Awesome prague/i)).toBeInTheDocument()
})
